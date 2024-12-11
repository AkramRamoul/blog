import Login from "@/components/Login";
import { Suspense } from "react";

function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
export default LoginPage;
export const dynamic = "force-dynamic";
