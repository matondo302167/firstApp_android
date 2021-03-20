import React from 'react';
import {Text} from 'react-native';

const IntroductionText = () => {
  return (
    <Text style={styles.text}>
      Étant les pionniers en Italie dans le domaine de l'accompagnement 
      dans les Universités, OSA Consulting vous offre des services qui sont 
      à la hauteur de vos attentes en terme rapport qualité/prix.{'\n'}
      Nous collaborons avec les Universités de Rome, Florence, Bologne et Parme.{'\n'}
      Prière de prendre connaissance des packs ci-dessous.{'\n'}
      Au cas où vous auriez des doutes ou incompréhensions, vous pouvez nous contacter 
      et nous aurons le plaisir de clarifier ces zones d'ombres. 
      {'\n'} 
      <Text style={[styles.text,{color:'#f00'}]}>NB: Ne faites rien sans rien comprendre. Bonne compréhension!</Text>
    </Text>
  );
};

const styles = {
  text: {
    margin: 20,
    fontSize: 16,
    color:'#fff'
  },
};

export default IntroductionText;