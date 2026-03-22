import Link from "next/link";

export default function TopMenu() {
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Venue Explorer
        </Link>
        <div className="flex flex-row items-center gap-5">
          <Link href="/booking" className="text-white hover:text-gray-300">
            Booking
          </Link>
          <Link href="/mybooking" className="text-white hover:text-gray-300">
            My Booking
          </Link>
        </div>
      </div>
    </nav>
  );
}