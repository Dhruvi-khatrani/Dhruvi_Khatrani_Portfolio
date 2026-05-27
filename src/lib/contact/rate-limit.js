const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestStore = new Map();

function cleanupExpiredEntries(now) {
  for (const [key, entry] of requestStore.entries()) {
    if (entry.resetAt <= now) {
      requestStore.delete(key);
    }
  }
}

export function getClientIdentifier(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return realIp || "unknown";
}

// This in-memory limiter protects a single runtime instance.
export function checkRateLimit(clientId) {
  const now = Date.now();
  cleanupExpiredEntries(now);

  const key = clientId || "unknown";
  const existing = requestStore.get(key);

  if (!existing || existing.resetAt <= now) {
    requestStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      retryAfter: 0,
    };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfter: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  requestStore.set(key, existing);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - existing.count,
    retryAfter: 0,
  };
}
