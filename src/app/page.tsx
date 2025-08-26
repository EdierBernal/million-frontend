"use client";
import Image from "next/image";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails"; // Import the new component

type Property = {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  description: string;
};

const properties: Property[] = [
  {
    id: 1,
    name: "Modern Apartment",
    location: "Downtown",
    price: "$1,200/month",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "A modern apartment in the heart of the city.",
  },
  {
    id: 2,
    name: "Cozy Cottage",
    location: "Countryside",
    price: "$900/month",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    description: "A cozy cottage surrounded by nature.",
  },
  {
    id: 3,
    name: "Luxury Villa",
    location: "Beachside",
    price: "$3,500/month",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
    description: "A luxury villa with ocean views.",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <div className="font-sans min-h-screen p-8 pb-20 sm:p-20 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center">Property Viewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Properties</h2>
          <ul className="space-y-4">
            {properties.map((property) => (
              <li
                key={property.id}
                className={`p-4 rounded-lg border cursor-pointer transition ${
                  selected?.id === property.id
                    ? "bg-blue-100 border-blue-400"
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => setSelected(property)}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={property.image}
                    alt={property.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <div className="font-medium">{property.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {property.location}
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold">
                      {property.price}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          {selected ? (
            <PropertyDetails property={selected} />
          ) : (
            <div className="text-gray-500 dark:text-gray-400">
              Select a property to view details.
            </div>
          )}
        </div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
