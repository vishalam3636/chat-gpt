import React from "react";

// MessageBubble Component
export const MessageBubble = ({ sender, text }) => {
    return (
      <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
        <div
          className={`px-4 py-2 rounded-lg max-w-xs ${
            sender === "user" ? "bg-blue-600 text-white" : "bg-purple-200 text-black"
          }`}
        >
          {text}
        </div>
      </div>
    );
  };