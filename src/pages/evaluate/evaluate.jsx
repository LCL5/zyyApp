import { Component } from 'react'
import { connect } from 'react-redux'
import { View ,Text,Image} from '@tarojs/components'
import { AtButton,AtIcon,AtTabs,AtTabsPane } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtTabBar } from 'taro-ui'
import { AtAvatar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './evaluate.less'
import Index from "../index";
import itme from "./evaluate"

class Evaluate extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)

  }


  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }


  render() {
    return (
      <View>
        <View className='select'>
          <View className='on'>已评价</View>
          <View className='off'>未评价</View>
        </View>


      <view className="table">
        <view className="tr bg-w">
          <view className="th">日期</view>
          <view className="th">疾病</view>
          <view className="th ">总体评价</view>
          <view className="th ">操作</view>
        </view>
        <block>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">感冒</view>
            <view className="td">9.9分</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-12</view>
            <view className="td">咳嗽</view>
            <view className="td">6.6</view>
            <view className="td">查看</view>
          </view>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">感冒</view>
            <view className="td">9.9分</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-12</view>
            <view className="td">咳嗽</view>
            <view className="td">6.6</view>
            <view className="td">查看</view>
          </view>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">感冒</view>
            <view className="td">9.9分</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-12</view>
            <view className="td">咳嗽</view>
            <view className="td">6.6</view>
            <view className="td">查看</view>
          </view>
        </block>
      </view>
      </View>
    );

  }
}

export default Evaluate
