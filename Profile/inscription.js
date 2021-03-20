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

// for document dependecies
import * as DocumentPicker from 'expo-document-picker'
// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import { FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons';

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

    const [desc,setDesc] = useState('')
    const [uploadProgress,setUploadProgress] = useState(0)
    const [loading,setLoading] = useState({
      loadingLogin:false
    })
    const _pickDocument = async () => {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log(result);
      setDesc(result)
      
      }
      function uploadFile() {
        uploadImageAsync(desc.uri)
        setDesc('');
        setUploadProgress(0)
      }
      const handleProgress = event => {
        setUploadProgress(Math.round((event.loaded / event.total) * 100))
      }
      async function uploadImageAsync(uri) {
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
          try {
            setLoading({loadingLogin:true})
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
              resolve(xhr.response);
            };
            xhr.onerror = function(e) {
              console.log(e);
              reject(new TypeError('Network request failed'));
            };
            xhr.upload.addEventListener('progress',handleProgress);
            xhr.addEventListener('load',()=>{
              setUploadProgress(100)
            })
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
          } catch (error) {
            Alert.alert('Erreur','operation non conclue')
            setLoading({loadingLogin:false})
          }
        });
        const ref = firebase
          .storage()
          .ref()
          .child('/inscription/'+'/'+firebase.auth().currentUser.email+'/'+desc.name)
        const snapshot = await ref.put(blob);
      
        // We're done with the blob, close and release it
        blob.close();
  
        setLoading({loadingLogin:false})
  
        Alert.alert('chargement','operation conclue avec succès')
  
        setUploadProgress(0);
        
        return await snapshot.ref.getDownloadURL();
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
        <Text style={{color:'#fff',fontSize:20}}>Inscritpion</Text>
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
            <Text style={[styles.textSign,{color:'#000'}]}>
            Ici, vous devez insérer tous les fichiers qui sont nécessaires pour la pré-inscription.{'\n'} 
            Vous devez ainsi choisir un document à la fois.{'\n'}
            Nous vous conseillons d'insérer vos fichiers en format pdf.
            </Text>
            <TouchableOpacity onPress = {_pickDocument}>
              <Text style={{alignItems:'center'}}>cliquez pour Choisir un fichier</Text>
              <MaterialCommunityIcons 
                style={[styles.fake_post,{left:20}]}
                name="file-upload-outline" 
                size={250} 
                color="#232654"
              />
            </TouchableOpacity>

            <Text style={styles.text_footer}>
              Nom du fichier: {desc.name? desc.name : ''}
              {'\n\n'}
              File Size: {desc.size? desc.size/1000+'KB' : ''} 
            </Text>

            <View style={styles.button}>
            <TouchableOpacity
              style={[styles.signIn,{marginTop:30,backgroundColor:'#232654'}]}
                  onPress = {uploadFile}
            >
              {loading.loadingLogin? <ActivityIndicator size="large" color="white"/> : <Text style={[styles.textSign, {color:'#fff'}]}>Inserez le document</Text>}
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
