import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown: false}}/>
      <Text>Onboarding</Text>
    </View>
  )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
  description: {},
  image: {},
});