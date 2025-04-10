import React, {useState, useEffect} from "react";
import { MessageBubble } from "./MessageBubble";

export const ChatBox = ({ messages, onSubmitResponses }) => {
  const lastSystemMessage = messages
    .filter((msg) => msg.sender === "system")
    .slice(-1)[0]; // Get the last system message

  const followUpQuestions = lastSystemMessage?.followUpQuestions || [];
  const showForm = followUpQuestions.length > 0 && !lastSystemMessage?.submitted;

  const [responses, setResponses] = useState({});

  // Handle input change
  const handleInputChange = (id, value) => {
    setResponses((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitResponses(responses); // Pass user responses to parent component
    setResponses({});
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {/* Render normal chat messages */}
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}

      {/* Render follow-up question form if applicable */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-purple-100 p-4 rounded-lg space-y-3">
          {followUpQuestions.map((q) => (
            <div key={q.id} className="flex flex-col">
              <label className="text-sm font-medium text-purple-700">{q.text}</label>
              <input
                type="text"
                className="input input-bordered w-full mt-1 border-purple-500 focus:border-purple-700"
                value={responses[q.id] || ""}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                required
              />
            </div>
          ))}
          <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white w-full">
            Submit Answers
          </button>
        </form>
      )}
    </div>
  );
};