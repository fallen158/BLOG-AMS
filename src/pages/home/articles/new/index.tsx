import React, { useState, useCallback } from 'react'
import Tags from './components/TagGroup'
import { Input, Button } from 'antd'
const { TextArea } = Input
import UploadImg from '@/components/UpdateImg'
import BrateEditorText from './components/BrateEditor'
import BraftEditor from 'braft-editor'
import TheInput from '@/components/TheInput'
import getBase64 from '@/utils/getBase64'
// import { fetch } from './api/index'
// import notificationMessage from '@/utils/notification'

const ArticleEditor: React.FC = () => {
  const [fileList, setFileList] = useState<[]>([])
  const [previewImg, setPreviewImg] = useState({
    visible: false,
    image: ''
  })
  const [brateEditorStore, setBrateEditorStore] = useState(
    BraftEditor.createEditorState('<p>Hello <b>World!</b></p>')
  )
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [tags, setTags] = useState<Array<string>>(['React', 'Linux', 'Music'])
  const [tagsInputState, setTagsInputState] = useState<{ visible: boolean; value: string }>({
    visible: false,
    value: ''
  })
  const handleUpdateImgChange = useCallback(
    ({ fileList }: any) => {
      setFileList(fileList)
    },
    [fileList]
  )
  const handleUpadateImgPreview = useCallback(
    async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      setPreviewImg({
        image: file.url || file.preview,
        visible: true
      })
    },
    [fileList]
  )

  const handlePreviewCancel = useCallback(() => {
    // console.log(1)
    setPreviewImg({
      ...previewImg,
      visible: false
    })
  }, [previewImg.visible])

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
    // console.log(brateEditorStore.toHTML())
  }, [brateEditorStore])

  const handleEditorChange = useCallback(
    (editorStore: any): void => {
      setBrateEditorStore(editorStore)
    },
    [brateEditorStore]
  )
  const showTagsInput = useCallback(() => {
    setTagsInputState({ ...tagsInputState, visible: true })
  }, [tagsInputState])
  const handleTagesClose = useCallback(
    (removedTag: string) => {
      const newTags = tags.filter((tag) => tag !== removedTag)
      setTags(newTags)
    },
    [tags]
  )
  const handleTagsInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTagsInputState({ visible: true, value: e.target.value })
    },
    [tagsInputState.value]
  )
  const handleTagsInputConfirm = useCallback((): void => {
    const { value } = tagsInputState
    if (value && tags.indexOf(value) === -1) {
      let newTags = [...tags, value]
      setTags(newTags)
      setTagsInputState({ value: '', visible: false })
    }
  }, [tagsInputState.value])
  const onSubmit = async () => {
    // const { code, data } = await fetch(
    //   JSON.stringify({
    //     title,
    //     author,
    //     summary,
    //     coverImg: '21321321',
    //     content: brateEditorStore.toHTML(),
    //     assort: `${tags}`,
    //     createTime: new Date().getTime(),
    //     updateTime: new Date().getTime()
    //   })
    // )
    // await notificationMessage(code, data)
  }
  return (
    <div className='my-component'>
      Header Cover:
      <UploadImg
        fileList={fileList}
        onChange={handleUpdateImgChange}
        onPreview={handleUpadateImgPreview}
        onCancel={handlePreviewCancel}
        visible={previewImg.visible}
        previewImage={previewImg.image}
      />
      Title: <TheInput placeholder='Basic usage' value={title} onChange={handleTitleChange} />
      Author: <TheInput placeholder='Search user' value={author} onChange={handleAuthorChange} />
      Summany:{' '}
      <TextArea rows={4} placeholder='Please enter the content' onChange={handleSummanyChange} />
      <BrateEditorText
        store={brateEditorStore}
        onSave={submitEditorContent}
        onChange={handleEditorChange}
      />
      分类:{' '}
      <Tags
        tags={tags}
        tagState={tagsInputState}
        showInput={showTagsInput}
        handleClose={handleTagesClose}
        handleInputChange={handleTagsInputValue}
        handleInputConfirm={handleTagsInputConfirm}
        handleInputKeyboard={handleTagsInputConfirm}
      />
      <Button>发布</Button>
      <Button onClick={onSubmit}>保存</Button>
      <Button>预览</Button>
    </div>
  )
}

export default ArticleEditor
