import { View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimationScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Stack.Screen options={{ title: 'Splash Screen' , headerShown: false}}  />
      <LottieView
        autoPlay
        style={{
          width: '80%',
          maxWidth: 400,
          height: 200,
          // backgroundColor: '#eee',
        }}
        source={require('@assets/lottie/netflix.json')}
      />
    </View>
  );
};

export default AnimationScreen;
