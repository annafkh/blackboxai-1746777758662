import React from 'react';

export default function ClinicDetailScreen({ route }) {
  const { clinic } = route.params;

  return (
    <div className="flex-1 bg-gray-100">
      <img
        src={clinic.image}
        alt={clinic.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">{clinic.name}</h1>
        <p className="text-gray-600 mt-2 text-lg">{clinic.description}</p>
        
        <div className="mt-8">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Alamat</h2>
          <p className="text-gray-700">{clinic.address}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Jam Operasional</h2>
          <p className="text-gray-700">{clinic.operatingHours}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-blue-600 mb-2">Layanan</h2>
          <ul className="list-disc list-inside text-gray-700">
            {clinic.services.map((service, index) => (
              <li key={index} className="mt-1">{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
