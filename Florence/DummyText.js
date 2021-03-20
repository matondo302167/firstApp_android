import React from 'react';
import {Text,Linking} from 'react-native';

const DummyText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Attraction pour étudier à Florence</Text>
      {'\n\n'}
      Florence possède un patrimoine artistique exceptionnel, 
      témoignage glorieux de son passé séculaire.{'\n'} 
      Cimabue et Giotto, les pères de la peinture italienne, 
      vécurent ici, tout comme Arnolfo et Andrea Pisano, qui réformèrent 
      l'architecture et la sculpture; Brunelleschi, Donatello et Masaccio, 
      fondateurs de la Renaissance; Ghiberti et les Della Robbia; 
      Filippo Lippi et Fra Angelico; Botticelli et Paolo Uccello; 
      les génies universels Léonard de Vinci et Michelange.{'\n'} 
      Leurs travaux, comme ceux de générations d'artistes s'étant succédés 
      jusqu'à notre siècle, sont contenus dans les musées de la ville.{'\n'}
      {'\n\n'}
      A Florence, grâce à Dante, nacquit la langue italienne; 
      des études littéraires de Petrarque et de Boccace y furent rédigées; 
      les idéaux humanistes furent remis au goût du jour ainsi 
      que la philosophie et les valeurs de l'ère classique; 
      avec Machiavel nacquit la Science politique moderne; avec Guicciardini, 
      la prose historique; et avec Galilée, la science expérimentale moderne.{'\n'} 
      Depuis l'époque de Charlemagne, Florence est une cité universitaire. {'\n'}
      Elle accueille aujourd'hui de nombreux instituts spécialisés et 
      est un centre culturel intenational. {'\n'}
      Les Accadémies, les écoles d'art, 
      les instituts scientifiques et les centres culturels contribuent à l'intense activité de la ville.
      {'\n\n'}

      <Text style={styles.title}>Coût de vie à Florence</Text>
      {'\n\n'}
      Avez-vous pris connaissance du coût de vie en Italie? Cliquez ici{'\n'} 
      <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL("https://it.numbeo.com/costo-della-vita/nazione/Italia")}}
          >
            https://it.numbeo.com/costo-della-vita/nazione/Italia
      </Text>
        {'\n'}
        et vous saurez tout sur le coût de vie de la ville Florence.
      {'\n\n'}
      <Text style={styles.title}>Sites touristiques important</Text>
      
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