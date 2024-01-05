import { View, Text, StyleSheet } from "react-native";

type DayListItem ={
    day: number
}

export default function DayListItem({day} : DayListItem) {
    console.log(day);
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>
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
    }
  });