import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb', // blue-600
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="clinic/[id]"
        options={{
          title: 'Detail Klinik',
          headerBackTitle: 'Kembali',
        }}
      />
    </Stack>
  );
}
