import React from 'react'

// Import react-native components
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native'

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import { FontAwesome5 } from '@expo/vector-icons';

// Import react-native-reanimated
// from "https://github.com/software-mansion/react-native-reanimated"
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated

// Declare component 
class FBHeader extends React.Component {

  constructor(props){
    super(props)

    this._scroll_y = new Value(0)
  }

  render(){

    const _diff_clamp_scroll_y = Animated.diffClamp(this._scroll_y, 0, 50)

    const _header_height = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [50, 0],
      extrapolate: 'clamp'
    })

    const _header_translate_y = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [0, -50],
      extrapolate: 'clamp'
    })

    const _header_opacity = Animated.interpolate( _diff_clamp_scroll_y, {
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    })

    return(
      <SafeAreaView style={styles.safe_area_view}>
        
        <Animated.View
          style={[
            styles.header,
            {
              height: _header_height,
              transform: [{translateY: _header_translate_y}],
              opacity: _header_opacity
            }
          ]}
        >
        <FontAwesome5 
          name="angle-left" 
          size={50} 
          color="#fff" 
          onPress = {() => this.props.navigation.goBack()}
        />
        <Text style={{color:'#fff',fontSize:18}}>Maison</Text>
          <View style={styles.fake_icon_box}>
            <FontAwesome5 name="user-check" size={22} color='#232654' />
          </View>
        </Animated.View>
        <Animated.ScrollView
          style={[
            styles.scroll_view,
            {

            }
          ]}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={5}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: this._scroll_y }}
            }
          ])}
        >


        </Animated.ScrollView>
      </SafeAreaView>
    )
  }
}

export default FBHeader

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor:'#232654',
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scroll_view: {
    flex: 1
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8
  }
})