import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Account from '../pages/Account';
import Play from '../pages/Play';
import Search from '../pages/Search';
import CustomTabIcon from './CustomTabIcon';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#995BFF',
      tabBarInactiveTintColor: '#060047',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        height: 50,
        paddingLeft:20,
        paddingBottom: 0,
        // Align the tabs without space between them
        justifyContent: 'flex-end',  // Aligns items towards the center
      },
      tabBarItemStyle: {
        width:10,
        alignItems: 'center',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <CustomTabIcon
            focused={focused}
            icon={require('../assets/tab-icons/home.png')}
            label="Home"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({focused}) => (
          <CustomTabIcon
            focused={focused}
            icon={require('../assets/tab-icons/search.png')}
            label="Search"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Play"
      component={Play}
      options={{
        tabBarIcon: ({focused}) => (
          <CustomTabIcon
            focused={focused}
            icon={require('../assets/tab-icons/play.png')}
            label="Play"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: ({focused}) => (
          <CustomTabIcon
            focused={focused}
            icon={require('../assets/tab-icons/profile.png')}
            label="Account"
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default BottomTab;
