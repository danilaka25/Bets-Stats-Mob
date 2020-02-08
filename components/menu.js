/*Example of Navigation Drawer with Sectioned Menu*/
 
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView,  StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Badge,
  Text, 
  View
} from "native-base";
 
class Menu extends Component {
  constructor() {
    super();
    /*Array of the sidebar navigation option with 
    Heading, Subheading and screen to navigate.*/
    //Sreen to navigate can be any screen defined in Drawer Navigator in App.js
    this.options = [
      {
        mainHeading: 'Main Heading 1',
        subOptions: [
          { secondaryHeading: 'Main', navigationPath: 'Main' },
        ],
      },
      {
        mainHeading: 'Main Heading 2',
        subOptions: [
          { secondaryHeading: 'Events', navigationPath: 'Events' },
          { secondaryHeading: 'Settings', navigationPath: 'Settings' },
        ],
      },
    ];
  }
 
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
 
  render() {
    return (
     
       
            
            
     <SafeAreaView style={styles.main}>


         <List>
           <ListItem style={styles.pLeft} selected>
             <Left>
               <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Main")}
              >
                <Text>Main</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem style={styles.pLeft}>
            <Left>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Events")}
              >
                <Text>Events</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>

        <List>
        
          <ListItem style={styles.pLeft}>
            <Left>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Settings")}
              >
                <Text>Settings</Text>
              </TouchableOpacity>
            </Left>
            <Right>
              <Badge primary>
                <Text>Pro</Text>
              </Badge>
            </Right>
          </ListItem>


 <View style={styles.footerContainer}>
          <Text>Bets analytics version 1.1</Text>
        </View>

        </List>
              
            
            
            {/* {this.options.map((option, key) => (
              <View>
                <Text style={styles.mainHeading}>{option.mainHeading}</Text>
                {option.subOptions.map((item, key) => (
                  <View style={styles.secondaryHeading} key={key}>
                    <Text onPress={this.navigateToScreen(item.navigationPath)}>
                      {item.secondaryHeading}
                    </Text>
                  </View>
                ))}
              </View>
            ))} */}

             
          
        
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({

   main: {
    flex: 1,
    marginLeft: 0,
    //paddingRight: 10,
    paddingTop: 24,
    justifyContent: 'space-between'
  },
  pLeft: {
    marginLeft: 0,
    paddingLeft: 10
  },


  container: {
    paddingTop: 20,
    flex: 1,
  },
  secondaryHeading: {
    padding: 10,
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'lightgrey',
  },
  footerContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});
 
export default Menu;




// import React from "react";
// import { NavigationActions } from "react-navigation";
// import { withNavigation } from "react-navigation";


// import {
//   ScrollView,
//   View,
//   StyleSheet,
//   SafeAreaView,
//   Button,
//   Image,
//   TouchableOpacity
// } from "react-native";
// import {
//   Container,
//   Header,
//   Content,
//   List,
//   ListItem,
//   Text,
//   Left,
//   Right,
//   Icon,
//   Badge
// } from "native-base";

// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "123",
//       lastName: "",
//       email: ""
//     };
//   }


//   toggleDrawer = () => {
//     this.props.navigationProps.toggleDrawer();
//   };

//   componentDidMount() {
//       //this.props.navigation.navigate('DrawerClose')
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.main}>
//         {/* <Header /> */}

//         <List>
//           <ListItem style={styles.pLeft} selected>
//             <Left>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate("Main")}
//               >
//                 <Text>Main</Text>
//               </TouchableOpacity>
//             </Left>
//             <Right>
//               <Icon name="arrow-forward" />
//             </Right>
//           </ListItem>
//           <ListItem style={styles.pLeft}>
//             <Left>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate("Events")}
//               >
//                 <Text>Events</Text>
//               </TouchableOpacity>
//             </Left>
//             <Right>
//               <Icon name="arrow-forward" />
//             </Right>
//           </ListItem>
//         </List>

//         <List>
        
//           <ListItem style={styles.pLeft}>
//             <Left>
//               <TouchableOpacity
//                 onPress={() => this.props.navigation.navigate("Settings")}
//               >
//                 <Text>Settings</Text>
//               </TouchableOpacity>
//             </Left>
//             <Right>
//               <Badge primary>
//                 <Text>Pro</Text>
//               </Badge>
//             </Right>
//           </ListItem>
//         </List>
//       </SafeAreaView>
      
//     );
//   }
// }

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     marginLeft: 0,
//     //paddingRight: 10,
//     paddingTop: 24,
//     justifyContent: 'space-between'
//   },
//   pLeft: {
//     marginLeft: 0,
//     paddingLeft: 10
//   }
// });

// export default Menu;
