import Card from "./Card";
import { VenueItem, VenueJson } from "../../interface";

export default function VenueCatalog({
  venuesJson,
}: {
  venuesJson: VenueJson;
}) {
  return (
    <>
      {venuesJson.data.map((venueItem: VenueItem) => (
        <Card
          key={venueItem.id}
          venueName={venueItem.name}
          imgSrc={venueItem.picture}
          venueId={venueItem.id}
        />
      ))}
    </>
  );
}