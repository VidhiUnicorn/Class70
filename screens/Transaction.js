import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity,TextInput, Image, ImageBackground } from "react-native";
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from "expo-barcode-scanner";

export default class Transaction extends React.Component{
    constructor (){
        super (
            
        )
        this.state = {
            domState : 'normal',
            hasCameraPermission : null,
            scanned : false,
            scannedData : ''
        }
    }
    getCameraPermissions =async(domState)=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState ({
            hasCameraPermission : status === 'granted',
            domState : domState,
            scanned : false,

        })
    }
    handleBarcodeScan = async ({type,data})=>{
        this.setState({
            scannedData : data,
            domState : 'normal',
            scanned : true
        })
    }
    render (){

        const {hasCameraPermission,domState,scanned,scannedData} = this.state
        if (domState==='Scanner'){
            return(
                <BarCodeScanner onBarCodeScanned = {
                    scanned ? undefined : this.handleBarcodeScan
                } style = {StyleSheet.absoluteFillObject}/>
            )
        }
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}>{hasCameraPermission ? scannedData : 'Requesting camera permission. '}</Text>
                <TouchableOpacity style = {styles.button} onPress = { ()=>{
                    this.getCameraPermissions('Scanner')
                }}> 
                <TextInput/>
                <Text style = {styles.buttonText}> Scan QR code.  </Text>
                </TouchableOpacity>
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
    },
    button: 
    { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 }, 
    buttonText: 
    { fontSize: 24, color: "#FFFFFF" }

})