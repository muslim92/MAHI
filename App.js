import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import LoadingScreen from "./components/loadingScreen";
import BottomTabBarScreen from "./components/bottomTabBarScreen";
import AddNewMethodScreen from "./screens/addNewMethod/addNewMethodScreen";
import ProfilePicScreen from "./screens/auth/profilePicScreen";
import SigninScreen from "./screens/auth/signinScreen";
import SignupScreen from "./screens/auth/signupScreen";
import EditPartnerPreferencesScreen from "./screens/editPartnerPreferences/editPartnerPreferencesScreen";
import EditPersonalDetailScreen from "./screens/editPersonalDetail/editPersonalDetailScreen";
import FilterScreen from "./screens/filter/filterScreen";
import MatchingResultsSceen from "./screens/matchingResults/matchingResultsSceen";
import OnboardingScreen from "./screens/onboarding/onboardingScreen";
import PaymentContinueScreen from "./screens/paymentContinue/paymentContinueScreen";
import PaymentSuccessfullScreen from "./screens/paymentSuccessfull/paymentSuccessfullScreen";
import PersonDetailScreen from "./screens/personDetail/personDetailScreen";
import ProfileDetailScreen from "./screens/profileDetail/profileDetailScreen";
import SelectPaymentMethodScreen from "./screens/selectPaymentMethod/selectPaymentMethodScreen";
import SettingsScreen from "./screens/settings/settingsScreen";
import SortByScreen from "./screens/sortBy/sortByScreen";
import SplashScreen from "./screens/splashScreen";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ProfilePic" component={ProfilePicScreen} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBarScreen} options={{ ...TransitionPresets.DefaultTransition }} />
        <Stack.Screen name="SelectPaymentMethod" component={SelectPaymentMethodScreen} />
        <Stack.Screen name="AddNewMethod" component={AddNewMethodScreen} />
        <Stack.Screen name="PaymentContinue" component={PaymentContinueScreen} />
        <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessfullScreen} />
        <Stack.Screen name="PersonDetail" component={PersonDetailScreen} />
        <Stack.Screen name="SortBy" component={SortByScreen} />
        <Stack.Screen name="MatchingResults" component={MatchingResultsSceen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
        <Stack.Screen name="EditPersonalDetail" component={EditPersonalDetailScreen} />
        <Stack.Screen name="EditPartnerPreferences" component={EditPartnerPreferencesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;