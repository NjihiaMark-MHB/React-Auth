import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/types/login";
import type { inferredLoginSchema } from "@/types/login";
import { useLoginUser } from "@/hooks/react-query/login-user";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_login/")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const { mutate: loginUser } = useLoginUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<inferredLoginSchema> = (data) => {
    loginUser(data, {
      onSuccess: () => {
        navigate({ to: "/home" });
      },
      onError: (error) => {
        console.log("error login in signup user", error);
      },
    });
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
              <CustomInput
                label="Email"
                type="email"
                {...field}
                error={errors.email?.message}
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
                error={errors.password?.message}
              />
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
