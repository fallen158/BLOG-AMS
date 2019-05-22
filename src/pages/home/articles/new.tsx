import React, { useEffect, useState } from 'react'
import Tags from '@/components/Tags'
import { Input, Tag } from 'antd';
const { TextArea } = Input;

// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import Markdown from 'braft-extensions/dist/markdown'

const options = {
  includeEditors: ['editor-id-1'],
  excludeEditors: ['editor-id-2'],
}

BraftEditor.use(Markdown(options))

const ArticleEditor: React.FC = () => {
  const [ editorState, setEditorState ] = useState(
    BraftEditor.createEditorState('', { editorId: 'editor-id-1' }),
  )
  const handleEditorChange = (editorState) => {
    setEditorState({ editorState })
  }
  return (
    <div className="my-component">
      Header Cover: 
      Title: <Input placeholder="Basic usage" />
      Summany: <TextArea rows={4} />
      <BraftEditor value={editorState} onChange={handleEditorChange} id="editor-id-1" />
      Tags: <Tags/>
    </div>
  )
}

export default ArticleEditor
