import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import TypeWriter from './components/TypeWriter';

// This is for the home screen. And I created like just the text placement here.
export default function LandingPage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.greeting}>Hej Sarah!</Text>
                <Text style={styles.welcomeText}>Welcome to the New Era of the Programming World.</Text>
                <TypeWriter 
                    text="The best way to predict the future is to invent it."
                    style={styles.quote}
                    delay={80}
                />
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push('/home')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// This is for the home screen. And I created like just the text placement here.

// cursor wrote this part. So apparently this is for the container that has the "Sarah to-do list written on it"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Platform.OS === 'web' ? 40 : 20,
        maxWidth: Platform.OS === 'web' ? 1200 : '100%',
        marginHorizontal: 'auto',
    },
    greeting: {
        fontSize: Platform.OS === 'web' ? 42 : 32,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: Platform.OS === 'web' ? 24 : 20,
        color: '#444',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: '500',
    },
    quote: {
        fontSize: Platform.OS === 'web' ? 20 : 16,
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#E9967A',
        paddingHorizontal: Platform.OS === 'web' ? 32 : 24,
        paddingVertical: Platform.OS === 'web' ? 16 : 12,
        borderRadius: 8,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: Platform.OS === 'web' ? 18 : 16,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
    },
});

export function IndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/home');
  }, [router]);
  return null;
}
