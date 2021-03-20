import React from 'react';
import {Text,Linking} from 'react-native';

const DummyText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Attraction pour étudier à Sienne</Text>
      {'\n\n'}
      Sienne est souvent considérée comme l'une des villes les plus vivables 
      de la Toscane et à juste titre.{'\n'} 
      C'est un peu plus calme que les autres 
      capitales italiennes, mais il y a encore beaucoup de choses à faire 
      et une belle vie étudiante. Vous aurez de nouveaux amis en un rien 
      de temps avec lequel vous pourrez explorer cette ville.{'\n'} 
      Sienne a également tendance à être un peu plus facile sur la poche, 
      ce qui est toujours une caractéristique attrayante pour étudier.{'\n'} 
      Découvrez leur université ci-dessous et les écoles de cuisine 
      que vous pouvez prendre à part, ou bien sûr, 
      si vous ne visitez Sienne que pour une courte période.
      {'\n\n'}

      <Text style={styles.title}>Coût de vie à Sienne</Text>
      {'\n\n'}
      Avez-vous pris connaissance du coût de vie en Italie? Cliquez ici{'\n'} 
      <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL("https://it.numbeo.com/costo-della-vita/nazione/Italia")}}
          >
            https://it.numbeo.com/costo-della-vita/nazione/Italia
      </Text>
        {'\n'}
        et vous saurez tout sur le coût de vie de la ville Sienne.
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