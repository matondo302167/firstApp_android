import React, {useRef} from 'react';
import {View, StyleSheet,Text,ScrollView, Image, Animated} from 'react-native';
import {BANNER_H} from './constants';
import TopNavigation from './TopNavigation';
import DummyText from './DummyText';
import BourseText from './BourseText';
import LogementText from './LogementText';
import UnversiteText from './UniversiteText';
import InscriptionText from './InscriptionText';

//image
const colisee = "https://hotelbarberini.com/wp-content/uploads/2019/12/colosseo-1024x680.jpg";
const patheon= "https://www.romepratique.com/wp-content/uploads/2018/06/Le-Pantheon-min-696x505.jpg";
const forum = "https://cdn.getyourguide.com/img/location/535e42ef5ea67.jpeg/92.jpg";


const HomeScreen = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation title="Rome" scrollA={scrollA} />
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
            source={require('../assets/rome.png')}
          />
        </View>
        <Text style={styles1.title}>ROME</Text>
        <DummyText />
        <Text style={styles1.image}>Le colisée</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:colisee}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Le pathéon</Text>
        <View style={styles1.fake_post}>
          <Image 
              source={{uri:patheon}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.image}>Le forum Romanum</Text>
        <View style={styles1.fake_post}>
          <Image  
              source={{uri:forum}}
              style={{width:"100%", height: "100%"}}
          />
        </View>
        <Text style={styles1.title}>LISTE DES UNIVERSITÉS DE ROME</Text>
        <UnversiteText/>
        <Text style={styles1.title}>INSCRIPTION</Text>
        <InscriptionText/>
        <Text style={styles1.title}>LA BOURSE</Text>
        <BourseText/>
        <Text style={styles1.title}>LE LOGEMENT</Text>
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
const styles = StyleSheet.create({
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
});

export default HomeScreen;