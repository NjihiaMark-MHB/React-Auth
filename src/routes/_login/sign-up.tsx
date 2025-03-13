import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";

export const Route = createFileRoute("/_login/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthenticationCard classname="m-auto mt-[72px] lg:mt-[82px]">
      <h1>Sign up</h1>
      <div className="mt-10">
        <CustomInput
          label="First name"
          value=""
          onChange={() => {}}
          placeholder=""
        />
      </div>
      <div className="mt-6">
        <CustomInput
          label="last name"
          value=""
          onChange={() => {}}
          placeholder=""
        />
      </div>
      <div className="mt-6">
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
      <Button className="mt-10 mb-6 w-full">Create an account</Button>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/" className="text-red-500">
          Login
        </Link>
      </p>
    </AuthenticationCard>
  );
}
