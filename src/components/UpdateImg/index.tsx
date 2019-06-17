import React, { memo } from 'react'
import { Upload, Icon } from 'antd'
import ShowPictures from '@/components/ShowPictures'

interface IChangeFunc {
  ({ fileList }: any): void
}

interface IProps {
  visible: boolean
  previewImage: string
  fileList: []
  onPreview: (file: any) => {}
  onChange: IChangeFunc
  onCancel: any
}

const uploadButton = (
  <div>
    <Icon type='plus' />
    <div className='ant-upload-text'>Upload</div>
  </div>
)

const UpdateImg: React.FC<IProps> = (props: IProps) => {
  const { visible, previewImage, fileList, onChange, onCancel, onPreview } = props
  return (
    <div className='clearfix'>
      <Upload
        action=''
        listType='picture-card'
        fileList={fileList}
        onPreview={onPreview}
        onChange={onChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <ShowPictures visible={visible} src={previewImage} onCancel={onCancel} />
    </div>
  )
}

export default memo(UpdateImg)
