const CONTROL_CHARS = /[\u0000-\u001F\u007F]/g;
const HTML_TAGS = /<[^>]*>/g;

function normalizeInput(value, maxLength) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(CONTROL_CHARS, "")
    .replace(HTML_TAGS, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

// Keep sanitization logic centralized so UI and API behavior stays consistent.
export function sanitizeContactInput(payload) {
  return {
    firstName: normalizeInput(payload?.firstName, 80),
    email: normalizeInput(payload?.email, 254).toLowerCase(),
    message: normalizeInput(payload?.message, 5000),
  };
}
