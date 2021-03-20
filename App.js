//dependencies
import 'react-native-gesture-handler';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  firebase from './Firebase/firebaseConfig';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

//Screens directory
import loginScreen from './Screens/loginScreen';
import registreScreen from './Screens/registreScreen';
import homeScreen from './Screens/homeScreen';
import forgotPassword from './Screens/forgotPassword'

//City directory
import rome from './Rome/rome';
import florence from './Florence/florence';
import sienne from './Sienne/sienne';
import bologne from './Bologne/bologne';
import parme from './Parme/parme';

//Services directory
import serivce from './Service/service';
import Apropos from './Service/Apropos';

//Options directory
import bourse from './Options/bourse';
import casa from './Options/casa';
import nosServices from './Options/nosServices';
import profile from './Options/profile'

//profil
import inscription from './Profile/inscription';
import payment from './Profile/payment';
import telephone from './Profile/telephone';
import photo from './Profile/photo'

//Maison
import Homepage from './maison/Homepage'
import Arnaud from './maison/Arnaud'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const City = createStackNavigator();
const options = createDrawerNavigator();
const StackProfil = createStackNavigator();
const StackMaison = createStackNavigator();
function Home() {
    return(
        <Drawer.Navigator
            drawerStyle={{
            backgroundColor: '#232654',
            width:200,
            height:400
          }}
          drawerContentOptions={{
              activeTintColor:'#ec454a',
              inactiveTintColor:'#fff'
          }}
        >
            <Drawer.Screen 
                name="Home" 
                component={homeScreen}
                options={{headerShown:false}} 
            />
            <Drawer.Screen 
                name="Service" 
                component={serivce}
                options={{headerShown:false}} 
            />
            <Drawer.Screen
                name="Inscrption" 
                component={inscription} 
                options={{headerShown:false,}} 
            />
            <Drawer.Screen 
                name="A propos" 
                component={Apropos}
                options={{headerShown:false}} 
            />
        </Drawer.Navigator>
    )
}

