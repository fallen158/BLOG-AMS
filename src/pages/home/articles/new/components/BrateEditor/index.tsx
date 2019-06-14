import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import Markdown from 'braft-extensions/dist/markdown'

const options = {
  includeEditors: ['editor-id-1']
}

BraftEditor.use(Markdown(options))

interface IChangeFunc {
  (editStore: any): void
}
interface IPops {
  store: string
  onSave: Function
  onChange: IChangeFunc
}

const BrateEidtor: React.FC<IPops> = (props: IPops) => {
  return (
    <BraftEditor
      value={props.store}
      onChange={props.onChange}
      onSave={props.onSave}
      id='editor-id-1'
    />
  )
}
export default React.memo(BrateEidtor)
