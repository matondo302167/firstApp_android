import React from 'react';
import {View, SafeAreaView, Image,ScrollView, RefreshControl,TouchableOpacity,StyleSheet} from 'react-native';
import {Avatar,Title,Caption,Text,}from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import firebase from '../Firebase/firebaseConfig';
import { useState } from 'react';
//import Share from 'react-native-share';

const profile= ({navigation}) => {
  var prenom ;
  var nom ;
  var e_mail;
  var telephone;
  var image_url;
  var payer;
  var pack_choose_ultime_time;
  const [data,setData] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  /** READING DATA */


  
  var reference = firebase.database().ref("/Studente/"+firebase.auth().currentUser.uid);
  
  // payer
  reference.child('payer').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) payer = snapshot.val();
    console.log('Single Value:',payer)
  })
  //imageURL
  reference.child('ImageUrl').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) image_url = snapshot.val();
    console.log('Single Value:',image_url)
  })
  //PRENOM
  reference.child('Prenom').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) prenom = snapshot.val();
    console.log('Single Value:',prenom)
  })

  //NOM
  reference.child('Nom').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) nom = snapshot.val();
    console.log('Single Value:',nom)
  })

  //E_MAIL
  reference.child('E_mail').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) e_mail = snapshot.val();
    console.log('Single Value:',e_mail)
  })

  //TELEPHONE
  reference.child('Telephone').on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) telephone = snapshot.val();
    console.log('Single Value:',telephone)
  })
  //TELEPHONE
  reference.child("name_pack").child("pack_choose_ultime_time").on('value',function user_prenom(snapshot){
    const exists = (snapshot.val() !== null);
    if(exists) pack_choose_ultime_time = snapshot.val();
    console.log('Single Value:',pack_choose_ultime_time)
  })

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
    <TouchableOpacity onPress={() => {navigation.navigate('profilScreens',{screen:'photo'})}}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Avatar.Image 
              source={image_url === "" ? {uri:'https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/images.png?alt=media&token=e50e9be6-b8b1-43d6-8783-e9e790bbf0a2'} : {uri: image_url}}
              size={80}
            />
            <View style={{marginLeft: 20}}>
              <Title style={[styles.title, {
                marginTop:15,
                marginBottom: 5,
                color:'#fff'
              }]}>{prenom}</Title>
              <Caption style={styles.caption}>@{nom}</Caption>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.userInfoSection}>
        { payer == firebase.auth().currentUser.uid?
          <View style={styles.row}>
          <MaterialCommunityIcons name="check-circle" color="#008000" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>pack payé</Text>
          </View>
          :
          <View style={styles.row}>
          <MaterialCommunityIcons name="close-circle" size={20} color="#f00"/>
          <Text style={{color:"#777777", marginLeft: 20}}>vous n'avez pas encore payé le pack</Text>
          </View>
        }
        <View style={styles.row}>
          <MaterialCommunityIcons name="fax" color="#777777" size={20}/>
          {pack_choose_ultime_time == "" ? 
          <Text style={{color:"#777777", marginLeft: 20}}> aucun pack choisi</Text> : 
            <Text style={{color:"#777777", marginLeft: 20}}>{pack_choose_ultime_time}
          </Text>
          }
        </View>

        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20}/>
          {telephone == "" ? <Text style={{color:"#777777", marginLeft: 20}}>aucun numero ajouté</Text> : <Text style={{color:"#777777", marginLeft: 20}}>{telephone}</Text>}
        </View>
        <View style={styles.row}>
            <MaterialCommunityIcons name="email" color="#777777" size={20}/>
            <Text style={{color:"#777777", marginLeft: 20}}>{e_mail}</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={()=> navigation.navigate('profilScreens',{screen:'inscription'})}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="grease-pencil" size={24} color="#ec454a" />
            <Text style={styles.menuItemText}>Inscription</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('profilScreens',{screen:'payment'})}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="credit-card-minus" color="#ec454a" size={25}/>
            <Text style={styles.menuItemText}>Payez votre service</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('profilScreens',{screen:'telephone'})}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="phone" color="#ec454a" size={25}/>
            <Text style={styles.menuItemText}>Ajoutez un numéro de téléphone</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('ServiceScreens',{screen:'nosServices'})}}>
          <View style={styles.menuItem}>
          <Ionicons name="ios-wallet" size={25} color="#ec454a" />
            <Text style={styles.menuItemText}>Nos services </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Home',{screen:'Apropos'})}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color="#ec454a" size={25}/>
            <Text style={styles.menuItemText}>A propos de nous</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#232654'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#fff',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomColor:'#000',
  },
  menuItemText: {
    color: '#ec454a',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});