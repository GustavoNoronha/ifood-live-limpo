import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from './pages/Dashboard';


const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Início: {
        screen: createStackNavigator(
          {
            Dashboard,
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="home" size={30} color={tintColor} />
              ),
            },
          }
        ),
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#333',
        inactiveTintColor: 'gray',
      },
    }
  )
);

export default Routes;
