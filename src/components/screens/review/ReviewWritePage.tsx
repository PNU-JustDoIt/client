import React from 'react';
import {
  Platform,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {Input, Icon, SearchBar} from 'react-native-elements';

export interface InputLabelProps {
  text: string;
  subText?: string;
}

const ReviewWritePage = (): JSX.Element => {
  const InputLabel = (props: InputLabelProps): JSX.Element => {
    const {text, subText} = props;
    return (
      <Text
        style={{
          fontSize: 17,
          fontWeight: '600',
          fontStyle: 'normal',
          lineHeight: 20,
          letterSpacing: -0.34,
          textAlign: 'left',
          color: '#ffffff',

          marginBottom: 8,
        }}>
        {text}
        {subText && (
          <Text
            style={{
              opacity: 0.6,
              fontSize: 12,
              fontWeight: 'normal',
              fontStyle: 'normal',
              lineHeight: 15,
              letterSpacing: -0.24,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            {'\n' + subText}
          </Text>
        )}
      </Text>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'black',
        // marginLeft: '4.3%',
        // marginRight: '4.3%',
      }}>
      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="수업명" />
        <Input
          containerStyle={{
            height: 40,
            borderRadius: 4,
            backgroundColor: '#404040',
            // display: 'flex',
            // alignContent: 'center',
          }}
          inputContainerStyle={{
            height: 40,
            borderRadius: 4,
            borderBottomWidth: 0,
            // backgroundColor: 'red',
          }}
          inputStyle={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}
          selectionColor="white"
          leftIcon={{
            type: 'font-awesome',
            name: 'search',
            color: 'white',
            size: 16,
          }}
          leftIconContainerStyle={{marginRight: 8}}
        />
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="교과목 코드 · 분반" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}>
          -
        </Text>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="교과구분" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}>
          -
        </Text>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="학점 · 이론 · 실습" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}>
          -
        </Text>
      </View>

      <View
        style={{
          // width: Dimensions.get('scr').width,
          height: 0,
          borderStyle: 'solid',
          borderWidth: 0.7,
          borderColor: '#585858',

          marginBottom: 32,
        }}
      />

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel
          text="수강 인증"
          subText="수강 화면, 필기 내용, 출석표, 시간표 등 이미지로 인증해 주세요."
        />
        <View
          style={{
            height: 72,
            borderWidth: 2,
            borderColor: 'white',
          }}
        />
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="수업 특징" />
        <Input
          containerStyle={{
            maxHeight: 100,
            borderRadius: 4,
            backgroundColor: '#404040',
            // backgroundColor: 'blue',

            padding: 0,
          }}
          inputContainerStyle={{
            height: 100,
            borderRadius: 4,
            borderBottomWidth: 0,
            // backgroundColor: 'red',
          }}
          inputStyle={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',

            textAlignVertical: 'top',
          }}
          selectionColor="white"
          multiline
          numberOfLines={2}
        />
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="교재 활용도" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}>
          -
        </Text>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="수업 체감난이도" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: 17,
            letterSpacing: -0.28,
            textAlign: 'left',
            color: '#ffffff',
          }}>
          -
        </Text>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="과제 · 리포트" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'normal',
              fontStyle: 'normal',
              lineHeight: 17,
              letterSpacing: -0.28,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            과제 · 리포트 유무
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginRight: 21,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#ffffff',
                }}>
                있음
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#ffffff',
                }}>
                없음
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="조별" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'normal',
              fontStyle: 'normal',
              lineHeight: 17,
              letterSpacing: -0.28,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            조별 유무
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                marginRight: 21,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#ffffff',
                }}>
                있음
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  lineHeight: 23,
                  letterSpacing: 0,
                  textAlign: 'left',
                  color: '#ffffff',
                }}>
                없음
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          marginBottom: 43,
        }}>
        <InputLabel text="중간고사 · 기말고사" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 11,
            marginTop: 14,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'normal',
              fontStyle: 'normal',
              lineHeight: 17,
              letterSpacing: -0.28,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            시험 총 횟수
            <Text
              style={{
                fontSize: 10,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 12,
                letterSpacing: -0.4,
                textAlign: 'left',
                color: '#ffffff',
                opacity: 0.8,
              }}>
              &nbsp;&nbsp; (중간고사 · 기말고사 포함)
            </Text>
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Input
              defaultValue="0"
              keyboardType="phone-pad"
              maxLength={1}
              containerStyle={{
                width: 32,
                height: 21,
                marginRight: 12,
                // backgroundColor: 'red',
                borderRadius: 4,
                borderStyle: 'solid',
                borderWidth: 0.7,
                borderColor: '#ffffff',
              }}
              inputContainerStyle={{
                width: '100%',
                height: 21,
                borderBottomWidth: 0,
              }}
              selectionColor="white"
              inputStyle={{
                fontSize: 15,
                fontWeight: 'normal',
                fontStyle: 'normal',
                letterSpacing: 0,
                textAlign: 'center',
                color: '#ffffff',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 23,
                letterSpacing: 0,
                textAlign: 'left',
                color: '#ffffff',
              }}>
              회
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'normal',
              fontStyle: 'normal',
              lineHeight: 17,
              letterSpacing: -0.28,
              textAlign: 'left',
              color: '#ffffff',
            }}>
            퀴즈
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Input
              defaultValue="0"
              keyboardType="phone-pad"
              maxLength={1}
              containerStyle={{
                width: 32,
                height: 21,
                marginRight: 12,
                // backgroundColor: 'red',
                borderRadius: 4,
                borderStyle: 'solid',
                borderWidth: 0.7,
                borderColor: '#ffffff',
              }}
              inputContainerStyle={{
                width: '100%',
                height: 21,
                borderBottomWidth: 0,
              }}
              selectionColor="white"
              inputStyle={{
                fontSize: 15,
                fontWeight: 'normal',
                fontStyle: 'normal',
                letterSpacing: 0,
                textAlign: 'center',
                color: '#ffffff',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                fontStyle: 'normal',
                lineHeight: 23,
                letterSpacing: 0,
                textAlign: 'left',
                color: '#ffffff',
              }}>
              회
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReviewWritePage;
