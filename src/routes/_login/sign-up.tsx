import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { createUserSchema } from "@/types/sign-up";
import type { inferredCreateUserSchema } from "@/types/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "@/hooks/react-query/create-user";
import { useLoginUser } from "@/hooks/react-query/login-user";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_login/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { mutate: createUser } = useCreateUser();
  const { mutate: loginUser } = useLoginUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(createUserSchema),
  });

  const onSubmit: SubmitHandler<inferredCreateUserSchema> = (data) => {
    createUser(data, {
      onSuccess: () => {
        loginUser(
          {
            email: data.email,
            password: data.password,
          },
          {
            onSuccess: () => {
              navigate({ to: "/home" });
            },
            onError: (error) => {
              console.log("error login in signup user", error);
            },
          }
        );
      },
      onError: (error) => {
        console.log(error);
      },
    });
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
              <CustomInput
                label="First Name"
                {...field}
                error={errors.firstname?.message}
              />
            )}
          />
        </div>
        <div className="mt-6">
          <Controller
            name="lastname"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Last Name"
                {...field}
                error={errors.lastname?.message}
              />
            )}
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
                autoComplete="new-password"
                error={errors.password?.message}
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
