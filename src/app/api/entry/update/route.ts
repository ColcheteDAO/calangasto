import { NextResponse, NextRequest } from "next/server";
import { client } from "@/database"
import { ObjectId } from "mongodb";


//Create especific entry
export async function PUT(request: NextRequest) {
    const requestBody = await request.json();

    const id = requestBody?.id ? requestBody.id.toString() : ""
    const value = requestBody?.value ? requestBody.value : 0
    const type = requestBody?.type ? requestBody.type.toString() : ""
    const due_date = requestBody?.due_date ? requestBody.due_date.toString() : ""
    const created = requestBody?.created ? requestBody.created.toString() : ""
    const status = requestBody?.status ? requestBody.status : 0

    await client.connect();
    const entry = client.db(process.env.MONGO_DB_NAME).collection("entry")
    const entryData = await entry.updateOne(
        { _id: new ObjectId(id) },
        {
            $set: {
                value,
                type,
                due_date,
                created,
                status
            }
        }
    )
    return NextResponse.json({ entryData })

}

// updateOne(
//     { _id: new ObjectID(req.params.id) },
//     { $set: { title: req.body.bookName, author: req.body.authorName } },
//     { upsert: true }
// )