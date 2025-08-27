import React from "react";
import { Property} from "@/Global/globalTypes";

export default function PropertyDetails({ property }: { property: Property }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Property Details</h2>
      <div>Name: {property.name}</div>
      <div>Address: {property.address}</div>
      <div>Price: ${property.price}</div>
      <div>CodeInternal: {property.codeInternal}</div>
      <div>Year: {property.year}</div>
    </div>
  );
}