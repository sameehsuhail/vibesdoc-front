import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: -20,
    marginLeft: 25,
   // marginRight: 40,
    marginTop: 30,
    width:"85%"
  },
  text: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "600",
    marginTop: -60,
    marginLeft: 30
  }
});

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
};

export const RowItem = ({ onPress = () => {}, name, color }) => (
    <View style={[styles.row, { backgroundColor: color, borderRadius: 15, ...padding(80, 10, 10, 5)}]}>
      <Text style={[styles.text,{ ...padding(10, 0, 0, 2)}]}>{name}</Text>
    </View>
);
