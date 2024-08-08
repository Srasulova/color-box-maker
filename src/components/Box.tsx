interface BoxProps {
  id: number;
  width: string;
  height: string;
  backgroundColor: string;
  removeBox: (id: number) => void;
}

function Box({ id, width, height, backgroundColor, removeBox }: BoxProps) {
  const handleRemove = () => removeBox(id);

  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor,
        }}
      />
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
