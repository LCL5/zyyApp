import Taro from '@tarojs/taro'
import {APIBASEURL,SEARCH} from '../constants/global'


export const search = (keyword, condition, pageNum, pageSize) => {
  return (dispatch, getState) => {
    Taro.request({
      url: `${APIBASEURL}/hospitalsByKeyword?keyword=${keyword}&condition=${condition}&pageNum=${pageNum}&pageSize=${pageSize}`,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: (res) =>{
        dispatch(setSearchResult(res.data.data));
      }
    });
  }
}

export function setSearchResult (res){
  return {
    type: SEARCH,
    hospitals: res
  }
}
