import React, {useRef} from 'react';
import {View, ScrollView, Image, Animated,StyleSheet,Text} from 'react-native';
import {BANNER_H} from './constants';
import TopNavigation from './TopNavigation';
import DummyText from './DummyText';
import UnversiteText from './UniversiteText';
import InscriptionText from './InscriptionText';
import BourseText from './BourseText';
import LogementText from './LogementText';


//image
const piazza = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Siena5.jpg/800px-Siena5.jpg";
const cathedrale = "https://img.over-blog-kiwi.com/1/47/74/15/20171211/ob_0f716c_sienne-cathedrale-3.JPG";
const santa = "https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383430313633363933";


const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Sienne" scrollA={scrollA} />
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
            source={require('../assets/sienne.jpg')}
          />
        </View>
        <Text style={styles1.title}>SIENNE</Text>
        <DummyText />
        <Text style={styles1.image}>Piazza del Campo</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:piazza}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>La Cathédrale de Sienne</Text>
        <View style={styles1.fake_post}>
          <Image 
              source={{uri:cathedrale}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Complexe muséal Santa Maria della Scala</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:santa}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.title}>LISTE DES UNIVERSITÉS DE SIENNE</Text>
        <UnversiteText/>
        <Text style={styles1.title}>INSCRIPTION</Text>
        <InscriptionText/>
        <Text style={styles1.title}>LA BOURSE</Text>
        <BourseText/>
        <Text style={styles1.title}>Le LOGEMENT</Text>
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