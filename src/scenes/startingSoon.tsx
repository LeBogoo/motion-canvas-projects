import { Node, Txt } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef, range, Reference } from "@motion-canvas/core/lib/utils";
import { Spiritey } from "../components/Spiritey";

export default makeScene2D(function* (view) {
  const size = 100;
  const speed = 0.7;

  const shapes = [
    { x: -1, y: -1, rotation: 0, scale: 1, color: "#28D830", nextPos: 3 },
    { x: -1, y: 1, rotation: -90 - 45, scale: 1, color: "#28D830", nextPos: 0 },
    { x: 1, y: 1, rotation: 0, scale: 1, color: "#28D830", nextPos: 1 },
    { x: 1, y: -1, rotation: 90 + 45, scale: 0, color: "#28D830", nextPos: 2 },
  ];

  const loadingTextRef = createRef<Txt>();

  const references: Reference<Node>[] = range(shapes.length).map((_) =>
    createRef<Node>()
  );

  view.add(
    <Node>
      <Txt
        y={-size * 2.5}
        fill={"white"}
        scale={size * 0.03}
        text={"Starting soon"}
      />
      <Txt
        ref={loadingTextRef}
        y={-size * 1.25}
        fill={"white"}
        scale={size * 0.015}
        text={"Geisterwelt wird geladen"}
      />

      <Node y={size * 1.25}>
        {range(shapes.length).map((i) => (
          <Spiritey
            shadowColor={shapes[i].color}
            shadowBlur={size * 0.25}
            ref={references[i]}
            scale={shapes[i].scale}
            x={shapes[i].x * 0.8 * size}
            y={shapes[i].y * 0.8 * size}
            rotation={shapes[i].rotation}
          />
        ))}
      </Node>
    </Node>
  );

  for (let i = 0; i < references.length; i++) {
    const ref = references[i];
    const shape = shapes[i];
    const nextPosition = shapes[shape.nextPos];

    if (shape.scale) {
      yield ref().position.x(nextPosition.x * 0.8 * size, speed);
      yield ref().position.y(nextPosition.y * 0.8 * size, speed);
      yield* ref().rotation(nextPosition.rotation, speed);
    }
  }

  const ref = references[0];
  const shape = shapes[0];
  const nextPosition = shapes[2];

  yield ref().position.x(nextPosition.x * 0.8 * size, speed);
  yield ref().position.y(nextPosition.y * 0.8 * size, speed);
  yield* ref().rotation(nextPosition.rotation, speed);
});
