import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const FailedPage = ({setIsInput}) => {
  const i12Logo = require('../BB_400.png');
  const arrowLeft = require('../arrow-left.png');
  const checkIcon = require('../warning.png');

  const [pin, setPin] = useState('');
  const keyBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['Clear', 0, '<'],
  ];

  return (
    <>
      <View
        style={{
          backgroundColor: '#9f7e3d',
          width: '100%',
          height: hp('30%'),
          justifyContent: 'center',

          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setIsInput(false)}>
          <Image
            style={{
              width: RFValue(25, hp('100%')),
              height: RFValue(25, hp('100%')),
              tintColor: 'white',
              resizeMode: 'contain',

              marginTop: hp('1%'),
            }}
            source={arrowLeft}
          />
        </TouchableOpacity>

        <Image
          style={{
            width: '90%',
            height: hp('30%'),
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
          height: hp('40%'),
          alignItems: 'center',

          justifyContent: 'center',
          paddingTop: hp('4%'),
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: wp('50%'),
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 40,
            display: 'flex',

            paddingHorizontal: wp('3%'),
          }}>
          <Image
            style={{
              width: RFValue(50, hp('100%')),
              height: RFValue(50, hp('100%')),

              resizeMode: 'contain',

              marginTop: hp('1%'),
            }}
            source={checkIcon}
          />

          <Text
            style={{
              fontSize: RFValue(30, hp('100%')),
              fontWeight: 'bold',
              color: '#004c45',
            }}>
            PIN
          </Text>

          <Text
            style={{
              fontSize: RFValue(45, hp('100%')),
              fontWeight: 'bold',
              color: '#004c45',
              letterSpacing: 400,
            }}>
            1234
          </Text>

          <Text
            style={{
              fontSize: RFValue(20, hp('100%')),
              fontWeight: 'bold',
              color: '#004c45',
              marginBottom: 10,
            }}>
            Invalid PIN
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#9f7e3d',
          width: '100%',
          height: hp('30%'),
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',

            height: hp('8%'),
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 35,
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: wp('3%'),
          }}>
          <Image
            style={{
              width: RFValue(30, hp('100%')),
              height: RFValue(30, hp('100%')),
              tintColor: '#004c45',
              resizeMode: 'contain',
              marginRight: wp('2%'),
            }}
            source={arrowLeft}
          />
          <Text
            style={{
              fontSize: RFValue(25, hp('100%')),
              color: '#004c45',
              fontWeight: 'bold',
              marginTop: 0,
            }}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default FailedPage;
