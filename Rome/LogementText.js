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
const immmobiliareit = "https://www.immobiliare.it/stanze/Roma/posti_letto-Roma.html?criterio=rilevanza&gclid=CjwKCAiAr6-ABhAfEiwADO4sfR5B3me-NUvGBVHuCDNF6STIu9dX2RMV2n2EyVHM7pGxfNh64d83EhoC7IYQAvD_BwE";
const uniaffiti = "https://www.uniaffitti.it/roma";
const bakeca = "https://roma.bakeca.it/annunci/offro-camera/";
const LogementText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>les sites où vous pouvez trouver les maisons</Text>
      {'\n\n'}
      Si vous voulez savoir combien coûte un logement pour étudiant,
      voici quelques sites web qui pourraient vous être utiles:
      {'\n\n'}
      1. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(immmobiliareit)}}
          >
            Immobiliare.it
          </Text>
      {'\n\n'}
      2. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(bakeca)}}
          >
            Bakaca.it
          </Text>
      {'\n\n'}
      3. <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(uniaffiti)}}
          >
            Uniaffitti.it
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