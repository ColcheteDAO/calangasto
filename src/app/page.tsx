import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className=" flex flex-row gap-2 justify-center items-center content-center h-dvh">
        <div className="bg-emerald-500 p-2">
          ID
        </div>
        <div className="bg-emerald-500 p-2">
          Bill type
        </div>
        <div className="bg-emerald-500  p-2">
          Value
        </div>
        <div className="bg-emerald-500  p-2">
          Due Date
        </div>
      </div>
    </main>
  );
}
