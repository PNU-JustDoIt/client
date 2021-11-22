import useAxios from 'axios-hooks';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ListItem, Overlay} from 'react-native-elements';
import {Depart} from '../../../navigations/interfaces/Depart.interface';
import dummyCulture from '../../screens/home/Culture.Data';

export interface CollegeSelectListProps {
  buttonState: number;
  handleSelected: (state: number) => void;
  selectDepart: string;
  handleDepart: (state: string) => void;
}

const CollegeSelectList = (props: CollegeSelectListProps) => {
  const [{data: getData, loading: getLoading, error: getError}, excuteDepart] =
    useAxios<any[]>({
      url: 'lecture/find-depart',
      method: 'get',
    });

  const {buttonState, handleSelected, selectDepart, handleDepart} = props;

  console.log('[CollegeSelectList] depart:', getData);

  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        top: 180,
        maxHeight: 288,
        backgroundColor: 'gray',
        zIndex: 100,
      }}>
      {buttonState === 1 ? (
        <ScrollView style={{width: '100%'}}>
          {dummyCulture?.map((item, i) => (
            <TouchableOpacity
              onPress={() => {
                handleDepart(item.CultureName), handleSelected(5);
              }}>
              <ListItem
                key={item.CultureName}
                containerStyle={{
                  backgroundColor: 'gray',
                }}
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.CultureName}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
      {/* {buttonState === 3 ? (
        <ScrollView style={{width: '100%'}}>
          {getData?.map((item, i) => (
            <TouchableOpacity
              onPress={() => {
                handleDepart(item.lecture_department_name), handleSelected(7);
              }}>
              <ListItem
                key={item.lecture_department_name}
                containerStyle={{
                  backgroundColor: 'gray',
                }}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.lecture_department_name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )} */}
      {buttonState === 4 ? (
        <ScrollView style={{width: '100%'}}>
          {getData?.map((item, i) => (
            <TouchableOpacity
              onPress={() => {
                handleDepart(item.lecture_department_name), handleSelected(8);
              }}>
              <ListItem
                key={item.lecture_department_name}
                containerStyle={{
                  backgroundColor: 'gray',
                }}
                hasTVPreferredFocus={undefined}
                tvParallaxProperties={undefined}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.lecture_department_name}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </View>
  );
};
export default CollegeSelectList;
