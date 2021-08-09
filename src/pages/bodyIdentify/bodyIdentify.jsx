import { Component } from 'react'
import Taro from "@tarojs/taro";
import {View, Text, Image} from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './bodyIdentify.less'

class BodyIdentify extends Component {

  toMyPage(){
    Taro.navigateTo({url:'/pages/bodyIdentify/test'})
    Taro.showLoading({
      title: '题目加载中......',
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)
  }

  render () {
    return (
      <View className='bodyIdentify'>
        <View className='at-row at-row--wrap wel-head'>
          <View className='at-col at-col-8'>
            <View className='at-row wel-phy-text'>
              <Text className='at-col-5 wel-phy-title'>中医治未病</Text>
              <Text className='at-col-5 wel-phy-title'>辨质识养生</Text>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                <Image className="phy-icon" src="/static/images/6.jpg"/>
                <Text className='wel-phy-span'>情志调摄</Text>
              </View>
              <View className='at-col-5 wel-phy-content'>
                <Image className="phy-icon" src="/static/images/6.jpg"/>
                <Text className='wel-phy-span'>饮食调养</Text>
              </View>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                <Image className="phy-icon" src="/static/images/6.jpg"/>
                <Text className='wel-phy-span'>起居调摄</Text>
              </View>
              <View className='at-col-5 wel-phy-content'>
                <Image className="phy-icon" src="/static/images/6.jpg"/>
                <Text className='wel-phy-span'>运动保健</Text>
              </View>
            </View>
            <View className='at-row wel-phy-text'>
              <View className='at-col-5 wel-phy-content'>
                <Image className="phy-icon" src="/static/images/6.jpg"/>
                <Text className='wel-phy-span'>穴位保健</Text>
              </View>
            </View>
          </View>
          <View className='at-col at-col-4 wel-head-right'>
          </View>
        </View>

    {/*  体质辨识评估参与人数*/}
    <View className='phy-num'>
      <View className='at-row phy-num-content'>
        <View className='at-col-8 at-col__offset-1 '>
          <View>
            <text className='phy-identity-num'>10</text>
            <text className='phy-num-text'>人</text>
          </View>
          <View className='phy-num-text'>已参与体质辨识评估</View>
        </View>
        <View className='at-col-3'>
          <Image className='phy-num-icon' src="/static/images/5.jpg" />
          <Image className='phy-num-icon' src="/static/images/5.jpg" />
        </View>
      </View>
    </View>

    {/*  体质辨识内容*/}
    <View className='phy-identity'>
      <View className='phy-identity-content'>
        <text className='phy-identity-text'>中医体质辨识软件是判断中医体质分类的标准化工具，依据中华中医药学会《中医体质分类与判定》标准开发。软件是在中医体质理论指导下，根据量表设计原理，以问询录入的方式，采集居民健康信息；通过对9种体质分值的结果分析，来判断体质类型。</text>
      </View>
      <View className='at-row at-col-12 '>
        <AtButton className='at-col-10 phy-btn' type='primary' onClick={this.toMyPage.bind(this)}>开始评估</AtButton>
      </View>
    </View>

    {/*  体质辨识提示*/}
    <View className=' phy-notice'>
      <View className='at-row phy-notice-content'>
        <View className='at-col-1'>
          <Image className='phy-num-icon' src="/static/images/th.jpg" />
        </View>
        <View className='at-col-11 phy-notice-text'>
          <Text>由于测评题目比较多，按照正常语速完成测评需要至少5分钟时间，请您合理安排体质辨析测评时间；</Text>
        </View>
      </View>
    </View>
      </View>
    )
  }
}

export default BodyIdentify;
