import React, {useRef} from 'react';
import {View, Text,ScrollView, StyleSheet, Image, Animated} from 'react-native';
import {BANNER_H} from './constants';
import TopNavigation from './TopNavigation';
import DummyText from './DummyText';
import UnversiteText from './UniversiteText';
import InscriptionText from './InscriptionText';
import BourseText from './BourseText';
import LogementText from './LogementText';

//image
const Duomo = "http://www.italia.it/uploads/RTEmagicC_Parma_Introduzione_SCALATA_04.jpg.jpg";
const pilotta = "https://www.turismo.it/typo3temp/pics/afdbb57bfb.jpg";
const parco = "https://cdn-italiani-media.italiani.it/site-italiani/2020/10/Parco-Ducale-fontana-1024x725.jpg";
const garibaldi = "https://www.parmawelcome.it/wp-content/uploads/2019/04/Piazza-Garibaldi-neve.jpg";
const ParmeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Parme" scrollA={scrollA} />
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
            source={require('../assets/parme.jpg')}
          />
        </View>
        <Text style={styles1.title}>PARMA</Text>
        <DummyText/>
        <Text style={styles1.image}>Dome de Parme</Text>
        <View style={styles.fake_post}>
          <Image
              source={{uri:Duomo}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Palazzo pilotta</Text>
        <View style={styles.fake_post}>
          <Image
              source={{uri:pilotta}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Parco Ducale</Text>
        <View style={styles.fake_post}>
          <Image
              source={{uri:parco}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Piazza garibaldi</Text>
        <View style={styles.fake_post}>
          <Image
              source={{uri:garibaldi}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.title}>LISTE DES UNIVERSITÉS DE PARMA</Text>
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
  }
})
const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
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

export default ParmeScreen;