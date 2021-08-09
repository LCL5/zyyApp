import React, { Component }  from 'react'
// 引入 Swiper, SwiperItem 组件
import { View,Swiper, SwiperItem } from '@tarojs/components'



class MySwiper extends Component {
  render () {
    return (
    <View className='index'>
      <view className='container'>
          <view className='swiper_container'>
      <swiper  className="Swiper"
        indicatorColor='#999' //指示点颜色
        indicatorActiveColor='#333' //当前选中指示点的颜色
        autoplay='true' //自动播放
        interval='2000' //播放间隔
        circular='ture'
        indicator-dots='ture'
        >

        <swiper-item>
          <image mode="widthFix" src="https://hbimg.huabanimg.com/6b4d4d5fa0d289d08b897a42bc5cc3bca2f0720719a76-68WXDE_fw658/format/webp"></image>
        </swiper-item>

        <swiper-item>
         <image mode="widthFix" src="https://hbimg.huabanimg.com/6e18d014522d42087395df9fec7177cc425bc30f33fa6-CSsmO9_fw658/format/webp"></image>
          </swiper-item>

        <swiper-item>
        <image mode="widthFix" src="https://hbimg.huabanimg.com/bbd39a8e658411ad0626f7a8ea02c6e9d697876d5e9b5-LJINub_fw658/format/webp"></image>
           </swiper-item>

      </swiper>
           </view>
         </view>
      </View>
    )
  }
}
export default MySwiper
