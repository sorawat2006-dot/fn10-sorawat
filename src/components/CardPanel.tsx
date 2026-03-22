'use client'
import Card from "@/components/Card";
import Link from "next/link";
import { useReducer, useState } from "react";

type VenueItem = {
  vid: string;
  venueName: string;
  imgSrc: string;
};

const venueItems: VenueItem[] = [
  {
    vid: "001",
    venueName: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
  },
  {
    vid: "002",
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
  },
  {
    vid: "003",
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
  },
];

type RatingAction = {
  type: "set";
  venueName: string;
  rating: number;
};

function ratingReducer(state: Map<string, number>, action: RatingAction) {
  const newState = new Map(state);

  switch (action.type) {
    case "set":
      newState.set(action.venueName, action.rating);
      return newState;
    default:
      return state;
  }
}

export default function CardPanel() {
  const initialRatings = new Map<string, number>(
    venueItems.map((venue) => [venue.venueName, 0])
  );

  const [venueRatings, dispatch] = useReducer(ratingReducer, initialRatings);
  const [visibleList, setVisibleList] = useState<string[]>(
    venueItems.map((venue) => venue.venueName)
  );

  const handleRatingChange = (venueName: string, rating: number) => {
    dispatch({
      type: "set",
      venueName,
      rating,
    });

    if (!visibleList.includes(venueName)) {
      setVisibleList([...visibleList, venueName]);
    }
  };

  const handleRemove = (venueName: string) => {
    setVisibleList(visibleList.filter((name) => name !== venueName));
  };

  return (
    <div>
      <div className="flex flex-row justify-center gap-16 px-10 py-10">
        {venueItems.map((venue) => (
          <Link key={venue.vid} href={`/venue/${venue.vid}`}>
            <Card
              venueName={venue.venueName}
              imgSrc={venue.imgSrc}
              rating={venueRatings.get(venue.venueName) ?? 0}
              onRatingChange={handleRatingChange}
            />
          </Link>
        ))}
      </div>

      <div className="mx-10 my-5 space-y-2">
        {visibleList.map((venueName) => (
          <div
            key={venueName}
            data-testid={venueName}
            className="rounded-md bg-slate-200 px-4 py-2 cursor-pointer"
            onClick={() => handleRemove(venueName)}
          >
            {venueName} Rating : {venueRatings.get(venueName) ?? 0}
          </div>
        ))}
      </div>
    </div>
  );
}