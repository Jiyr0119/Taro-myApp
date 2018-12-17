import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.less";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleGoSecond() {
    Taro.navigateTo({
      url: "/pages/second/index"
    });
  }
  render() {
    return (
      <View className="index">
        <Text onClick={this.handleGoSecond}>Hello world!</Text>
      </View>
    );
  }
}
