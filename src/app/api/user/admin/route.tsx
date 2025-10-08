import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET () {
    const user = await prisma.user.findMany() ;
    return NextResponse.json({ message:"Founded user",user});
}