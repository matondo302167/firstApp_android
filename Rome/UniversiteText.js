import React from 'react';
import {Text,Linking} from 'react-native';

const UnversiteText = () => {
    const sapienza = "https://www.uniroma1.it/it/pagina-strutturale/home";
    const romaII = "https://web.uniroma2.it/";
    const bioMedica = "https://www.unicampus.it/";
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>La Sapienza, université historique de Rome</Text>
      {'\n\n'}
      La Sapienza est l'une des universités les plus anciennes du monde, 
      fondée en 1303, et la meilleure université d'Italie. 
      Cette institution Romaine est constituée de 10 facultés 
      nous vous mettons le lien pour plus d'informations:
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(sapienza)}}
          >
            ☻ sapienza
        </Text>  
      {'\n\n'}  
      <Text style={styles.title}>Université Tor Vergata, ou Roma II</Text>  
      {'\n\n'}
      Fondée en 1972, Tor Vergata est célèbre pour la qualité de l'enseignement en économie, 
      médecine et ingénierie. À l'origine, en raison de la forte demande à la Sapienza, 
      Tor Vergata fut construite pour pallier le nombre trop élevé de son aînée.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(romaII)}}
          >
            ☻ Roma II
        </Text>
     {'\n\n'}
     <Text style={styles.title}>Le Campus Bio-Medico</Text>  
      {'\n\n'}
      Enfin, cette université spécialisée dans les sciences bio-médicales fut fondée, 
      tout comme le Foro Italico, en 1993. La faculté de médecine délivre 
      une licence en médecine en 6 ans, d'infirmier et de diététicien 
      en 3 ans et d'ingénieur biomédical en 5 ans. 
      Ces titres sont délivrés et valables en Italie et à l'étranger.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(bioMedica)}}
          >
            ☻ Bio-Medica
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