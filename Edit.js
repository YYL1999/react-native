import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,Image} from 'react-native';
const pt=[
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科",
    itr:"大佬，985，211，双一流",
    id:"55"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科",
    itr:"大佬，985，211，双一流",
    id:"553"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科",
    itr:"大佬，985，211，双一流",
    id:"558"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科",
    itr:"大佬，985，211，双一流",
    id:"53"
  },
]
const mxb=[
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科a",
    itr:"大佬，985，211，双一流",
    id:"55"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科a",
    itr:"大佬，985，211，双一流",
    id:"553"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科a",
    itr:"大佬，985，211，双一流",
    id:"558"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科a",
    itr:"大佬，985，211，双一流",
    id:"53"
  },
]
const gyrq=[
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科v",
    itr:"大佬，985，211，双一流",
    id:"55"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科v",
    itr:"大佬，985，211，双一流",
    id:"553"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科v",
    itr:"大佬，985，211，双一流",
    id:"558"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科v",
    itr:"大佬，985，211，双一流",
    id:"53"
  },
]
const fyzq=[
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科d",
    itr:"大佬，985，211，双一流",
    id:"55"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科d",
    itr:"大佬，985，211，双一流",
    id:"553"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科d",
    itr:"大佬，985，211，双一流",
    id:"558"
  },
  {
    imgurl:"http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg",
    name:"范登科d",
    itr:"大佬，985，211，双一流",
    id:"53"
  },
]
let data=pt;
let  state="a"
export default class Edit extends Component{
   
    changeSelected(){
     
        state="a"
     
      data=pt
      console.log(data)
    }
    changeSelecteda(){
     state="b"
      data=mxb
      console.log(data)
    }
    changeSelectedb(){
     state="c"
      data=gyrq
      console.log(data)
    }
    changeSelectedc(){
     state="d"
      data=fyzq
      console.log(data)
    }
    render(){
     
      return(
        <View >
        <View style={{marginTop:42,backgroundColor:"#DCDCDC",height:30}}>
          <Text style={{fontSize:22,textAlign:"center",marginTop:3}}>
            营养咨询
          </Text>
        </View>
        <View style={styles.first}>
           <View style={styles.message}>
             <Text style={{fontSize:18}} onPress={this.changeSelected}>
             普通人群
             </Text>
           </View>
           <View style={styles.message} >
             <Text style={{fontSize:18}} onPress={this.changeSelecteda}>
             慢性病
             </Text>
           </View>
           <View style={styles.message} >
             <Text style={{fontSize:18}} onPress={this.changeSelectedb}>
              高压人群
             </Text>
           </View>
           <View style={styles.message} >
             <Text style={{fontSize:18}} onPress={this.changeSelectedc}>
              妇婴专区
             </Text>
           </View>
        </View>
        {/* <View style={{display:"flex",flexDirection:'row',flexWrap:"wrap"}}>
            <View style={{width:130,height:100,marginLeft:4}}>
              <View style={styles.imgs}>
              <Image source={{uri:'http://lpf.yywlx.cn/2017.04.07.chuantian13.jpg'}} style={{height:80,width:80}}/>
              </View>
            </View>
            <View style={{width:150,height:100,marginTop:10}}>
             <Text style={{fontSize:16}}>
               西安上
             </Text>
             
              <Text style={{fontSize:16}}>
                xsaxasxasxxas
              </Text>
            </View>
            <View style={{margin:20,marginTop:40}}>
              <Text style={{fontSize:22}}>
              咨询
              </Text>
            </View>
        </View> */}
        {
          data.map((item,index)=>{
            return (
              <View style={{height:110}}>
               <View style={{display:"flex",flexDirection:'row',flexWrap:"wrap"}}>
              <View style={{width:130,height:100,marginLeft:4}}>
                <View style={styles.imgs}>
                <Image source={{uri:item.imgurl}} style={{height:80,width:80}} key={index}/>
                </View>
              </View>
              <View style={{width:150,height:100,marginTop:10}}>
               <Text style={{fontSize:16}}>
                 {item.name}
               </Text>
               
                <Text style={{fontSize:16}}>
                  {item.itr}
                </Text>
              </View>
              <View style={{margin:20,marginTop:40}}>
                <Text style={{fontSize:22}}>
                咨询
                </Text>
              </View>
          </View>
            </View>
            )
          })
        }
      </View>
      )
    }
  }
const styles=StyleSheet.create({
    first:{
      display:"flex",
      flexWrap:"wrap",
      flexDirection:'row',
      backgroundColor:'#F0f0f0',
     // width:width,
      height:40,
      justifyContent:'center',
     
      marginTop:5
    },
    message:{
      width:90,
      alignItems:'center',
  justifyContent:'center',
    },
    imgs:{
          height:80,
          width:80,
          margin:10
    }
})