import { Component } from 'react'
import { connect } from 'react-redux'
import { View ,Text,Image} from '@tarojs/components'
import { AtButton,AtIcon } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtTabBar } from 'taro-ui'
import { AtAvatar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './index.less'


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
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)

  }

  MyCollection(){

      Taro.navigateTo({url: '../mycollection/mycollection'})
    console.log('success')
  }

  toEvaluate(){

    Taro.navigateTo({url: '../evaluate/evaluate'})
    console.log('success')
  }
  toRecord(){

    Taro.navigateTo({url: '../record/record'})
    console.log('success')
  }
  toCost(){

    Taro.navigateTo({url: '../cost/cost'})
    console.log('success')
  }
  toMRecord(){

    Taro.navigateTo({url: '../mrecord/mrecord'})
    console.log('success')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }



  render () {
    return (
      <View className='index'>
        <view>
          <View className='header'>
            <View className='AtAvatar'>
              <AtAvatar circle image={require('/src/images/touxiang.jpg') }></AtAvatar>
            </View>

            <View className='name'>
              <Text>ZHOUWU</Text>
            </View>

            <View className='icon-right'>
              <AtIcon value='chevron-right' color='#FFF'></AtIcon>
            </View>
          </View>


          <View>
            <View className='mycomfor'>
              <View className='type1'>
                <Image className='guahao' src={require('/src/images/guahao.png')} />
                <Text className='text-center' >我的挂号</Text>
              </View>
              <View className='type2'>
                <Image className='guahao' src={require('/src/images/people.png')}  />
                <Text className='text-center'>就诊人管理</Text>
              </View>
            </View>
          </View>

          {/*健康数据*/}
          <View>
          <View className='health'>
            <View >
              <View>
                <Text>健康数据</Text>
              </View>
            <View className='health-box'>
              <View>
                <View className='health-data'>
                  <View>
                      <View className='health-items1'>
                        <Image className='health-img'  src={require('/src/images/healthrecord.png')} />
                        <Text className='health-text'>健康档案</Text>
                      </View>
                      <View className='health-items2' onClick={this.toMRecord.bind(this)}>
                        <Image className='health-img' src={require('/src/images/病历.png')} />
                        <Text className='health-text'>电子病历</Text>
                      </View>
                      <View className='health-items3' onClick={this.toCost.bind(this)}>
                        <Image className='health-img'  src={require('/src/images/费用查询.png')} />
                        <Text className='health-text'>就诊费用</Text>
                      </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </View>
          </View>

          {/*我的服务*/}
            <View>
              <View className='service-box'>
                <View >
                  <View>
                    <Text>我的服务</Text>
                  </View>
                  <View className='myservice-box'>
                    <View>
                      <View className='item'  onClick={this.MyCollection.bind(this)}>
                        <View>
                          <Image className='service-img'  src={require('/src/images/收藏.png')}  />
                        </View>
                        <View>
                          <Text className='service-text'>我的收藏</Text>
                        </View>
                          <View  className='service-AtIcon'>
                          <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                        </View>
                      </View>
                      <View className='item'   onClick={this.toEvaluate.bind(this)}>
                        <View>
                          <Image className='service-img '  src={require('/src/images/评价.png')} />
                        </View>
                        <View>
                          <Text className='service-text'>效果评价</Text>
                        </View>
                        <View className='service-AtIcon'>
                          <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                        </View>
                      </View>
                      <View className='item'  onClick={this.toRecord.bind(this)}>
                        <View>
                          <Image className='service-img '  src={require('/src/images/体质.png')} />
                        </View>
                        <View>
                          <Text className='service-text'>体质辨识记录</Text>
                        </View>
                        <View className='service-AtIcon1'>
                          <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

        </view>


      <view>
      <AtTabBar
        fixed
        tabList={[
        { title: '首页', iconType: 'home' },
        { title: '个人热点', iconType: 'analytics' },
        { title: '我的', iconType: 'user'}
             ]}
        onClick={this.handleClick.bind(this)}
         current={this.state.current}
             />
      </view>

      </View>
    )
  }
}

export default Index

