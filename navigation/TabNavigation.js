import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../screens/Search";
import Transaction from "../screens/Transaction";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator()
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TabNavigation extends React.Component{
    render (){
        return (
           <Tab.Navigator screenOptions = {({route})=> ({
               tabBarIcon: ({focused,size,color})=>{
                    var iconName 
                    if (route.name === 'Transaction'){
                        iconName = 'book'
                    }
                    else if (route.name === 'Search'){
                        iconName = 'search'
                    }
                    return (
                        <Ionicon name = {iconName} size = {size} color = {color}  />
                    )
               }
           })}
           tabBarOptions = {{activeTintColor: "#FFFFFF", inactiveTintColor: "black",
                 style: { height: 130, borderTopWidth: 0, backgroundColor: "#5653d4" }, labelStyle: { fontSize: 20, fontFamily: "Rajdhani_600SemiBold" }, labelPosition: "beside-icon", tabStyle: { marginTop: 25, marginLeft: 10, marginRight: 10, borderRadius: 30, borderWidth: 2, alignItems: "center", justifyContent: "center", backgroundColor: "#5653d4" }}}
           >
               <Tab.Screen name = "Transaction" component={Transaction} />
               <Tab.Screen name = "Search" component = {Search} />

           </Tab.Navigator>
        )
        
    }
}

