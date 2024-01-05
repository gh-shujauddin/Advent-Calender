import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((value,index) => index+1)

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
  });

  useEffect(() => {
    if(fontLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if(!fontLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({item}) => <DayListItem day={item}/>
        }
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 10
  },

  content: {
    gap: 10,
    padding: 10
  },

  column: {
    gap: 10
  },

});
