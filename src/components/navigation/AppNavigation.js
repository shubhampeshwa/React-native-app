import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../../constants/NavigationConst';
import ListScreen from '../screens/list-screen';
import DetailScreen from '../screens/detail-screen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={Screens.ListScreen} component={ListScreen} />
        <Stack.Screen name={Screens.DetailScreen} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}