import React, { Component }  from 'react'
// 引入 AtIcon, AtRadio 组件
import {View,Text,Picker,Button } from '@tarojs/components'
import { AtRadio,AtSteps,AtList, AtListItem } from 'taro-ui'
import './DStep1.less'
import Taro from "@tarojs/taro"


class DStep1 extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '1',
      current: 0,
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onChange (current) {
    this.setState({
      current
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }
  DStep2(){
  Taro.navigateTo({url:'../diagnosises/DStep2'})
}
  render () {
    const items = [
      {
        title: '进行中',
        status: 'success'
      },
      {
        title: '待进行'
      },
      {
        title: '待进行'


      }
    ]

    return (
      <View>
        <view className="dis" >
      <Text className="ddd">智能导诊</Text>
      </view>
        <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
        />
        <Text>性别</Text>
        <AtRadio
        options={[
          { label: '男', value: 'option1' },
          { label: '女', value: 'option2' }
        ]}
        value={this.state.value}
        onClick={this.handleChange.bind(this)}/>
        <view>
          <Picker mode='date' onChange={this.onDateChange}>
            <AtList>
              <AtListItem title='出生日期' extraText={this.state.dateSel} start="1900-01-01" end="2055-01-01" />
            </AtList>
          </Picker>
        </view>
        <view className="next">
          <Button  type='primary' size="mini" circle="true" onClick={this.DStep2.bind(this)}>下一步</Button>
        </view>
      </View>

    )
  }
}
export default DStep1
