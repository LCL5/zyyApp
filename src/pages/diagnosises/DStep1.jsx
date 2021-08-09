import React, { Component }  from 'react'
// 引入 AtIcon, AtRadio 组件
import {View,Text,Picker,Button } from '@tarojs/components'
import { AtRadio,AtSteps,AtList, AtListItem } from 'taro-ui'
import './DStep3.less'


class DStep3 extends Component {
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
  render () {
    const items = [
      {
        title: '进行中',
        status: 'success',
        'icon': {
          value: 'success',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        title: '待进行',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        title: '待进行',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
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
          <Button type="primary" size="mini" circle="true">下一步</Button>
        </view>
      </View>

    )
  }
}
export default DStep3
