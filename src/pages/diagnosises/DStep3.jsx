import React, { Component }  from 'react'
// 引入 AtIcon, AtRadio 组件
import {View,Text,Picker,Button } from '@tarojs/components'
import { AtSteps  } from 'taro-ui'
import '../diagnosises/DStep3.less'
import Taro from '@tarojs/taro'


class DStep3 extends Component {
  re(){
    Taro.navigateTo({url:'../diagnosises/DStep1'})
  }
  fi(){
    Taro.navigateTo({url:'../index/index'})
  }
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  onChange (current) {
    this.setState({
      current
    })
  }
  render () {
    const items = [
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '已完成',
        status: 'success'
      },
      {
        title: '进行中',
        status: 'success'
      }
    ]
    return (

      <View >
        <view > <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
        /></view>
        <view className="f3">
          <Button class="reback" size="mini" onClick={this.re.bind(this)}>重新测试</Button>
          <Button class="finish" size="mini" onClick={this.fi.bind(this)}>完成</Button>

        </view>
      </View>

    )
  }
}
export default DStep3
