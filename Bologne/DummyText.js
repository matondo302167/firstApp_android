import React from 'react';
import {Text,Linking} from 'react-native';

const DummyText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Attraction pour étudier à Bologne</Text>
      {'\n\n'}
      Si vous souhaitez étudier à Bologne, 
      vous serez dans la ville qui a ouvert la première université du monde occidental.{'\n'} 
      L’université de Bologne, mais ce n’est pas la seule université de Bologne, en Italie.{'\n'} 
      Nous nous sommes assurés de passer en revue une liste de différentes universités 
      que vous pouvez choisir en fonction de vos études
      {'\n\n'}
      Donc, vous n’aurez pas à vous soucier du taux d’acceptation 
      de l’Université de Bologne, car vous avez le choix entre plusieurs écoles.{'\n'} 
      Même si cet article ne concerne pas uniquement Unibo, nous souhaitons aborder quelques points, 
      tels que les bourses d’études de l’Université de Bologne pour les étudiants étrangers.{'\n'} 
      Si vous êtes à la recherche d’une subvention que vous pourriez 
      trouver à l’Université de Bologne, lisez cet article.{'\n'} 
      Vous trouverez également tous les cours que propose l'Université de Bologne ici.
      {'\n\n'}

      <Text style={styles.title}>Coût de vie à Bologne</Text>
      {'\n\n'}
      Avez-vous pris connaissance du coût de vie en Italie? Cliquez ici{'\n'} 
      <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL("https://it.numbeo.com/costo-della-vita/nazione/Italia")}}
          >
            https://it.numbeo.com/costo-della-vita/nazione/Italia
      </Text>
        {'\n'}
        et vous saurez tout sur le coût de vie de la ville Bologne.
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