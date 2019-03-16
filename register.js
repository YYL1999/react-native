import React,{Component} from 'react'
import {Button,TextInput,View,Image,Text,StyleSheet,Dimensions} from 'react-native'
let height = Dimensions.get('window').height;
export default class Register extends Component{
    render(){
        return(
            <View style={{height:height,backgroundColor:'gray'}}>
                <View style={styles.circle}>
                   <Text style={{margin:55}}>上传照片</Text>
                </View>
                <View style={styles.main}>
                   <View style={styles.message}>
                   <Text>手机号码:</Text>
                   </View>
                    <View style={styles.message}>
                    <TextInput
        style={styles.text}
       
      />
                    </View>
                    <View style={styles.message}>
                   <Text>密码:</Text>
                   </View>
                    <View style={styles.message}>
                    <TextInput
        style={styles.text}
       
      />
                    </View>
                    <View style={styles.message}>
                   <Text>验证码:</Text>
                   </View>
                    <View style={styles.message}>
                    <TextInput
        style={styles.text}
       
      />
                    </View>
                </View>
                <View style={styles.ss}>
                    <View style={styles.table}>
                        <Button title="QQ登录"/>
                    </View>
                    <View style={styles.table}>
                        <Button  title="微信登录"/>
                    </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
 text:{
    height: 30, borderColor: 'gray', borderWidth: 1,width:120,borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
 },
 main:{
     display:'flex',
     flexDirection:'row',
     flexWrap:'wrap',
     height:180,
     margin:10
 },
 message:{
     width:150,
     height:60,
     alignItems:'center',
     justifyContent:"center"
 },
 circle:{
     height:150,
     width:150,
     margin:110,
     borderWidth: 1,
          borderTopLeftRadius: 100,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          borderBottomLeftRadius: 100,
 },
 ss:{
     display:'flex',
     flexDirection:'row',
     flexWrap:'wrap',
     marginLeft:80
 },
 table:{
     width:90,
     height:30,
     alignItems:'center',
     justifyContent:'center',
     margin:15
 }
})