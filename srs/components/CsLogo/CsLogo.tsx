import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './CsLogoStyles';
import csLogo from '../../../assets/logo.png'

export function CsLogo() {
  return (
    <>
        <Text style={styles.title}>
            Gerador de Senha
        </Text>
        <Image
            source={csLogo}
            style={{resizeMode: 'contain', height: 250}}
        />


    </>
  );
}