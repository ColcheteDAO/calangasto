import { NextResponse } from "next/server";
import { client } from "@/database"

//list all entries
export async function GET() {
    await client.connect();
    const entry = client.db(process.env.MONGO_DB_NAME).collection("entry")
    const entryData = await entry.find({}).toArray()
    return NextResponse.json({ entryData })
}