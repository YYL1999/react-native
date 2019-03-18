// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Account from './Account'
import Home from "./home"
import BottomTabNavigator from './cs'
import List from './List'
import News from './news'
import FeedBack from './feedBack'
import Register from './register'
import Zx from './zx'
import Cp from './cp'
const RootStack = createStackNavigator(
  {
    Cs:{
      screen:BottomTabNavigator,
      navigationOptions:{
        header:null,
        headerBackTitle:"返回"
      }
    },
   Home:Home,
    News:{
      screen:News,
      navigationOptions:{
        title:"消息",
        
      }
    },
    FeedBack:{
      screen:FeedBack,
      navigationOptions:{
        title:"意见反馈"
      }
    },
    Register:{
      screen:Register,
      navigationOptions:{
        title:"注册"
      }
    },
    Zx:{
      screen:Zx,
    },
    Cp:{
      screen:Cp,
      navigationOptions:{
        title:'我的餐谱'
      }
    },
   },
   
  {
    initialRouteName: 'Cs',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
