import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/login';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
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
