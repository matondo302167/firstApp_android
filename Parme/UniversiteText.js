import React from 'react';
import {Text,Linking} from 'react-native';

const UnversiteText = () => {
    const unipr = "https://www.unipr.it/";
    const conservatoires = "http://www.conservatorio.pr.it/";
    const college = "http://www.europeancollege.it/";
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Université de Parma (Unipr)</Text>
      {'\n\n'}
      L'Université de Parme (en italien, Università degli Studi di Parma) 
      est une université italienne, basée à Parme, en Émilie.{'\n'} 
      Elle est l'une des universités les plus anciennes au monde, 
      ayant été fondée en 962 ; des documents qui datent du xie siècle et xiie siècle 
      témoignent de la présence d'écoles institutionnelles 
      et de maitres surtout dans les matières juridiques.{'\n'}
      Elle comprend actuellement 30 000 étudiants.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(unipr)}}
          >
            ☻  Lien Université de Parme
        </Text>  
      {'\n\n'}  
      <Text style={styles.title}>Collège européen de Parme</Text>  
      {'\n\n'}
      Le Collège européen de Parme Fondation ( italienne : Fondazione Collegio Europeo di Parma , Français :
      La Fondation Collège Européen de Parme ):{'\n'} 
      est un établissement d'enseignement supérieur qui offre une formation universitaire 
      pour les jeunes diplômés européens dans le domaine du droit de l' Union européenne , 
      l' économie et la politique . Le programme éducatif proposé par le Collège européen 
      de Parme est un programme universitaire complet et interdisciplinaire 
      couvrant l'ensemble du processus d'intégration européenne.{'\n'}
      Le programme éducatif proposé par le Collège européen vise à préparer 
      les étudiants à des carrières dans les institutions européennes , nationales et locales , 
      les associations professionnelles, le monde de l'entreprise et la pratique privée.{'\n'}
      La première unité du collège a été créée en 1988 en tant que consortium d'institutions, 
      par la volonté des institutions du territoire de Parme et de la région Émilie-Romagne 
      afin d'offrir aux étudiants et à la communauté une école d'enseignement supérieur, 
      qui promouvait le savoir du fonctionnement des institutions de l’UE.{'\m'}
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(college)}}
          >
            ☻  Lien Collège européen de Parme
        </Text>
     {'\n\n'}
      <Text style={styles.title}>Conservatoire Arrigo Boito de Parme</Text>  
      {'\n\n'}
      Le conservatoire Arrigo Boito de Parme est l'un des conservatoires 
      les plus anciens et les plus renommés d'Italie.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(conservatoires)}}
          >
            ☻  Lien Conservatoire Arrigo Boito de Parme
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