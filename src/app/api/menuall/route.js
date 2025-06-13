import { NextResponse } from "next/server";

export async function GET() {
  const expressResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_MITRA_URL}/list-menu`
  );
  const expressData = await expressResponse.json();
  return NextResponse.json(expressData);
}

export async function PUT(request) {
  try {
    const body = await request.json();
    console.log(body);
    
    const expressResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_MITRA_URL}/update-menu`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!expressResponse.ok) {
      const errorText = await expressResponse.text();
      return NextResponse.json(
        { error: "Gagal dari server Express", detail: errorText },
        { status: expressResponse.status }
      );
    }

    const expressData = await expressResponse.json();
    console.log(expressData);
    
    return NextResponse.json(expressData);
  } catch (error) {
    console.error("Error di API Next PUT /menuall:", err);
    return NextResponse.json(
      { error: `Terjadi kesalahan server ${err}` },
      { status: 500 }
    );
  }
}
