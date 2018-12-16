import Taro, {
    Component
} from '@tarojs/taro'
import {
    View,
    Text
} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        return (
            <View className='index'>
                <Text > Hello world!is my app </Text>   
            </View > <
            ScrollView className = 'scrollview'
            scrollY scrollWithAnimation scrollTop = '0'
            style = 'height: 150px;'
            lowerThreshold = '20'
            upperThreshold = '20'
            onScrolltoupper = {
                this.onScrolltoupper
            }
            onScroll = {
                this.onScroll
            } >
            <View style='height:150px;background-color:rgb(26,173,25);'>A</View> <
            View style = 'height:150px;background-color:rgb(39,130,215);' > B < /View> <
            View style = 'height:150px;background-color:rgb(241,241,241);color: #333;' > C < /View> < /
            ScrollView >
        )
    }
}