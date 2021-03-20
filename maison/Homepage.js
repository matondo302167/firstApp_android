import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  Animated,
  Easing,
} from "react-native";
import { styles } from "./luxur";
import { FlatList } from "react-native-gesture-handler";
import Card from "./card";

const { width, height } = Dimensions.get("screen");

export default class Luxury extends Component {
  state = {
    alignment: new Animated.Value(height),
    cardAlignment: new Animated.Value(400),
    cards: [
      {
        id: 0,
        ctta: "PARMA",
        comune: "Collecchio (Gaiano)",
        pour: "Arnaud",
        description: "appartements avec trois chambres prix abordable",
        image: 
          "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/Screenshot_20210221_214353.jpg?alt=media&token=2e7fb887-7589-4e7f-b328-7dcc782765ea",
      },
    ],
  };

  AnimateUI = () => {
    Animated.sequence([
      Animated.timing(this.state.alignment, {
        toValue: height / 3,
        duration: 800,
        easing: Easing.back(),
      }),
      Animated.timing(this.state.cardAlignment, {
        toValue: 0,
        duration: 700,
        easing: Easing.ease,
      }),
    ]).start();
  };

  componentDidMount() {
    this.AnimateUI();
  }

  handlePress = (id) => {
    // Find The Item By ID
    const card = this.state.cards.find((item) => item.id === id);

    // Navigate To Details Screen With The Card Data
    qualeCasa = id ;
    console.log(id)
    this.props.navigation.navigate("Maisons", {screen: qualeCasa});
  };

  render() {
    const AnimatedBackground = {
      height: this.state.alignment,
    };

    const AnimatedCards = {
      transform: [
        {
          translateX: this.state.cardAlignment,
        },
      ],
    };

    return (
      <View>
        <Animated.View style={[{ width: width }, AnimatedBackground]}>
          <ImageBackground
            source={{uri:"https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/appartement.png?alt=media&token=bb1ce9a0-5b20-4821-bcc6-72ee62351c6f"}}
            style={styles.backgroundImage}
          >
            <View style={styles.textView}>
              <Text style={[styles.title,{color:'#ec454a'}]}>LOGEMENT</Text>
              <Text style={[styles.description,{color:'#ec454a'}]}>Stunning Places</Text>
            </View>
          </ImageBackground>
        </Animated.View>
        <Animated.View style={[styles.cardView, AnimatedCards]}>
          <FlatList
            data={this.state.cards}
            renderItem={({ item }) => (
              <Card
                title={item.ctta}
                image={{uri:item.image}}
                location={item.comune}
                description={item.description}
                onPress={() => this.handlePress(item.pour)}
              />
            )}
          />
        </Animated.View>
      </View>
    );
  }
}