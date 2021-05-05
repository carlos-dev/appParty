import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Main from './src/pages/Main';
import PartyDetail from './src/pages/PartyDetail';
import Profile from './src/pages/Profile';

import store from './src/store';
import themes from './src/styles/themes';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Main" component={Main} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name="PartyDetail" component={PartyDetail} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || themes.dark;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StackNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
