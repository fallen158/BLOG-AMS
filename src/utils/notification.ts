import { notification } from 'antd'

interface IDataState {
  message: string
}

export default function notificationMessage (code: number, data: IDataState) {
  if (code === 0) {
    notification['success']({
      message: 'Success',
      description:
        data.message
    })
  } else {
    notification['error']({
      message: 'Error',
      description:
        data.message
    })
  }
}
