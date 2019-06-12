import React from 'react'
import { Input } from 'antd'

interface IChangeFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void
}

interface IProps {
  value: string
  placeholder: string
  size?: any
  onChange: IChangeFunc
}

const TheInput: React.FC<IProps> = (props: IProps) => {
  return (
    <Input
      value={props.value}
      size={props.size ? props.size : 'default'}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}

export default React.memo(TheInput)
