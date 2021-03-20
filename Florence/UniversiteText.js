import React from 'react';
import {Text,Linking} from 'react-native';

const UnversiteText = () => {
    const unifi = "https://www.unifi.it/";
    const Englais = "https://www.unifi.it/index.php?module=CMpro&func=viewpage&pageid=10297&newlang=eng";
    const bioMedica = "https://www.unicampus.it/";
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Université de florence (Unifi)</Text>
      {'\n\n'}
      L’université de Florence (en italien : Università degli Studi di Firenze), 
      est une université italienne, basée à Florence, une des plus anciennes et prestigieuses
      universités italiennes.{'\n'}
      Elle comprend douze facultés, plus de 60 000 étudiants, autant étrangers qu'italiens, 
      avec des pôles et des sièges didactiques décentrés dans plusieurs
      villes de la Toscane comme Prato, Empoli, Pistoia, Sesto Fiorentino 
      (au hameau Osmannoro), San Casciano in Val di Pesa, Vinci, Calenzano, 
      Figline Valdarno et San Giovanni Valdarno.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(unifi)}}
          >
            ☻ Université de florence
        </Text>  
      {'\n\n'}  
      <Text style={styles.title}>Université de Florence en anglais</Text>  
      {'\n\n'}
      L’Université de Florence en anglais est organisée en 10 écoles et, 
      selon son classement, l’Université de Florence figure parmi les meilleures 
      universités d’État italiennes.{'\n'} 
      Il existe des cours en anglais, 
      des masters de deux ans et des cours d’italien. Les cours d’anglais 
      de l’Université de Florence coopèrent avec des établissements 
      universitaires et des instituts de recherche du monde entier.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(Englais)}}
          >
            ☻ Université de Florence en anglais
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

export default UnversiteText;