import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";

const GoalInput = (props) => {
  const [goal, setGoal] = useState();

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const goalHandler = () => {
    props.addGoalHandler(goal);
    setGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
         <View  style={styles.button}><Button  title="Cancel" onPress={props.onCancel} color="red" /></View> 
         <View style={styles.button}><Button  title="ADD" onPress={goalHandler} /></View> 
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  buttonContainer:{
      flexDirection:'row',
      justifyContent:"space-around",
      width:'60%'
  },
  button:{
      width:'40%'
  }
});

export default GoalInput;
