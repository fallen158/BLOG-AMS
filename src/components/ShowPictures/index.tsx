import React, { memo } from 'react'
import { Modal } from 'antd'
interface IModalProps {
  visible: boolean
  src: string
  onCancel: () => {}
}

const ShowPictures: React.FC<IModalProps> = memo(function (props: IModalProps) {
  const { visible, onCancel, src } = props
  return (
    <Modal visible={visible} footer={null} onCancel={onCancel}>
      <img alt='example' style={{ width: '100%' }} src={src} />
    </Modal>
  )
})

export default ShowPictures
