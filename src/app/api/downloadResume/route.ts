import { promises as fs } from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(){
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = await fs.readFile(filePath);

    const uint8Array = new Uint8Array(fileBuffer);

    return new NextResponse(uint8Array, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=Sankalp_Kumar_Resume.pdf",
        }
    })
}