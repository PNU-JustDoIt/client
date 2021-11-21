import React from 'react';
import {Text, View} from 'react-native';

import LectureListCulture from './LectureListCulture';
import LectureListCultureSelect from './LectureListCultureSelect';
import LectureListNormal from './LectureListNormal';
import LectureShare from './LectureShare';
import styles from './style/HomeTabStyles';
import LectureListMajor from './LectureListMajor';
export interface HomeTabProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}

const HomeTabScreen = (props: HomeTabProps) => {
  const {buttonState, selectDepart, handleDepart} = props;
  return (
    <View style={styles.homeback}>
      <LectureShare />
      {/* 교양선택 */}
      {buttonState == 5 && (
        <LectureListCultureSelect
          buttonState={buttonState}
          selectDepart={selectDepart}
          handleDepart={handleDepart}
        />
      )}
      {/* 일반선택 */}
      {buttonState == 2 && (
        <LectureListNormal
          buttonState={buttonState}
          selectDepart={selectDepart}
          handleDepart={handleDepart}
        />
      )}
      {/* 교양필수 */}
      {buttonState == 3 && (
        <LectureListCulture
          buttonState={buttonState}
          selectDepart={selectDepart}
          handleDepart={handleDepart}
        />
      )}
      {/* 전공 */}
      {buttonState == 8 && (
        <LectureListMajor
          buttonState={buttonState}
          selectDepart={selectDepart}
          handleDepart={handleDepart}
        />
      )}
    </View>
  );
};

export default HomeTabScreen;
