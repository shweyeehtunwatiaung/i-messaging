import React from "react";
import { Metadata, NextPage } from "next";
import AuthPage from "./(site)/page";

export const metadata: Metadata = {
  title: "Home | iMessing",
  description: "iMessing",
};

const HomePage: NextPage = () => {
  return <AuthPage />;
};

export default HomePage;
