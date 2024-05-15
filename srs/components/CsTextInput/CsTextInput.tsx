import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './CsTextInputStyles';
interface CsTextInputProps{
    pass:string
}

export function CsTextInput(props : CsTextInputProps) {
  return (

        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}

        />

  );
}