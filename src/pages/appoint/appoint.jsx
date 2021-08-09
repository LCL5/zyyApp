import { Component } from 'react'
import { connect } from 'react-redux'
import React from 'react'
import Taro from '@tarojs/taro'
import { AtAccordion, AtList, AtListItem,AtSearchBar,AtSegmentedControl,AtRate,AtCard} from 'taro-ui'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'

import './appoint.less'



@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class appoint extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  constructor () {
    super(...arguments)
    this.state = {
      value: 2,
      current: 0,
      open: false,
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  handleClick (value) {
    this.setState({
      current: value,
      open: value,
    })
  }
  hhClick (value) {
    this.setState({
      open: value
    })
  }
  ssClick (value) {
    this.setState({
      value
    })
  }
  hospitalClick () {
    Taro.navigateTo({url: '/pages/appoint/appointHospital'})
  }
  gotoindex(){
    Taro.navigateTo({url: '/pages/index/index'})
  }

  render () {
    return (
      <View className='appoint'>
        <View className='search'>
          <AtSearchBar
          actionName='搜索'
          onActionClick={this.onActionClick.bind(this)}
        />

          <View className='select'>
        <AtSegmentedControl
          values={['按距离', '筛选']}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
        {
          this.state.current === 0
            ? <View className='tab-content'></View>
            :<View>
              <AtAccordion
                open={this.state.open}
                onClick={this.hhClick.bind(this)}
              >
                <AtList hasBorder={false}>
                  <AtListItem
                    title='评分'
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                  <AtListItem
                    title='剩余量'
                    arrow='right'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  />
                </AtList>
              </AtAccordion>
            </View>
        }
        {
          this.state.current === 1
            ? <View className='tab-content'></View>
            : <View>
              <AtCard
                onClick={this.hospitalClick.bind(this)}
                extra='额外信息'
                title='东郊社区卫生服务中心'
                thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
              >
                <AtRate
                  value={this.state.value}
                  onChange={this.ssClick.bind(this)}
                />
              </AtCard>
              <AtCard
                onClick={this.hospitalClick.bind(this)}
                extra='额外信息'
                title='社北乡卫生院'
                thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
              >
                <AtRate
                  value={this.state.value}
                  onChange={this.ssClick.bind(this)}
                />
              </AtCard>
              </View>
        }
          </View>
        </View>
      </View>
    )
  }
}
export default appoint;

