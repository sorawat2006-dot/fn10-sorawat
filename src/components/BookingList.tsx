"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { Button } from "@mui/material";

export default function BookingList() {
  const dispatch = useDispatch<AppDispatch>();
  const bookingItems = useSelector(
    (state: RootState) => state.bookSlice.bookItems
  );

  if (bookingItems.length === 0) {
    return (
      <div className="mt-4 rounded-md border border-gray-300 bg-white p-4 text-black shadow-sm">
        No Venue Booking
      </div>
    );
  }

  return (
    <div className="mt-4 flex w-full flex-col gap-4 text-black">
      {bookingItems.map((item, index) => (
        <div
          key={index}
          className="rounded-md border border-gray-300 bg-white p-4 shadow-sm"
        >
          <div className="mb-1"><span className="font-semibold">Name-Lastname:</span> {item.nameLastname}</div>
          <div className="mb-1"><span className="font-semibold">Tel:</span> {item.tel}</div>
          <div className="mb-1"><span className="font-semibold">Venue:</span> {item.venue}</div>
          <div><span className="font-semibold">Book Date:</span> {item.bookDate}</div>

          <Button
            variant="outlined"
            color="error"
            className="!mt-4"
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
}