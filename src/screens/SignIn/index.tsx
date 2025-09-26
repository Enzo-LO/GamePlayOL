import { View, Text, Image } from 'react-native';
import { stylesSignIn } from './styles';
import IllustrationImg from '../../assets/favicon.png';

export function SignIn() {
  return (
    <View style={stylesSignIn.container}>

      <Image source={IllustrationImg}/>

    </View>
  );
}


