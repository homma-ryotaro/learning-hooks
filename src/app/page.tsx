import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-5">TopPage</h1>
      <ul className="border rounded-lg p-10 list-disc">
        <li>
          <Link href="/usestate" className="border-b-2 text-lg font-bold">
            useState
          </Link>
        </li>
      </ul>
    </div>
  );
}
