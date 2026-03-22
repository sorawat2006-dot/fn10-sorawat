"use client";

import Link from "next/link";

export default function TopMenu() {
  return (
    <div className="h-[50px] bg-black fixed top-0 left-0 right-0 z-30 border-b border-gray-600 flex flex-row items-center justify-between px-6">
      <div className="flex flex-row items-center gap-6">
        <Link href="/" className="font-bold text-lg drop-shadow-sm" style={{ color: "#ffffff" }}>
          Venue Explorer
        </Link>

        <Link href="/booking" className="font-semibold drop-shadow-sm" style={{ color: "#ffffff" }}>
          Booking
        </Link>

        <Link href="/mybooking" className="font-semibold drop-shadow-sm" style={{ color: "#ffffff" }}>
          My Booking
        </Link>
      </div>

      <div></div>
    </div>
  );
}