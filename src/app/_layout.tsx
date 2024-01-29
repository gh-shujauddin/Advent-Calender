import React, { useState } from "react";
import { Stack } from "expo-router";
import { useEffect } from 'react';
import { useFonts, Inter_600SemiBold, Inter_700Bold, Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
// import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen"
import Animated, { FadeIn } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if (fontLoaded || fontError) {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fontError]);


  console.log(appReady, splashAnimationFinished);


  if (!appReady || !splashAnimationFinished) {
    return <AnimatedSplashScreen
      onAnimationFinish={(isCancelled) => {
        console.log('Finished: ', isCancelled);
        if (!isCancelled) {
          setSplashAnimationFinished(true);
        }
      }
      } />;

  }
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View entering={FadeIn} style={{ flex: 1 }}>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: 'Advent Calender' }} />
        </Stack>
      </Animated.View>

    </GestureHandlerRootView>
  );
}