import React, {useState} from 'react'

// Import react-native components
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import { FontAwesome5, FontAwesome} from '@expo/vector-icons';

//firebase
import firebase from '../Firebase/firebaseConfig'
// Import react-native-reanimated
// from "https://github.com/software-mansion/react-native-reanimated"
import Animated, { Easing } from 'react-native-reanimated'

const { Value, timing } = Animated

// Declare component 
const EditPhone = ({navigation}) => {

  const [_scroll_y] = useState(new Value(0));

    const _diff_clamp_scroll_y = Animated.diffClamp(_scroll_y, 0, 50)

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


    //gesture backend
    const [phone,setPhone] = useState('');
    const onchangePhone = (txtPhone) => {
        setPhone(txtPhone)
    } 
    const [loading,setLoading] = useState({
        loadingLogin:false
    });
    const addNumer = async () =>{
        try {
            setLoading({
                loadingLogin:true
            })
             var userUid = firebase.auth().currentUser.uid;
             await firebase.database().ref('/Studente/' + userUid).update({
               Telephone: phone
             })

            navigation.goBack();

        }catch (e) {
                Alert.alert("Erreur","adresse e-mail non valide ");
            setLoading({
                loadingLogin:false
            }) 
        }
    }

    return(
      <SafeAreaView style={styles.safe_area_view}>
        
        <Animated.View
          style={[
            styles.header_1,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity
            }
          ]}
        >
        <FontAwesome5 
          name="angle-left" 
          size={50} 
          color="#fff" 
          onPress = {() => navigation.goBack()}
        />
        <Text style={{color:'#fff',fontSize:20}}>num??ro de telephone</Text>
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
              nativeEvent: { contentOffset: { y: _scroll_y }}
            }
          ])}
        >
          <View style={styles.footer}>
          <Text style={[styles.text_header,{color:'#000',fontSize:20,marginBottom:50}]}>Veuillez de Suivre nos intructions</Text>
            <Text style={styles.text_footer}>Mettez votre num??ro de telephone</Text> 
            <View style={styles.action}>
              <FontAwesome 
                name="phone"
                color="#05375a"
                size={20}
              />
             <TextInput 
                placeholder="num??ro de telephone"
                style={styles.textInput}
                autoCapitalize="none"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={txtPhone => onchangePhone(txtPhone)}
              />            
            </View>
            <View style={styles.button}>
                  <TouchableOpacity
                  style={[styles.signIn,{marginTop:30,backgroundColor:'#232654'}]}
                  onPress = {addNumer}
                >
                {loading.loadingLogin? <ActivityIndicator size="large" color="white"/> : <Text style={[styles.textSign, {color:'#fff'}]}>Enregistre le num??ro</Text>}
              </TouchableOpacity>
            </View>
          </View>

        </Animated.ScrollView>
      </SafeAreaView>
    )
}

export default EditPhone;

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1
  },
  header_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor:'#232654',
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
    flex: 1
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8
  },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderRadius:20,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: '#05375a'
    },
})