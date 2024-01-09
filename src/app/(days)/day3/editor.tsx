import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { Stack } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';

const template = `
# Markdown Editor

Hello **World**!
`;

const editor = () => {
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState('edit');

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: 'Markdown Editor' }} />

      <View style={styles.tabContainer}>

        <Pressable onPress={() => setTab('edit')}
          style={[styles.tab, { borderColor: (tab === 'edit') ? 'mediumorchid' : 'gray' }]}>
          <Text style={[styles.tabText, {
            color: (tab === 'edit') ? 'mediumorchid' : 'gray'
          }]}>Edit</Text>
        </Pressable>

        <Pressable onPress={() => setTab('preview')}
          style={[styles.tab, {
            borderColor: (tab === 'preview') ? 'mediumorchid' : 'gray',
          }]}>
          <Text style={[styles.tabText, {
            color: (tab === 'preview') ? 'mediumorchid' : 'gray'
          }]}>Preview</Text>
        </Pressable>

      </View>

      {
        tab === 'edit' ? (
          <TextInput
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={50}
            style={styles.input}
            textAlignVertical='top'
          />
        ) : (
          <MarkdownDisplay>{content}</MarkdownDisplay>
        )
      }

    </View >
  )
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#whitesmoke',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
  },
  tabText: {
    fontFamily: 'InterBold'
  }
});

export default editor;