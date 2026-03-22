import VenueCatalog from "@/components/VenueCatalog";
import getVenues from "@/libs/getVenues";

export default async function Venue() {
  const venues = await getVenues();

  return (
    <main className="p-5 text-center">
      <h1 className="text-3xl font-medium">Select Your Venue</h1>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}