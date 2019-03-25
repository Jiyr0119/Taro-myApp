import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input, Button } from '@tarojs/components';
import { Hello } from '../../components/hello';
import './index.less';
import { observer, inject } from '@tarojs/mobx';
@inject('counterStore')
@observer
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      list: ['get up', 'coding', 'sleep'],
      inputVal: ''
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
      url: '/pages/second/index?id=Jonathan'
    });
  }

  addItem() {
    let { list } = this.state;
    const inputVal = this.inputVal;
    // 如果输入框的值为空，则返回，否则添加到事项列表里
    if (inputVal == '') return;
    else {
      list.push(inputVal);
    }
    this.setState({
      list,
      inputVal: ''
    });
  }
  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  // 输入框 onInput 的时候，它的值暂存起来
  inputHandler(e) {
    this.inputVal = e.target.value;
  }

  render() {
    let { list, inputVal } = this.state;
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className='index'>
        <Input
          className='input'
          type='text'
          value={inputVal}
          placeholder='to do list'
          onInput={this.inputHandler.bind(this)}
        />
        <Text className='add' onClick={this.addItem.bind(this)}>
          添加
        </Text>
        {list.map((item, index) => {
          return (
            <View key={index}>
              <Text>
                {index + 1}.{item}
              </Text>
            </View>
          );
        })}
        <Hello name='components' />
        <Text className='index-color' onClick={this.handleGoSecond}>
          {this.state.isOpened ? 'Hello world!' : 'Hello is me!'}
        </Text>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    );
  }
}
