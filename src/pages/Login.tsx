"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { loginSchema, type LoginSchemaType } from "../schema/loginSchema";
import { loginUser } from "../api/Axios";

// ShadCN Components
import { Input } from "./../components/ui/input";
import { Button } from "./../components/ui/button";
import { Checkbox } from "./../components/ui/checkbox";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors,isDirty, isLoading },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const {isPending} = useMutation({
    mutationFn: loginUser,
    onSuccess: (data: LoginSchemaType) => {
      console.log("Login success:", data);
    },
    onError: (error: unknown) => {
      console.log("Login failed:", error);
    },
  });
   console.log(errors,isDirty,isLoading);
   
  const submit = (data: LoginSchemaType) => {
    console.log(isSignUp ? "Sign Up Data:" : "Login Data:", data,errors,isDirty,isLoading);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100">
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6 bg-white dark:bg-gray-900">
        <form
          onSubmit={handleSubmit(submit)}
          className="w-full max-w-md flex flex-col items-center gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <p className="text-sm md:text-base text-gray-500/90 text-center">
            {isSignUp
              ? "Create a new account"
              : "Welcome back! Please sign in to continue"}
          </p>

          {/* Name Input (SignUp only) */}
          {isSignUp && (
            <div className="w-full flex flex-col">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Full Name"
                    className="w-full h-12"
                  />
                )}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
          )}

          {/* Email Input */}
          <div className="w-full flex flex-col">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Email" className="w-full h-12" />
              )}
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="w-full flex flex-col">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full h-12"
                />
              )}
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember Me Checkbox */}
          {!isSignUp && (
            <div className="w-full flex items-center gap-2">
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
              <label className="text-gray-500 text-sm">Remember me</label>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 flex items-center justify-center gap-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                {isSignUp ? "Signing up..." : "Logging in..."}
              </>
            ) : isSignUp ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </Button>

          {/* Switch Link */}
          <p className="text-gray-500/90 text-sm text-center mt-2">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <span
              className="text-indigo-400 hover:underline cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
