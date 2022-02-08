import React from 'react';
import type {Node} from 'react';
import {useWindowDimensions} from 'react-native';
import {Canvas, Circle, Group, Oval} from '@shopify/react-native-skia';

const App: () => Node = () => {
  const {height, width} = useWindowDimensions();

  const center = {x: width / 2, y: height / 2};

  const rct = {x: width / 2, y: height / 2, width: 25, height: 50};

  return (
    <Canvas style={{flex: 1}}>
      <Circle c={center} r={25} color="lightgreen" />

      <Group>
        <Oval rect={rct} color="lightgreen" />

        <Group
          transform={[{rotate: Math.PI / 3}]}
          origin={center}
          color="lightgreen">
          <Oval rect={rct} />
        </Group>

        <Group
          transform={[{rotate: -Math.PI / 3}]}
          origin={center}
          color="lightgreen">
          <Oval rect={rct} />
        </Group>
      </Group>
    </Canvas>
  );
};

export default App;
