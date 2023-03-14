import {
  Circle,
  Node,
  NodeProps,
  Rect,
} from "@motion-canvas/2d/lib/components";
import { range } from "@motion-canvas/core/lib/utils";

export class Spiritey extends Node {
  public constructor(props?: NodeProps) {
    super({
      ...props,
    });

    const scale = 80;

    this.add(
      <Node>
        <Circle
          scale={scale}
          width={1}
          height={1}
          fill="#28D830"
          y={(-1 / 1.35 / 2) * scale}
        />
        <Rect
          scale={scale}
          fill="#28D830"
          width={1}
          height={1 / 1.35}
          radius={0}
        />
        {range(5).map((i) => (
          <Circle
            scale={scale}
            width={1 / 4.5}
            height={1 / 4.5}
            fill="#28D830"
            y={(0.98 / 1.35 / 2) * scale}
            x={((i - 2) * 1 * scale) / 5.12}
          />
        ))}

        <Circle
          scale={scale}
          width={1 / 4.5}
          height={1 / 4.5}
          fill="#28D830"
          x={(-2.5 * 1 * scale) / 5.12}
          y={-0.61}
        />

        <Circle
          scale={scale}
          width={1 / 4.5}
          height={1 / 4.5}
          fill="#28D830"
          x={(2.5 * 1 * scale) / 5.12}
          y={-0.61}
        />
        {/* <Circle
          scale={scale}
          width={1 / 4.5}
          height={1 / 4.5}
          fill="#28D830"
          y={(0.98 / 1.35 / 2) * scale}
          x={((4 - 2) * 1 * scale) / 5.12}
        /> */}
      </Node>
    );
  }
}
