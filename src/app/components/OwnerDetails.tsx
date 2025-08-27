import React from "react";
import { Owner } from "@/Global/globalTypes";

export default function OwnerDetails({ owner }: { owner: Owner | null }) {
    if (!owner) return <div>Without owner data</div>;
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Owner</h2>
            {owner.photo && (
                <img
                    src={owner.photo}
                    alt={owner.name}
                    className="w-16 h-16 object-cover rounded-full border"
                />
            )}
            <div>
                <div className="font-semibold">{owner.name}</div>
                <div className="text-gray-600">{owner.address}</div>
                {owner.birthday && (
                    <div >Birthday: {owner.birthday}</div>
                )}
            </div>
        </div>
    );
}