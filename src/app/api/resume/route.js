import { NextResponse } from "next/server";

export async function GET() {
    const expressResponse = await fetch(`${process.env.NEXT_PUBLIC_API_MITRA_URL}/dashboard-resume`);
    const expressData = await expressResponse.json();
    return NextResponse.json(expressData)
}