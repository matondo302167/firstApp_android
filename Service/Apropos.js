import React from 'react'

// Import react-native components
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  Linking,
} from 'react-native'

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import { FontAwesome5,MaterialCommunityIcons,Entypo} from '@expo/vector-icons';

// Import react-native-reanimated
// from "https://github.com/software-mansion/react-native-reanimated"
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated

// social network
// Declare component 
class FBHeader extends React.Component {

  constructor(props){
    super(props)

    this._scroll_y = new Value(0)
  }

  render(){

    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 50)

    const _header_height = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [50, 0],
      extrapolate: 'clamp'
    })

    const _header_translate_y = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })

    const _header_opacity = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return(
      
      <SafeAreaView style={styles.safe_area_view}> 
        <Animated.View
        
          style={[
            styles.header,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity
            },{marginTop:20}
          ]}
        >
        <FontAwesome5 
          name="bars" 
          size={30} 
          color="#fff" 
          onPress = {() => this.props.navigation.toggleDrawer()}
        />
        <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',right:30}}>A propos de osa consulting</Text>

        </Animated.View>
        <Animated.ScrollView
          style={[
            styles.scroll_view,
            {

            }
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: this._scroll_y }}
            }
          ])}
        >
          <Text 
            style={{fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:20,color:'#fff'}}>
            OSA Consulting
          </Text>

          <Text style={{margin:10,fontSize:16,textAlign:'center',color:'#fff'}}>
            est une structure spécialisée dans l'orientation, le soutien et l'assistance 
            aux élèves et étudiants qui désirent suivre une formation universitaire en Italie.{'\n'}
            Étudier à l'étranger peut s'avérer très fastidieux si l'on ignore les bonnes démarches à suivre.{'\n'} 
            OSA Consulting se définit ainsi comme un repère pour l'étudiant 
            qui l'encadre dans le choix de sa faculté, la procédure d'inscription, 
            la recherche de logement, l'obtention du titre de séjour et bien d'autres.{'\n'}
            Nous sommes basés en Italie et proposons nos services principalement dans les villes de Parme, 
            Sienne, Florence et Rome.
          </Text>

          <View style={[styles.fake_post, {backgroundColor: '#a1da68',marginBottom:10}]} />

          <Text 
            style={{fontSize:20,fontWeight:'bold',alignItems:'center',left:20,marginBottom:20,color:'#fff'}}>
            Suivez-nous sur les résaux sociaux
          </Text>

          <View style={styles.menuItem}>
            <Entypo name="facebook" color="#00f" size={20}/>
            <Text style={styles.menuItemText}
              onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100063756371568")}
            >
              facebook.com/
            </Text>
          </View>
          <View style={styles.menuItem}>
            <Entypo name="instagram" color="#987190" size={20}/>
            <Text style={styles.menuItemText}
              onPress={() => Linking.openURL("https://www.instagram.com/osaconsultinggabonitalie/")}
            >
              instagram.com/osaconsultinggabonitalie/
            </Text>
          </View>
          <View style={styles.menuItem}>
            <FontAwesome5 name = "linkedin" size = {24} color = "#23a4df" />
            <Text style={styles.menuItemText}
              onPress={() => Linking.openURL("https://www.linkedin.com/in/osa-consulting-396378207")}
            >
              linkedin.com/in/osa-consulting-396378207
            </Text>
          </View>

          <View style={styles.menuItem}>
            <FontAwesome5 name = "whatsapp" size = {24} color = "#0f0" />
            <Text style={styles.menuItemText}
              onPress={() => Linking.openURL("https://chat.whatsapp.com/B4g9BTKEotu1pxG11APsmh")}
            >
              https://chat.whatsapp.com/
            </Text>
          </View>
          
          <View style={[styles.fake_post, {backgroundColor: '#23a4df',marginBottom:10}]} />
          
          <Text 
            style={{fontSize:20,fontWeight:'bold',alignItems:'center',left:20,marginBottom:20,color:'#fff'}}>
            Contactez-nous
          </Text>

          <View style={styles.menuItem}>
            <Entypo name = "mail" size = {24} color = "#23a4df" />
            <Text style={styles.menuItemText}
              onPress={() => Linking.openURL("osaconsulting.contact@gmail.com")}
            >
              osaconsulting.contact@gmail.com
            </Text>
          </View>
          
          <View style={[styles.fake_post, {backgroundColor: '#f7c378',marginBottom:10}]} />

          <Text 
            style={{fontSize:20,fontWeight:'bold',alignItems:'center',left:20,marginBottom:10,color:'#fff'}}>
            Développeur
          </Text>

          <View style={styles.menuItem}>
            <Entypo name="user" color="#fff" size={20}/>
            <Text style={styles.menuItemText}>Benison matondo simao{'\n\n'}</Text>
          </View>
  
        </Animated.ScrollView>
      </SafeAreaView>
    )
  }
}

export default FBHeader

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
    backgroundColor:'#232654'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll_view: {
    flex: 1,
    marginTop:20
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderBottomColor:'#000',
  },
  menuItemText: {
    color: '#fff',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  fake_post: {
    height: 50,
    width:"100%",
    right:16,
    marginHorizontal: 16,
    marginTop: 16,
  }
})