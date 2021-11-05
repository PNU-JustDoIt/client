import React from 'react';
import { View, Text, Button } from 'react-native';
const SelectDepart=()=>{

    return (
        <View style={{ width: '100%' }}>
        <View style={{
            flexDirection: 'column',
            width: '70%'
            
        }}>
            <Text>
                학과 및 전공이 무엇인가요?
            </Text>
            <Text>
                배우고 싶은 분야를 선택해도 좋아요
            </Text>
        </View>
        <View style={{
            width: '100%'
        }}>
            <Button>
                인문사회계열
            </Button>
            <Button>
                자연과학계열
            </Button>
            <Button>
                공학계열
            </Button>
            <Button>
                의학계열
            </Button>
            <Button>
                예체능계열
            </Button>
        </View>
        </View>
        
    )
};

export default SelectDepart;