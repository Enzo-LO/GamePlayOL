import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { stylesSignIn } from './styles';


export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text>Essa tela é de entrada.</Text>
      <StatusBar style="auto"/>
    </View>
  );
}


