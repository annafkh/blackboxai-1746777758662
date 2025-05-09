import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { clinics } from '../services/clinics';

export default function HomeScreen({ navigation }) {
  return (
    <div className="flex-1 bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 p-6">
        <h1 className="text-white text-2xl font-bold">KlinikSiJoki</h1>
        <p className="text-white text-sm mt-1">Temukan Klinik Terbaik</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        {/* Clinics List */}
        <div className="grid grid-cols-1 gap-4">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => navigation.navigate('ClinicDetail', { clinic })}
            >
              <img
                src={clinic.image}
                alt={clinic.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{clinic.name}</h2>
                <p className="text-gray-600 mt-1 line-clamp-2">
                  {clinic.description}
                </p>
                <div className="flex items-center mt-2">
                  <p className="text-blue-600">
                    <i className="fas fa-clock mr-2"></i>
                    {clinic.operatingHours}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
