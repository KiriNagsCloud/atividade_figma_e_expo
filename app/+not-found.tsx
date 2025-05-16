import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'oh no!' }} />
      <View style={styles.container}>
        <Image
          source={require('../assets/images/png-transparent-tyrannosaurus-google-chrome-t-rex-runner-dinosaur-dinosaur-game-angle-white.png')}
          style={styles.image}
        />
        <Text style={styles.text}>PAGE NOT FOUND!</Text>

        {/* Botão circular com link */}
        <Link href="/" asChild>
          <View style={styles.roundButton}>
            <Text style={styles.roundButtonText}>Return to home page</Text>
          </View>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roundButton: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  roundButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
