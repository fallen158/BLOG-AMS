import React, { useRef, useState, useCallback } from 'react'
import { Tag, Input, Icon } from 'antd'
import { TweenOneGroup } from 'rc-tween-one'

interface ITagsState {
  value: string | never
  visible: boolean
}
interface IProps {
  tagsArr: Array<string>,
  setTagsArr: Function
}

const EditableTagGroup: React.FC<IProps> = (props: IProps) => {
  const { tagsArr, setTagsArr } = props
  const [tagState, setTagState] = useState<ITagsState>({
    value: '',
    visible: false
  })
  const handleTagsInputConfirm = useCallback((): void => {
    const { value } = tagState
    if (value && tagsArr.indexOf(value) === -1) {
      let newTags = [...tagsArr, value]
      setTagsArr(newTags)
      setTagState({ value: '', visible: false })
    }
  }, [tagState])

  const handleTagesClose = useCallback(
    (removedTag: string) => {
      const newTags = tagsArr.filter((tag) => tag !== removedTag)
      setTagsArr(newTags)
    },
    [tagsArr]
  )
  const TagsItem = (tag: string) => {
    const tagElem = (
      <Tag
        color='#87d068'
        closable={true}
        onClose={(e: React.ChangeEvent<HTMLFrameElement>) => {
          e.preventDefault()
          handleTagesClose(tag)
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
          {tagsArr.map(TagsItem)}
        </TweenOneGroup>
      </div>
      {tagState.visible && (
        <Input
          // ref={saveInputRef}
          type='text'
          size='small'
          style={{ width: 78 }}
          value={tagState.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTagState({ visible: true, value: e.target.value })
          }
          onBlur={handleTagsInputConfirm}
          onPressEnter={handleTagsInputConfirm}
        />
      )}
      {!tagState.visible && (
        <Tag
          color='magenta'
          onClick={() => setTagState({ ...tagState, visible: true })}
          style={{ background: '#fff', borderStyle: 'dashed', height: '22px' }}
        >
          <Icon type='plus' /> New Tag
        </Tag>
      )}
    </div>
  )
}
export default React.memo(EditableTagGroup)
