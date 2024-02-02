import { useCallback } from "react";
import { getPlugins } from "../util"



export const BottomPanel = (props) => {

  const plugins = getPlugins('client');

  const subscribe = useCallback((action, cb) => {
    cb({activeTab: {id: 'foobar', type: 'cloud-bpmn'}});
  }, [])

  return (
    <>
      {plugins.map((Plugin, i) => <Plugin key={i} {...props} subscribe={subscribe} />)}
    </>
  )
}
