import { useCallback } from "react";
import { getPlugins } from "../util"

import './bottom-panel.css'

export const BottomPanel = (props) => {

  const plugins = getPlugins('client');

  const subscribe = useCallback((action, cb) => {
    cb({activeTab: {id: 'foobar', type: 'cloud-bpmn'}});
  }, [])

  return (
    <>
      <div className="bottom-panel"></div>
      {plugins.map((Plugin, i) => <Plugin key={i} {...props} subscribe={subscribe} />)}
    </>
  )
}
