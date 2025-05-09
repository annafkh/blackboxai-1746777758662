import React from 'react';
import { clinics } from './src/services/clinics';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 p-6">
        <h1 className="text-white text-2xl font-bold">KlinikSiJoki</h1>
        <p className="text-white text-sm mt-1">Temukan Klinik Terbaik</p>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={clinic.image}
                alt={clinic.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{clinic.name}</h2>
                <p className="text-gray-600 mb-4">{clinic.description}</p>
                <div className="flex items-center text-blue-600">
                  <i className="fas fa-clock mr-2"></i>
                  <span>{clinic.operatingHours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
