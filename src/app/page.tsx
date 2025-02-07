"use client";

import { images } from "@/lib/data";
import { MasonryLayout } from "./_components/mansory-layout";

export default function Home() {
  return (
    <main className="container mx-auto p-4 pt-12 flex flex-col justify-center items-center">
      <div className="text-xl pb-12">
        Collection of Midjourney Generated AI Image by Dhio
      </div>
      <MasonryLayout images={images} />
    </main>
  );
}
