import React, { useRef, useState, useCallback } from 'react'
import { Tag, Input, Icon } from 'antd'
import { TweenOneGroup } from 'rc-tween-one'
import { IFousEventFunc, IKeyboardEventFunc, IMouseEventFunc } from '@/globals'

interface ITagsState {
  value: string
  visible: boolean
}

interface IProps {
  tags: Array<string>
  tagState: ITagsState
  handleClose: (value: string) => void
  showInput: IMouseEventFunc
  handleInputChange: IFousEventFunc
  handleInputConfirm: IFousEventFunc
  handleInputKeyboard: IKeyboardEventFunc
}

const EditableTagGroup: React.FC<IProps> = (props: IProps) => {
  const { tags, tagState, handleClose, showInput, handleInputChange, handleInputConfirm,handleInputKeyboard } = props
  const TagsItem = (tag: string) => {
    const tagElem = (
      <Tag
        color='#87d068'
        closable={true}
        onClose={(e: React.ChangeEvent<HTMLFrameElement>) => {
          e.preventDefault()
          handleClose(tag)
        }}
      >
        {tag}
      </Tag>
    )
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    )
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: (e: any) => {
              e.target.style = ''
            }
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tags.map(TagsItem)}
        </TweenOneGroup>
      </div>
      {tagState.visible && (
        <Input
          // ref={saveInputRef}
          type='text'
          size='small'
          style={{ width: 78 }}
          value={tagState.value}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputKeyboard}
        />
      )}
      {!tagState.visible && (
        <Tag
          color='magenta'
          onClick={showInput}
          style={{ background: '#fff', borderStyle: 'dashed', height: '22px' }}
        >
          <Icon type='plus' /> New Tag
        </Tag>
      )}
    </div>
  )
}
export default EditableTagGroup
