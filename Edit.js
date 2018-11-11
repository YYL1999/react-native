import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
export default class Edit extends Component{
    render(){
      return(
        <View style={styles.childViewStyle}>
        <Text>
          编辑部分
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