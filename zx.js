import React,{Component} from 'react'
import {Button,Text,View,StyleSheet,Dimensions,TextInput,Image} from 'react-native'
let widthScreen = Dimensions.get('window').width;
let heightScreen = Dimensions.get('window').height;
export default class Zx extends Component{
    static navigationOptions=((props)=>{
        return {
          title:props.navigation.state.params.name
        }
      });
    render(){
        const data=this.props.navigation.state.params;
        console.log(data)
        return(
            <View>
                <View>
                  <Image source={{uri:"http://lpf.yywlx.cn/jm.png"}} style={{width:widthScreen,height:400}} />
                </View>
                <View style={styles.lt}>
                  <View style={styles.lt_items}>
                  <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value=""
        enablesReturnKeyAutomatically="true"
      />
                  </View>
                  <View style={styles.lt_item}>
                      <Image source={{uri:'http://lpf.yywlx.cn/%E8%A1%A8%E6%83%85.png'}} style={{width:30,height:30,marginTop:5}}/>
                  </View>
                  <View style={styles.lt_item3}>
                      <Button title="发送" />
                  </View>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  lt:{
      position:'absolute',
      marginTop:heightScreen-150,
      width:widthScreen,
      height:100,
      backgroundColor:'#F0f0f0',
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
  },
  lt_items:{
      flexGrow:2,
  },
//  lt_item3:{
//      width:50,
//      height:30,
//      borderColor:"black",
//      borderWidth:1,
//      marginTop:5
//  }
})