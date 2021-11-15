import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

// Styles
import AuthCounterStyles from './styles/AuthCounter.style';

interface Timer {
  minute: number;
  second: number;
}

export interface AuthCounterProps {
  handleIsTimeout: (bool: boolean) => void;
}

export default function AuthCounter(props: AuthCounterProps): JSX.Element {
  // AuthCounter Styles
  const styles = AuthCounterStyles;

  const {handleIsTimeout} = props;

  // 인증 만료 시간
  const [timer, setTimer] = useState<Timer>({
    minute: 4,
    second: 59,
  });
  const handleTimer = (minute: number, second: number) => {
    setTimer({
      minute: minute,
      second: second,
    });
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      if (timer.second > 0) {
        handleTimer(timer.minute, timer.second - 1);
      }
      if (timer.second === 0) {
        if (timer.minute === 0) {
          handleIsTimeout(true);
          clearInterval(countDown);
        } else {
          handleTimer(timer.minute - 1, 59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(countDown);
    };
  }, [timer]);

  console.log(timer.minute, timer.second);

  return (
    <View style={styles.root}>
      <Text style={styles.counterText}>
        {`0${timer.minute}`}:
        {timer.second < 10 ? `0${timer.second}` : timer.second}
      </Text>
    </View>
  );
}
