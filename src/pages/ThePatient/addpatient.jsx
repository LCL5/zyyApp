import { Component } from 'react'
import { connect } from 'react-redux'
import { View,Text, Button} from '@tarojs/components'
import './addpatient.less'
import "taro-ui/dist/style/index.scss";
import { AtFab, AtListItem } from 'taro-ui'



class AddPatient extends Component {

  
  render(){
    return(
      
      <View className='zhongti'>
      
      <View className='bn'>
        <Button className='btn'>添加就诊人</Button>
        </View>
        </View>
    )
  }
}

export default AddPatient;