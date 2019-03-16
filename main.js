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


export default class Main extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTabItem:"list"     // 预设变量，记录当前点击的item
    }
  }
  componentDidMount() {
    //SplashScreen.hide();
    console.log(this.props)
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
                            systemIcon="bookmarks"  // 系统图标(bookmarks)
                            // icon={require('./pictures/home.png')}
                            onPress={() => {this.setState({selectedTabItem:"list"})}}
                            selected={this.state.selectedTabItem == "list"}
                        >
                                <List navigate={this.props.navigation}/>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="contacts"  // 系统图标(contacts)
                            onPress={() => {this.setState({selectedTabItem:"home"})}}
                            selected={this.state.selectedTabItem == "home"}
                        >
                           <Home navigate={this.props.navigation}/>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="contacts"  // 系统图标(contacts)
                            onPress={() => {this.setState({selectedTabItem:"edit"})}}
                            selected={this.state.selectedTabItem == "edit"}
                        >
                           <Edit navigate={this.props.navigation}/>
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            systemIcon="downloads"  // 系统图标(downloads)
                            onPress={() => {this.setState({selectedTabItem:"account"})}}
                            selected={this.state.selectedTabItem == "account"}
                        >
                           <Account navigate={this.props.navigation}/>
                        </TabBarIOS.Item>
                    </TabBarIOS>
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
