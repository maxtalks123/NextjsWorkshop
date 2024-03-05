import { Suspense } from "react";
import { SlowComponent } from "../slow/SlowComponent";

export default function FastPage() {
  return (
    <div>
      <h2>Fast page</h2>
      <Suspense callback={<p>Loading...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
