import React,{Component} from 'react'
import { StyleSheet, Text, View,Button,Image} from 'react-native';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
// 自定义组件
import Home from './home';
import List from './List';
import Account from "./Account"
import Edit from './Edit'
import User from './user'

const BottomTabNavigator = createBottomTabNavigator(
{
   List: {
      screen: List,
      navigationOptions: {
         tabBarLabel: "首页",
         tabBarIcon: ({focused, tintColor}) => (
             <Image
                 source={focused? {uri:"http://lpf.yywlx.cn/sy.png"} :                                                 {uri:"http://lpf.yywlx.cn/sys.png"}}
                 style={styles.tabBarIconStyle}
             />
         ),
      },
   },

   Home: {
      screen: Home,
      navigationOptions: {
         tabBarLabel: "营养社区",
         tabBarIcon: ({focused, tintColor}) => (
             <Image
                 source={ {uri:"http://qn.ailpf.cn/yyc/sq.png"} }
                 style={styles.tabBarIconStyle}
             />
         )
      }
   },
   Edit: {
    screen: Edit,
    navigationOptions: {
       tabBarLabel: "营养咨询",
       tabBarIcon: ({focused, tintColor}) => (
           <Image
           source={{uri:"http://qn.ailpf.cn/yyc/zx.png"} }
               style={styles.tabBarIconStyle}
           />
       )
    }
 },
 Account: {
    screen: Account,
    navigationOptions: {
       tabBarLabel: "私人订制",
       tabBarIcon: ({focused, tintColor}) => (
           <Image
              source={ {uri:"http://qn.ailpf.cn/yyc/sq.png"} }
               style={styles.tabBarIconStyle}
           />
       )
    }
 },
 User: {
    screen: User,
    navigationOptions: {
       tabBarLabel: "个人中心",
       tabBarIcon: ({focused, tintColor}) => (
           <Image
               source={ {uri:"http://qn.ailpf.cn/yyc/gr.png"} }
               style={styles.tabBarIconStyle}
           />
       )
    }
 },
},


{
   // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
   initialRouteName: "List",
   lazy: true,
   tabBarOptions: {
      inactiveTintColor: "#8F8F8F",
      activeTintColor: "#ED5601",
      labelStyle: {
         fontSize: 11
      }
    }
  }
);
// const Abc=createAppContainer(BottomTabNavigator)
const styles = StyleSheet.create({
   tabBarIconStyle: {
      width: 30,
      height: 30,
   },
});
export default BottomTabNavigator