import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
export default class List extends Component{
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
