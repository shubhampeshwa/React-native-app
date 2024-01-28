/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Children } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import AppNavigation from './components/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './store';

function App(){
  const isAuth = true
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'red'}}>
    {isAuth&&<AppNavigation/>}
      </View>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
