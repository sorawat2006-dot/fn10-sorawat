import { VenueItem } from "../../interface"

export default async function getVenue(
  vid: string
): Promise<{ success: boolean; data: VenueItem }> {
  const response = await fetch(
    `https://a08-venue-explorer-backend-3.vercel.app/api/v1/venues/${vid}`,
    {
      next: { revalidate: 60 }
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch venue")
  }

  return await response.json()
}