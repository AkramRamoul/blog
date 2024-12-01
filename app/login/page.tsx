"use client";
import AuthSocialButton from "../../components/AuthSocialButton";
import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

function LoginPage() {
  return (
    <div className="flex mt-8 items-center justify-center ">
      <div
        className="bg-[#f0f0f0] dark:bg-[#1f273a] gap-10 flex 
      
      py-[50px] px-[50px] flex-col rounded-[10px] 
      md:py-[100px] md:px-[100px]
      "
      >
        <h1 className="text-md text-nowrap md:text-xl font-bold ">
          Choose a login method
        </h1>
        <AuthSocialButton
          icon={BsGithub}
          onClick={() => console.log("github")}
        />
        <AuthSocialButton
          icon={BsGoogle}
          onClick={() => console.log("google")}
        />
        <AuthSocialButton
          icon={BsFacebook}
          onClick={() => console.log("facebook")}
        />
      </div>
    </div>
  );
}

export default LoginPage;
