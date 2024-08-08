import React, { useState } from 'react';

interface NewBoxFormProps {
  addBox: (newBox: { width: string; height: string; backgroundColor: string }) => void;
}

function NewBoxForm({ addBox }: NewBoxFormProps) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBox({ width, height, backgroundColor });
    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          id="backgroundColor"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
