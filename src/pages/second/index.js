import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem } from "@tarojs/components";
import { AtAccordion, AtList, AtListItem  } from "taro-ui";
import "./index.less";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "第二页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          vertical
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">1</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">2</View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">3</View>
          </SwiperItem>
        </Swiper>
        <AtAccordion
          title="标题三"
          icon={{ value: "chevron-down", color: "red", size: "15" }}
        >
          <AtList hasBorder={false}>
            <AtListItem
              title="标题文字"
              arrow="right"
              thumb="https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"
            />
            <AtListItem
              title="标题文字"
              note="描述信息"
              arrow="right"
              thumb="http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"
            />
            <AtListItem
              title="标题文字"
              note="描述信息"
              extraText="详细信息"
              arrow="right"
              thumb="http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"
            />
          </AtList>
        </AtAccordion>
      </View>
    );
  }
}
