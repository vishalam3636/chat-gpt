import React, {useState} from "react";

// ChatInput Component (Fixed at Bottom)
export const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");
  
    const handleSend = () => {
      if (input.trim()) {
        onSend(input);
        setInput("");
      }
    };
  
    return (
      <div className="p-2 bg-purple-100 border-t flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="input input-bordered flex-1 border-purple-500 focus:border-purple-700"
        />
        <button onClick={handleSend} className="btn bg-blue-600 hover:bg-blue-700 text-white">
          Send
        </button>
      </div>
    );
  };