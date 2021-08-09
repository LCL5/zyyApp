import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Input, Label,RadioGroup,Radio, Picker} from '@tarojs/components'
import './thepatient.less'
import "taro-ui/dist/style/index.scss";
import { AtList, AtListItem } from 'taro-ui'



class ThePatient extends Component {

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
      
      <View className='zhongti'>
        
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
        <Label>身份证</Label>
        <Input placeholder='请输入身份证'></Input>
        </View>


        <View className='name'>
        <Label>姓名</Label>
        <Input placeholder='请输入姓名'></Input>
        </View>

        <View className='xb'>
        <Label>性别</Label>
        <RadioGroup className='radio' className='sex'>
                <Radio value='1'>男</Radio>
                <Radio value='2'>女</Radio> 
         </RadioGroup>
        </View>
      
        <View className='data'>
        <Picker mode='date' onChange={this.onDateChange}>
                <AtList>
                  <AtListItem title='出生日期' extraText={this.state.dateSel} />
                </AtList>
              </Picker>
        </View>

        <View className='dz'>
        <Label>所居住的省市区</Label>
        </View>

        <View className='xxdz'>
        <Label>详细地址</Label>
        <Input placeholder='乡村镇，街道，小区，门牌号'></Input>
        </View>

        <View className='hy'>
        <Label>婚姻状况</Label>
        </View>

        <View className='sj'>
        <Label>手机号码</Label>
        <Input placeholder='请输入手机号码'></Input>
        </View>

        <Label className='lable1'>关系</Label>
        <View className='guanxi'>
        
        <RadioGroup className='radio'>
               <Radio value='1'>本人</Radio>
                <Label><Radio value='2'>父母</Radio></Label>
                <Radio value='3'>爱人</Radio>
                <Radio value='4'>子女</Radio>
                <Radio value='5'>其他</Radio>
         </RadioGroup>
        </View>

        <View className='jzr'>
        <Label>设为默认就诊人</Label>
        </View>

        <Button className='btn'>保存</Button>
        </View>
    )
  }
}

export default ThePatient;