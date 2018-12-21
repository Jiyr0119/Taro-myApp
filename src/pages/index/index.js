import Taro, { Component } from "@tarojs/taro";
import { View, Text, Input } from "@tarojs/components";
import { Hello } from "../../components/hello";
import "./index.less";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      list: ["get up", "coding", "sleep"],
      inputVal: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {
    console.log(this.config);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  handleGoSecond() {
    Taro.navigateTo({
      url: "/pages/second/index?id=Jonathan"
    });
  }

  addItem() {
    let { list } = this.state;
    const inputVal = this.inputVal;
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    if (inputVal == "") return;
    else {
      list.push(inputVal);
    }
    this.setState({
      list,
      inputVal: ""
    });
  }

  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler(e) {
    this.inputVal = e.target.value;
  }

  render() {
    let { list, inputVal } = this.state;
    return (
      <View className='index'>
        <Text onClick={this.handleGoSecond}>
          {this.state.isOpened ? "Hello world!" : "Hello is me!"}
        </Text>
        <Hello name='components' />
        <Input
          className='input'
          type='text'
          value={inputVal}
          placeholder='to do list'
          onInput={this.inputHandler.bind(this)}
        />
        <Text className='add' onClick={this.addItem.bind(this)}>添加</Text>
        {list.map((item, index) => {
          return;
          <View>
            <Text>
              {index + 1}.{item}
            </Text>
          </View>;
        })}
      </View>
    );
  }
}
