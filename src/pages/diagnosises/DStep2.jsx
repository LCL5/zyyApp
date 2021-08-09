import React, { Component }  from 'react'
// 引入 AtIcon, AtRadio 组件
import {View,Text,Picker,Button } from '@tarojs/components'
import { AtCheckbox,AtSteps  } from 'taro-ui'
import Taro from "@tarojs/taro";



class DStep2 extends Component {
  DStep3(){
    Taro.navigateTo({url:'../diagnosises/DStep3'})
  }
  constructor () {
      super(...arguments)
      this.state = {
        current: 0,
        checkedList: ['list1']
      }

    this.checkboxOption = [{
      value: 'list1',
      label: '鼻塞',

    },{
      value: 'list2',
      label: '头疼'
    },{
      value: 'list3',
      label: '痰黄',
    },{
      value: 'list4',
      label: '气短',
    }
      ,{
        value: 'list5',
        label: '咳嗽',
      }]
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
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
        title: '进行中',
        status: 'success'
      },
      {
        title: '待进行',
      }
    ]

    return (

      <View>
        <view> <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
        /></view>
        <view ><AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
        /></view>
        <view>
          <view className="next1">
            <Button  type='primary' size="mini" circle="true" onClick={this.DStep3.bind(this)}>下一步</Button>
          </view>
        </view>
      </View>

    )
  }
}
export default DStep2
