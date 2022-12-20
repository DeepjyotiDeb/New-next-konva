'use client';
import { Stage, Layer, Circle } from 'react-konva';

export default function CircleComp(props) {
  return (
    // <p>text</p>
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle x={200} y={100} radius={50} fill='green' draggable={true} />
      </Layer>
    </Stage>
  );
}
