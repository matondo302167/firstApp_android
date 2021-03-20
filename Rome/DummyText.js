import React from 'react';
import {Text,Linking} from 'react-native';

const DummyText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Attraction pour étudier à Rome</Text>
      {'\n\n'}
      Il y a de nombreuses destinations ou étudier l'italien en Italie, 
      mais étudier à Rome est l'option la plus spectaculaire. Le Colisée, 
      le Panthéon et le Forum Romanum font partie des monuments historiques 
      les plus connus du monde, et les fresques de la Chapelle Sixtine sont sans pareil. 
      Mais étudier à Rome, ce n'est pas seulement faire du tourisme. 
      Vous pourrez faire l'expérience de la vie culturelle active de la ville, 
      découvrir ses petits restaurants dissimulés dans les ruelles, 
      choisir votre gelatarria favorite, et vous promener dans les quartiers 
      oubliés de tous à l'exception des touristes les plus ardents. 
      Le fait d'avoir un point de départ, des capacités en italien, 
      et des camarades de classe avec qui explorer Rome fera toute la différence.
      {'\n\n'}

      <Text style={styles.title}>Coût de vie à rome</Text>
      {'\n\n'}
      Avez-vous pris connaissance du coût de vie en Italie? Cliquez ici{'\n'} 
      <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL("https://it.numbeo.com/costo-della-vita/nazione/Italia")}}
          >
            https://it.numbeo.com/costo-della-vita/nazione/Italia
      </Text>
        {'\n'}
        et vous saurez tout sur le coût de vie de la ville Rome.
      {'\n\n'}
      <Text style={styles.title}>Sites touristiques important</Text>
      {'\n\n'}
      
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
        1. Le Colisée
      </Text>
      {'\n\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
        2. le Panthéon
      </Text>
      {'\n\n'}
      <Text style={{fontStyle:'italic',fontWeight:'bold'}}>
        3. le Forum Romanum
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

export default DummyText;