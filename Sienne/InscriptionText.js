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

const InscriptionText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Insertion de documentation</Text>
      {'\n\n'}
      Nous avons mis à votre disposition une page pour insérer votre dossier lié à l'inscription.
      Veuillez retourner à la Home page pour insérer vos documents.{'\n'}
      Merci!
      {'\n\n'}

      <Text style={styles.title}>Date de début et de fin d'inscriptions</Text>
      {'\n\n'}
      En général, les inscriptions se font en début juillet. {'\n'}
      Toutefois, cela dépend très souvent des Universités et facultés. {'\n'}
      Pour des raisons efficientes, nous souhaitons déjà avoir certains 
      documents importants que nous vous indiquerons lors de nos échanges 
      via mail.
      {'\n\n'}
      <Text 
        style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
        >
          osaconsulting.contact@gmail.com
      </Text>
      {'\n\n'}
      Après avoir choisi votre PACK parmi nos offres, nous vous prions de bien vouloir 
      insérer votre dossier complet entre cette date: 
      <Text 
        style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
        >
            {'\b'} 20 / 04 
      </Text>
      {'\n\n'}
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

export default InscriptionText;