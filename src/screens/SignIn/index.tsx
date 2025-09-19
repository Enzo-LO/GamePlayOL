import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput } from 'react-native';
import { stylesSignIn } from './styles';


export function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text>Digite algo:</Text>
      <TextInput style={{width:200, height:40, borderWidth:1}}/>
    </View>
  );
}


