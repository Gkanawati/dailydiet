import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <TextButton>{title}</TextButton>
    </Container>
  );
}
