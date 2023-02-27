import React from 'react'
import {View, Text, Button} from 'react-native'


function ProtectedScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Protected Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default ProtectedScreen;