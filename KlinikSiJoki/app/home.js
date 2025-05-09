import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { clinics } from '../src/services/clinics';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-blue-600 p-6">
        <Text className="text-white text-2xl font-bold">KlinikSiJoki</Text>
        <Text className="text-white text-sm mt-1">Temukan Klinik Terbaik</Text>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Clinics List */}
        {clinics.map((clinic) => (
          <Link
            key={clinic.id}
            href={{
              pathname: "/clinic/[id]",
              params: { id: clinic.id }
            }}
            asChild
          >
            <TouchableOpacity
              className="bg-white rounded-xl mb-4 overflow-hidden shadow-sm"
            >
              <Image
                source={{ uri: clinic.image }}
                className="w-full h-48"
                resizeMode="cover"
              />
              <View className="p-4">
                <Text className="text-xl font-bold text-gray-800">{clinic.name}</Text>
                <Text className="text-gray-600 mt-1" numberOfLines={2}>
                  {clinic.description}
                </Text>
                <View className="flex-row mt-2 items-center">
                  <Text className="text-blue-600">
                    {clinic.operatingHours}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
