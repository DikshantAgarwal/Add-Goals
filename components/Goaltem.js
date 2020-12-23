import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity   onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default GoalItem;
