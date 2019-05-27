import React from 'react'
import fetch from 'dva/fetch'
import { connect } from 'dva'

const AllComponent = () => {
  React.useEffect(() => {}, [])
  return <div>my All</div>
}

function mapStateTopProps(state) {
  const { list, total } = state.all
  return {
    list,
    total
  }
}
export default connect(mapStateTopProps)(AllComponent)
