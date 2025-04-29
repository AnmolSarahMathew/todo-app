import { Stack, useRouter } from "expo-router";
import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'react-native-paper';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Header always visible */}
      <View style={{ height: 56, backgroundColor: '#FFDAB9', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#222', marginLeft: 16 }}>
          Sarah's First Application - A To-Do List Application
        </Text>
      </View>
      {/* Content area below header */}
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Drawer overlay below header */}
        {drawerOpen && (
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '70%',
            height: '100%',
            backgroundColor: '#fff',
            zIndex: 10,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}>
            <ScrollView>
              <Drawer.Section>
                <Drawer.Item
                  label="Home"
                  onPress={() => {
                    setDrawerOpen(false);
                    router.push('/home');
                  }}
                  icon={({ color, size }) => (
                    <Ionicons name="home-outline" size={size} color={color} />
                  )}
                />
              </Drawer.Section>
            </ScrollView>
          </View>
        )}
        {/* Main stack content */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </View>
  );
}