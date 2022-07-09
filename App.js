/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  Dimensions,
} from 'react-native/Libraries/NewAppScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import InputPage from './views/inputPage';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const i12Logo = require('./BB_400.png');
  const arrowLeft = require('./arrow-left.png');
  const arrowRight = require('./arrow-right.png');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [isInput, setIsInput] = useState(false);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {!isInput ? (
        <>
          <View
            style={{backgroundColor: '#9f7e3d', width: '100%', height: '30%'}}>
            <Image
              style={{
                width: '100%',
                height: '100%',
                tintColor: 'white',
                resizeMode: 'contain',
              }}
              source={i12Logo}
            />
          </View>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(35, hp('100%')),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Scan QR CODE to unlock locker
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(30, hp('100%')),
                color: 'white',
                fontWeight: 'bold',
              }}>
              or
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: '30%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => setIsInput(true)}
              style={{
                backgroundColor: 'white',

                height: '33%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 40,
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: wp('3%'),
              }}>
              <Text
                style={{
                  fontSize: RFValue(25, hp('100%')),
                  color: '#004c45',
                  fontWeight: 'bold',
                  marginTop: 0,
                }}>
                Enter PIN to unlock
              </Text>
              <Image
                style={{
                  width: RFValue(30, hp('100%')),
                  height: RFValue(30, hp('100%')),
                  tintColor: '#004c45',
                  resizeMode: 'contain',
                  marginLeft: wp('1%'),
                }}
                source={arrowRight}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: '10%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(18, hp('100%')),
                color: 'white',
                fontWeight: 'bold',
              }}>
              KLIK app users to unlock from the order details in the app
            </Text>
          </View>
        </>
      ) : (
        <InputPage setIsInput={e => setIsInput(e)} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
