import React from 'react'
import { Input } from 'antd'

interface IProps {
  value: string
  size?: any
}

const TheInput: React.FC<IProps> = (props: IProps) => {
  return <Input value={props.value} size={props.size ? props.size : 'default'} />
}

export default React.memo(TheInput)
