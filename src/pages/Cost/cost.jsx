import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Input, Label} from '@tarojs/components'
import './cost.less'


class Cost extends Component {


  render(){
    return(
      
      <View className='zhongti'>
        <Text>患者姓名：</Text>
        <View>
          <Label>机构名称</Label>
          <Label>就诊日期</Label>
          <Label>操作</Label>
        </View>
      </View>
    )
  }
}

export default Cost;