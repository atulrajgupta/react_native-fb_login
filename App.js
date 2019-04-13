import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { LoginManager } from "react-native-fbsdk";


export default class App extends Component {

_fbLogin(){
  LoginManager.logInWithReadPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.warn("Login cancelled");
      } else {
        console.warn(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.warn("Login fail with error: " + error);
    }
  );
  
}

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity
       onPress={()=>this._fbLogin()}
       >
         <Text>Login with Facebook</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
}
