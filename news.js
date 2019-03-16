import React,{Component} from 'react'
import { Button, View, Text ,Image} from 'react-native';
export default class News extends Component{
    render(){
        return (
            <View style={{marginTop:5}}>
               <View style={{height:150}}>
                 <View style={{height:20,marginLeft:10}}>
                    <Text style={{fontSize:16}}>
                      餐饮最新状况  
                    </Text>
                  </View> 
                 <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                  <View style={{marginLeft:5,width:150,marginLeft:15}}>
                  <Image style={{width:100,height:100}} source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg'}}>
                      </Image>     
                  </View>
                  <View style={{marginLeft:5,marginTop:10}}>
                      <Text>
                          已经下单
                      </Text>
                  </View>
                 </View>   
               </View> 
               <View style={{height:150}}>
                 <View style={{height:20,marginLeft:10}}>
                    <Text style={{fontSize:16}}>
                      未回复消息  
                    </Text>
                  </View> 
                 <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                  <View style={{marginLeft:5,width:150,marginLeft:15}}>
                  <Image style={{width:100,height:100}} source={{uri:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg'}}>
                      </Image>     
                  </View>
                  <View style={{marginLeft:5,marginTop:10}}>
                      <Text>
                          已经下单
                      </Text>
                  </View>
                 </View>   
               </View> 
            </View>
        )
    }
}