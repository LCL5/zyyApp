import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

import {connect} from "react-redux";
import {search} from "../../actions/search";
import './header.less'
import './index.less'
// eslint-disable-next-line import/first
import {View} from "@tarojs/components";

@connect(() => ({

}), (dispatch) => ({
  search (keyword, condition, pageNum, pageSize) {
    dispatch(search(keyword, condition, pageNum, pageSize));
  }
}))
class Header extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      keyword: '',
      pageNum: 1,
      pageSize: 20,
    }
  }

  change(keyword) {
    this.setState({
      keyword: keyword
    })
  }

  doSearch () {
    this.props.search(this.state.keyword, '', 1, 20)
    Taro.setStorage({
      key: 'conditionKey',
      data: {
        keyword: this.state.keyword,
        condition: ''
      }
    })
    setTimeout(function () {
      Taro.redirectTo({url: '/pages/yyRegistration/yyhospital/index'});
    }, 150);

  }

  render(){
    return (
      <View>
        <AtSearchBar
          placeholder='搜索国医堂'
          actionName='搜索'
          value={this.state.keyword}
          onChange={this.change.bind(this)}
          onActionClick={this.doSearch.bind(this)}
          className='search-input'
        />
      </View>
    );
  }
}

export default Header

