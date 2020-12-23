import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from './components/Goaltem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode,setIsAddMode]=useState(false)
  console.log('courseGoals',courseGoals)
  const addGoalHandler = (goal) => {
    if(goal.length===0){
      return;
    }
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { uid: Math.random().toString(), value: goal },
    ]);
    setIsAddMode(false)
  };
  const deleteGoalHandler = (goalId)=>{
    setCourseGoals(currentGoals=>{
      return(currentGoals.filter(goal=>goal.uid!==goalId))
    })
  }

  const cancelGoalAdditionHandler = () =>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput visible = {isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <View>
        <FlatList
          keyExtractor={(item, index) => item.uid}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem onDelete={()=>deleteGoalHandler(itemData.item.uid)} title={itemData.item.value}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
