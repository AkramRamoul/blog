"use client";

import { signIn, useSession } from "next-auth/react";
import AuthSocialButton from "../app/components/AuthSocialButton";
import React, { useEffect } from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { toast } from "sonner";
import { ImSpinner2 } from "react-icons/im";
import { useRouter, useSearchParams } from "next/navigation";
function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { status } = useSession();

  // Extract the callbackUrl or set a default route
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const socialSignIn = (action: string) => {
    signIn(action, { redirect: false, callbackUrl }).then((callback) => {
      if (callback?.error) {
        toast.error("Invalid Credentials");
      }
      if (callback?.ok && !callback.error) {
        toast.success("Logged in");
        router.push(callbackUrl); // Redirect after successful login
      }
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl); // Redirect if already authenticated
    }
  }, [status, router, callbackUrl]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <ImSpinner2 className="animate-spin h-12 w-12" />
      </div>
    );
  }

  return (
    <div className="flex mt-8 items-center justify-center ">
      <div
        className="bg-[#f0f0f0] dark:bg-[#1f273a] gap-10 flex 
        py-[50px] px-[50px] flex-col rounded-[10px] 
        md:py-[100px] md:px-[100px]"
      >
        <h1 className="text-md text-nowrap md:text-xl font-bold ">
          Choose a login method
        </h1>
        <AuthSocialButton
          icon={BsGithub}
          onClick={() => socialSignIn("github")}
        />
        <AuthSocialButton
          icon={BsGoogle}
          onClick={() => socialSignIn("google")}
        />
        <AuthSocialButton
          icon={BsFacebook}
          onClick={() => socialSignIn("facebook")}
        />
      </div>
    </div>
  );
}

export default Login;
export const dynamic = "force-dynamic";
