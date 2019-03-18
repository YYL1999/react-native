import React,{Component} from 'react'
import {Button,View,TouchableOpacity,Image,Text,StyleSheet} from 'react-native'

export default class User extends Component{
    render(){
        return(
           <View >
              <View style={{marginTop:10}}>
  
  <View style={styles.topstyle} >
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('News')}>
  <Image
    style={{width:40,height:40,margin:2}}
    source={{uri: 'http://lpf.yywlx.cn/message.png'}} 
    
  />
  </TouchableOpacity>
 
   </View> 

  
   <View style={{marginLeft:140,marginTop:-30,}}>
     <Text style={{fontSize:20}}>用户中心</Text>
   </View> 
   <View style={styles.yjstyle}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FeedBack')}>
    <Image style={{width:40,height:40,margin:1}} source={{uri:'http://lpf.yywlx.cn/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png'}}/>
    </TouchableOpacity>
   </View>
  </View>
             <View style={styles.data}>
                 <View style={styles.data_item}>
                 
                  <Image source={{uri:"http://lpf.yywlx.cn/DSC_5569.jpg"}} style={{width:80,height:80,}} ></Image>
            
                 </View>
                 <View style={styles.data_item}>
                     
                     <View style={styles.xj}>
                     <Text onPress={()=>this.props.navigation.navigate('Register')}>范登科</Text>
                     </View>
                 </View>
                 <View style={styles.data_item}>
                     
                     <View style={styles.xj}>
                     <Text>VIP</Text>
                     </View>
                 </View>
             </View>
             <View style={styles.data}>
                 <View style={styles.data_item}>
                     
                     <View style={styles.xj}>
                     <Text onPress={()=>this.props.navigation.navigate('Cp')}>我的菜谱</Text>
                     </View>
                 </View>
                 <View style={styles.data_item}>
                    
                     <View style={styles.xj}>
                     <Text>健康记录</Text> 
                     </View>
                 </View>
                 <View style={styles.data_item}>
                    
                     <View style={styles.xj}>
                     <Text>活动管理</Text>
                     </View>
                 </View>
             </View>
             <View>
                 <View style={{margin:10}}>
                     <Text style={{fontSize:18}}>我的钱包</Text>
                 </View>
                 <View style={styles.qb}>
                     <View style={styles.qb_item}>
                         <Text>
                           余额800元
                         </Text>
                     </View>
                     <View style={styles.qb_item}>
                         <Text>
                            优惠券4张
                         </Text>
                     </View>
                 </View>
             </View>
             <View style={styles.bottom}>
                 <View style={styles.bottom_item}>
                   <Text>全部订单</Text>
                 </View>
                 <View style={styles.bottom_item}>
                    <Text>收货地址</Text> 
                 </View>
                 <View style={styles.bottom_item}>
                    <Text>退出账户</Text> 
                 </View>
             </View>
           </View>
        )
    }
}
const styles=StyleSheet.create({
    topstyle:{
        marginTop:40,
        marginLeft:10,
        width:45,
        height:45,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderStyle: "solid",
              borderColor: "black",
             
              backgroundColor: "#fff",
              borderWidth: 1,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
    },
    yjstyle:{
        marginTop:-34,
        marginLeft:315,
     
        width:45,
        height:45,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderStyle: "solid",
              borderColor: "black",
             
              backgroundColor: "#fff",
              borderWidth: 1,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
      },
      data:{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',
          marginTop:5
      },
      data_item:{
          justifyContent:'center',
          alignItems:'center',
          width:120,
          height:120,
      },
      xj:{
         width:100,
         height:40,
         backgroundColor: "#fff",
          borderWidth: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          alignItems:"center",
          justifyContent:'center'
      },
      qb:{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap',
          justifyContent:'center'
      },
      qb_item:{
          width:187,
          height:80,
          alignItems:'center',
          justifyContent:'center',
          borderWidth: 1,

      },
      bottom:{
          height:300,
          display:'flex',
          flexDirection:'column',
          flexWrap:'wrap-reverse',
          marginLeft:15
      },
      bottom_item:{
          height:100,alignItems:"flex-start",justifyContent:"center"
      }
})