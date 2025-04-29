import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

// This is for the home screen. And I created like just the text placement here.
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Hej! Sarah</Text>
        </View>
    );
}

// This is for the home screen. And I created like just the text placement here.

// cursor wrote this part. So apparently this is for the container that has the "Sarah to-do list written on it"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        textAlign: 'left',
        marginTop: 16,
        marginLeft: 16,
    },

// cursor wrote this part. We will check this later.
});

export function IndexRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/home');
  }, [router]);
  return null;
}
