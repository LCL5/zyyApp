import React, { Component }  from 'react'
import Taro from '@tarojs/taro'
import { View ,Image, Text} from '@tarojs/components'
import {connect} from "react-redux";
import { GYT, YYREGISTRATION, SMART, BASEURL } from '../../constants/global'
import {search} from "../../actions/search";
//import {getHospitals} from "../../actions/hospitalGyt";
import './indexIcon.less'

@connect(() => ({
}), (dispatch) => ({
  search (keyword, condition, pageNum, pageSize) {
    dispatch(search(keyword, condition, pageNum, pageSize))
  },
  getHospitals(page,condition) {
    dispatch(getHospitals(page,condition))
  }
}))
class IndexIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemcode: '',
    }
  }

  componentDidMount() {
    Taro.getStorage({
      key: '__itemcode__',
      success:(res)=> {
        this.setState({
          itemcode: res.data
        })
      }
    })
  }

  /**
   * 转到国医堂
   */
  toIndexIconPage(target) {
    switch (target) {
      case GYT:
        this.props.getHospitals(1,'');
        setTimeout(function () {
          Taro.navigateTo({url: '/pages/hospital/hospitalGyt'});
        }, 100);
        break
      case YYREGISTRATION:
        this.props.search('', '', 1, 20)
        setTimeout(function () {
          Taro.navigateTo({url: '/pages/yyRegistration/yyhospital/index'});
        }, 100);
        break;
      case SMART:
        if(this.state.itemcode !=null){
          Taro.navigateTo({
            url: '/pages/diagnosis/diagnosis'
          });
        }else{
          Taro.navigateTo({url: '/pages/myRecord/wxLogin'})
        }
        break;
      default:
        break;
    }
  }

  render () {
    return (
      <View className='at-row  icon-content'>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, GYT)}>
          <Image className='icons-img' src={`${BASEURL}u42.png`} />
          <text className='icons-title'>国医堂</text>
        </View>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, YYREGISTRATION)}>
          <Image className='icons-img' src={`${BASEURL}u45.png`} />
          <Text className='icons-title'>预约挂号</Text>
        </View>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, SMART)}>
          <Image className='icons-img' src={`${BASEURL}u46.png`} />
          <Text className='icons-title'>智能导诊</Text>
        </View>
      </View>
    );
  }
}

export default IndexIcon
