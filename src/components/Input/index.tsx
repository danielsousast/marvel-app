import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../styles/Colors';
import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInpuFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInpuBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <TextInput {...rest} onFocus={handleInpuFocus} onBlur={handleInpuBlur} />
      <Icon name={icon} color={isFocused ? colors.primary : '#666'} size={24} />
    </Container>
  );
};

export default Input;
