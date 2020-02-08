import React from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { withNavigation } from "react-navigation";


import OneEvent from "./oneEvent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      todayDate: moment(new Date()).format("YYYY-MM-DD"), // 2020-01-23
      data: "",
      refreshing: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });

    this.setState({ isReady: true });
    this.getFixtureToday();
  }

  getFixtureToday = () => {
    fetch(
      // "https://api-football-beta.p.rapidapi.com/fixtures?date=" +
      //   this.state.todayDate,
      "https://api-football-beta.p.rapidapi.com/fixtures?live=all" ,
        
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-beta.p.rapidapi.com",
          "x-rapidapi-key": "360bc2e65dmsh50cec7b50ff31b8p1cfa59jsnff457afc9393"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
       // console.log(responseJson);
        this.setState({
          data: responseJson.response,
          refreshing: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onRefresh() {
    //Clear old data of the list
    this.setState({ data: [] });
    //Call the Service to get the latest data
    this.getFixtureToday();
  }

  // clickOnChat = item => {
  //   navigate("OneEvent", {
  //     teams_home: item.teams.home.name,
  //     teams_away: item.teams.away.name
  //   });
  // };

  render() {
    const { navigate } = this.props.navigation;
    //console.log(navigate)

    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Text>Main</Text>

        {/* <Button onPress={() => this.props.navigation.navigate("Events")}>
            <Text>Primary</Text> 
        </Button> */}

        <FlatList
          refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
          data={this.state.data}
          keyExtractor={item => item.fixture.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigate('OneEvent', {
                  teams_home: 12321,
                  // teams_away: item.teams.away.name,
                   navigation: navigate,
                })
              }
            >
              <View style={styles.row}>
                <View>
                  <Image
                    source={{ uri: item.teams.home.logo }}
                    style={styles.clubLogo}
                  />
                  <Text>{item.teams.home.name}</Text>
                </View>

                <View>
                  <Text>{item.teams.away.name}</Text>
                  <Image
                    source={{ uri: item.teams.away.logo }}
                    style={styles.clubLogo}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

 //export default withNavigation(Main);

export default Main;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: "#ccc",
    borderRadius: 17,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between"
  },

  clubLogo: {
    width: 25,
    height: 25
  }
});
