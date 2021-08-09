import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Input} from '@tarojs/components'
import './healthdata.less'
import { TaroText } from '@tarojs/runtime'


class HealthData extends Component {
  
  
  render(){
    return(
      
      <View className='zhongti'>
          <Text>个人基本信息</Text>
          
          <Input placeholder='姓名：'></Input>
           <view> </view>
           <Input placeholder='性别：'></Input>
           <view></view>
           <Input placeholder='出生日期：'></Input>
           <view></view>
           <Input placeholder='证件类型：'></Input>
           <view></view>
           <Input placeholder='证件号码：'></Input>
           <view></view>
           <Input placeholder='文化程度:'></Input>
           <view></view>
           <Input placeholder='户口性质:'></Input>
           <view></view>
           <Input placeholder='婚姻状态:'></Input>
           <view></view>
           <Input placeholder='民族:'></Input>
           <view></view>
           <Input placeholder='移动号码:'></Input>
           <view></view>
           <Input placeholder='出生地:'></Input>
           <view></view>
           <Input placeholder='既往患病史:'></Input>
           <view></view>
           <Input placeholder='家族患病史:'></Input>
           <view></view>
           <Input placeholder='患者与本人关系:'></Input>
      
           <view></view>
          
      </View>
    )
  }
}

export default HealthData;