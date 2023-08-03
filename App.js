
import React from 'react'
import SearchAcount from './src/Screen_Dat/SearchAcount'
import ItemSearchUser from './src/Component_Dat/ItemSearchUser'
import Notification from './src/Screen_Dat/Notification'
import ItemNotification from './src/Component_Dat/ItemNotification'
import ItemStory from './src/Component_Dat/ItemStory'
import EditProfile from './src/Screen_Dat/EditProfile'
import Search from './src/Screen_Dat/Search'
import ItemSearch from './src/Component_Dat/ItemSearch'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Image
} from 'react-native';


import Welcome from './src/screen_Khoi/Welcome';
import Login from './src/screen_Khoi/Login';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './src/screen_Khoi/SignUp';
import Profile from './src/screen_Khoi/Profile';
import MyPostTab from './src/component_Khoi/MyPostTab';
import ItemPost from './src/component_Khoi/ItemPost';
import Home from './src/screen_Khoi/Home';
import Post from './src/screen_Khoi/Post';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  function SearchComponent() {
    return (
      <Stack.Navigator initialRouteName='Search' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchAccount" component={SearchAcount} />
      </Stack.Navigator>
    )
  }




  const HomeTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let source;

            if (route.name === 'Home') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/home_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/home.png')
            } else if (route.name === 'Profile') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/profile_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/profile.png')
            }
            else if (route.name === 'Post') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/post_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/post.png')
            }
            else if (route.name === 'SearchComponent') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/search_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/search.png')

            }
            else if (route.name === 'Notification') {
              source = focused
                ? require('./src/image_Khoi/iccon_bottomtab/notification_active.png')
                : require('./src/image_Khoi/iccon_bottomtab/notification.png')

            }

            // You can return any component that you like here!
            return <Image source={source} />

          },
          tabBarShowLabel: false,


        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="SearchComponent" component={SearchComponent} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );

  }

  return (



    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="HomeTab" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};







export default App;









