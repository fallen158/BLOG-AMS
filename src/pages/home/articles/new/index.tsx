import React, { useState, useCallback } from 'react'
import Tags from './components/TagGroup'
import { Input, Button } from 'antd'
const { TextArea } = Input
import UploadImg from '@/components/UpdateImg'
import BrateEditorText from './components/BrateEditor'
import BraftEditor from 'braft-editor'
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
  const [summary, setSummary] = useState<string>('')
  const [tagsArr, setTagsArr] = useState<Array<string>>(['React', 'Linux', 'Music'])
  const author = '张三'
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
  const submitEditorContent = useCallback((): void => {
    // console.log(brateEditorStore.toHTML())
  }, [brateEditorStore])

  const onSubmit = async () => {
    console.log({ title, author, summary, tagsArr, fileList, content: brateEditorStore })
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
        onChange={({ fileList }: any) => {
          setFileList(fileList)
        }}
        onPreview={handleUpadateImgPreview}
        onCancel={() => {
          setPreviewImg({
            ...previewImg,
            visible: false
          })
        }}
        visible={previewImg.visible}
        previewImage={previewImg.image}
      />
      Title:{' '}
      <Input
        placeholder='Basic usage'
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      Author: <Input disabled={true} value={author} />
      Summany:{' '}
      <TextArea
        value={summary}
        rows={4}
        placeholder='Please enter the content'
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setSummary(event.target.value)}
      />
      <BrateEditorText
        store={brateEditorStore}
        onSave={submitEditorContent}
        onChange={(editorStore: any): void => setBrateEditorStore(editorStore)}
      />
      分类: <Tags tagsArr={tagsArr} setTagsArr={setTagsArr} />
      <Button>发布</Button>
      <Button onClick={onSubmit}>保存</Button>
      <Button>预览</Button>
    </div>
  )
}

export default ArticleEditor
