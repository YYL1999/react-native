/**
 * Sample React Native App
 * Created by leipengfei 
 * 2018.11.11
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {TabBarIOS} from 'react-native'
import List from './List'
import Account from './Account'
import Edit from'./Edit'
import Home from './home'
import SplashScreen from 'react-native-splash-screen';
//import TabNavigator from 'react-native-tab-navigator';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTabItem:"list"     // 预设变量，记录当前点击的item
    }
  }
  componentDidMount() {
    //SplashScreen.hide();
}
  render() {
    return (
      <View style={styles.container}>
       <TabBarIOS
                        style={{height:49, width: '100%'}}
                        tintColor="gray"  //被选中标签的颜色
                       // barTintColor="black"
                        translucent={true}  // TabBarIOS不需要半透明效果
                    >
                        <TabBarIOS.Item
                            title="主页"
                            //systemIcon="bookmarks"  // 系统图标(bookmarks)
                            icon={require('./pictures/home.png')}
                            onPress={() => {this.setState({selectedTabItem:"list"})}}
                            selected={this.state.selectedTabItem == "list"}
                        >
                                <List />
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="contacts"  // 系统图标(contacts)
                            onPress={() => {this.setState({selectedTabItem:"home"})}}
                            selected={this.state.selectedTabItem == "home"}
                        >
                           <Home />
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="contacts"  // 系统图标(contacts)
                            onPress={() => {this.setState({selectedTabItem:"edit"})}}
                            selected={this.state.selectedTabItem == "edit"}
                        >
                           <Edit />
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="downloads"  // 系统图标(downloads)
                            onPress={() => {this.setState({selectedTabItem:"account"})}}
                            selected={this.state.selectedTabItem == "account"}
                        >
                           <Account />
                        </TabBarIOS.Item>
                    </TabBarIOS>
          {/* <TabNavigator>
                <TabNavigator.Item title='首页'
                                   selected={this.state.selectedIndex == "list"}
                                   titleStyle={{color:'#9d9d9d'}}
                                   selectedTitleStyle={{color:'#ed7f30'}}
                                   badgeText='首页'
                                   allowFontScaling={false}
                                   renderIcon={()=>
                                       <Image source={{uri:'http://lpf.yywlx.cn/home.png'}} style={styles.iconStyle}/>
                                   }
                                   renderSelectedIcon={()=>
                                       <Image source={{uri:'http://lpf.yywlx.cn/home.png'}} style={styles.iconStyle}/>
                                   }
                                   onPress={()=>
                                       this.setState({
                                           selectedIndex:'list'
                                       })
                                   }
                >
                    <List />
                </TabNavigator.Item>

                <TabNavigator.Item title='我的'
                                   selected={this.state.selectedIndex == "home"}
                                   titleStyle={{color:'#9d9d9d'}}
                                   selectedTitleStyle={{color:'#ed7f30'}}
                                   badgeText={10}
                                   renderIcon={()=>
                                       <Image source={{uri:'http://lpf.yywlx.cn/home.png'}} style={styles.iconStyle}/>
                                   }
                                   renderSelectedIcon={()=>
                                       <Image source={{uri:'http://lpf.yywlx.cn/home.png'}} style={styles.iconStyle}/>
                                   }
                                   onPress={()=>
                                       this.setState({
                                           selectedIndex:'home'
                                       })
                                   }
                >
                   <Home />

                </TabNavigator.Item>
            </TabNavigator>           */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
   height:'100%',
   width:'100%',
   flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // }
});
