import { Suspense } from "react";
import AppRouterProvider from "./routes/AppRouterProvider";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppRouterProvider />
    </Suspense>
  );
}

export default App;
