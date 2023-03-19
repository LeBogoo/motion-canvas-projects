import {
  Circle,
  Layout,
  Node,
  Rect,
  Txt,
} from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { waitFor } from "@motion-canvas/core/lib/flow";
import { Color } from "@motion-canvas/core/lib/types";
import {
  createRef,
  range,
  Reference,
  useLogger,
  useRandom,
} from "@motion-canvas/core/lib/utils";
import { Spiritey } from "../components/Spiritey";

export default makeScene2D(function* (view) {
  const loadingTextRef = createRef<Txt>();

  // const notifications = {
  //   twitch: {
  //     text: "Please consider following my channel!",
  //     color: "purple",
  //   },
  //   instagram: {
  //     text: "Please consider following my Instagram!\nIG/@lebogooo",
  //     color: "pink",
  //   },
  //   discord: {
  //     text: "Please consider joining my Discord!\nhttps://discord.gg/w272wnvhrw",
  //     color: "#5865F2",
  //   },
  // };

  const amount = 5;

  view.add(
    <Layout layout gap={10}>
      {range(amount).map((index) => (
        <Rect
          size={100}
          radius={10}
          smoothCorners
          fill={Color.lerp("#f3303f", "#ffc66d", index / amount)}
        />
      ))}
    </Layout>
  );

  for (let rect of view.children()[0].children()) {
    yield rect.scale(1.05, 1);
    yield* waitFor(0.2);
  }

  for (let rect of view.children()[0].children()) {
    yield rect.scale(1, 1);
    yield* waitFor(0.2);
  }

  yield* waitFor((view.children()[0].children().length - 2) * 0.2);
});
