import { NextResponse } from "next/server";

/**
 * Contact form submissions are handled client-side via Web3Forms.
 * This route is kept as a fallback / health-check endpoint only.
 */
export async function POST() {
  return NextResponse.json(
    { message: "Please use the Web3Forms integration on the client side." },
    { status: 200 },
  );
}
