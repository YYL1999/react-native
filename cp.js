import React,{Component} from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'
let widthScreen = Dimensions.get('window').width;
let heightScreen = Dimensions.get('window').height;
export default class Cp extends Component{
    render(){
        return(
            <View>
             <View style={styles.zero}>
               <View style={styles.first}>
                   <Text>3.10</Text>
               </View>
               <View style={styles.firsts}>
                   <View style={styles.second}>
                      <View style={styles.third}>
                        <Text>麻辣香锅</Text>
                      </View>
                      <View style={styles.third}>
                      <Text>麻辣香锅</Text> 
                      </View>
                      <View style={styles.third}>
                      <Text>麻辣香锅</Text>
                      </View>
                      <View style={styles.third}>
                      <Text>麻辣香锅</Text>
                      </View>
                   </View>
                   <View style={styles.seconds}>
                   <View style={styles.thirds}>
                   <Text>150g</Text>
                    </View>
                    <View style={styles.thirds}>
                    <Text>150g</Text>
                    </View>
                    <View style={styles.thirds}>
                    <Text>150g</Text>
                    </View>
                    <View style={styles.thirds}>
                    <Text>150g</Text>
                    </View>
                   </View>
               </View>
             </View>
             <View style={styles.yl}>
               <View style={styles.yls}>
                  <View style={styles.ylss}>
                      <Text>鸡腿</Text>
                  </View>
                  <View style={styles.ylss}>
                      <Text>好吃就行</Text>
                  </View>
               </View> 
               <View style={styles.yls}>
               <View style={styles.yls}>
                  <View style={styles.ylss}>
                      <Text>鸡腿</Text>
                  </View>
                  <View style={styles.ylss}>
                      <Text>好吃就行</Text>
                  </View>
               </View> 
               </View> 
               <View style={styles.yls}>
               <View style={styles.yls}>
                  <View style={styles.ylss}>
                      <Text>鸡腿</Text>
                  </View>
                  <View style={styles.ylss}>
                      <Text>好吃就行</Text>
                  </View>
               </View> 
               </View> 
               <View style={styles.yls}>
               <View style={styles.yls}>
                  <View style={styles.ylss}>
                      <Text>鸡腿</Text>
                  </View>
                  <View style={styles.ylss}>
                      <Text>好吃就行</Text>
                  </View>
               </View> 
               </View> 
             </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
  zero:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      width:widthScreen,
      height:100
  },
  first:{
    alignItems:'center',
    justifyContent:'center'
  },
  firsts:{
      flexGrow:2,
      display:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      alignItems:'center',
      justifyContent:'center',
      marginTop:5
  },
  second:{
     flexGrow:2,
     display:'flex',
     flexDirection:"column",
     flexWrap:"wrap",
     alignItems:'center',
      justifyContent:'center',

  },
  seconds:{
    display:'flex',
     flexDirection:"column",
     flexWrap:"wrap",
     alignItems:'center',
      justifyContent:'center',

  },
  yl:{
      display:'flex',
      flexDirection:'column',
      flexWrap:'wrap',
      width:widthScreen,
      height:300
  },
  yls:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center',
      justifyContent:'center'

  },
  ylss:{
    alignItems:'flex-start',
    justifyContent:'center',
     width:160
  }
})