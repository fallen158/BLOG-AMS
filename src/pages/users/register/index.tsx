import React from 'react'
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd'
import styles from './styles.css'
import Link from 'umi/link'
import { connect } from 'dva'

interface IProps {
  form: any
}

const Login: React.SFC<IProps> = (props: IProps) => {
  const { getFieldDecorator } = props.form
  const handleSubmit = (e) => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password, remember } = values
        console.log('Received values of form: ', values)
      }
    })
  }
  return (
    <Row type="flex" justify="center" align="middle" className={styles.container}>
      <h3 className={styles.title}>Sing Up</h3>
      <div>Enter your details to create your account:</div>
      <Col lg={{ span: 24 }} sm={{ span: 18 }}>
        <Form onSubmit={handleSubmit} className={styles.form}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input
                prefix={<Icon type="user" className={styles.item} />}
                placeholder="Fullname"
                className={styles.input}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input
                prefix={<Icon type="user" className={styles.item} />}
                placeholder="Email"
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
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input
                prefix={<Icon type="lock" className={styles.item} />}
                type="password"
                placeholder="Comfirm Password"
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
                <Button type="primary" onClick={handleSubmit}>Sing Up</Button>
                <Button>Cancel</Button>
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
  console.log(state)
}

export default connect(mapStateTopProps)(WrappedNormalLoginForm)