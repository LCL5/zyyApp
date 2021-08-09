import { Component } from 'react'
import { connect } from 'react-redux'
import { Label, View } from '@tarojs/components'
import './myregister.less'
import "taro-ui/dist/style/index.scss";
import { AtList, AtListItem } from 'taro-ui'



class MyRegister extends Component {

  render(){
    return(
       <View className='zhengti'>
         <View className='card'>
            <View><Label>就诊人：</Label></View>
            <View><Label>就诊机构：</Label></View>
            <View><Label>就诊科室：</Label></View>
            <View><Label>就诊医师：</Label></View>
            <View><Label>预约时间：</Label></View>
            <Label className='lable1'>专家号</Label>
         </View>
       </View>
      
    )
  }
}

export default MyRegister;