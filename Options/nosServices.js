import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, FlatList, Image, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';
const ic_delete = require('../assets/delete.png');
const ic_back = require('../assets/return.png');
import { FontAwesome5 , Ionicons} from '@expo/vector-icons';
import firebase from '../Firebase/firebaseConfig'
export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 0, name: 'Pack Basic', img:'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/WhatsApp%20Image%202021-01-25%20at%2022.49.18.jpeg?alt=media&token=12336df3-7756-4dd3-8747-bc276b1c250f'},
        { id: 1, name: 'Pack Smart', img: 'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/WhatsApp%20Image%202021-01-25%20at%2022.49.18.jpeg?alt=media&token=12336df3-7756-4dd3-8747-bc276b1c250f'},
        { id: 2, name: 'Pack Prémium', img: 'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/WhatsApp%20Image%202021-01-25%20at%2022.49.18.jpeg?alt=media&token=12336df3-7756-4dd3-8747-bc276b1c250f' },
      ],
      close: false
    };
  }
  item = null;

  _renderButtonDelete = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={() => {
        this.setState({
          close: !this.state.close
        })
      }}>
        <Ionicons name="close-sharp" size={24} color="black" />
      </TouchableOpacity>
    )
  }

  _renderButtonClose = () => {
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={() => {
        this.setState({
          close: !this.state.close
        })
        firebase.database().ref('/Studente/'+firebase.auth().currentUser.uid).child('name_pack').set({
          pack_choose_ultime_time: this.item.name
      })
        Alert.alert("choix modifié","vous avez choisi "+ this.item.name)
      }}>
       <FontAwesome5 name="check" size={24} color="white" />
      </TouchableOpacity>
    )
  }

  swipeoutBtns = [
    {
      // text: 'Delete',
      backgroundColor: 'white',
      component: this._renderButtonDelete(),
      // onPress: () => {
      //   Alert.alert('Delete')
      // }
    },
    {
      // text: 'Close',
      component: this._renderButtonClose(),
      backgroundColor: 'white',
      // onPress: () => {
      //   Alert.alert('Close')
      // }
    }
  ];

  renderItem = ({ item, index }) => {
    return (
      <Swipeout
        close={this.state.close}
        onOpen={() => {
          this.item = item
        }}
        style={{ padding: 4, backgroundColor: 'white' }}
        autoClose
        right={this.swipeoutBtns}>
        <View style={styles.item}>
          <Image source={{ uri: item.img }} resizeMode='stretch' style={styles.img} />
          <View style={{ flexDirection: 'column', marginLeft: 10, flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text numberOfLines={3}>
              Voulez-vous plus d'informations sur le pack?
              Retournez à la home page puis, cliquez sur la page "Services".
            </Text>
          </View>
        </View>
      </Swipeout>

    )
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={item => `key-${item.id}`}
          renderItem={this.renderItem}
          extraData={data}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1, padding: 8
  },
  item: {
    flexDirection: 'row',
    marginTop: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: 'white',
    elevation: 3,
  },
  img: {
    width: 80,
    height: 80
  },
  button: {
    flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', marginTop: 12, padding: 12
  }
})