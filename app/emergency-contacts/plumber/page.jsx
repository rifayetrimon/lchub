"use client";

import EmergencyContactCard from "@/components/emergencyContactCard/EmergencyContactCard";

export default function Plumber() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 py-8">
      <EmergencyContactCard
        label="Plumber"
        name="Kuala Lumpur Police HQ"
        phone="999"
        address="Jalan Hang Tuah, 51100 Kuala Lumpur, Malaysia"
      />
    </div>
  );
}
