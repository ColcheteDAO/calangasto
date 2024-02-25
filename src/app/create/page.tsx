"use client"

import { useState } from "react";

export default function Create() {
    const [value, setValue] = useState(0)
    const [type, setType] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [created, setCreated] = useState("")
    const [status, setStatus] = useState(0)

    async function createEntry() {
        await fetch("api/entry/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value, type, dueDate, created, status })
        })
    }

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Create a new Entry</h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                        ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Value</label>

                        <div className="relative">
                            <p className="font-semibold mb-2 text-md">Value</p>
                            <input
                                onChange={(e) => setValue(Number(e.target.value))}
                                id="value"
                                pattern="^\d*(\.\d{0,2})?$"
                                className="w-full rounded-lg border-zinc-200 p-4 pe-12 text-sm border"
                            />
                        </div>

                        <div className="relative mt-4">
                            <p className="font-semibold mb-2 text-md">Type</p>
                            <input
                                onChange={(e) => setType(e.target.value)}
                                id="type"
                                type="text"
                                className="w-full rounded-lg border-zinc-200 p-4 pe-12 text-sm border"
                            />
                        </div>

                        <div className="relative mt-4">
                            <p className="font-semibold mb-2 text-md">Due Date</p>
                            <input
                                onChange={(e) => setDueDate(e.target.value)}
                                id="due_date"
                                type="text"
                                className="w-full rounded-lg border-zinc-200 p-4 pe-12 text-sm border"
                            />
                        </div>

                        <div className="relative mt-4">
                            <p className="font-semibold mb-2 text-md">Created</p>
                            <input
                                onChange={(e) => setCreated(e.target.value)}
                                id="created"
                                type="text"
                                className="w-full rounded-lg border-zinc-200 p-4 pe-12 text-sm border"
                            />
                        </div>

                        <div className="relative mt-4">
                            <p className="font-semibold mb-2 text-md">Status</p>
                            <input
                                onChange={(e) => setStatus(Number(e.target.value))}
                                id="status"
                                pattern="^\d*(\.\d{0,2})?$"
                                className="w-full rounded-lg border-zinc-200 p-4 pe-12 text-sm border"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => createEntry()}
                            className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
