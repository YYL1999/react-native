import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
export default class List extends Component{
    componentDidMount(){
        fetch("http://rap2api.taobao.org/app/mock/117063/api/creations",{
          method:'GET',
           headers:{
               'token':'abc'
           } 
        }).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
        })
    }
    render(){
      return(
        <View style={styles.childViewStyle}>
        <Text>
          列表部分
        </Text>
      </View>
      )
    }
  }
const styles=StyleSheet.create({
    childViewStyle:{
        height:'100%',
        width:'100%',
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
       },
})
