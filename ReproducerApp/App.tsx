import React, { useState } from 'react';
import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TEXT = Array.from({ length: 14 }, (_, i) => `word${i + 1}`).join(' ');

export default function App() {
  const [wide, setWide] = useState(false);

  const toggle = () => {
    // Slow, linear animation so that every frame is easy to follow.
    LayoutAnimation.configureNext({
      duration: 3000,
      update: { type: LayoutAnimation.Types.linear },
    });
    setWide(value => !value);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>{wide ? 'Narrow' : 'Widen'}</Text>
      </Pressable>
      <Text style={[styles.text, wide ? styles.wide : styles.narrow]}>
        {TEXT}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  button: {
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
  },
  text: {
    fontSize: 22,
    backgroundColor: 'gold',
  },
  narrow: {
    width: '50%',
  },
  wide: {
    width: '100%',
  },
});
