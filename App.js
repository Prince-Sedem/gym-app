import * as React from 'react';
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import HomeScreen from './screens/Tabs/HomeScreen';
import HealthTipsScreen from './screens/Tabs/HealthTipsScreen';
import ProfileScreen from './screens/Tabs/ProfileScreen';
import { Image } from 'react-native';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  const [box, setBox] = useState(false); 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn}
         onPress={() => setBox(!box)} 
         title="Box"
         isChecked={box} 
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={TabNavigator} 
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home"
     screenOptions={{
      tabBarActiveTintColor: "#22c55e",
      tabBarInactiveTintColor: "#5a1c2c",
      tabBarStyle: {
        padding: 2,
        margin: 2,
      }  

     }} >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{title:"Home", tabBarIcon:({focused}) =>  
      (<Image source={require('./assets/images/home.png')} 
      style={{width: 30, height: 30, tintColor: focused? "#22c55e":"#5a1c2c" }} />),
      }} 
      />
      <Tab.Screen 
      name="Health Tips" 
      component={HealthTipsScreen}
      options={{title:"Health Tips", tabBarIcon:({focused}) =>  
      (<Image source={require('./assets/images/heart.png')} 
      style={{width: 30, height: 30, tintColor: focused? "#22c55e":"#5a1c2c" }} />),
      }}       
      />
      <Tab.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{title:"Profile", tabBarIcon:({focused}) =>  
      (<Image source={require('./assets/images/user.png')} 
      style={{width: 30, height: 30, tintColor: focused? "#22c55e":"#5a1c2c" }} />),
      }}      
      />

    </Tab.Navigator>
  );
}

export default App;


