import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import appTheme from './theme';
// constants


// theme
const { COLORS, FONTS, SIZES } = appTheme;

const onBoardings = [
    {
        title: "Chambre",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0009.jpg?alt=media&token=43654541-ef07-4466-8dba-639edd12fb79"
    },
    {
        title: "Chambre",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0018.jpg?alt=media&token=c265e0fa-6dad-4096-a312-9321ab414215"
    },
    {
        title: "Chambre",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0014.jpg?alt=media&token=d677b01f-0b2c-404e-a013-86e18d9b00d1"
    },
    {
        title: "cuisine",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0010.jpg?alt=media&token=212f98a8-7fce-4ff1-8014-22e5b0c54fee"
    },
    {
        title: "cuisine",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0008.jpg?alt=media&token=db40b9e5-742d-4154-a299-62572034a987"
    },
    {
        title: "Douche",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0013.jpg?alt=media&token=7e82a94e-1170-4882-918c-88a14008d9eb"
    },
    {
        title: "Douche",
        img: "https://firebasestorage.googleapis.com/v0/b/firstapp-a8bdd.appspot.com/o/maison%20app%2FIMG-20210222-WA0015.jpg?alt=media&token=f23e045f-88d6-4946-a857-3dfc28e3903d"
    },
];

const OnBoarding = () => {
    const [completed, setCompleted] = React.useState(false);

    const scrollX = new Animated.Value(0);

    React.useEffect(() => {
        scrollX.addListener(({ value }) => {
            if (Math.floor(value / SIZES.width) === onBoardings.length - 1) {
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    }, []);

    // Render

    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ], { useNativeDriver: false })}
            >
                {onBoardings.map((item, index) => (
                    
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}
                    >
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={{uri: item.img}}
                                resizeMode="contain"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: 40,
                                right: 40,
                            }}
                        >
                            <Text style={{
                                color: '#fff',
                                textAlign: 'center',
                                fontSize:19
                            }}
                            >
                                {item.title}
                            </Text>

                            <Text style={{
                                textAlign: 'center',
                                marginTop: SIZES.base,
                                color: COLORS.gray,
                            }}
                            >   
                            </Text>
                            <View style={styles.menuWrapper}>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons name="phone" color="#fff" size={22}/>
                                    <Text style={styles.menuItemText}>+39 351 023 72 32</Text>
                                </View>
                                <View style={styles.menuItem}>
                                    <MaterialCommunityIcons name="home" color="#fff" size={22}/>
                                    <Text style={styles.menuItemText}>Via Orlando cugini 1,Gaiano</Text>
                                </View>
                            </View>
                        </View>
                        {/* Button */}
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {

        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: "clamp"
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[styles.dot, { width: dotSize, height: dotSize, }]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                {renderContent()}
            </View>
            <View style={styles.dotsRootContainer}>
                {renderDots()}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:-200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-around',
        marginBottom: 20,
    },
    imageAndTextContainer: {
        width: SIZES.width
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginBottom:20,
        paddingHorizontal: 30,
        borderBottomColor:'#000',
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});

export default OnBoarding;