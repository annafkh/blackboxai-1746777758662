import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { clinics } from '../../src/services/clinics';

export default function ClinicDetailScreen() {
  const { id } = useLocalSearchParams();
  const clinic = clinics.find(c => c.id === id);

  if (!clinic) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl text-gray-800">Klinik tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Hero Image */}
      <Image
        source={{ uri: clinic.image }}
        className="w-full h-64"
        resizeMode="cover"
      />

      {/* Content */}
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-800">{clinic.name}</Text>
        
        {/* Operating Hours */}
        <View className="flex-row items-center mt-4">
          <Text className="text-blue-600 text-lg mr-2">⏰</Text>
          <Text className="text-gray-700 text-lg">
            Jam Operasional: {clinic.operatingHours}
          </Text>
        </View>

        {/* Address */}
        <View className="flex-row items-start mt-4">
          <Text className="text-blue-600 text-lg mr-2">📍</Text>
          <Text className="text-gray-700 text-lg flex-1">
            {clinic.address}
          </Text>
        </View>

        {/* Description */}
        <View className="mt-6">
          <Text className="text-xl font-semibold text-gray-800 mb-2">
            Tentang Klinik
          </Text>
          <Text className="text-gray-600 text-base leading-relaxed">
            {clinic.description}
          </Text>
        </View>

        {/* Services */}
        <View className="mt-6">
          <Text className="text-xl font-semibold text-gray-800 mb-3">
            Layanan
          </Text>
          <View className="flex-row flex-wrap">
            {clinic.services.map((service, index) => (
              <View 
                key={index}
                className="bg-blue-100 rounded-full px-4 py-2 mr-2 mb-2"
              >
                <Text className="text-blue-600">{service}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
