import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd'

function index ({ dispatch, count }) {
  function addCount () {
    dispatch({
      type: 'app/add'
    })
  }
  return (
    <>
      <div>我是Home,获取全局状态Count:{count} </div>
      <Button type='primary' onClick={addCount}>
        Add
      </Button>
    </>
  )
}

const mapStateToProps = (state) => {
  const { count } = state.app
  return {
    count
  }
}

export default connect(mapStateToProps)(index)
