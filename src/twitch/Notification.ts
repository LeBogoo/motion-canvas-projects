import { makeProject } from "@motion-canvas/core";

import notification from "./scenes/notificationScene?scene";

import "../global.css";

export default makeProject({
  scenes: [notification],
});
