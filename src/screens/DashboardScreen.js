import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validator Dashboard</Text>
      <Text style={styles.text}>Coming Soon: Stake, Rank, and Earn</Text>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  title: { color: '#00FFAA', fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { color: '#888', fontSize: 16 },
});
