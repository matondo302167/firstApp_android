import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import firebase from '../Firebase/firebaseConfig';
import { Linking } from 'react-native';

const privacy_link = "https://www.privacypolicies.com/live/84add762-1e82-4bf2-917d-62b1524e45a9";
const registre = ({navigation}) => {
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPasswrod] = useState('');
    const [checked, setChecked] = React.useState('first');
    const onchangeName = (txtName) => {
        setName(txtName)
    } 
    const onchangeSurname = (txtSurname) => {
        setSurname(txtSurname)
    } 
    const onchangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    } 
    const onchangePassword = (txtPassword) => {
        setPasswrod(txtPassword)
    }
    const [loading,setLoading] = useState({
        loadingLogin:false
    });

    const createAccount = () => {
            setLoading({
                loadingLogin:true
            })
            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
           var user = firebase.auth().currentUser;
           user.sendEmailVerification().then(function() {
             // Email sent.
             Alert.alert('Envoyé','mail envoyé avec succès')
           }).catch(function(error) {
             // An error happened.
             Alert.alert('Erreur','Action non executée')
           });
           
            firebase.firestore().collection('Studente').add({
                Prenom: name,
                Nom: surname,
                E_mail: email,
            })
            firebase.database().ref('/Studente/'+user.uid).set({
                Prenom: name,
                Nom:surname,
                E_mail:email,
                Telephone: "",
                ImageUrl: "",
                payer: "",
                
            })
            navigation.goBack();
            setLoading({
                loadingLogin:false
            })
        }).catch(error=>{
            if (error.code === 'auth/invalid-disabled-fiel') {
                Alert.alert('ERREUR','assurez-vous que vous avez tout rempli')
            }
            else if (error.code === 'auth/invalid-email') {
                Alert.alert('ERREUR','adress e-mail non existant')
              }
            else if (error.code === 'auth/email-already-in-use') {
                Alert.alert('ERREUR','adress e-mail déjà utilisé')
            }
            else if (error.code === 'auth/invalid-password') {
                Alert.alert('ERREUR','password faible')
            }
            else{
                Alert.alert('ERREUR','données inserés sont incorects')
            }
            setLoading({
                loadingLogin:false
            })
        })
        setEmail('');
        setName('');
        setSurname('');
        setPasswrod('');
    } 

    return (
      <View style={styles.container}>
          <StatusBar barStyle = 'default' />
        <View style={styles.header}>
            <Text style={styles.text_header}>Enregistrez-vous</Text>
        </View>
        
        <Animatable.View animation="fadeInUpBig"style={styles.footer}>
            <ScrollView>
                <Text style={styles.text_footer}>Prénom</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="nome"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={name}
                        onChangeText={txtName => onchangeName(txtName)}
                    /> 
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>Nom</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="cognome"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={surname}
                        onChangeText={txtSurname => onchangeSurname(txtSurname)}
                    /> 
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>E-mail</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="indirizzo elettronico"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={txtEmail => onchangeEmail(txtEmail)}
                    />
                </View>

                <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={txtPassword => onchangePassword(txtPassword)}
                    />
                </View>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        en vous inscrivant, vous acceptez nos
                    </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>conditions d'utilisations</Text>
                    <Text style={styles.color_textPrivate}>{" "}et</Text>
                    <Text 
                        style={[styles.color_textPrivate, {fontWeight: 'bold'}]} 
                        onPress={()=>{Linking.openURL(privacy_link)}}
                        >
                        {" "}notre politique de
                    </Text>
                    <Text 
                        style={[styles.color_textPrivate, 
                        {fontWeight: 'bold'}]}
                        onPress={()=>{Linking.openURL(privacy_link)}}
                        >
                            confidentialité.
                    </Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn,{backgroundColor:'#232654'}]}
                        onPress={createAccount}
                    >
                        {loading.loadingLogin? <ActivityIndicator size="large" color="white"/> :<Text style={[styles.textSign, {color:'#fff'}]}>Créez un compte</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};
export default registre;
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
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom:30,
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
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
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
    /*loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }*/
  });