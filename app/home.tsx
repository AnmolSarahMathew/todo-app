import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Empty State */}
      <View style={styles.emptyStateContainer}>
        <Text style={styles.emptyStateText}>
          Yay! Your to-do list is empty.{'\n'}
          Time to rest and bask in the sunshine. 🌞
        </Text>
      </View>

      {/* Create Todo Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.createButton}>
          <Ionicons name="add-circle" size={64} color="#E9967A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'web' ? 40 : 30,
    right: Platform.OS === 'web' ? 40 : 30,
    zIndex: 1,
  },
  createButton: {
    padding: 8,
    borderRadius: 32,
    ...(Platform.OS === 'web' ? {
      cursor: 'pointer',
      ':hover': {
        opacity: 0.8,
      }
    } : {}),
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: Platform.OS === 'web' ? 20 : 18,
    color: '#aaa',
    textAlign: 'center',
    lineHeight: Platform.OS === 'web' ? 32 : 28,
    fontWeight: '500',
  },
}); 