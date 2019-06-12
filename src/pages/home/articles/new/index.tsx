import React, { useEffect, useState, memo, useCallback } from 'react'
import Tags from '../components/Tags'
import { Input, Tag } from 'antd'
const { TextArea } = Input
import UploadImg from '../components/UploadFile'
import BrateEditorText from '../components/BrateEditor'
import BraftEditor from 'braft-editor'
import TheInput from '@/components/TheInput'

const ArticleEditor: React.FC = () => {
  const [picturesState, setPicturesState] = useState({
    previewVisible: false,
    previewImage: '',
    fileList: []
  })
  const [brateEditorStore, setBrateEditorStore] = useState(
    BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  )
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const handleTitleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
    },
    [title]
  )
  const handleAuthorChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthor(event.target.value)
    },
    [author]
  )
  const handleSummanyChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSummary(event.target.value)
    },
    [summary]
  )
  const submitEditorContent = useCallback((): void => {
    console.log(brateEditorStore.toHTML())
  }, [brateEditorStore])

  const handleEditorChange = useCallback(
    (editorStore: any): void => {
      setBrateEditorStore(editorStore)
    },
    [brateEditorStore]
  )
  return (
    <div className="my-component">
      Header Cover:
      <UploadImg />
      Title: <TheInput placeholder="Basic usage" value={title} onChange={handleTitleChange} />
      Author: <TheInput placeholder="Search user" value={author} onChange={handleAuthorChange} />
      Summany:{' '}
      <TextArea rows={4} placeholder="Please enter the content" onChange={handleSummanyChange} />
      <BrateEditorText
        store={brateEditorStore}
        onSave={submitEditorContent}
        onChange={handleEditorChange}
      />
      Tags: <Tags />
    </div>
  )
}

export default ArticleEditor
