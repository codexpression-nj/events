import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './components/SignIn';
import EventList from './components/EventList';
import Signup from './components/SignUp';
import NoEventsFound from './components/NoEventsFound';
import Landing from './components/Landing';
import ForgotPassword from './components/ForgotPassword';
import Categories from './components/Categories';

export default function App() {
  return (
  
        <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="List" component={EventList} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NoEvents" component={NoEventsFound} />
      </Stack.Navigator>
        </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
