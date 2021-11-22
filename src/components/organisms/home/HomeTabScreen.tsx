import React, {useEffect} from 'react';
import {View} from 'react-native';
import useAxios from 'axios-hooks';
import {MyReview} from '../my-review/dto/my-review.dto';

// Organisms
import LectureListCulture from './LectureListCulture';
import LectureListCultureSelect from './LectureListCultureSelect';
import LectureListNormal from './LectureListNormal';
import LectureShare from './LectureShare';
import LectureListMajor from './LectureListMajor';
import LectureListAll from './LectureListAll';

// Styles
import styles from './style/HomeTabStyles';

export interface HomeTabProps {
  buttonState: number;
  selectDepart: string;
  handleDepart: (state: string) => void;
}

const HomeTabScreen = (props: HomeTabProps) => {
  const [
    {data: getData, loading: getLoading, error: getError},
    excuteGetReviews,
  ] = useAxios<MyReview[]>(
    {
      method: 'POST',
      url: 'lecture-review/get-reviews',
    },
    {manual: true},
  );

  useEffect(() => {
    const handleGetReviews = async () => {
      await excuteGetReviews()
        .then(res => {
          console.log('[handleGetReviews] res.data:', res.data);
        })
        .catch(err => {
          console.log('[handleGetReviews] err:', err);
        });
    };

    handleGetReviews();

    if (getData && !getLoading && !getError) {
      console.log(getData);
    } else {
      console.log('error');
    }
  }, []);

  const {buttonState, selectDepart, handleDepart} = props;
  return (
    <View style={styles.homeback}>
      <LectureShare />
      {buttonState == 0 && (
        <LectureListAll
          buttonState={buttonState}
          selectDepart={selectDepart}
          handleDepart={handleDepart}
          getData={getData}
        />
      )}

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
