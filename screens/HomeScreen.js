import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import TouchID from 'react-native-touch-id';


const App = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container} >
      <Text>Authenticate to Continue</Text>
      <Button 
      onPress={()=>navigation.navigate("ProtectedScreen")}
      title='Click Here'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
