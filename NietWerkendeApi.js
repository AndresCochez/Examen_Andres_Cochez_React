import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CarsList from './CarsList'; // Ensure the path to CarsList is correct

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CarsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;