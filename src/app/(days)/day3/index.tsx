import {Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Link } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
  # Markdown

  Integrate Markdown content in **React native**
 
📚  Today's Agenda:
- Introduction to Markdown
- Markdown Syntax Overview
- Setting Up React Native for Markdown
- Implementing Markdown Rendering
- Styling Markdown Content
- Using Markdown in React Native Components
- Recap and Q&A Session

`;
const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>
      <Link href={"/day3/editor"} asChild>
        <Button title={'Markdown Editor'} />
      </Link>
    </SafeAreaView>
  )
}


export default index;