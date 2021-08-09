import { Component } from 'react'
import Taro from "@tarojs/taro";
import {View, Text} from '@tarojs/components'
import {AtAccordion, AtList, AtListItem} from "taro-ui"

import './result.less'

class Result extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      open: false,
    }
  }
  handleClick (value) {
    this.setState({
      open: value
    })
  }

  handleClick (value) {
    this.setState({
      open: value
    })
  }


  render () {
    return (
      <View>
        <View>
          <View className="jieguo">
            <Text className="jilu">查看填写记录</Text>
          </View>
          <View className="tizhi">
          <View>
            <Text className="tizhiwei">你的体质为：</Text>
          </View>
          <View>
            <Text className="biaoxian">主要表现:</Text>
          </View>
          </View>
          <View className="zhidao"><Text>指导意见：</Text></View>
        </View>
        <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title='情志调适'
          icon={{ value: 'star', color: 'white', size: '15' }}
          className='AtAccordion'
          isAnimation={false}
        >
          <AtList hasBorder={false} className='content-list' >
            <AtListItem
              title='标题文字'
              note='描述信息'
              arrow='right'
            />
          </AtList>
        </AtAccordion>
        <AtAccordion
          open={this.state.ystyIsOpen}
          onClick={(ysty) => {
            this.setState({
              ystyIsOpen : ysty
            })
          }}
          title='饮食调养'
          icon={{ value: 'home', color: 'white', size: '15' }}
          className='AtAccordion'
          isAnimation={false}
        >
          <AtList hasBorder={false} className='content-list'>
            {this.state.tlTyfsYsText}
          </AtList>
        </AtAccordion>
        <AtAccordion
          open={this.state.qjtsIsOpen}
          onClick={(qjts)=>{
            this.setState({
              qjtsIsOpen: qjts
            })
          }}
          title='起居调适'
          icon={{ value: 'home', color: 'white', size: '15' }}
          className='AtAccordion'
          isAnimation={false}
        >
          <AtList hasBorder={false} className='content-list'>
            {this.state.tlTyfsQjText}
          </AtList>
        </AtAccordion>
        <AtAccordion
          open={this.state.sportIsOpen}
          onClick={(sport)=>{
            this.setState({
              sportIsOpen: sport
            })
          }}
          title='运动保健'
          icon={{ value: 'heart', color: 'white', size: '15' }}
          className='AtAccordion'
          isAnimation={false}
        >
          <AtList hasBorder={false} className='content-list'>
            {this.state.tlTyfsYdText}
          </AtList>
        </AtAccordion>
        <AtAccordion
          open={this.state.xwbjIsOpen}
          onClick={(xwbj)=>{
            this.setState({
              xwbjIsOpen: xwbj
            })
          }}
          title='穴位保健'
          icon={{ value: 'heart', color: 'white', size: '15' }}
          className='AtAccordion'
          isAnimation={false}
        >
          <AtList hasBorder={false} className='content-list'>
            {this.state.tlTyfsXwbjTest}
          </AtList>
        </AtAccordion>
      </View>
    )
  }
}

export default Result;
