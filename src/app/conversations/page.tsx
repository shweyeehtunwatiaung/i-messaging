import { SocketIndicator } from "@/components/ui/socket-indicator";
// import requestPermission from "@/lib/firebase-messaging-sw";
import { NextPage } from "next";
import React, { useEffect } from "react";

const ConversationPage: NextPage = async () => {
  return (
    <div className="ml-auto flex items-center justify-center">
      <SocketIndicator />
    </div>
  );
};

export default ConversationPage;
