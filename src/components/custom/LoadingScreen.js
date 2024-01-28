import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import { Colors } from '../../constants';


type P = {
  show: boolean, 
  native: Boolean, 
}

/**
 * @Componnent Loader
 * @description show loading screen
 * @returns 
 */

const Loader = ({ show, native }: P) => {

  if(!show) return null;

  if(native) return <ActivityIndicator size={'large'} color={'#3C5624'}/>;
      
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <ActivityIndicator size={'large'} color={'#3C5624'}/>
      </View>
    </View>
  );
}

Loader.defaultProps = {
  show: false, 
  native: false, 
}

export default Loader;

const styles = StyleSheet.create({
  container: { 
    height: '100%',  
    width: '100%',  
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    backgroundColor: '#00000066' 
  }, 
  inner: { 
    height: 80, 
    width: 80, 
    backgroundColor:'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 6 
  }
})
