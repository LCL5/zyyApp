import { Component } from 'react'
import { connect } from 'react-redux'
import { View ,Text,Image} from '@tarojs/components'
import { AtButton,AtIcon,AtTabs,AtTabsPane } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtTabBar } from 'taro-ui'
import { AtAvatar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './record.less'
import Index from "../myindex";


class Record extends Component {
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


      <view className="table">
        <view className="tr bg-w">
          <view className="th">日期</view>
          <view className="th">体质</view>
          <view className="th ">操作</view>
        </view>
        <block>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
          <view className="tr bg-g">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
          <view className="tr">
            <view className="td">2021-08-09</view>
            <view className="td">是平和质，偏向是阴虚质</view>
            <view className="td">查看</view>
          </view>
        </block>
      </view>

    );

  }
}

export default Record
