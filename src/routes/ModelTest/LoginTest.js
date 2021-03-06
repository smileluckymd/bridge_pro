import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

const loginTest = {
  password: '888888',
  type: 'account',
  userName: 'admin',
};

@connect(({ login }) => ({
  login,
}))
export default class LoginTest extends Component {
  onClickLoginTest = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'logintest/login',
      payload: { ...loginTest },
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.onClickLoginTest}>登录测试</Button>
        </div>
      </div>
    );
  }
}
