import React,{Component} from 'react'
import {Button,View,TextInput,Image} from 'react-native'

export default class FeedBack extends Component{
    render(){
        return(
             <View>
                 <View style={{height:180,marginLeft:110,marginTop:10}}>
                     <Image style={{width:150,height:150}} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg"}}></Image>
                 </View>
                 <View>
                 <TextInput
        style={{height: 60, borderColor: 'gray', borderWidth: 1,width:150,marginLeft:110,borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,}}
        //onChangeText={(text) => this.setState({text})}
        value="请输入您的建议"
      />
                     <Button title="提交反馈"></Button>
                 </View>
             </View>
        )
    }
}