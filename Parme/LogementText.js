/*
Per Roma 
Da aprile e la per il scadenza 25o26 luglio (o 22...in tanto è fine luglio)
 Il reddito deve essere mandato online (uno scan) prima della scadenza sopraindicata 

Circa 5200 all'anno 

Ma secondo non serve perché alla fine per convalidare la domanda, 
serve inserire un Pin che deve essere preso qui in ufficio dall'interessato che chiede la borsa. 
Ogni tanto facciamo i furbi qua prendendo il posto di qualsiasi persona ma non funziona sempre. 
Quindi in grossomodo non saremo mai in grado di garantire per un nuovo studente di Roma l'ottenimento 
della borsa
 */

import React from 'react';
import {Text,Linking} from 'react-native';
const immmobiliareit = "https://www.immobiliare.it/stanze/Parma/camere_singole-Parma.html";
const uniaffiti = "https://www.uniaffitti.it/parma";
const bakeca = "https://parma.bakeca.it/annunci/offro-camera/?gclid=CjwKCAiAu8SABhAxEiwAsodSZNj8KwgR3auSj2amWYNM9e2c9lKIRIMZqzCnE1zHX301MQpHJ0_9DRoCcgQQAvD_BwE";

const LogementText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Les sites où vous pouvez trouver des maisons</Text>
      {'\n\n'}
      Si vous voulez savoir combien coûte un logement pour étudiant,
      voici quelques sites web qui pourraient vous être utiles:
      {'\n\n'}
      1. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(immmobiliareit)}}
          >
            Immobiliare.it/parma
          </Text>
      {'\n\n'}
      2. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(bakeca)}}
          >
            Bakaca.it/parma
          </Text>
      {'\n\n'}
      3. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(uniaffiti)}}
          >
            Uniaffitti.it/parma
          </Text>
    </Text>
  );
};

const styles = {
  text: {
    margin: 24,
    fontSize: 16,
    textAlign:'center',
  },
  title:{
    margin: 24,
    fontSize: 19,
    fontWeight:'bold',
  }
};

export default LogementText;