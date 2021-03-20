import React,{useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import firebase from '../Firebase/firebaseConfig'
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const HomeScreen = ({navigation}) => {
  const theme = useTheme();
  if (firebase.auth().currentUser !==null) {
        
  }else{
    navigation.nazzvigate('loginScreen')
  }

  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <FontAwesome5 
          name="bars" size={30} 
          color="#fff" 
          onPress = {() => navigation.toggleDrawer()}
        />
        <Text style={{color:'#fff',fontSize:18}}>OSA Consulting</Text>
        <View style={styles.fake_icon_box}>
            <FontAwesome5 
              onPress = {()=>navigation.navigate('ServiceScreens',{screen:'profile'})}
              name="user-check" size={20} color='#232654' 
            />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#fff">
          <View style={styles.slide}>
            <Image
              source={require('../assets/rome.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/florence.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/sienne.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity 
          style={styles.categoryBtn}
          onPress = {()=> navigation.navigate('ServiceScreens',{screen:'nosServices'})}
        >
          <View style={[styles.categoryIcon,{backgroundColor:'#c8cbe8'}]}>
            <Ionicons name="ios-wallet" size={35} color="#232654" />
          </View>
          <Text style={styles.categoryBtnTxt}>Choisir son tarif</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryBtn} 
          onPress = {()=> navigation.navigate('ServiceScreens',{screen:'bourse'})}
        >
          <View style={[styles.categoryIcon,{backgroundColor:'#fbd3d5'}]}>
            <FontAwesome5 name="suitcase" size={35} color="#ec454a" />
          </View>
          <Text style={styles.categoryBtnTxt}>Bourse d'étude</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.categoryBtn} 
          onPress = {()=> navigation.navigate('Maisons',{screen:'Homepage'})}>
          <View style={[styles.categoryIcon,{backgroundColor:'#ceebf8'}]}>
            <MaterialIcons name="home" size={35} color="#23a4df" />
          </View>
          <Text style={styles.categoryBtnTxt}>Logement</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Toutes les informations sur les villes où nous travaillons
        </Text>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('infoCity',{screen:'rome'})}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/rome.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Etudier à Rome</Text>
            <Text style={styles.cardDetails}>Tout savoir sur la ville de Rome</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('infoCity',{screen:'florence'})}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/florence.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Etudier à Florence</Text>
            <Text style={styles.cardDetails}>Tout savoir sur la ville de Florence</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('infoCity',{screen:'sienne'})}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/sienne.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Etudier à Sienne</Text>
            <Text style={styles.cardDetails}>Tout savoir sur la ville de Sienne</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('infoCity',{screen:'bologne'})}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/bologne.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Etudier à Bologne</Text>
            <Text style={styles.cardDetails}>Tout savoir sur la ville de Bologne</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('infoCity',{screen:'parme'})}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('../assets/parme.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Etudier à Parme</Text>
            <Text style={styles.cardDetails}>Tout savoir sur la ville de Parme</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor:'#232654',
  },
  fake_icon_box: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    //backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#232654',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});