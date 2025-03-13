import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";

export const Route = createFileRoute("/_login/")({
  component: App,
});

function App() {
  return (
    <AuthenticationCard classname="m-auto mt-[72px] lg:mt-[82px]">
      <h1>Login</h1>
      <div className="mt-10">
        <CustomInput
          label="Email"
          value=""
          onChange={() => {}}
          placeholder=""
          type="email"
        />
      </div>
      <div className="mt-6">
        <CustomInput
          label="Password"
          value=""
          onChange={() => {}}
          placeholder=""
          type="password"
        />
      </div>
      <Button className="mt-10 mb-6 w-full">Login to your account</Button>
      <p className="text-center">
        Don’t have an account?{" "}
        <Link to="/sign-up" className="text-red-500">
          Sign Up
        </Link>
      </p>
    </AuthenticationCard>
  );
}
