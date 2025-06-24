"use client";

import EmergencyContactCard from "@/components/emergencyContactCard/EmergencyContactCard";

export default function PoliceEmergencyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-8">
      <EmergencyContactCard
        label="Police"
        name="Kuala Lumpur Police HQ"
        phone="999"
        address="Jalan Hang Tuah, 51100 Kuala Lumpur, Malaysia"
      />
      <EmergencyContactCard
        label="Police"
        name="Brickfields Police Station"
        phone="+60 3-2274 2222"
        address="Jalan Travers, 50470 Kuala Lumpur, Malaysia"
      />
      <EmergencyContactCard
        label="Police"
        name="Dang Wangi Police Station"
        phone="+60 3-2072 2222"
        address="Jalan Dang Wangi, 50100 Kuala Lumpur, Malaysia"
      />
      {/* Add more cards as needed */}
    </div>
  );
}
