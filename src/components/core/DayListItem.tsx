import React from "react";
import { Link } from "expo-router";
import { Text, StyleSheet, Pressable } from "react-native";

type DayListItem = {
  day: number
}

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 100,
    width: 100,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f9ede3',
    borderColor: '#9b4521',
    borderWidth: StyleSheet.hairlineWidth,

  },
  text: {
    fontSize: 70,
    color: '#9b4521',
    fontFamily: 'AmaticBold',
  }
});