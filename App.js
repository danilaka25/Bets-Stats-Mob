import React, { Component } from "react";

import { AppLoading } from "expo";

import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  YellowBox,
  Dimensions,
  Button
} from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
 

import Main from "./components/main";
import Events from "./components/events";
import Settings from "./components/settings";

import OneEvent from "./components/oneEvent";

import Menu from "./components/menu";

const { width } = Dimensions.get("window");

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Icon name="menu" style={{ color: "#fff" }} />
        </TouchableOpacity>
      </View>
    );
  }
}

//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: "Main",
      //headerLeft:  <NavigationDrawerStructure navigationProps={navigation} />,
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      //headerRight: <Icon name='settings' style={{color: '#fff'}} />,
      headerStyle: {
        backgroundColor: "#0d0e3e"
      },
      headerTintColor: "#fff"
    })
  }
});

//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Events,
    navigationOptions: ({ navigation }) => ({
      title: "Events",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "#0d0e3e"
      },
      headerTintColor: "#fff"
    })
  }
});

//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: "Settings",
      headerLeft: () => (
        <NavigationDrawerStructure navigationProps={navigation} />
      ),
      headerStyle: {
        backgroundColor: "#0d0e3e"
      },  
      headerTintColor: "#fff"
    })
  }
});

const Screen4_StackNavigator = createStackNavigator({
  Forse: {
    screen: OneEvent,
    // navigationOptions: ({ navigation }) => ({
    //   title: "OneEvent",
    //   headerLeft: () => (
    //     <Icon
    //       name="arrow-back"
    //       style={{ color: "#fff", marginLeft: 20 }}
    //       onPress={() => {
    //         navigation.goBack(null);
    //       }}
         
    //     />
    //   ),
    //   headerStyle: {
    //     backgroundColor: "#0d0e3e"
    //   },
    //   headerTintColor: "#fff"
    // })
  }
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const Drawer = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    Main: { screen: FirstActivity_StackNavigator },
    Events: { screen: Screen2_StackNavigator },
    Settings: { screen: Screen3_StackNavigator },
    OneEvent: { screen: Screen4_StackNavigator }
  },
  {
    contentComponent: Menu,
    drawerWidth: Dimensions.get("window").width - 120
  }
);
export default createAppContainer(Drawer);
