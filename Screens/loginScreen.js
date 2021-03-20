import React, { useEffect, useState} from 'react';
import { View,Text, TouchableOpacity,BackHandler, TextInput,Platform,StyleSheet ,StatusBar,Alert, ActivityIndicator} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../Firebase/firebaseConfig'
import { Header } from 'react-native/Libraries/NewAppScreen';
import { set } from 'react-native-reanimated';

export default function loginScreen({navigation}){

    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');
    const [loading,setLoading] = useState({
        loadingLogin:false
    });
    const onchnageEmail = (txtEmail) => {
        setEmail(txtEmail)
    } 
    const onchnagePassword = (txtPassword) => {
        setPasswrod(txtPassword)
    } 
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Sortir!", "Voulez-vous sortir?", [
            {
              text: "Annulez",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Oui", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);

    const loginHandle = async () => {
    
        setLoading({
            loadingLogin:true
        })
        firebase.auth().signInWithEmailAndPassword(email, password ).then(authUser => {

            if(authUser.user.emailVerified){ //This will return true or false
                console.log('email is verified')
                navigation.navigate('Home',{
                    screen: 'homeScreen'
                });
                setLoading({
                    loadingLogin:false
                })
            }else{
                console.log('email not verified')
                Alert.alert('Erreur','si vous etes le propritaire de E-mail inseré Veuillez de le confirmez par le mail envoyé dans votre compte')
                setLoading({
                    loadingLogin:false
                })
            }
        }).catch(function(error) {
            setLoading({
                loadingLogin:false
            })
            Alert.alert('ERREUR','mot de passe ou e-mail incorrect')
        });
        setEmail("");
        setPasswrod("");
    } 


    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#232654' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Accedez!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={[styles.footer, {backgroundColor: '#fff'}]}>
            <Text style={[styles.text_footer, {color:'#05375a'}]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color='#05375a'
                    size={20}
                />
                <TextInput 
                    placeholder="E-mail"
                    placeholderTextColor="#666666"
                    keyboardType="email-address"
                    style={[styles.textInput, {color: '#05375a'}]}
                    autoCapitalize="none"
                    value={email}
                    onChangeText = {txtEmail => onchnageEmail(txtEmail)}
                />
            </View>

            <Text style={[styles.text_footer, {color: '#05375a',marginTop: 35}]}>Password</Text>

            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color='#05375a'
                    size={20}
                />
                <TextInput 
                    placeholder="Mot de passe"
                    placeholderTextColor="#666666"
                    keyboardType="numbers-and-punctuation"
                    style={[styles.textInput, {color: '#05375a'}]}
                    secureTextEntry={true}
                    value={password}
                    onChangeText = {txtPassword => onchnagePassword(txtPassword)}
                />
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('forgotPassword')}>
                <Text style={{color: '#ec454a', marginTop:15}}>mot de passe oublié?</Text>
            </TouchableOpacity>

            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn,{backgroundColor:'#232654',}]}
                    onPress={() => {loginHandle()}}
                >
                {loading.loadingLogin? <ActivityIndicator size="large" color="white"/> : <Text style={[styles.textSign, {color:'#fff'}]}>Accedez</Text>}
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.signIn, {
                        borderColor: '#05375a',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                    onPress = {() => {navigation.navigate('registreScreen')}}
                >
                    <Text style={[styles.textSign, {color: '#05375a'}]}>Créez un Compte</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#232654'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        marginLeft:10
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
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
        color:'#009387',
    }
  });