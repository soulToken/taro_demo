import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtButton } from 'taro-ui'
import {getClinicBaseinfo} from '../../utils/api'
import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '第二个页面'
  }

  componentWillMount () { 
    // getClinicBaseinfo().then((res)=>{

    // }).catch(()=>{

    // })
  }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        我是新的页面喽
      </View>
    )
  }
}

export default Index 
