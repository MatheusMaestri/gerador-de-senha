import React from "react";
import {Text, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import { CsLogo } from "../../components/CsLogo/CsLogo";
import { CsButton } from "../../components/CsButton/CsButton";


export default function Home() {
    return (
    <View style={styles.appContainer}> 

        <View style={styles.logoContainer}>
            <CsLogo/>
        </View>
    
        <View style={styles.inputContainer}>
            <CsButton/>
        </View>
        <StatusBar style="auto" />

    </View>
    )
}


