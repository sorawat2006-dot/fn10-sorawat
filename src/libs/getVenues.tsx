import { VenueJson } from "../../interface"

export default async function getVenues(): Promise<VenueJson> {
  const response = await fetch(
    "https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues",
    {
      next: { revalidate: 60 }
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch venues")
  }

  return await response.json()
}