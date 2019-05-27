import React from 'react'
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd'
import styles from './styles.css'
import fetch from 'dva/fetch'

const Login = (props) => {
  const { getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, remember } = values
        fetch('/api/user/login', { method: 'POST' }).then((res) => {
          console.log(res)
        })
        console.log('Received values of form: ', values)
      }
    })
  }
  return (
    <Row type="flex" justify="center" align="middle" className={styles.login}>
      <h2>Sing In To Admin</h2>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sing in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Row>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)

export default WrappedNormalLoginForm
