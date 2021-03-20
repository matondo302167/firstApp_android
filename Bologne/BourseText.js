import React from 'react';
import {Text} from 'react-native';

const BourseText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Documentation</Text>
      {'\n\n'}
      Il est indispensable, pour faire une demande de bourse à Parme, 
      d'avoir ou de présenter dans la liste des documents à fournir 
      l'un des documents les plus importants appelé{'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}> Reddito (Revenu Annuel). </Text>
      {'\n'}
      C'est ce document qui prouve les biens matériels et 
      pécuniers d'un et/ou des deux parents de l'étudiant.{'\n'}
      En général, le
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}> Reddito (Revenu Annuel) </Text>
      à présenter est celui de l'année précédente.
      {'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
        NB: pour inserer votre documentation de la bourse nous
        vous prions de retourner à la Home page et cliquez
        sur BOURSE
      </Text>{'\n'}

      {'\n\n'}
      <Text style={styles.title}>Date limite</Text>
      {'\n\n'}
      Il y a une date limite pour présenter votre demande de bourse et cela dépend 
      de la ville où vous irez car chaque région à sa propre agence.{'\n'}
      En général, la date limite de dépôt de dossiers se fait en juillet.{'\n'}
      Mais pour des raisons pratiques, nous vous prions de nous les envoyer en{'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}> JUIN.</Text>
      {'\n\n'}

      <Text style={styles.title}>La valeur totale de la bourse</Text>
      {'\n\n'}
      la somme totale de la bourse est:{'\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>€ 5.397,14</Text>{'\n'}
      Après, ça depend la maniere à laquelle ils vont vous la payer;
      les uns payent par tranche, les autres payent à la fin 
      de l'année accademique.
      {'\n\n'}

      <Text style={styles.title}>Les critères d'obtention</Text>
      {'\n\n'}
      A Bologne, vous n'aurez pas trop de problèmes pour faire 
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