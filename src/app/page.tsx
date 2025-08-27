"use client";
import { useState, useEffect } from "react";
import { getProperties, getPropertyImages, getPropertyTraces } from "../../services/propertyService";
import { getOwners } from "../../services/ownerService";
import PropertyDetails from "./components/PropertyDetails";
import OwnerDetails from "./components/OwnerDetails";
import PropertyImages from "./components/PropertyImages";
import PropertyTraces from "./components/PropertyTraces";
import { Property, Owner, PropertyImage, PropertyTrace } from "@/Global/globalTypes";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selected, setSelected] = useState<Property | null>(null);
  const [propertyImages, setPropertyImages] = useState<PropertyImage[]>([]);
  const [propertyTraces, setPropertyTraces] = useState<PropertyTrace[]>([]);
  const [owners, setOwners] = useState<Owner[]>([]);

  useEffect(() => {
    getProperties()
      .then((data) => setProperties(data))
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });

    getPropertyImages()
      .then((data) => setPropertyImages(data))
      .catch((error) => {
        console.error("Error fetching property images:", error);
      });

    getPropertyTraces()
      .then((data) => setPropertyTraces(data))
      .catch((error) => {
        console.error("Error fetching property traces:", error);
      });

    getOwners()
      .then((data) => setOwners(data))
      .catch((error) => {
        console.error("Error fetching owners:", error);
      });
  }, []);

  const selectedImages = selected
    ? propertyImages.filter(img => img.idProperty === selected.idProperty)
    : [];
  const selectedTraces = selected
    ? propertyTraces.filter(trace => trace.idProperty === selected.idProperty)
    : [];
  const selectedOwner: Owner | null = selected
    ? owners.find(owner => owner.idOwner === selected.idOwner) ?? null
    : null;

  return (
    <div
      className="p-8 min-h-screen text-black"
      style={{
        backgroundImage: "url('https://cdn.luxatic.com/wp-content/uploads/2021/11/Luxury-Home-Features.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-5xl font-extrabold mb-10 text-black text-center">Properties Viewer</h1>
        <ul className="space-y-4 mb-8">
          {properties.map((property) => (
            <li
              key={property.id}
              className={`border rounded-lg p-4 shadow-sm cursor-pointer ${selected?.id === property.id ? "bg-blue-100 border-blue-400" : "bg-white"
                } text-black`}
              onClick={() => setSelected(property)}
            >
              <div className="font-semibold text-lg text-black">{property.name}</div>
              <div className="text-green-700 font-bold">Price: ${property.price}</div>
              <div className="text-gray-800">Address: {property.address}</div>
              <div className="text-xs text-gray-600">
                Code: {property.codeInternal} | Year: {property.year}
              </div>
            </li>
          ))}
        </ul>

        {selected && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:col-span-2 text-black">
              <PropertyImages images={selectedImages} propertyName={selected.name} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-black">
              <PropertyDetails property={selected} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-black">
              <OwnerDetails owner={selectedOwner} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:col-span-2 text-black">
              <PropertyTraces traces={selectedTraces} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
