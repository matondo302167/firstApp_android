import React from 'react';
import {Text,Linking} from 'react-native';

const UnversiteText = () => {
    const sienne = "https://www.unisi.it/";
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>L’université de Sienne</Text>
      {'\n\n'}
      L’université de Sienne (en italien, Università degli studi di Siena, abréviation : UNISI), 
      en Toscane, est l'une des plus anciennes universités publiques fondées en Italie.{'\n'} 
      D'abord appelée Studium Senese, elle fut fondée en 1240. Avec près de 20 000 étudiants1, 
      elle regroupe presque la moitié de la population totale de Sienne, 
      qui représente 54 000 personnes.{'\n'} Aujourd'hui, l'université de Sienne 
      est connue pour ses facultés de droit et de médecine.{'\n'}
      Antonio Tabucchi enseigne à la faculté de lettres de cette université.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(sienne)}}
          >
            ☻ Sienne
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

export default UnversiteText;