import { NextResponse } from "next/server";

export async function POST(request) {
    const req = await request.json()
    // Kirim ke Express.js API
    const expressResponse = await fetch(`${process.env.NEXT_PUBLIC_API_MITRA_URL}/content`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });

    const expressData = await expressResponse.json();    
    return NextResponse.json(expressData)
}

export async function GET() {
    const expressResponse = await fetch(`${process.env.NEXT_PUBLIC_API_MITRA_URL}/content`);
    const expressData = await expressResponse.json();
    return NextResponse.json(expressData)
}