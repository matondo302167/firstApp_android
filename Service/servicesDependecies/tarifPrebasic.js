import React from 'react';
import {Text,StyleSheet} from 'react-native';

const PrebasicText = () => {
  return (
    <Text style={styles.text}>
        1. Entretien pour un accompagnement au choix de la faculté
        {'\n\n'}
        2.	Accompagnement aux pré-inscriptions et problématiques 
            liées à l'Université (licences et Master);
        {'\n\n'}
        3.	Accompagnement à la demande de bourse 
            {'\n'}
          <Text style={[styles.text,{color:'#f00'}]}>
            NB: Nous tenons à vous informer que le dépôt de tout dossier,  
            même complet, ne garanti en rien l'obtention de la bourse d'études. 
            L'éventuelle acceptation ou refus est du ressort de l'Agence des bourses et 
            stages emcar elle est l'entité compétente en la matière.
          </Text>
        {'\n\n'}
        4.	Assistance à la regularisation de la documentation en Italie à ( l'arrivée)
        {'\n\n'}
        • Coût total du service <Text style={[styles.text,{color:'#f00'}]}>
          {'\n'}
          (à payer avant le départ du Gabon et non remboursable)</Text>{'\n'}
          150.OOO Fcfa (€228,68)
          {'\n\n'}
    </Text>
  );
};

const styles =  StyleSheet.create({
  text: {
    margin: 20,
    fontSize: 16,
    color:'#fff',
    fontWeight:'bold',
  },

});

export default PrebasicText;