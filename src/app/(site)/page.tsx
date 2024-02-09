import React from "react";
import { NextPage } from "next";
import AuthComponent from "@/components/pageContainers/auth";

const AuthPage: NextPage = () => {
  return (
    <div className="h-screen">
      <AuthComponent />
    </div>
  );
};

export default AuthPage;
