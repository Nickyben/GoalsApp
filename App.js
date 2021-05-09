import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './myComponents/GoalItem';
import GoalInput from './myComponents/GoalInput';

export default function App() {
  console.log('RENDERING OR RE-RENDERING THE APP COMPONENT');

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals);

  const addGoalHandler = (goalToAdd) => {
    if(goalToAdd.length===0)return;
    setCourseGoals(() => [...courseGoals,
       { id: Math.random().toString(), val: goalToAdd }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    console.log('deleting');
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);

    });
  };

  const cancelGoalAddHandler=()=>{
    setIsAddMode(false);
  };

  return (
    <View style={myStyles.screen} >
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalAddHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem
            title={itemData.item.val}
            id={itemData.item.id}
            onTapDelete={removeGoalHandler}
          />
        }
      />

    </View>
  );
}

const myStyles = StyleSheet.create({
  screen: {
    padding: 45,
    flex: 1,
    backgroundColor: '#fff',

  },




});
