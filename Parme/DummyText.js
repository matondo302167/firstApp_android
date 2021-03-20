import React from 'react';
import {Text,Linking} from 'react-native';

const DummyText = () => {
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Attraction pour étudier à Parme</Text>
      {'\n\n'}
      Parme (Parma en italien, Pärma ['pɛʁma] en dialecte parmesan) 
      est une ville italienne de la province de Parme, dans la région d'Émilie-Romagne.{'\n'} 
      Sa devise est : « Que les ennemis tremblent car la Vierge protège Parme ».{'\n'}
      Située entre la chaîne des Apennins et la plaine du Pô, 
      la ville est divisée en deux par la rivière Parma, affluent du Pô.{'\n'}
      La ville de Parme doit sa notoriété à un ensemble d'éléments hétéroclites :{'\n'}
      éléments culturels : c’est la ville d'origine du chef d’orchestre Arturo Toscanini 
      et du peintre Parmigianino ; le compositeur Giuseppe Verdi a grandi à Busseto dans 
      la province de Parme et occupe encore aujourd'hui une place importante dans 
      la vie musicale parmesane ;{'\n'}
      éléments sociologiques : le club de football Parme 
      AC a remporté en quelques années un palmarès important ;{'\n'}
      éléments économiques de la province de Parme : les produits agricoles et leurs transformations 
      agrolimentaires tels que le parmigiano reggiano ou le prosciutto di Parma ont forgé une image 
      de produits authentiques
      {'\n\n'}

      <Text style={styles.title}>Coût de vie à Parme</Text>
      {'\n\n'}
      Avez-vous pris connaissance du coût de vie en Italie? Cliquez ici{'\n'} 
      <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL("https://it.numbeo.com/costo-della-vita/nazione/Italia")}}
          >
            https://it.numbeo.com/costo-della-vita/nazione/Italia
      </Text>
        {'\n'}
        et vous saurez tout sur le coût de vie de la ville Parme.
      {'\n\n'}
      <Text style={styles.title}>Sites touristiques importants</Text>
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