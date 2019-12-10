import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./index.scss";

const Test = () => {
  return <Text>Demo Test</Text>;
};

export default class extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View className="index">
        <Test />
        <Text>Hello Taro!</Text>
      </View>
    );
  }
}
