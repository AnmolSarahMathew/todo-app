import React from 'react';
import { Stack, useRouter } from "expo-router";
import { View, TouchableOpacity, ScrollView, Text, Platform } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'react-native-paper';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  // Close drawer when window resizes on web
  useEffect(() => {
    if (Platform.OS === 'web') {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setDrawerOpen(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Header always visible */}
      <View style={{ 
        height: 56, 
        backgroundColor: '#FFDAB9', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: Platform.OS === 'web' ? 20 : 10,
        paddingTop: Platform.OS === 'web' ? 0 : 10
      }}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            setDrawerOpen(false);
            router.push('/');
          }}
          style={{
            flex: 1,
            marginLeft: 16,
          }}
        >
          <Text style={{ 
            fontSize: Platform.OS === 'web' ? 20 : 18, 
            fontWeight: 'bold', 
            color: '#222',
          }}>
            Sarah's First Application - A To-Do List Application
          </Text>
        </TouchableOpacity>
      </View>
      {/* Content area below header */}
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Drawer overlay below header */}
        {drawerOpen && (
          <>
            {/* Backdrop for web */}
            {Platform.OS === 'web' && (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  zIndex: 9
                }}
                onPress={() => setDrawerOpen(false)}
              />
            )}
            <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: Platform.OS === 'web' ? 300 : '70%',
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
          </>
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