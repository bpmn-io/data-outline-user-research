import { useState } from 'react'

import './util'

import './App.css'
import { Modeler } from './Modeler/Modeler'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { BottomPanel } from './BottomPanel/BottomPanel'
import DropZone from './DropZone/DropZone'


function App() {

  const [content, setContent] = useState(null);

  return (
    <>
      <DropZone setContent={setContent}>
        <PanelGroup autoSaveId="main" direction="vertical">
          <Panel minSize={25}>
              <Modeler xml={content} />
          </Panel>
          <PanelResizeHandle>
            <div className='HorizontalResizeHandle'></div>
          </PanelResizeHandle>
          <Panel defaultSize={25}>
            <BottomPanel />
          </Panel>
        </PanelGroup>
      </DropZone>
    </>
  )
}

export default App
