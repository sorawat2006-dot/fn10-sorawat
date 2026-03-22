"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interface";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("Bloom");
  const [bookDate, setBookDate] = useState("");

  const makeBooking = (formData: FormData) => {
    const submittedNameLastname = String(formData.get("Name-Lastname") ?? "").trim();
    const submittedTel = String(formData.get("Contact-Number") ?? "").trim();
    const submittedVenue = String(formData.get("Venue") ?? venue).trim();
    const submittedBookDate = String(formData.get("Booking-Date") ?? "").trim();

    if (
      submittedNameLastname === "" ||
      submittedTel === "" ||
      submittedVenue === "" ||
      submittedBookDate === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const item: BookingItem = {
      nameLastname: submittedNameLastname,
      tel: submittedTel,
      venue: submittedVenue,
      bookDate: submittedBookDate,
    };

    dispatch(addBooking(item));
    router.push("/mybooking");
  };

  return (
    <main className="w-full px-5 py-6 text-black">
      <form
        className="mx-auto flex w-full max-w-2xl flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          makeBooking(formData);
        }}
      >
        <h1 className="text-2xl font-bold">Venue Booking</h1>

        <TextField
          label="Name-Lastname"
          name="Name-Lastname"
          variant="standard"
          fullWidth
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />

        <TextField
          label="Contact-Number"
          name="Contact-Number"
          variant="standard"
          fullWidth
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="Venue"
            value={venue}
            label="Venue"
            onChange={(e) => setVenue(e.target.value)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Booking Date"
          name="Booking-Date"
          type="date"
          variant="standard"
          fullWidth
          value={bookDate}
          onChange={(e) => setBookDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />

        <Button
          name="Book Venue"
          type="submit"
          variant="contained"
          color="primary"
        >
          Book Venue
        </Button>
      </form>
    </main>
  );
}