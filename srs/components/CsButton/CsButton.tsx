import React, { useState } from 'react';
import { Text, Pressable, Platform, Alert, ToastAndroid } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './CsButtonStyle';
import { CsTextInput } from '../CsTextInput/CsTextInput';
import generatePass from '../../services/passwordService';


export function CsButton() {
    const[pass, setPass] = useState ('')

    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }

function handleCopyButton(){
    Clipboard.setStringAsync(pass);
    if (Platform.OS === 'android') {
        ToastAndroid.show('Senha copiada para a área de transferência!', ToastAndroid.SHORT);
    } else if (Platform.OS === 'ios') {
        Alert.alert('Senha copiada', 'A senha foi copiada para a área de transferência.');
    }
}



  return (
    <>
        <CsTextInput pass = {pass}/>
        <Pressable
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.Text}>
                Gerar Senha
            </Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.Text}
            >
                Copiar
            </Text>
        </Pressable>
    </>
  );
}