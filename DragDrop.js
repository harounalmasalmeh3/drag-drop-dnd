
import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { DetailList, CustomDragLayer } from './components';

export function DragDrop({componentsList, isDragMode}) {

  const onMoveTicket = useCallback((dragId, toParentId) => {
    //fetchMoveTicket(dragId, toParentId);
  }, []);

  return (
     <DndProvider backend={HTML5Backend}>
       <DetailList
          data={componentsList}
          isDragMode={isDragMode}
          onMoveTicket={onMoveTicket}
        />
        <CustomDragLayer dataList={componentsList} />
      </DndProvider>
  );
}
