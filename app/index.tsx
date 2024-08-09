import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./(app)/homeScreen";
import LoginScreen from "./loginScreen";
import SignInScreen from "./signInScreen";
import { VerifyPhoneScreen, PersonalDetailsScreen, EmailInputScreen, VerifyEmailScreen, DOBInputScreen } from "./signInScreen";

const Stack = createStackNavigator();

export default function Index() {
  return (
   
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhoneScreen} />
        <Stack.Screen name="PersonalDetailsScreen" component={PersonalDetailsScreen} />
        <Stack.Screen name="EmailInputScreen" component={EmailInputScreen} />
        <Stack.Screen name="DOBInputScreen" component={DOBInputScreen} />
        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />

      </Stack.Navigator>
    
    
  );
}
