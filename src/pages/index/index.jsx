
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {grant,getuser} from '../../common/auth'
import Header from './header'
import HomeSwiper from "./homeSwiper";
import IndexIcon from "./indexIcon";
import HomeMidCon from "./homeMidCon";
import HomeHotList from "./homeHotList";
import TabBar from "../common/tabBar"
import './index.less'

class Index extends Component {

  constructor (props) {
    super(props);
    /*let screen_width = 750
    let rate = Taro.getSystemInfoSync().screenHeight/Taro.getSystemInfoSync().screenWidth
    this.state = {
        screenTotalW: screen_width,
        screenTotalH: screen_width * rate,
    }*/
  }

  componentDidMount() {
    //判断用户登陆是否过期
    Taro.checkSession({
      success: function () {
        //存在登陆态
        //获取用户itemcode并存在本地中
        // eslint-disable-next-line no-unused-vars
        new Promise((resolve,reject)=> {
          getuser()
          resolve()
        }).then(()=>{
        })
      },
      fail: function () {
        //不存在登陆态
        //判断用户是否授权
        grant()
      }
    })

    //trigger gcj
    Taro.getLocation({
      type: 'gcj02',
      // eslint-disable-next-line no-unused-vars
      success: function (res) {
      }
    })
  }

  // style={`width:${this.state.screenTotalW}rpx;height:${this.state.screenTotalH}rpx`}
  render() {
    return (
      <View className='index'>
        <Header />
        <HomeSwiper />
        <IndexIcon />
        <HomeMidCon />
        <HomeHotList />
        <TabBar tabBarCurrent={0} />
      </View>
    )
  }
}

Index.defaultProps = {
}
Index.propType = {
  add: PropTypes.object,
  dec: PropTypes.object
}

export default Index

