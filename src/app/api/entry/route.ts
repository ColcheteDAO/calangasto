import { NextResponse } from "next/server";
import { client } from "@/database"
export const revalidate = 0;
//list all entries
export async function GET() {
    await client.connect();
    const entry = client.db(process.env.MONGO_DB_NAME).collection("entry")
    const entryData = await entry.find({}).toArray()
    return NextResponse.json({ entryData })
}

