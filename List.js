import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Dimensions,Image,ScrollView, TouchableOpacity,
    Alert,
    ART,
    TouchableHighlight,
    ListView,
} from 'react-native';
import ScrollVertical from './scroll'
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";
let widthScreen = Dimensions.get('window').width;
let {width, height} = Dimensions.get('window');
const dataArray = [
    {
        title: '降价了',
    },
    {
        title: '全场五折',
    },
    {
        title: '打到骨折',
    }
]
let ImageData={
    "data":
    [
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"你那一笑倾国倾城"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"那里记录了最唯美的爱情故事"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"我怎么是个剩女"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"生命中最后的四分钟"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"我们都需要治疗"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"这是一个美好的开始"
      },
      {
        "img":"http://lpf.yywlx.cn/DSC_6400.jpg",
        "title":"最后的晚宴"
      }
    ]
  }

let texts=[
  "好吃不贵",
  "经济实惠",
  "欢迎品尝"
]
export default class List extends Component{

    static defaultProps = {
        //每隔多少秒执行一次
        duration:2000
    }
    constructor(props) { // 构造函数
        super(props);
        this.state = {
            currentPage: 0
        };
    }
    // 开始拖拽时调用
    onScrollerBeginDrag(){
        // 停止定时器
        clearInterval(this.timer);
    }
    // 停止拖拽时调用
    onScrollEndDrag(){
        // 开启定时器
        this.startTime();
 
    }
    // 复杂操作
    componentDidMount() {
    // debugger
        // 开启定时器
        this.startTime();
        console.log(this.props)
    }
    handlePress(){
        console.log("a")
    }
    // 开启定时器
    startTime(){
        // 1.拿到scrollerView
        let scrollerView = this.refs.scrollerView;
        let imageCount = ImageData.data.length;
        // 2.添加定时器
        // 2.1 设置圆点
        let activePage = 0;
        this.timer = setInterval(() => {
            // 2.2 判断
            if((this.state.currentPage+1) >= imageCount){
                activePage = 0;
            }else {
                activePage = this.state.currentPage+1;
            }
            // 2.3 更新状态机
            this.setState({
                // 当前页
                currentPage: activePage
            })
 
            // 2.4 让scrollerVeiw滚动起来
            let offsetX = activePage * width;
            scrollerView.scrollTo({x: offsetX, y:0, animated:true});
 
 
        }, this.props.duration);
 
    }
    render(){
        let array = [{ content: '' }];
        if (dataArray && dataArray.length > 0) {
            array = [];
            for (let item of dataArray) {
                array.push({ content: item.title});
            }
        }
       
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
           <Text style={{fontSize:20}}>营养餐系统</Text>
         </View> 
         <View style={styles.yjstyle}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FeedBack')}>
          <Image style={{width:40,height:40,margin:1}} source={{uri:'http://lpf.yywlx.cn/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png'}}/>
          </TouchableOpacity>
         </View>
        </View>
         <View style={styles.circulateViewStyle}>
                <ScrollView ref="scrollerView"
                            style={styles.scrollViewStyle}
                            // 水平滚动
                            horizontal={true}
                            // 是否显示水平滚动条
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            // 安页滚动
                            pagingEnabled={true}
 
                            //滚动动画结束时调用此函数
                            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
 
                            //开始拖拽
                            onScrollBeginDrag={(e)=>this.onScrollerBeginDrag(e)}
 
                            //停止拖拽
                            onScrollEndDrag={(e)=>this.onScrollEndDrag(e)}
                >
 
                    {this.creatImages()}
 
                </ScrollView>
 
                {/*底部页面指示器*/}
                <View style={styles.pageViewStyle}>
 
                    {/*返回5个圆点*/}
                    {this.renderPageIndex()}
                </View>
 
            </View>
            <View style={{ padding: 5, paddingBottom: 0, backgroundColor: '#FFFFFF' ,marginTop:3}}>
                <TouchableOpacity onPress={() => {
                    // if (dataArray && dataArray.length > 0) {
                    //    Log(dataArray[this.index].title)
                    // }
                }} style={{ flexDirection: 'row', backgroundColor: "#FFFFFF", alignItems: 'center', borderRadius: 8, paddingLeft: 5, paddingRight: 5 }}>
                    <Text style={{ fontSize: 14 }} fontWeight={'bold'}>公告</Text>
                    <View style={{ marginLeft: 5, marginRight: 8, backgroundColor: '#b01638', borderRadius: 8, width: 24, alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>新</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <ScrollVertical
                            onChange={(index => {
                                this.index = index;
                            })}
                            enableAnimation={true}
                            data={array}
                            delay={2500}
                            duration={1000}
                            scrollHeight={34}
                            scrollStyle={{ alignItems: 'flex-start' }}
                            textStyle={{ color: 'red', fontSize: 14}} />
                    </View>
                    <View style={{ height: 14, width: 1, backgroundColor: 'gray' }} />
                    <Text style={{ color: 'black', paddingLeft:10, fontSize: 14 }}>查看</Text>
                </TouchableOpacity>
            </View>

       <View style={styles.abc}>
           <View style={styles.abc_item}>
           <Text style={styles.fontstyle} >每日签到</Text>
           </View>
           <View style={styles.abc_item}>
         <Text style={styles.fontstyle}> 健康数据</Text>
           </View>
           <View style={styles.abc_item}>
          <Text style={styles.fontstyle}>营养团队</Text>
           </View>
           <View style={styles.abc_item}>
          <Text style={styles.fontstyle}>营养计算器</Text>
           </View>
           <View style={styles.abc_item}>
         <Text style={styles.fontstyle}>区域拼餐</Text>
           </View>
           <View style={styles.abc_item}>
         <Text style={styles.fontstyle}>
         充值
         </Text>
           </View>
       </View>
      </View>
      )
    }
    creatImages(){
 
        //数组
        let allImage = [];
    
        //拿到图形数组
        let imageArrs = ImageData.data;
    
        //遍历
        for (var i = 0; i < imageArrs.length; i++){
    
            //取出每一个单独的对象
            var imageItem = imageArrs[i];
    
            //创建组件放入数组
            allImage.push(
                <Image key={i} source={{uri: imageItem.img}} style={styles.imageStyle} >
                </Image>
            );
        }
    
        // 返回数组
        return allImage;
    }
    
    // 返回页面指示器的圆点
    renderPageIndex(){
        // 数组
        let indicatorArr = [];
    
        //拿到图形数组
        let imageArrs = ImageData.data;
    
        //样式
        var style;
    
        //遍历
        for (var i = 0; i < imageArrs.length; i++){
    
            // 判断
            style = (i==this.state.currentPage) ? {color: 'orange'} : {color: '#E8E8E8'}
    
    
            //放入圆点
            indicatorArr.push(
                // 多个样式使用[]数组来放
                <Text key={i} style={[{fontSize:25}, style]}>•</Text>
            );
        }
        //返回
        return indicatorArr;
    }
    // 当一帧滚动结束的时候调用
    onAnimationEnd(e){
        // 1.求出水平方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        // 2.求出当前的页数         floor函数 取整
        var currentPage = Math.floor(offsetX / width);
    
        // 3.更新状态机
        this.setState({
            // 当前页
            currentPage: currentPage
        })
    
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
       scrollStyle:{
        margin:10,
        height:150,
       // backgroundColor:"#FFDEAD",
    },
    scrollStyles:{
      margin:10,
      height:20,
     // backgroundColor:"#FFDEAD",
  },
    imageStyle:{
      margin:10,
      marginTop:0,
      width:(widthScreen - 40),
      height:(150 - 20),
      backgroundColor:"#B0C4DE",
  },
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
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
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
  circulateViewStyle: {
 
    marginTop:20,
    height:250,
    width:width,
},
scrollViewStyle:{

},

imageStyle: {
    width: width,
    height: 250
},
pageViewStyle: {
    height:25,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:width/2.4

},
abc:{
    flexDirection:'row',
    backgroundColor:'#F0f0f0',
    width:width,
    height:300,
    justifyContent:'center',
    flexWrap:'wrap'
},
abc_item:{
    margin:5,width:160,height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#00FFFF",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
},
fontstyle:{
   fontSize:28,
   position:'absolute',

}
})
