import React from 'react'
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd'
import styles from './styles.css'
import Link from 'umi/link'
import { connect } from 'dva'
import fetch from 'dva/fetch'

interface IProps {
  form: any
  dispatch: () => {}
}

const Login: React.SFC<IProps> = (props: IProps) => {
  const { getFieldDecorator } = props.form
  const { dispatch } = props
  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, remember } = values
        console.log('Received values of form: ', values)
        dispatch({
          type: 'users/login',
          payload: {
            username,
            password
          }
        })
      }
    })
  }
  return (
    <Row type="flex" justify="center" align="middle" className={styles.container}>
      <h3 className={styles.title}>Sing In To Admin</h3>
      <Col lg={{ span: 24 }} sm={{ span: 18 }}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input
                prefix={<Icon type="user" className={styles.item} />}
                placeholder="Username"
                className={styles.input}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input
                prefix={<Icon type="lock" className={styles.item} />}
                type="password"
                placeholder="Password"
                className={styles.input}
              />
            )}
          </Form.Item>
          <Form.Item className={styles.item}>
            <Row type="flex" justify="space-between">
              <Col>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(<Checkbox className={styles.item}>Remember me</Checkbox>)}
              </Col>
              <Col>
                <Link to="/users/register" className={styles.item}>
                  Forget Password ?
                </Link>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button type="primary" onClick={handleSubmit}>
                  Sing in
                </Button>
              </Col>
              <Col span={24}>
                Don't have an account yet ?{' '}
                <Link to="/users/register" className={styles.link}>
                  Sing Up!
                </Link>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login)

function mapStateTopProps(state) {
  const { msg, name, token } = state.users
  // console.log(state)
  return {
    msg,
    name,
    token
  }
}

export default connect(mapStateTopProps)(WrappedNormalLoginForm)
