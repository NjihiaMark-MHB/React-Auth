import { createFileRoute, Link } from "@tanstack/react-router";
import AuthenticationCard from "@/components/authentication-card";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/custom-input";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const Route = createFileRoute("/_login/")({
  component: App,
});

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least 1 uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least 1 lowercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least 1 number" })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must contain at least 1 special character",
    }),
});

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
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
