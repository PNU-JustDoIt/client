import React from "react";
import {Image, View, Text} from 'react-native';
import { Rating } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './style/ReviewCardStyles';

const STAR_IMAGE = require('../../../assets/icons/review/star.png')

export interface Mode {
    isWriter: boolean;
}

const ReviewCard = (props: Mode) => {
    const {isWriter} = props;
    return (
        <View style={styles.card}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.profname}>
                    교수명
                </Text>
                <View style={styles.box}>
                    <View style={styles.categorybox}>
                        <Text style={styles.category}>
                            교양선택
                        </Text>
                    </View>
                    {/* <Image
                        source={require('../../../assets/icons/review/delete.png')}
                        style={styles.delete}
                    /> */}
                </View>
            </View>

            <Text style={styles.lectname}>
                강의명
            </Text>

            <Rating
                readonly
                type='custom'
                ratingImage={STAR_IMAGE}
                imageSize={20}
                ratingColor='white'
                ratingBackgroundColor='grey'
                tintColor='#1c1c1c'
                // startingValue 에 값 입력
                startingValue={2}
                style={styles.star}
            />
        </View>
    );
};
export default ReviewCard;