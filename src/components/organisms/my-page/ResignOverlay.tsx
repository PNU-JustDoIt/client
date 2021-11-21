import React, {useContext, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Overlay} from 'react-native-elements/dist/overlay/Overlay';
import UserContext from '../../../utils/context/User.context';

// Styles
import ResignOverlayStyles from './styles/ResignOverlay.style';

export interface ResignOverlayProps {
  isVisible: boolean;
  onBackdropPress: () => void;
}

export default function ResignOverlay(props: ResignOverlayProps): JSX.Element {
  // ResignOverlay Styles
  const styles = ResignOverlayStyles;

  const {isVisible, onBackdropPress} = props;

  const userContext = useContext(UserContext);

  // 회원탈퇴 시 정보 소멸 동의 여부 state
  const [agree, setAgree] = useState<boolean>(false);
  const handleAgree = () => {
    setAgree(!agree);
  };

  return (
    <Overlay
      overlayStyle={styles.root}
      isVisible={isVisible}
      onBackdropPress={() => {
        onBackdropPress();
        setAgree(false);
      }}>
      <View style={styles.container}>
        <View style={styles.expainContainer}>
          <TouchableOpacity
            style={styles.agreeButton}
            onPress={() => {
              console.log('동의하기 버튼 클릭');
              handleAgree();
            }}>
            {agree ? (
              <Image
                style={styles.agreeButtonImage}
                source={require('../../../assets/images/my-page/Checked.png')}
              />
            ) : (
              <Image
                style={styles.agreeButtonImage}
                source={require('../../../assets/images/my-page/UnChecked.png')}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.explainText}>
            유의사항을 모두 확인하였으며, 회원탈퇴 시 모든 정보의 소멸에
            동의합니다.
          </Text>
        </View>

        <View
          style={
            agree
              ? styles.deleteButtonContainer
              : styles.deleteButtonContainerDisabled
          }>
          <TouchableOpacity
            style={styles.deleteButton}
            disabled={!agree}
            onPress={async () => {
              console.log('계정 삭제하기 버튼 클릭');
              await userContext.resign();
            }}>
            <Text style={styles.deleteButtonText}>계정 삭제하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Overlay>
  );
}
