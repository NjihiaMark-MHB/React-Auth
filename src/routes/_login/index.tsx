import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export const Route = createFileRoute("/_login/")({
  component: App,
});

interface IFormInput {
  email: string;
  password: string;
}

function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <AuthenticationCard classname="m-auto mt-[72px] lg:mt-[82px]">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput label="Email" type="email" {...field} />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomInput label="Password" type="password" {...field} />
            )}
          />
        </div>
        <Button className="mt-10 mb-6 w-full">Login to your account</Button>
      </form>
      <p className="text-center">
        Don’t have an account?{" "}
        <Link to="/sign-up" className="text-red-500">
          Sign Up
        </Link>
      </p>
    </AuthenticationCard>
  );
}
