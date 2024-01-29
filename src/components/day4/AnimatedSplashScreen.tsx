import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import Animated, {  ZoomOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = () => { },
}: {
  onAnimationFinish?: (isCancelled: boolean) => void,
}) => {
  return (
    <View
      style={{
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut}
        autoPlay
        onAnimationFinish={onAnimationFinish}
        loop={false}
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

export default AnimatedSplashScreen;
