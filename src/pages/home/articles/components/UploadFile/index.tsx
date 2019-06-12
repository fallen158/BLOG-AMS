import React, { memo } from 'react'
import { Upload, Icon, Modal } from 'antd'

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

// interface IProps {
//   previewVisible: boolean
//   previewImage: string
//   fileList: []
//   handlePreview: (file: any) => {}
//   handleChange: (file: any) => {}
//   handleCancel: () => {}
// }

// const uploadButton = (
//   <div>
//     <Icon type="plus" />
//     <div className="ant-upload-text">Upload</div>
//   </div>
// )

// interface IModalProps{
//   visible: boolean
//   src: string
//   onCancel: () => {}
// }

// const ModalComponent:React.FC<IModalProps> = memo(function(props:IModalProps) {
//   const { visible,onCancel,src } = props
//   return (
//     <Modal visible={visible} footer={null} onCancel={onCancel}>
//       <img alt="example" style={{ width: '100%' }} src={src} />
//     </Modal>
//   )
// })

// const PicturesWall: React.FC<IProps> = (props: IProps) => {
//   const {
//     previewVisible,
//     previewImage,
//     fileList,
//     handleChange,
//     handleCancel,
//     handlePreview
//   } = props
//   return (
//     <div className="clearfix">
//       <Upload
//         action=""
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 1 ? null : uploadButton}
//       </Upload>
//       <ModalComponent  visible={previewVisible} src={previewImage} onCancel={handleCancel}/>
//     </div>
//   )
// }
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    })
  }

  handleChange = ({ fileList }: any) => {
    this.setState({ fileList })
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

export default PicturesWall
