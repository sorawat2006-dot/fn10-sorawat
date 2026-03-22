import Link from "next/link"
import styles from "./card.module.css"

function getVenueImage(venueName: string) {
  if (venueName === "The Bloom Pavilion") return "/img/bloom.jpg"
  if (venueName === "Spark Space") return "/img/sparkspace.jpg"
  if (venueName === "The Grand Table") return "/img/grandtable.jpg"
  return "/img/cover.jpg"
}

export default function Card({
  venueName,
  imgSrc,
  onCompare,
  rating,
  onRatingChange,
  venueId
}: {
  venueName: string
  imgSrc: string
  onCompare?: Function
  rating?: number
  onRatingChange?: Function
  venueId?: string
}) {
  return (
    <div className={styles.card}>
      <Link href={venueId ? `/venue/${venueId}` : "#"}>
        <img
          src={getVenueImage(venueName)}
          alt={venueName}
          className={styles.img}
        />
      </Link>

      <div className={styles.cardText}>
        <h3>{venueName}</h3>
        {rating !== undefined ? <div>{rating}</div> : null}
      </div>
    </div>
  )
}