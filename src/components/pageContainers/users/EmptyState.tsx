"use client";
import React, { useEffect, useState } from "react";
import { generateToken, messaging } from "@/lib/firebase";
import toast, { Toaster } from "react-hot-toast";
import { onMessage } from "firebase/messaging";

const EmptyState: React.FC = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      console.log(payload);
    });
  }, [notification]);

  return (
    <div className="lg:block h-screen">
      <div className="bg-gray-100 h-full px-4 py-10 flex justify-center items-center">
        <h1 className="text-black">Empty</h1>
      </div>
      <Toaster />
    </div>
  );
};

export default EmptyState;
