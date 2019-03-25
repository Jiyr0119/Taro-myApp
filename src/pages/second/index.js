/* eslint-disable react/no-unused-state */
import Taro, {
  Component
} from '@tarojs/taro';
import {
  View,
  Text,
  Image
} from '@tarojs/components';
import {
  AtAccordion,
  AtList,
  AtListItem,
  AtCurtain,
  AtButton
} from 'taro-ui';
import indexPng from '../../assets/images/index.png';
import './index.less';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '第二页'
  };

  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      closeBtnPosition: 'top',
      itemList: [{
          title: '索引器',
          arrow: 'right',
          thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        },
        {
          title: '标题',
          arrow: 'right',
          thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        },
        {
          title: '标题',
          arrow: 'right',
          thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        }
      ]
    };
  }

  componentWillMount() {
    console.log(this.$router.params);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleChange() {
    this.setState({
      isOpened: true
    });
  }
  handleClickItem(index) {
    if (index === 0) {
      Taro.navigateTo({
        url: '/pages/indexes/index?id=Jonathan'
      });
    } else {
      console.log(index);
    }
  }

  onClose() {
    this.setState({
      isOpened: false
    });
  }

  render() {
    const aItem = this.state.itemList.map((item, index) => {
      return ( <AtListItem onClick ={
          this.handleClickItem.bind(this, index)
        }
        key ={
          index
        }
        title ={
          item.title
        }
        arrow ={
          item.arrow
        }
        thumb= {
          item.thumb
        }
      />
      );
    });
    return ( <View className ='index'
    >
      <Text > {
        this.$router.params.id
      } </Text> <AtAccordion title ='标题三'
        icon= {
        {
          value: 'chevron-down',
          color: 'red',
          size: '15'
        }
      }
      >
      <AtList hasBorder ={
        false
      }
      > {
        aItem
      } </AtList> </AtAccordion > <AtCurtain isOpened= {
        this.state.isOpened
      }
        onClose= {
        this.onClose.bind(this)
      }
        closeBtnPosition= {
        this.state.closeBtnPosition
      }
      >
      <Image style ='width:100%;height:250px'
        src ={
        indexPng
      }
      /> </AtCurtain > <AtButton onClick= {
        this.handleChange.bind(this)
      }
      > 右上关闭幕帘 </AtButton> </View >
    );
  }
}