function infoCity() {
    return(
        <City.Navigator>
            <City.Screen 
                name="rome" 
                component={rome}
                options={{headerShown:false}} 
            />
            <City.Screen 
                name="florence" 
                component={florence}
                options={{headerShown:false}} 
            />
            <City.Screen 
                name="sienne" 
                component={sienne}
                options={{headerShown:false}} 
            />
            <City.Screen 
                name="bologne" 
                component={bologne}
                options={{headerShown:false}} 
            />
            <City.Screen 
                name="parme" 
                component={parme}
                options={{headerShown:false}} 
            />
        </City.Navigator>
    )
}
function ServiceScreens() {
    return(
        <options.Navigator
            drawerStyle={{
                backgroundColor: '#232654',
                width:200,
                height:400
            }}
            drawerContentOptions={{
                activeTintColor:'#ec454a',
                inactiveTintColor:'#fff'
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{headerShown:false}} 
            />
            <Stack.Screen 
                name="profile" 
                component={profile}
                options={{headerShown:false}} 
            />
            <options.Screen 
                name="bourse" 
                component={bourse}
                options={{headerShown:false}} 
            />
            <options.Screen 
                name="casa" 
                component={casa}
                options={{headerShown:false}} 
            />
            <options.Screen 
                name="nosServices" 
                component={nosServices}
                options={{headerShown:false}} 
            />
        </options.Navigator>
    )
}
function profilScreens() {
    return(
        <StackProfil.Navigator>
            <StackProfil.Screen
                name="inscrption" 
                component={inscription} 
                options={{headerShown:false,}} 
            />
            <StackProfil.Screen
                name="payment" 
                component={payment} 
                options={{headerShown:false,}} 
            />
            <StackProfil.Screen
                name="telephone" 
                component={telephone} 
                options={{headerShown:false,}} 
            />
            <StackProfil.Screen
                name="photo" 
                component={photo} 
                options={{headerShown:false,}} 
            />
        </StackProfil.Navigator>
    )
}
function Maisons() {
    return(
        <StackProfil.Navigator>
            <StackProfil.Screen
                name="Homapage" 
                component={Homepage} 
                options={{headerShown:false,}} 
            />
            <StackProfil.Screen
                name="Arnaud" 
                component={Arnaud} 
                options={{headerShown:false,}} 
            />
        </StackProfil.Navigator>
    )
}

    
    class App extends React.Component {
       /* componentDidMount() {
    
            // var messages = []
    
            // return the main promise
            // firebase.database().ref('/users').once('value').then(function (snapshot) {
            //     snapshot.forEach(function (childSnapshot) {
    
            //         // var childKey = childSnapshot.value;
    
            //         console.log(childSnapshot.val().expoToken)
            //         return
    
            //         messages.push({
            //             "to": childSnapshot.val().expoToken,
            //             "sound": "default",
            //             "body": "New Note Added"
            //         });
            //     });
            //     //firebase.database then() respved a single promise that resolves
            //     //once all the messages have been resolved 
            //     return Promise.all(messages)
    
            // }).then(messages => {
            //     console.log(messages)
            // })
            //     .catch(error => {
            //         console.log(error)
            //     })
    
            
            var currentUser
            var that = this
            listener = firebase.auth().onAuthStateChanged(function (user) {
                if (user != null) {
    
                    currentUser = user
    
                    that.registerForPushNotificationsAsync(currentUser)
                }
    
                listener();
    
            });
    
            firebase.database().ref('/contacts').on('child_added', function (data) {
    
                var newData = [...that.state.listViewData]
                newData.push(data)
                that.setState({ listViewData: newData })
    
            })
        }
    
        loadSubscribers = () => {
            var messages = []
    
            //return the main promise
            return firebase.database().ref('/subscribers').once('value').then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
    
                    var childKey = childSnapshot.key;
    
                    messages.push({
                        "to": childKey,
                        "sound": "default",
                        "body": "New Note Added"
                    });
                });
                //firebase.database then() respved a single promise that resolves
                //once all the messages have been resolved 
                return Promise.all(messages)
    
            }).catch(error => {
                console.log(error)
            })
    
        }
    
        registerForPushNotificationsAsync = async (currentUser) => {
            const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
    
            // only ask if permissions have not already been determined, because
            // iOS won't necessarily prompt the user a second time.
            if (existingStatus !== 'granted') {
                // Android remote notification permissions are granted during the app
                // install, so this will only ask on iOS
                const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                finalStatus = status;
            }
    
            // Stop here if the user did not grant permissions
            if (finalStatus !== 'granted') {
                return;
            }
    
            // Get the token that uniquely identifies this device
            let token = await Notifications.getExpoPushTokenAsync();
    
            // POST the token to our backend so we can use it to send pushes from there
            
            var updates = {}
            updates['/expoToken'] = token
            await firebase.database().ref('/Studente/'+'/'+firebase.auth().currentUser.providerId).update(updates)
            //call the push notification 
        }
    
    
        addRow(data) {
    
            var key = firebase.database().ref('/contacts').push().key
            firebase.database().ref('/contacts').child(key).set({ name: data })
        }
    
        async deleteRow(secId, rowId, rowMap, data) {
    
            await firebase.database().ref('contacts/' + data.key).set(null)
    
    
    
            rowMap[`${secId}${rowId}`].props.closeRow();
            var newData = [...this.state.listViewData];
            newData.splice(rowId, 1)
            this.setState({ listViewData: newData });
    
        }
    
        showInformation() {
            
        }
        */
    
        render() {
            return (
                <AppN/>
            );
        }
    }
    

function AppN() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="loginScreen" 
            component={loginScreen}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="registreScreen" 
            component={registreScreen}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="forgotPassword" 
            component={forgotPassword}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="ServiceScreens" 
            component={ServiceScreens}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="infoCity" 
            component={infoCity}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="profilScreens" 
            component={profilScreens}
            options={{headerShown:false}} 
        />
        <Stack.Screen 
            name="Maisons" 
            component={Maisons}
            options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;