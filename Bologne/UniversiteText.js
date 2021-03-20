import React from 'react';
import {Text,Linking} from 'react-native';

const UnversiteText = () => {
    const unibo = "https://www.unibo.it/it";
    const  beauxArts = "http://www.ababo.it/ABA/";
    const sais = "https://sais.jhu.edu/sais-europe";
    const conservatorio = "http://www.consbo.it/home";
  return (
    <Text style={styles.text}>
      <Text style={styles.title}>Université de Bologne (UniBo)</Text>
      {'\n\n'}
      L'université de Bologne (italien : Alma mater studiorum - Università di Bologna, UniBo) 
      est une université italienne publique.{'\n'} 
      Fondée en 1088, elle est souvent considérée comme 
      la plus ancienne université du monde ou du monde occidental, 
      en fonction des sources et de la définition du concept d'université.1,2,3,4{'\n'}
      Elle est la première institution à utiliser le terme « université » 
      (en latin universitas) ainsi que la première université reconnue comme telle par le pape5.{'\n'} 
      Sa devise est Petrus ubique pater legum Bononia mater, 
      « Saint Pierre est partout le père des lois, Bologne en est la mère ».{'\n'}
      L'université de Bologne a plus de 100 000 étudiants (un quart de la population 
      de la ville de Bologne) et presque 3 000 professeurs ce qui en fait 
      l'une des plus grandes d'Europe.{'\n'} 
      Depuis sa fondation, elle a attiré 
      un grand nombre d'universitaires et d'étudiants provenaient de toute 
      l'Italie et du monde entier, ce qui la confirme comme 
      l'une des plus importantes institutions universitaires6,
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(unibo)}}
          >
            ☻  Lien Université de bologne
        </Text>  
      {'\n\n'}  
      <Text style={styles.title}>L'Académie des beaux-arts de Bologne</Text>  
      {'\n\n'}
      L'Académie des beaux-arts de Bologne 
      (en italien, Accademia di belle arti di Bologna ou encore Accademia Clementina) 
      est une école d'art italienne fondée au début du xixe siècle.{'\n'} 
      Elle a pris la suite de différentes académies artistiques ayant 
      existé à Bologne depuis la fin du xvie siècle.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(beauxArts)}}
          >
            ☻  Lien L'Académie des beaux-arts de Bologne
        </Text>
     {'\n\n'}
      <Text style={styles.title}>The Johns Hopkins University SAIS Bologna Center(Johns Hopkins University)</Text>  
      {'\n\n'}
      L' Université Johns Hopkins SAIS Europe à Bologne, en Italie, 
      est le campus européen de la Paul H. Nitze School of Advanced International Studies (SAIS), 
      une division de l'Université Johns Hopkins située à Washington, DC.{'\n'} 
      SAIS Europe propose un programme académique interdisciplinaire 
      qui met l'accent sur l'économie internationale, les relations internationales, 
      les langues et les spécialisations dans des domaines fonctionnels ou des études régionales.{'\n'}
      SAIS Europe a été fondée en 1955 par C. Grove Haines.{'\n'} 
      En 1961, l'école a déménagé à son emplacement actuel sur la Via Belmeloro 
      et a achevé une rénovation majeure de ses installations en 2006.{'\n'}
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(sais)}}
          >
            ☻  Lien Johns Hopkins Universit 
        </Text>
     {'\n\n'}
     <Text style={styles.title}>Conservatoire Giovanni-Battista-Martini (Conservatorio di Musica Giovan Battista Martini)</Text>  
      {'\n\n'}
      Le Conservatorio Giovanni Battista Martini 
      (anciennement connu sous le nom de Liceo Musicale di Bologna , 
      et parfois appelé en anglais Conservatory de Bologne ) 
      est un collège de musique de Bologne , en Italie.{'\n'} 
      Le conservatoire a ouvert le 3 décembre 1804, sous le nom de Liceo Musicale di Bologna.{'\n'}
      Il a été initialement logé dans le couvent de la Basilique de San Giacomo Maggiore.{'\n'} 
      La première faculté de l'école comprenait les compositeurs 
      Stanislao Mattei et Giovanni Callisto Zanotti , ainsi que le compositeur et chanteur 
      Lorenzo Gibelli.{'\n'} 
      Gioachino Rossiniétait élève à l'école à partir de 1806, 
      et a été nommé directeur de l'école en 1839. Les directeurs
      ultérieurs de l'école comprenaient Luigi Mancinelli (1881-1886), 
      Giuseppe Martucci (1886-1902), Marco Enrico Bossi (1902-1911) et Cesare Nordio (1925-1945).
      En 1945, le conservatoire est devenu un conservatoire d'État, 
      et il a été rebaptisé Conservatorio Giovanni Battista Martini, après le musicien 
      et compositeur Giovanni Battista Martini . Les directeurs du conservatoire à partir 
      de ce moment sont Guido Guerrini , Lino Liviabella , 
      Adone Zecchi , Giordano Noferini , Lidia Proietti , Carmine Carrisi et Donatella Pieri.
      {'\n\n'}
        <Text 
          style={{color:'#00f',fontWeight:'bold',fontStyle:'italic'}}
          onPress={()=>{Linking.openURL(conservatorio)}}
          >
            ☻ Lien Conservatorio di Musica Giovan Battista Martini
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