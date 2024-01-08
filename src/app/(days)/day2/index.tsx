import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const index = () => {
  return (
    <View>
      <Stack.Screen options={{title: 'Day 2: Onboarding'}}/>

      <Text>Day 2</Text>
      <Link href={"/day2/onboarding"} asChild>
        <Button title={'On boarding'}/>
      </Link>
    </View>
  )
}

export default index