import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Input,  Picker, RadioGroup, Radio } from '@tarojs/components'
import './information.less'
import "taro-ui/dist/style/index.scss";
import { AtList, AtListItem } from 'taro-ui'



class Information extends Component {

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }


  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }


  state = {
    selector: ['居民身份证', '港澳台身份证'],
    selectorChecked: '居民身份证',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }


  render(){
    return(
       <View className='zhengti'>
         <View className='tx'>
         <Text className='texttx'>头像</Text>
         <Image src='https://img2.baidu.com/it/u=1660422566,187228173&fm=26&fmt=auto&gp=0.jpg'/>
        
         </View>
           <View className='name'>
           <Text>姓名</Text>
           <Input placeholder='请输入姓名'></Input>
           </View>


           <View className='sex'>
           <Text>性别</Text>
              <RadioGroup className='radio'>
                <Radio value='1'>男</Radio>
                <Radio value='2'>女</Radio>
              </RadioGroup>
           </View>


           <View>
           <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
            <AtList>
              <AtListItem 
              title='身份证类型'
              extraText={this.state.selectorChecked}
              />
            </AtList>
          </Picker>
           </View>


           <View className='sfz'>
           <Text>证件号码</Text>
           <Input placeholder='请输入证件号码'></Input>
           </View>

           <View >
           <Picker mode='date' onChange={this.onDateChange}>
                <AtList>
                  <AtListItem title='出生日期' extraText={this.state.dateSel} />
                </AtList>
              </Picker>
           </View>
            
           <View className='sj' >
           <Text>手机号码</Text>
           <Input placeholder='请输入手机号码'></Input>
           </View>
           

           <Button>保存</Button>

       </View>
      
    )
  }
}

export default Information;