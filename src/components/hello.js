import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class Hello extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.props.name)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View> Hello, {this.props.name} </View>;
  }
}
