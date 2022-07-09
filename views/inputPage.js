import React, {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import {Text, View, Image, TouchableOpacity} from 'react-native';
import LoadingPage from './loadingPage';
import ResultPage from './resultPage';
import FailedPage from './failedPage';

const InputPage = ({setIsInput}) => {
  const i12Logo = require('../BB_400.png');
  const arrowLeft = require('../arrow-left.png');
  const [pin, setPin] = useState('');
  const keyBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['Clear', 0, '<'],
  ];

  const handleInput = e => {
    if (pin.length < 4 && e !== 'Clear' && e !== '<') {
      setPin(pin + e);
    } else if (pin.length > 0 && e === 'Clear') {
      setPin('');
    } else if (pin.length > 0 && e === '<') {
      setPin(pin?.slice(0, -1));
    } else if (pin.length === 4) {
      return;
    } else {
      return;
    }
  };
  return (
    <>
      {pin?.length === 4 ? (
        <FailedPage />
      ) : (
        <>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: hp('23%'),
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
                height: hp('23%'),
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
              height: hp('18%'),
              alignItems: 'center',

              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: RFValue(25, hp('100%')),
                color: 'white',
                fontWeight: 'bold',
              }}>
              Enter PIN to unlock
            </Text>
            <View
              style={{
                backgroundColor: 'white',
                width: wp('33%'),
                height: '55%',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 40,
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: wp('3%'),
              }}>
              {[0, 1, 2, 3].map(x => (
                <View
                  style={{
                    flex: 1,
                    height: '100%',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                  }}>
                  {pin[x] ? (
                    <Text
                      style={{
                        fontSize: RFValue(45, hp('100%')),
                        fontWeight: 'bold',
                        color: '#004c45',
                      }}>
                      {pin[x]}
                    </Text>
                  ) : (
                    <>
                      <Text
                        style={{
                          fontSize: RFValue(45, hp('100%')),
                          fontWeight: 'bold',
                          color: '#004c45',
                        }}>
                        {` `}
                      </Text>
                      <View
                        style={{
                          backgroundColor: '#004c45',
                          width: '100%',
                          height: 3,
                        }}></View>
                    </>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#9f7e3d',
              width: '100%',
              height: hp('59%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {keyBoard.map(item => (
              <View
                style={{
                  backgroundColor: '#9f7e3d',
                  width: wp('35%'),

                  justifyContent: 'space-between',

                  display: 'flex',
                  height: '25%',
                  flexDirection: 'row',
                  paddingTop: 10,
                }}>
                {item.map(x => (
                  <TouchableOpacity
                    onPress={() => handleInput(x)}
                    style={{
                      backgroundColor: 'white',
                      flex: 1,
                      height: '92%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 30,
                      display: 'flex',
                      marginHorizontal: wp('1%'),
                    }}>
                    <Text
                      style={{
                        fontSize: RFValue(25, hp('100%')),
                        color: '#004c45',
                        fontWeight: 'bold',
                        marginTop: 0,
                      }}>
                      {x}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </>
      )}
    </>
  );
};
export default InputPage;
