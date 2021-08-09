import React, { Component }  from 'react'
// 引入 Swiper, SwiperItem 组件
import {View, Button, Text} from '@tarojs/components'
import Taro from '@tarojs/taro'




class MyButton extends Component {
  Step1(){
    Taro.navigateTo({url:'../diagnosises/DStep1'})
  }
  Step2(){
    Taro.navigateTo({url:'../diagnosises/DStep2'})
  }
  Step3(){
    Taro.navigateTo({url:'../diagnosises/DStep3'})
   }
  render () {
    return (
    <View className='index' class="btn">
      <Button class='btn1' size="mini" onClick={this.Step1.bind(this)} >国医堂</Button>
      <Button class='btn2' size="mini" onClick={this.Step2.bind(this)} >预约挂号</Button>
      <Button class='btn3' size="mini"  onClick={this.Step3.bind(this)}>智能导诊</Button>

      </View>
    )
  }
}
export default MyButton
