import getVenue from "@/libs/getVenue";

function getVenueImage(venueName: string) {
  if (venueName === "The Bloom Pavilion") return "/img/bloom.jpg";
  if (venueName === "Spark Space") return "/img/sparkspace.jpg";
  if (venueName === "The Grand Table") return "/img/grandtable.jpg";
  return "/img/cover.jpg";
}

export default async function VenueDetailPage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue = venueJson.data;

   return (
    <main className="flex justify-center" style={{ marginTop: "96px" }}>
      <div className="flex w-full max-w-5xl flex-row items-center justify-center gap-8">
        <img
          src={getVenueImage(venue.name)}
          alt={venue.name}
          width={500}
          height={300}
          className="rounded-lg object-cover"
        />

        <div className="text-left text-lg leading-9">
          <div className="mb-2">Name: {venue.name}</div>
          <div className="mb-2">Address: {venue.address}</div>
          <div className="mb-2">District: {venue.district}</div>
          <div className="mb-2">Province: {venue.province}</div>
          <div className="mb-2">Postal Code: {venue.postalcode}</div>
          <div className="mb-2">Tel: {venue.tel}</div>
          <div className="mb-2">Daily Rate: {venue.dailyrate}</div>
        </div>
      </div>
    </main>
  );
}