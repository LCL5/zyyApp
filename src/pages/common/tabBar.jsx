import React, {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {BASEURL} from '../../constants/global'


class TabBar extends Component {
  constructor () {
    super(...arguments);
    this.state = {
      itemcode: '',
      openid: ''
    }
  }

  componentDidMount() {
    Taro.getStorage({
      key: 'openid',
      success:(res)=> {
        this.setState({
          openid: res.data.openid,
        })
      }
    })
    //
    Taro.getStorage({
      key: '__itemcode__',
      success:(res)=> {
        this.setState({
          itemcode: res.data
        })
      }
    })
  }

  handleClick (value) {
    console.log("tabBar ====" +value);
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        });
        break;
      case 1:
        Taro.reLaunch({
          url: `/pages/hotSpot/hotSpotIndex` //'/pages/physicalIdentity/healthKnowledge'
        });
        break;
      case 2:
        if(this.state.openid){
          const {itemcode} = this.state;
          Taro.navigateTo({
            url: `/pages/myRecord/healthRecords?itemcode=${itemcode}`
          });
        }else{
          Taro.navigateTo({url: '/pages/myRecord/wxLogin'})
        }
        break;
      case 3:
        Taro.reLaunch({
          url: '/pages/myRecord/index'
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View>
        <View style={{'height':'4rem'}} />
        <AtTabBar fixed
                  backgroundColor='#ffffff'
                  color='#cccccc'
                  selectedColor='#d40000'
          tabList={[
            { title: '首页', image: `${BASEURL}home.png`, selectedImage: `${BASEURL}homeSelected.png` },
            { title: '今日热点', image: `${BASEURL}knowledge.png`, selectedImage: `${BASEURL}knowledgeSelected.png` },
            { title: '健康档案', image: `${BASEURL}health.png`, selectedImage: `${BASEURL}healthSelected.png` },
            { title: '我的', image: `${BASEURL}self.png`, selectedImage:`${BASEURL}selfSelected.png` }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabBarCurrent}
        />
      </View>
    );
  }
}

export default TabBar;
