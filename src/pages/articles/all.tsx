import React from 'react'
import { Pagination, LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import enUS from 'antd/lib/locale-provider/en_US'

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
)

const All = () => {
  return (
    <LocaleProvider locale={zhCN}>
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </LocaleProvider>
  )
}

export default All
