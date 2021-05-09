import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
    console.log('RENDERING OR RE-RENDERING THE GoalInput COMPONENT');

    const [enteredGoal, setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    };

    return (
        <Modal style={myStyles.inputModal} visible={props.visible} animationType="slide">
            <View style={myStyles.inputContainer}>
                <TextInput
                    placeholder='Enter Course Goal'
                    style={myStyles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={myStyles.buttonContainer}>
                    <View style= {myStyles.normalButton}>
                        <Button title='CANCEL' color="#f22" onPress={props.onCancelGoal} />
                    </View>
                    <View style={myStyles.normalButton}>
                        <Button title='ADD' onPress={addGoalHandler} />
                    </View>
                </View>
                {/*OR onPress={props.onAddGoal.bind(this,enteredGoal)}*/}
            </View>
        </Modal>
    );
};

const myStyles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 0,

    },

    input: {
        width: '80%',
        padding: 10,
        borderColor: "#ccc",
        borderRadius: 10,
        borderWidth: 3,
        marginBottom: 10
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    normalButton:{
       width: '40%', 
    }

});

export default GoalInput;