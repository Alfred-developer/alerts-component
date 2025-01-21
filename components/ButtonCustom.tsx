import React from 'react'
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

interface Props {
    text: string,
    onPress: () => void,
    color1: string,
    color2: string

}

export const ButtonCustom = ({text, onPress, color1, color2}: Props) => {
  return (
    <TouchableOpacity style={styles.buttonTouchable} onPress={onPress}>
      <LinearGradient
        colors={[color1, color2]}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        style={styles.button}
      >
        <Text style={styles.text}>{ text }</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonTouchable:{
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 25,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 18,
      color: '#fff',
    },
  });