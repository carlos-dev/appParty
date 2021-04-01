import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Main from './src/pages/Main';
import PartyDetail from './src/pages/PartyDetail';

import store from './src/store';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="PartyDetail" component={PartyDetail} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <Provider store={store}>
    <StackNavigation />
  </Provider>
);

export default App;
