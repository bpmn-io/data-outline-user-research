import { useState } from 'react'

import './util'

import './App.css'
import { Modeler } from './Modeler/Modeler'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { BottomPanel } from './BottomPanel/BottomPanel'


function App() {
  return (
    <>
      <PanelGroup autoSaveId="main" direction="vertical">
        <Panel>
            <Modeler />
        </Panel>
        <PanelResizeHandle>
          <div className='HorizontalResizeHandle'></div>
        </PanelResizeHandle>
        <Panel defaultSize={25}>
          <BottomPanel />
        </Panel>
      </PanelGroup>
    </>
  )
}

export default App
