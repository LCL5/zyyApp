import { Component } from 'react'
import Taro from "@tarojs/taro";
import { connect } from 'react-redux'
import { View, Button, Text, Image} from '@tarojs/components'
import { AtRadio } from 'taro-ui'


import './index.less'


class Index extends Component {

  toMyPage(){
    Taro.navigateTo({url:'/pages/bodyIdentify/bodyIdentify'})
  }


render(){

  return (
    <View className='index'>
      <view>
        <Image src='https://img2.baidu.com/it/u=1728522718,1340994382&fm=26&fmt=auto&gp=0.jpg' onClick={this.toMyPage.bind(this)}></Image>
      </view>
    </View>

  )
}
}

export default Index

