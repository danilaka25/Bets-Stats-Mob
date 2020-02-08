import React from 'react';
import { Container,  Text, View, Button }  from 'react-native';

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";



import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class OneEvent extends React.Component {


  constructor(props) {
    super(props);
    
  }


async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    
  }
   
    render() { 

      const {navigation} = this.props;

        

       // console.log('params' , params)



    return (
    <View>
      <Text>  {JSON.stringify(navigation.getParam('teams_home', 'NO-ID'))}</Text>  
      <Button
          title="Go to EVENT"
          onPress={() => {
            this.props.navigation.navigate('Events', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
    </View>
    )
    }
    

}

     


export default OneEvent;