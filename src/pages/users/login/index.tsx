import React from 'react'
import { Row, Col, Form, Icon, Input, Button, Checkbox, message } from 'antd'
import styles from './styles.css'
import Link from 'umi/link'
import router from 'umi/router'
import { connect } from 'dva'

interface IValues {
  password: string
  username: string
  remember: boolean
}
interface IProps {
  form: any
  dispatch: any
}
const Login: React.SFC<IProps> = (props: IProps) => {
  const { getFieldDecorator } = props.form
  const { dispatch } = props
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    props.form.validateFields(async (err: Error, values: IValues) => {
      if (!err) {
        const { username, password } = values
        console.log('Received values of form: ', values)
        const { error, msg } = await dispatch({
          type: 'users/login',
          payload: {
            username,
            password
          }
        })

        console.log(error, msg)
        if (error === 'success') {
          message.success(msg)
          return router.push('/home')
        }
        return message.error(msg)
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
                size="large"
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
                size="large"
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
                <Link to="/users/login" className={styles.item}>
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
                <Link to="/users/login" className={styles.link}>
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

function mapStateTopProps(state: any) {
  const { msg, error, token } = state.users
  return {
    msg,
    error,
    token
  }
}

export default connect(mapStateTopProps)(WrappedNormalLoginForm)
