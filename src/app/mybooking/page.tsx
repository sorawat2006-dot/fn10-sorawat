import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="w-full px-5 py-6 text-black">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">My Booking</h1>
        <BookingList />
      </div>
    </main>
  );
}