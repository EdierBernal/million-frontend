import React from "react";
import {PropertyTrace } from "@/Global/globalTypes";

export default function PropertyTraces({ traces }: { traces: PropertyTrace[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Traces</h2>
      <ul className="space-y-2">
        {traces.length > 0 ? (
          traces.map(trace => (
            <li key={trace.id}>
              <div>Sale Date: {trace.dateSale}</div>
              <div>Name: {trace.name}</div>
              <div>Value: ${trace.value}</div>
              <div>Tax: ${trace.tax}</div>
            </li>
          ))
        ) : (
          <span className="text-gray-500">No traces available.</span>
        )}
      </ul>
    </div>
  );
}

