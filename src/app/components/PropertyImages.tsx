import React from "react";
import { PropertyImage } from "@/Global/globalTypes";

interface Props {
  images: PropertyImage[];
  propertyName: string;
  className?: string;
  imgClassName?: string;
}

export default function PropertyImages({ images, propertyName, className = "", imgClassName = "" }: Props) {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4 text-center">Image</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {images.length > 0 ? (
          images.map(img => (
            <img
              key={img.id}
              src={img.file}
              alt={`Image property ${propertyName}`}
              className={imgClassName || "mx-auto w-full max-w-md h-auto object-cover rounded-lg shadow-lg"}
            />
          ))
        ) : (
          <span className="text-gray-500 text-center">No images available.</span>
        )}
      </div>
    </div>
  );
}