import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";


const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-600";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={profilePic}
            alt="Tailwind CSS chat bubble component" // Fix the alt attribute
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}> 
        {message.message}
      </div>
      <div className="chat-footer text-white text-xs opacity-50 flex gap-1">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;