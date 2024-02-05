import { useEffect, useRef } from 'react';
import './DropZone.css';

export default function DropZone(props) {
  const { setContent = ()=>{} } = props;
  const dragContainer = useRef();

  useEffect(() => {
    if(dragContainer.current) {
      const target = dragContainer.current;


      let enterTarget = null;

      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
      }

      const handleDragEnter = (e) => {
        enterTarget = e.target;
        target.classList.add('dragging');
      }

      const handleDragLeave = (e) => {
        if (enterTarget == e.target){
          target.classList.remove('dragging');
        }
      }

      const handleDrop = 
        async (e) => {
          e.preventDefault();
          e.stopPropagation();
          const files = e.dataTransfer.files;
          const file = files[0];

          const content = await file.text()

          setContent(content);
          target.classList.remove('dragging');
          }

      target.addEventListener('dragover', handleDragOver);
      target.addEventListener('dragenter', handleDragEnter);
      target.addEventListener('drop', handleDrop);
      target.addEventListener('dragleave', handleDragLeave);

      return () => {
        target.removeEventListener('dragover', handleDragOver);
        target.removeEventListener('dragenter', handleDragEnter);
        target.removeEventListener('drop', handleDrop);
        target.removeEventListener('dragleave', handleDragLeave);
      }
    }
  }, [dragContainer, setContent])
  return <div className="DropZone" ref={dragContainer}>
      <div className="Note">
        Open BPMN Diagram
      </div>
      {props.children}
    </div>
}