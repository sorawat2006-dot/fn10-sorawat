"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./banner.module.css";

const coverImages = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const router = useRouter();
  const [coverIndex, setCoverIndex] = useState(0);

  const handleBannerClick = () => {
    setCoverIndex((prev) => (prev + 1) % coverImages.length);
  };

  return (
    <div className={styles.banner} onClick={handleBannerClick}>
      <img
        src={coverImages[coverIndex]}
        alt="banner"
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>
          Finding the perfect venue has never been easier. Whether it&apos;s a
          wedding, corporate event, or private party, we connecting people to
          the perfect place.
        </p>
        <div className="mt-4 flex justify-end">
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              router.push("/venue");
            }}
          >
            Select Venue
          </Button>
        </div>
      </div>
    </div>
  );
}