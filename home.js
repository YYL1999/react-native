import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
let data=[
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
  {
    imgurl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg",
    message:"只见风景美如画，可我只能一句卧槽行天下",
    rd:"很热",
    pll:"999+",
    dzs:"1000+"
  },
]
export default class home extends Component{
    render(){
      return(
        <View >
        <View style={{marginTop:42,backgroundColor:"#DCDCDC",height:30}}>
          <Text style={{fontSize:22,textAlign:"center",marginTop:3}}>
            营养社区
          </Text>
        </View>
        <View style={styles.abc}>
          <View style={styles.main}>
            <Text style={styles.text}>
              咨询
            </Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.text}>
            活动
            </Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.text}>
            周边
            </Text>
          </View>
        </View>
        <View style={{marginTop:5,flex: 1,
        flexDirection: 'row',height:132
        }}>
         <View style={{marginLeft:5}}>
         <Image style={{height:127,width:200}} source={{uri:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=534858419,2528258774&fm=200&gp=0.jpg"}} />
         </View>
         <View style={{marginLeft:5,width: 160, height: 127, backgroundColor: 'powderblue'}}>
         <Text style={{fontSize:16,lineHeight:20}}>
           只见风景美如画，可我只能一句卧槽行天下
         </Text>
         </View>
        </View>
        <View style={styles.pl}>
        <View style={styles.pl_item}>
            <Text>
               热度
            </Text>
          </View><View style={styles.pl_item}>
            <Text>
              评论量
            </Text>
          </View>
          <View style={styles.pl_item}>
            <Text>
              点赞数
            </Text>
          </View>
        </View>
      </View>
      )
    }
  }
const styles=StyleSheet.create({
 abc:{
  flexDirection:'row',
  backgroundColor:'#F0f0f0',
 // width:width,
  height:120,
  justifyContent:'center',
  flexWrap:'wrap',
  marginTop:3
 },
 main:{
  margin:8,width:100,height:100,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:"#D0D0D0",
  borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
 },
 text:{
   fontSize:24
 },
 pl:{
  flexDirection:'row',
  backgroundColor:'#F0f0f0',
 // width:width,
  height:35,
  justifyContent:'center',
  flexWrap:'wrap',
  marginTop:135
 },
 pl_item:{
  width:105,height:30,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:"#D0D0D0",
  borderColor:"red",
  margin:3
 }
})