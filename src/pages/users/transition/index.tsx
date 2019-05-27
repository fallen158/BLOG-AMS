import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Button, Alert } from 'antd'
import styles from './styles.css';

function Index() {
  const [showButton, setShowButton] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size="default">
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames={{ ...styles }}
        unmountOnExit={true}
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          message="This alert message is being transitioned in and out of the DOM."
          closable
          afterClose={() => setShowMessage(false)}
        />
      </CSSTransition>
    </div>
  )
}

export default Index
