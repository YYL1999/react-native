import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Dimensions,FlatList} from 'react-native';

const width=Dimensions.get('window').width
const cacheResults={
    nextPage:1,
    items:[],
    total:0
}
class List extends Component{
    constructor(props){
       super(props)
       this.state={
           dataSource:[
//                {
//                    id:'梦在远方',
//                    thumb:'http://lpf.yywlx.cn/20170916002.jpg'
//                },
//                {
//                 id:'梦在远方',
//                 thumb:'http://lpf.yywlx.cn/20170916002.jpg'
//             },
//             {
//              id:'cdscdsc',
//              thumb:'http://lpf.yywlx.cn/20170916002.jpg'
//          },
//          {
//           id:'cdscdsc',
//           thumb:'http://lpf.yywlx.cn/20170916002.jpg'
//       },
//       {
//        id:'cdscdsc',
//        thumb:'http://lpf.yywlx.cn/20170916002.jpg'
//    }
           ],
           isLoadingTail:false
       }
    }
    fetchData(page){
        this.setState({
            isLoadingTail:true
        })
        fetch('http://rap2api.taobao.org/app/mock/117063/api/video'
        ).then((response)=>response.json())
        .then((responseText)=>{
               console.log(responseText)
                if(responseText.success=='true'){
                    let items=cacheResults.items.slice()
                    items=items.concat(responseText.video)
                    cacheResults.items=items;
                    cacheResults.total=responseText.total
                    console.log(cacheResults.items)
                    this.setState({
                        isLoadingTail:false,
                        dataSource:cacheResults.items
                    })
                }
        }).catch((error)=>{
            this.setState({
                isLoadingTail:false
            })
            console.log(error)
        })
    }
    _hasMore(){
       return cacheResults.items.length!==cacheResults.total
    }
    _fetchMoreData(){
        if(!(cacheResults.items.length!==cacheResults.total) || this.state.isLoadingTail==true ){
            return
        }
       const page=cacheResults.nextPage
       this.fetchData(page)
    }
    renderRow(row){
      return(
        <TouchableHighlight>
        <View style={styles.item}>
            <Text style={styles.title}>{row.id}</Text>
            <Image
              source={{url:row.thumb}}
              style={styles.thumb}
              >
              {/* <Icon 
                name='ios-play'
                size={28}
                style={styles.play} /> */}
            </Image>
            <View style={styles.itemFooter} >
              <View style={styles.handleBox}>
                {/* <Icon
                 // name='ios-heart-outline'
                  size={28}
                  style={styles.up} /> */}
                  <Text style={styles.handleText}>
                      喜欢
                  </Text>
              </View>
              <View style={styles.handleBox}>
                {/* <Icon
                  //name='ios-chatbubble-outline'
                  size={28}
                  style={styles.commentIcon} /> */}
                  <Text style={styles.handleText}>
                      评论
                  </Text>
              </View>
            </View>
        </View>
    </TouchableHighlight>
      )
    }

    componentDidMount(){
            console.log("aaa")
             this.fetchData(1)
    }
    render(){
        console.log('bbb')
      return(
        <View style={styles.childViewStyle}>
        <View style={styles.header}>
           <Text style={styles.headerTitle}>
            列表页面
           </Text>
        </View>
        <FlatList
          data={this.state.dataSource}//关联state中的datasource
          renderItem={({item}) => (
           this.renderRow(item)
          )}
          onEndReached={this._fetchMoreData}
          onEndReachedThreshold={20}
          />
      </View>
      )
    }
  }
const styles=StyleSheet.create({
    childViewStyle:{
        height:'100%',
        width:'100%',
         flex: 1,
        //  justifyContent: 'center',
         alignItems: 'center',
       },
       header:{
         paddingTop:35,
         paddingBottom:12,
         backgroundColor:'#ee735c',
         width:'100%'
       },
       headerTitle:{
           color:'#fff',
           fontSize:16,
           textAlign:'center',
           fontWeight:'600'
       },
       item:{
           width:width,
           marginBottom:10,
           backgroundColor:'#fff'
       },
       thumb:{
           width:width,
           height:width*0.5,
           resizeMode:'cover'
       },
       title:{
           padding:10,
           fontSize:18,
           color:'#333'
       },
       itemFooter:{
           flexDirection:'row',
           justifyContent:'space-between',
           backgroundColor:'#eee'
       },
       handleBox:{
           padding:10,
           flexDirection:'row',
           width:width/2-0.5,
           justifyContent:'center',
           backgroundColor:'#fff'
       },
       play:{
           position:"absolute",
           bottom:14,
           right:14,
           width:46,
           height:46,
           paddingTop:9,
           paddingLeft:18,
           backgroundColor:'transparent',
           borderColor:'#fff',
           borderWidth:1,
           borderRadius:23,
           color:'#ed7b66'
       },
       handleText:{
           paddingLeft:12,
           fontSize:18,
           color:'#333'
       },
       up:{
           fontSize:22,
           color:'#333'
       },
       commentIcon:{
           fontSize:22,
           color:'#333'
       }
})
export default List
