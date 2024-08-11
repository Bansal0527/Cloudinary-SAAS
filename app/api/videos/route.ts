import { PrismaClient } from "@/node_modules/.prisma/client/index";

import { NextRequest, NextResponse } from "@/node_modules/next/server";

const prisma = new PrismaClient()

export async function GET(request :NextRequest) {
    try {
       const videos =  await prisma.video.findMany({
            orderBy: {createdAt: "desc"}
        })

        return NextResponse.json(videos);
    } catch (error) {
        return NextResponse.json({
            error: "Error while fetching videos"
        }, {status: 500});
    } finally{
        await prisma.$disconnect()
    }
}