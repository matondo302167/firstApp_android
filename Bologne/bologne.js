import React, {useRef} from 'react';
import {View, ScrollView, Image, StyleSheet, Text,Animated} from 'react-native';
import {BANNER_H} from './constants';
import TopNavigation from './TopNavigation';
import DummyText from './DummyText';
import UnversiteText from './UniversiteText';
import InscriptionText from './InscriptionText';
import BourseText from './BourseText';
import LogementText from './LogementText';

//image
const piazza = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bologna-vista02.jpg/260px-Bologna-vista02.jpg";
const univ ="https://media-cdn.tripadvisor.com/media/photo-s/05/2b/f3/4c/archiginnasio-of-bologna.jpg";
const tour = "https://bologna-guide.com/wp-content/uploads/2017/09/IMG_20170904_190905-01.jpg";
const Sanctuaire = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Madonna_di_San_Luca_Panorama.jpg/640px-Madonna_di_San_Luca_Panorama.jpg";

const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Bologne" scrollA={scrollA} />
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
            source={require('../assets/bologne.jpg')}
          />
        </View>
        <Text style={styles1.title}>BOLOGNE</Text>
        <DummyText />
        <Text style={styles1.image}>L’incontournable Piazza Maggiore</Text>
        <View style={styles1.fake_post}>
          <Image 
            source={{uri:piazza}}
            style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>la plus vieille université de Bologne</Text>
        <View style={styles1.fake_post}>
          <Image
            source={{uri:univ}}
            style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>la tour Asinelli</Text>
        <View style={styles1.fake_post}>
          <Image
            source={{uri:tour}}
            style={{width:"100%", height: "100%"}}
          />
        </View>
        
        <Text style={styles1.image}>Sanctuaire Madonna di San Luca</Text>
        <View style={styles1.fake_post}>
          <Image
            source={{uri:Sanctuaire}}
            style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.title}>LISTE DES UNIVERSITÉS DE BOLOGNE</Text>
        <UnversiteText/>
        <Text style={styles1.title}>INSCRIPTION</Text>
        <InscriptionText/>
        <Text style={styles1.title}>BOURSE</Text>
        <BourseText/>
        <Text style={styles1.title}>LOGEMENT</Text>
        <LogementText/>
        <Text style={styles1.title}></Text>
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