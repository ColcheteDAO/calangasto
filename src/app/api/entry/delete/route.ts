import { NextResponse, NextRequest } from "next/server";
import { client } from "@/database"
import { ObjectId } from "mongodb";


//Delete especific entry
export async function DELETE(request: NextRequest) {
    const requestBody = await request.json();
    const id = requestBody?.id ? requestBody.id.toString() : ""
    console.log(id)
    await client.connect();
    const entry = client.db(process.env.MONGO_DB_NAME).collection("entry")
    const entryData = await entry.findOneAndDelete({
        "_id": new ObjectId(id)
    })
    return NextResponse.json({ entryData })
    
}