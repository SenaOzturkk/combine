import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Login from './src/components/screens/Login';
import Register from './src/components/screens/Register';
import ForgotPassword from './src/components/screens/ForgotPassword';
import NewPassword from './src/components/screens/NewPassword';
import Activity from './src/components/screens/Activity';
import Category from './src/components/screens/Category';
import Upload from './src/components/screens/Upload';
import Profile from './src/components/screens/Profile';
import Ionic from 'react-native-vector-icons/Ionicons';
import FriendProfile from './src/components/screenComponents/FriendProfile';
import EditProfile from './src/components/screenComponents/EditProfile';
import PostDetail from './src/components/screenComponents/PostDetail';
import Votes from './src/components/screenComponents/Votes';
import InitialScreen from './src/components/screens/InitialScreen';
import MyPosts from './src/components/screenComponents/MyPosts';
import AskedQuestion from './src/components/screenComponents/AskedQuestion';
import SpecialMessage from './src/components/screenComponents/SpecialMessage';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Activity') {
              iconName = focused
                ? 'ios-notifications-sharp'
                : 'ios-notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
            } else if (route.name === 'Upload') {
              iconName = focused ? 'ios-camera' : 'ios-camera-outline';
            } else if (route.name === 'Category') {
              iconName = focused ? 'ios-grid' : 'ios-grid-outline';
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="Upload" component={Upload} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PostDetail" component={PostDetail} />
        <Stack.Screen name="Votes" component={Votes} />
        <Stack.Screen name="MyPosts" component={MyPosts} />
        <Stack.Screen name="AskedQuestion" component={AskedQuestion} />
        <Stack.Screen name="SpecialMessage" component={SpecialMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
