import React, {useRef} from 'react';
import {View, ScrollView,StyleSheet,Image, Text, Animated} from 'react-native';
import {BANNER_H} from './constants';
import TopNavigation from './TopNavigation';
import DummyText from './DummyText';
import BourseText from './BourseText';
import UnversiteText from './UniversiteText';
import InscriptionText from './InscriptionText';
import LogementText from './LogementText';

//image
const Campanile = "https://i1.wp.com/www.tuscanypeople.com/wp-content/uploads/2019/01/piazza_duomo_firenze.jpg?resize=750%2C422&ssl=1";
const palazzo = "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/f6/f9/d5.jpg";
const dome = "https://www.slowtourtuscany.it/public/img/Blog/8d63c785-18ae-43b4-b4c1-8363c275a3b4/PrImg/imagePrincipale.jpg";


const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Florence" scrollA={scrollA} />
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollA)}
            source={require('../assets/florence.jpg')}
          />
        </View>
        <Text style={styles1.title}>FLORENCE</Text>
        <DummyText/>
        <Text style={styles1.image}>Le Dôme de Florence (Duomo – Cathédrale Santa Maria del Fiore)</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:dome}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Palazzo Vecchio</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:palazzo}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Le Campanile de Giotto </Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:Campanile}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.title}>LISTE DES UNIVERSITÉS DE FLORENCE</Text>
        <UnversiteText/>
        <Text style={styles1.title}>INSCRIPTION</Text>
        <InscriptionText/>
        <Text style={styles1.title}>BOURSE</Text>
        <BourseText/>
        <Text style={styles1.title}>LOGEMENT</Text>
        <LogementText/>
      </Animated.ScrollView>
    </View>
  );
};

const styles1 = StyleSheet.create({
  title:{
    margin:24,
    fontSize:20,
    color:'#ec454a',
    textAlign:'center',
    fontWeight:'bold',
  },
  image:{
    margin:24,
    fontSize:18,
    fontStyle:'italic',
    color:'#232654',
    fontWeight:'bold',
    marginBottom:-10
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom:20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16
  },
})

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

export default HomeScreen;