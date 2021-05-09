import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    console.log('RENDERING OR RE-RENDERING THE GoalItem COMPONENT');

    return (
        <TouchableOpacity onPress={()=>props.onTapDelete(props.id)}>
            <View style={myStyles.myList}
            >
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>);
};



//STYLING
const myStyles = StyleSheet.create({
    myList: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#dfd",
        borderColor: '#aaa',
        borderWidth: 1,
    }
});

export default GoalItem;