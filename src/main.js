import "./style.css";
import { animate, stagger, inView, scroll, timeline } from "motion";

animate(
  ".fadein",
  { opacity: [1, 0.5, 0.7], scale: [1, 1.2, 1.3] },
  { duration: 4, direction: "alternate", repeat: Infinity }
);

animate(
  ".staggeranimation li",
  { opacity: [0, 1] },
  {
    delay: stagger(1, { start: 2 }),
  }
);
