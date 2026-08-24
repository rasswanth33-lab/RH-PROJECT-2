import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { valid, errors } = validateContact(body);

  if (!valid) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
