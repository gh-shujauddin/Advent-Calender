import { Button, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);
  return (
    <View>
      <Stack.Screen options={{ title: 'Splash Screen' }} />
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        source={require('@assets/lottie/netflix.json')}
      />
      <Button title="Play" onPress={() => animation.current?.play()}/>
      <Button title="Pause" onPress={() => animation.current?.pause()}/>
      <Button title="Reset" onPress={() => animation.current?.reset()}/>
    </View>
  );
};

export default AnimationScreen;
