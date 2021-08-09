import { Component } from 'react'
import { connect } from 'react-redux'
import { View ,Text,Image} from '@tarojs/components'
import { AtButton,AtIcon } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { add, minus, asyncAdd } from '../../actions/counter'
import { AtTabBar } from 'taro-ui'
import { AtAvatar } from 'taro-ui'
import Taro from "@tarojs/taro";
import './mycollection.less'
import Index from "../myindex";

class Mycollection extends Component {
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
       <View className='mycollection'>
         <View className='mybox'>
          <View className='image-box'>
            <Image className='images' src={require('/src/images/touxiang.jpg') }></Image>
          </View>

           <View className='text-box'>

        <View className='textyi'>
             <View className='biaoti'>
             人参的作用与功效
             </View>
             <View  className='at-article__info time'>
             2021.08.08
             </View>
           </View>

          <View  className='texter'>
             <View className='at-article__p neirong'>人参是中药材中的一味，也是补品，它可以制成不同类
               的补品给人饮用， 人参是中药材中的一味，也是补品，它可以制成不同类
               的补品给人饮用， 人参是中药材中的一味，也是补品，它可以制成不同类
               的补品给人饮用， </View>
           </View>

           </View>
           </View>
         </View>



      <View>
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
      </View>
      </View>
    );
    }
}

export default Mycollection
