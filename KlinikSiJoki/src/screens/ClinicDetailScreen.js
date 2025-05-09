import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

export default function ClinicDetailScreen({ route }) {
  const { clinic } = route.params;

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
          <Text className="text-blue-600 text-lg">
            <i className="fas fa-clock"></i>
          </Text>
          <Text className="text-gray-700 text-lg ml-2">
            Jam Operasional: {clinic.operatingHours}
          </Text>
        </View>

        {/* Address */}
        <View className="flex-row items-start mt-4">
          <Text className="text-blue-600 text-lg">
            <i className="fas fa-map-marker-alt"></i>
          </Text>
          <Text className="text-gray-700 text-lg ml-2 flex-1">
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
