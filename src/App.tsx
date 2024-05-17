import { Suspense } from "react";
import AppRouterProvider from "./routes/AppRouterProvider";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AuthProvider>
        <AppRouterProvider />
      </AuthProvider>
    </Suspense>
  );
}

export default App;
