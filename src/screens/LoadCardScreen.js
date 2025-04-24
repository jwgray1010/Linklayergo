import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoadCardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="qr-code-outline" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="wallet-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.balance}>187.54 LLR</Text>
      <Text style={styles.usd}>≈ $93.77 USD</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Top-Up Virtual Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadCardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', paddingTop: 60 },
  topBar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  balance: { color: '#00FFAA', fontSize: 28, fontWeight: 'bold' },
  usd: { color: '#888', fontSize: 16, marginBottom: 40 },
  button: {
    backgroundColor: '#00FFAA',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
});
