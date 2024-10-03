// import Contact from "./Contact";
import { lazy, Suspense, useState } from "react";

const Form = lazy(() => import("./Contact"));
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>App</h1>

      <button onClick={() => setShow(true)}>Open</button>
      {show === true && (
        <Suspense>
          <Form />
        </Suspense>
      )}
    </>
  );
}
export default App;
