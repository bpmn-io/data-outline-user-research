import BpmnJS from 'camunda-bpmn-js/dist/camunda-cloud-modeler.development'
import 'camunda-bpmn-js/dist/assets/camunda-cloud-modeler.css'
import { useEffect, useRef } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import './Modeler.css'

import xml from './diagram.xml?raw'
import { getPlugins } from '../util';

export const Modeler = (props) => {

  const modelerRef = useRef(null);
  const propertiesPanel = useRef(null);

  useEffect(() => {
    
    if(modelerRef.current && propertiesPanel.current) {
      const plugins = getPlugins('bpmn.cloud.modeler.additionalModules');
      const modeler = new BpmnJS({
        container: modelerRef.current,
        additionalModules: plugins,
        propertiesPanel: {
          parent: propertiesPanel.current
        },
        keyboard: {
          bindTo: document
        }
      });

      (async () => {
        await modeler.importXML(xml)
        modeler.get('canvas').zoom('fit-viewport');
        setTimeout(() => modeler.get('eventBus').fire('import.done'), 10);
      })()

      return () => {
        modeler.get('propertiesPanel').detach();
        modeler.detach();
      }
    }
  }, []);


  return (
    <>
    <div className='modelerContainer'>
      <PanelGroup autoSaveId="modelerContainer" direction="horizontal">
        <Panel>
          <div className='modeler' ref={modelerRef}></div>
        </Panel>
        <PanelResizeHandle>
          <div className='VerticalResizeHandle'></div>
        </PanelResizeHandle>
        <Panel defaultSize={25} minSize={10}>
          <div className='properties' ref={propertiesPanel}></div>
        </Panel>
      </PanelGroup>
    </div>
    </>
  )


}