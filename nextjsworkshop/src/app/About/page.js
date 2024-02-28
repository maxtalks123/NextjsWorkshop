"use Client";
import {motion} from "framer-motion"
import Animate from "./Animate";

export default function AboutPage() {
  return (
    <Animate>
      <p>Hello this is the about page</p>
      <ul>
        <li>this will be animated</li>
        <li>this will be animated too</li>
        <li>this will be animated as well</li>
      </ul>
    </Animate>
  );
}
