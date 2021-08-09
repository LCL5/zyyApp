import { Component } from 'react'
import Taro from "@tarojs/taro";
import {View, Text, Image} from '@tarojs/components'
import './test.less'
import {AtButton} from "taro-ui";

class Test extends Component {

  toMyPage(){
    Taro.navigateTo({url:'/pages/bodyIdentify/result'})
    Taro.showLoading({
      title: '正在加载测试结果...',
    })
    setTimeout(function () {
      Taro.hideLoading()
    }, 2000)
  }


  render () {
    return (
      <View className='test'>
        <View className="shuoming">
          <View>
            <Image className="shuoming3" src="/static/images/6.jpg"/>
            <Text className="shuoming1">说明</Text>
          </View>
          <View>
          <Text className="shuoming2">以下问题请根据您近一年的体验和感觉回答。</Text>
          </View>
        </View>
        <View className='tm'>
          <View className='tm1'>
              <View className="t">
                <text className='tm111'>01、您精力充沛吗？</text>
              </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>02、您容易感到疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累）</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton hover-class="blue">没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>03、您容易气短，呼吸短促、接不上气吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>04、您说话声音低弱无力吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>05、您感到闷闷不乐、情绪低沉吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>06、您精神紧张、焦虑不安吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>07、您因为生活状态改变而感到孤独、失落吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
          <View className='tm1'>
            <View className="t">
              <text className='tm111'>08、您容易感到害怕或受到惊吓吗？</text>
            </View>
            <View className="tt">
              <View className='tm112'>
                <AtButton>没有</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>很少</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>有时</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>经常</AtButton>
              </View>
              <View className='tm112'>
                <AtButton>总是</AtButton>
              </View>
            </View>
          </View>
        </View>
        <View className="b1">
          <AtButton className='a1' type='primary' onClick={this.toMyPage.bind(this)}>查看结果</AtButton>
        </View>
      </View>
    )
  }
}

export default Test;
