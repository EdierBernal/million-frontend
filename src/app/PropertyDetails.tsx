import Image from "next/image";

type Property = {
  id: number;
  name: string;
  location: string;
  price: string;
  image: string;
  description: string;
};

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <Image
        src={property.image}
        alt={property.name}
        width={600}
        height={192}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <div className="text-2xl font-bold mb-2">{property.name}</div>
      <div className="text-gray-600 dark:text-gray-300 mb-2">
        {property.location}
      </div>
      <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
        {property.price}
      </div>
      <div className="text-gray-700 dark:text-gray-400">
        {property.description}
      </div>
    </div>
  );
}