import { NextPage } from "next";
import React from "react";
import Users from "@/components/pageContainers/users";
import EmptyState from "@/components/pageContainers/users/EmptyState";

const UsersPage: NextPage = async () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full bg-white ">
      <EmptyState />
    </div>
  );
};

export default UsersPage;
