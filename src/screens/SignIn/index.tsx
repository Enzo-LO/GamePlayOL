import { View, Text, Image, StatusBar } from 'react-native';
import { stylesSignIn } from './styles';
import IllustrationImg from '../../assets/illustration.png';



export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <StatusBar barStyle='light-content' backgroundColor={'transparent'} translucent/>
        <View/>
        <Image source={IllustrationImg} style={stylesSignIn.image} resizeMode='stretch'/>
    <View style= {stylesSignIn.content}>

      <Text style={stylesSignIn.title}>
        Organize Suas {'\n'}
        Jogatinas {'\n'}
        Facilmente
      </Text>
      <Text style={stylesSignIn.subtitle}>
        Crie grupos para jogar seus games{'\n'}
        favoritos com seus amigos
      </Text>
    </View>
    </View>
  );
}


