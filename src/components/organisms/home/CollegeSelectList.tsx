import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ListItem, Overlay} from 'react-native-elements';
import dummyCollege from '../../screens/home/College.Data';
import dummyCulture from '../../screens/home/Culture.Data';
import dummyDepart from '../../screens/home/Depart.Data';

export interface CollegeSelectListProps {
  buttonState: number;
  handleSelected: (state: number) => void;
}

const CollegeSelectList = (props: CollegeSelectListProps) => {
  const {buttonState, handleSelected} = props;
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
          {dummyCulture.map((item, i) => (
            <TouchableOpacity>
              <ListItem
                key={i}
                containerStyle={{
                  backgroundColor: 'gray',
                }}>
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
      {buttonState === 2 ? (
        <ScrollView style={{width: '100%'}}>
          {dummyCollege.map((item, i) => (
            <TouchableOpacity>
              <ListItem
                key={i}
                containerStyle={{
                  backgroundColor: 'gray',
                }}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.CollegeName}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
      {buttonState === 3 ? (
        <ScrollView style={{width: '100%'}}>
          {dummyCollege.map((item, i) => (
            <TouchableOpacity>
              <ListItem
                key={i}
                containerStyle={{
                  backgroundColor: 'gray',
                }}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.CollegeName}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
      {buttonState === 4 ? (
        <ScrollView style={{width: '100%'}}>
          {dummyDepart.map((item, i) => (
            <TouchableOpacity>
              <ListItem
                key={i}
                containerStyle={{
                  backgroundColor: 'gray',
                }}>
                <ListItem.Content>
                  <ListItem.Title style={{color: 'white'}}>
                    {item.DepartName}
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
