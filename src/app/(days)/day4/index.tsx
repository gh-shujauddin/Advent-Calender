import {Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Link } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
  # Animation using Lottie

 
📚  Today's Agenda:

`;
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: Splash Screen' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day4/animation"} asChild>
        <Button title={'Continue to animation'} />
      </Link>
      <Link href={"/day4/splash"} asChild>
        <Button title={'Splash Screen Animation'} />
      </Link>
    </SafeAreaView>
  )
}


export default index;