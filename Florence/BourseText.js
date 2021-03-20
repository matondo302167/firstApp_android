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
import {Text} from 'react-native';

const BourseText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Documentation</Text>
      {'\n\n'}
      Il est indeispensable pour faire la demande de la bourse ,
      vous devez avoir un document appelé <Text style={{fontStyle:'italic',fontWeight:'bold'}}>Reddito </Text>
      qui est simplement un dossier ou une documentation où sont listés 
      le rendement annuel de vos revenus ou de revenus de votre parents
      {'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
        NB: pour inserer votre documentation de la bourse nous
        vous prions de retourner à la Home page et cliquez
        sur BOURSE
      </Text>{'\n'}

      {'\n\n'}
      <Text style={styles.title}>Date limite</Text>
      {'\n\n'}
      il y'a une date limite pour présenter votre demande de bourse 
      cela depend de ville car chaque région a sa propre agence 
      qui gère cela.
      la date limite pour la remise de la documentation est:{'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>le 22 / 07 </Text>{'\n'}
      nous vous prions de nous l'envoyer vers début 
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}> JUIN</Text>
      {'\n\n'}

      <Text style={styles.title}>La valeur totale de la bourse</Text>
      {'\n\n'}
      la somme totale de la bourse est:{'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>€ 1480</Text>{'\n'}
      Après ça depend la maniere à laquelle ils vont vous la  payer
      les uns payent par tranche, les autres payent à la fin 
      de l'année accademique
      {'\n\n'}

      <Text style={styles.title}>Les critères d'obtention</Text>
      {'\n\n'}
      A Florence, vous n'aurez pas trop de problèmes pour faire 
      la demande car vous pouvez envoyer votre documentation depuis le pays.{'\n'}
      {'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
      NB: Nous tenons à vous informer que le dépôt de tout dossier, 
      même complet, ne garantit pas en rien l'obtention de la bourse d'études.{'\n'}
      L'acceptation ou l'obtention de la bourse dépend de l'Agence de bourses et stages car 
      c'est l'entité compétente.{'\n'}
      Merci!
      </Text>
      {'\n'}
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

export default BourseText;