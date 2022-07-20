import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Search extends React.Component{
    render (){
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>Search</Text>
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : 'pink'
    }   , 
    text : {
        alignSelf : 'center',
        marginTop : 200,
        fontSize : 25,
        color  : 'white'
    }
})