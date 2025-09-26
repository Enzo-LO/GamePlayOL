import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image } from 'react-native';
import { stylesSignIn } from './styles';
import IllustrationImg from '../../assets/favicon.png';

export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Image source={IllustrationImg}/>
    </View>
  );
}


