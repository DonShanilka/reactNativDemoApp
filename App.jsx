import * as React from 'react';
import { Text, View ,ActivityIndicator,Button,SafeAreaView,Image, StyleSheet} from 'react-native'
import LoginPage from './pages/LoginPage';
import SavePage from './pages/SavePage';
import { TextInput } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';


function App() {

  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View>
      <LoginPage/>
      {/* <Text style={styles.txt}>Hello</Text>
      <ActivityIndicator size="large" color="#00ff00" />
      <Button style={styles.btn} 
        onPress={console.log("Hello World")}
        title="Learn More"
        color="#33cc33"
        accessibilityLabel="Learn more about this purple button"
      />

<SafeAreaView>
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
      
    </SafeAreaView>

    <Image
        width={100}
        height={100}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />

      <Image width={100}
        height={100}
        source={require('./assets/animal.jpg')}/> */}
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  txt:{
    backgroundColor:'yellow',
    fontSize:30
  },
  btn:{
    backgroundColor:"green"
  }
})