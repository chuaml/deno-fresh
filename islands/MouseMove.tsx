import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";


// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function MouseMove() {
  const x = useSignal(0);
  const y = useSignal(0);

  // Set up an interval to update the `now` date every second with the current
  // date as long as the component is mounted.
  useEffect(() => {
    globalThis.addEventListener("mousemove", (e) => {
      x.value = e.pageX;
      y.value = e.pageY;
    });
  });


  // Otherwise, we format the remaining time using `Intl.RelativeTimeFormat` and
  // render it.
  return <div>Mouse position is at: ${ x }, ${ y }</div>;
}
