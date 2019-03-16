import React, {Component} from 'react';

import { StyleSheet, Text, View,Image} from 'react-native';
export default class Account extends Component{
  componentDidMount(){
    console.log(this.props)
  }
    render(){
      return(
        <View >
         <View style={{marginTop:42,backgroundColor:"#DCDCDC",height:30}}>
          <Text style={{fontSize:22,textAlign:"center",marginTop:3}}>
            个人中心
          </Text>
        </View>
        <View style={styles.main}>
          <View style={styles.main_item}>
          <View style={{marginBottom:15}}>
            <Image source={{uri:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg"}} style={{width:100,height:100}}/>
          </View>
           <View style={styles.border}>
           <Text style={{fontSize:22}}>
              合作商家
            </Text>
           </View>
          </View>
          <View style={styles.main_item}>
          <View style={{marginBottom:15}}>
            <Image source={{uri:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg"}} style={{width:100,height:100}}/>
          </View>
             <View style={styles.border}>
             <Text style={{fontSize:22}}>
                营养厨房
              </Text>
             </View>
          </View>
        </View>
      </View>
      )
    }
  }
const styles=StyleSheet.create({
   main:{
     display:"flex",
     flexWrap:"wrap",
     flexDirection:'row',
  backgroundColor:'#F0f0f0',
 // width:width,
  height:680,
  justifyContent:'center',
  marginTop:5,
   },
   main_item:{
     marginTop:3,
     justifyContent:"center",
     alignItems:"center",
     width:500,
     height:340
   },
   border:{
     width:140,
    backgroundColor:"#D0D0D0",
    borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            alignItems:"center"
   }
})