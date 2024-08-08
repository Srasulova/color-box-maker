import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

interface BoxType {
  id: number;
  width: string;
  height: string;
  backgroundColor: string;
}

function BoxList() {
  const [boxes, setBoxes] = useState<BoxType[]>([]);

  const addBox = (newBox: Omit<BoxType, 'id'>) => {
    setBoxes([...boxes, { ...newBox, id: boxes.length }]);
  };

  const removeBox = (id: number) => {
    setBoxes(boxes.filter(box => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
