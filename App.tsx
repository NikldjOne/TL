/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import { useColorScheme } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/Store/store.ts';
import ModalNews from './src/Screens/Home/ModalNews';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark'
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="News" component={Home} />
          <Stack.Group screenOptions={{presentation: 'modal'}}>
            <Stack.Screen
              name="ModalNews"
              component={ModalNews}
              options={{headerShown: false}}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
