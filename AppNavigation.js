import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {
  SplashLoading,
  RegisterOrLoginScreen,
  Register,
  SelectDateOfBirth,
  DateOfDelivery,
  LastPeriodDate,
  ChildbirthDate,
  ConceptionDate,
  EnterPersonalDetail,
  BestTripPampers,
  JoinFamily,
  RegisterComplete,
  Login,
  ForgotPassword,
  forgotPasswordMsg,
  PrivacyPolicy,
  AboutBabyDetail,
  BirthOrPersumedDate
} from './src/Screens';

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName="SplashLoading">
      <AuthStack.Screen
        name="SplashLoading"
        component={SplashLoading}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterOrLogin"
        component={RegisterOrLoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SelectDateOfBirth"
        component={SelectDateOfBirth}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="DateOfDelivery"
        component={DateOfDelivery}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LastPeriodDate"
        component={LastPeriodDate}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ChildbirthDate"
        component={ChildbirthDate}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ConceptionDate"
        component={ConceptionDate}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="EnterPersonalDetail"
        component={EnterPersonalDetail}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="BestTripPampers"
        component={BestTripPampers}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="JoinFamily"
        component={JoinFamily}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="RegisterComplete"
        component={RegisterComplete}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="forgotPasswordMsg"
        component={forgotPasswordMsg}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="AboutBabyDetail"
        component={AboutBabyDetail}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="BirthOrPersumedDate"
        component={BirthOrPersumedDate}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

class AppNavigation extends Component {
  render() {
    return <Auth />;
  }
}

export default AppNavigation;
