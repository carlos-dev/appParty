import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/login';
import Register from './src/pages/register';
import Main from './src/pages/main';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Main' component={Main} />
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <StackNavigation />
);

export default App;
