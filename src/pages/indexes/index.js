import Taro from '@tarojs/taro'
import {
  View
} from '@tarojs/components'
import {
  AtIndexes
} from 'taro-ui'

// eslint-disable-next-line react/require-render-return
export default class Indexes extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      list: [{
          title: 'A',
          key: 'A',
          items: [{
              'name': '阿坝'
              // 此处可加其他业务字段
            },
            {
              'name': '阿拉善'
            }
          ]
        },
        {
          title: 'B',
          key: 'B',
          items: [{
              'name': '北京'
            },
            {
              'name': '保定'
            }
          ]
        }
      ]
    };
  }
  onClick(item) {
    console.log(item)
  }
  render() {
    const list = this.state.list;
    return ( < View style = 'height:100vh' >
      <AtIndexes list = {
        list
      }
      onClick = {
        this.onClick.bind(this)
      } >
      <View> 自定义内容 </View> </AtIndexes> </View>
    )
  }
}
