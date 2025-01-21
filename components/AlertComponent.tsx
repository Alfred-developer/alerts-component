import React, { useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';
import { stylesGlobal } from '../styles/stylesGlobal';
import { Image } from 'react-native';
import { ButtonCustom } from './ButtonCustom';

interface Props {
    isModalAlertOpen: boolean,
    onPress: () => void,
    onPressClose?: () => void,
    title: string,
    text: string,
    type: string
} 

export const AlertCustom = ({isModalAlertOpen, onPress, title, text, type, onPressClose}: Props) => {
    useEffect(() => {
        
    }, []);

    return (
        <Modal visible={isModalAlertOpen} transparent={true} animationType='fade'>
            <View style={styles.modalContainerStyle}>
                <View style={[styles.modalStyle, type === 'warning' ? { backgroundColor: '#f5e5cb' } : null, type === 'error' ? { backgroundColor: '#fcc9c9' } : null, type === 'successful' ? { backgroundColor: '#c6f4ce' } : null]}>
                    {
                        onPressClose  ?
                            <Pressable style={styles.modalCloseButton} onPress={onPressClose}>
                                <Icon name='close' size={30} />
                            </Pressable>
                        : null
                    }
                    <View style={styles.modalContent}>
                        {
                            type === 'warning' ?
                                <Image source={require('../assets/images/iconsAlert/warning_alert.png')} style={{width: 80, height: 80,}} />
                            : null
                        }
                        {
                            type === 'error' ?
                                <Image source={require('../assets/images/iconsAlert/error_alert.png')} style={{width: 80, height: 80,}} />
                            : null
                        }
                        {
                            type === 'successful' ?
                                <Image source={require('../assets/images/iconsAlert/successful_alert.png')} style={{width: 80, height: 80,}} />
                            : null
                        }

                        <Text style={styles.titleAlert}>{ title }</Text>
                        <Text style={{textAlign: 'center'}}>{ text }</Text>
                        
                        <View style={styles.contentBtn}>
                            <ButtonCustom onPress={onPress} text='Aceptar' color1={'#17202a'} color2={'#17202a'} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#00000095'
    },
    modalStyle: {
        marginHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalCloseButton: {
        position: 'absolute',
        width: '100%',
        alignItems: 'flex-end',
        paddingTop: 15,
        paddingRight: 15
    },
    modalContent: {
        paddingHorizontal: 10,
        paddingVertical: 25,
        alignItems: 'center',
    },
    titleAlert: {
        fontSize: 25,
        fontWeight: 'bold',
        color: stylesGlobal.textColor,
        paddingVertical: 10,
        marginTop: 5
    },
    contentBtn: {
        paddingTop: 30,
        width: '70%'
    }
})
