import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import 'taro-ui/dist/style/index.scss' 
import './app.scss'
import './custom-variables.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/router/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
        list: [{
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./images/tab/appointment.png",
          selectedIconPath: "./images/tab/appointment.png"
        }, {
          pagePath: "pages/router/index",
          text: "衣袋",
          iconPath: "./images/tab/appointment.png",
          selectedIconPath: "./images/tab/appointment.png"
        }],
        color: '#333',
        selectedColor: '#333',
        backgroundColor: '#fff',
        borderStyle: 'black'
      }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
