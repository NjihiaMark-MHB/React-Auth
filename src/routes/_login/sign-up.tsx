import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

export const Route = createFileRoute("/_login/sign-up")({
  component: RouteComponent,
});
interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

function RouteComponent() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <AuthenticationCard classname="m-auto mt-[72px] lg:mt-[82px]">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-10">
          <Controller
            name="firstname"
            control={control}
            render={({ field }) => (
              <CustomInput label="First Name" {...field} />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => <CustomInput label="Last Name" {...field} />}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Email"
                type="email"
                {...field}
                autoComplete="new-email"
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Password"
                type="password"
                {...field}
                autoComplete="new-password"
              />
            )}
          />
        </div>
        <Button className="mt-10 mb-6 w-full">Create an account</Button>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link to="/" className="text-red-500">
          Login
        </Link>
      </p>
    </AuthenticationCard>
  );
}
