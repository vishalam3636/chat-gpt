// import { useState } from "react";

// // MessageBubble Component
// const MessageBubble = ({ sender, text }) => {
//   return (
//     <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`px-4 py-2 rounded-lg max-w-xs ${
//           sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
//         }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// // ChatBox Component (Scrollable Chat Area)
// const ChatBox = ({ messages }) => {
//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-2">
//       {messages.map((msg, index) => (
//         <MessageBubble key={index} sender={msg.sender} text={msg.text} />
//       ))}
//     </div>
//   );
// };

// // ChatInput Component (Fixed at Bottom)
// const ChatInput = ({ onSend }) => {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="p-2 bg-white border-t flex items-center gap-2">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask a question..."
//         className="input input-bordered flex-1"
//       />
//       <button onClick={handleSend} className="btn btn-primary">
//         Send
//       </button>
//     </div>
//   );
// };

// // Main Chat Component
// export default function Chat() {
//   const [messages, setMessages] = useState([]);

//   const sendMessage = (question) => {
//     setMessages([...messages, { sender: "user", text: question }]);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-lg border rounded-lg overflow-hidden bg-white h-[500px] flex flex-col">
//       <div className="bg-gray-100 p-2 text-center font-semibold">Chat Assistant</div>

//       {/* Scrollable chat messages area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         <ChatBox messages={messages} />
//       </div>

//       {/* Fixed input at the bottom */}
//       <ChatInput onSend={sendMessage} />
//     </div>
//   );
// }


// // with purple  theme-
// import { useState } from "react";
// import { askQuestion } from "../API/api";

// // MessageBubble Component
// const MessageBubble = ({ sender, text }) => {
//   return (
//     <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`px-4 py-2 rounded-lg max-w-xs ${
//           sender === "user" ? "bg-blue-600 text-white" : "bg-purple-200 text-black"
//         }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// // ChatBox Component (Scrollable Chat Area)
// const ChatBox = ({ messages }) => {
//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-2">
//       {messages.map((msg, index) => (
//         <MessageBubble key={index} sender={msg.sender} text={msg.text} />
//       ))}
//     </div>
//   );
// };

// // ChatInput Component (Fixed at Bottom)
// const ChatInput = ({ onSend }) => {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="p-2 bg-purple-100 border-t flex items-center gap-2">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask a question..."
//         className="input input-bordered flex-1 border-purple-500 focus:border-purple-700"
//       />
//       <button onClick={handleSend} className="btn bg-blue-600 hover:bg-blue-700 text-white">
//         Send
//       </button>
//     </div>
//   );
// };

// // Main Chat Component
// export default function Chat() {
//   const [messages, setMessages] = useState([]);

//   const sendMessage = async(question) => {
//     let payload = {"question": question}

//     try{
//       let askedQuestionByUser = await askQuestion(payload);
//       console.log(askedQuestionByUser, ">>>askedQuestionByUser");
//     }catch(err){
//       console.error(err.message)
//     }

//     // setMessages([...messages, { sender: "user", text: question }]);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-lg border rounded-lg overflow-hidden bg-purple-50 h-[500px] flex flex-col">
//       <div className="bg-purple-600 text-white p-2 text-center font-semibold">Chat Assistant</div>

//       {/* Scrollable chat messages area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         <ChatBox messages={messages} />
//       </div>

//       {/* Fixed input at the bottom */}
//       <ChatInput onSend={sendMessage} />
//     </div>
//   );
// }



// // with follow-up-form-
// import { useState } from "react";
// import { askQuestion } from "../API/api";

// // MessageBubble Component
// const MessageBubble = ({ sender, text }) => {
//   return (
//     <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
//       <div
//         className={`px-4 py-2 rounded-lg max-w-xs ${
//           sender === "user" ? "bg-blue-600 text-white" : "bg-purple-200 text-black"
//         }`}
//       >
//         {text}
//       </div>
//     </div>
//   );
// };

// // ChatBox Component (Handles normal chat & follow-up questions)
// const ChatBox = ({ messages, onSubmitResponses }) => {
//   const lastSystemMessage = messages
//     .filter((msg) => msg.sender === "system")
//     .slice(-1)[0]; // Get the last system message

//   const followUpQuestions = lastSystemMessage?.followUpQuestions || [];
//   const showForm = followUpQuestions.length > 0 && !lastSystemMessage?.submitted;

//   const [responses, setResponses] = useState({});

//   // Handle input change
//   const handleInputChange = (id, value) => {
//     setResponses((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmitResponses(responses); // Pass user responses to parent component
//     setResponses({});
//   };

//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-2">
//       {/* Render normal chat messages */}
//       {messages.map((msg, index) => (
//         <MessageBubble key={index} sender={msg.sender} text={msg.text} />
//       ))}

//       {/* Render follow-up question form if applicable */}
//       {showForm && (
//         <form onSubmit={handleSubmit} className="bg-purple-100 p-4 rounded-lg space-y-3">
//           {followUpQuestions.map((q) => (
//             <div key={q.id} className="flex flex-col">
//               <label className="text-sm font-medium text-purple-700">{q.text}</label>
//               <input
//                 type="text"
//                 className="input input-bordered w-full mt-1 border-purple-500 focus:border-purple-700"
//                 value={responses[q.id] || ""}
//                 onChange={(e) => handleInputChange(q.id, e.target.value)}
//                 required
//               />
//             </div>
//           ))}
//           <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white w-full">
//             Submit Answers
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// // ChatInput Component (Fixed at Bottom)
// const ChatInput = ({ onSend }) => {
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       onSend(input);
//       setInput("");
//     }
//   };

//   return (
//     <div className="p-2 bg-purple-100 border-t flex items-center gap-2">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Ask a question..."
//         className="input input-bordered flex-1 border-purple-500 focus:border-purple-700"
//       />
//       <button onClick={handleSend} className="btn bg-blue-600 hover:bg-blue-700 text-white">
//         Send
//       </button>
//     </div>
//   );
// };

// // Main Chat Component
// export default function Chat() {
//   const [messages, setMessages] = useState([]);

//   // API call to send question
//   const sendMessage = async (question) => {
//     let payload = { question };

//     try {
//       let response = await askQuestion(payload);
//       console.log(response.data.messages, ">>>API Response");

//       setMessages([...messages, ...response.data.messages]); // Append API response messages
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   // API call to submit follow-up answers
//   const submitResponses = async (responses) => {
//     console.log(">>>>>User Responses:", responses);
//     // TODO: Make API call to submit responses

//   };

//   return (
//     <div className="w-full max-w-md mx-auto shadow-lg border rounded-lg overflow-hidden bg-purple-50 h-[500px] flex flex-col">
//       <div className="bg-purple-600 text-white p-2 text-center font-semibold">Chat Assistant</div>

//       {/* Scrollable chat messages area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-2">
//         <ChatBox messages={messages} onSubmitResponses={submitResponses} />
//       </div>

//       {/* Fixed input at the bottom */}
//       <ChatInput onSend={sendMessage} />
//     </div>
//   );
// }



// More changes to display chat, sending session_id so to update only that particular chat session-

// with follow-up-form-
import { useState } from "react";
import { ChatBox } from "./ChatBox";
import { ChatInput } from "./ChatInput";
import { askQuestion } from "../API/api";
// import { submitResponse } from "../API/api";


// Main Chat Component
export default function Chat() {
  const [messages, setMessages] = useState([]);

  // API call to send question
  const sendMessage = async (question) => {
    let payload = { question };

    try {
      let response = await askQuestion(payload);
      console.log(response.data.messages, ">>>API Response");

      let sessionID = response.data.sessionId;
      localStorage.setItem("chat_session", sessionID);

      // setMessages([...messages, ...response.data.messages]); // Append API response messages
      setMessages([...response.data.messages]); // Append API response messages
    } catch (err) {
      console.error(err.message);
    }
  };

  // API call to submit follow-up answers
  const submitResponses = async (responses) => {
    console.log(">>>>>User Responses:", responses);
    let keys = Object.keys(responses);
    let userAnswers = keys.map(key => {
      return { "id": key, "text": responses[key] }
    })
    console.log(userAnswers, ">>>>userAnswers");

    let chatSession = localStorage.getItem("chat_session");

    try {
      if (!chatSession) {
        throw new Error("No chat found !!")
      } else {
        let payload = {
          "sessionId": chatSession,
          "answers": [...userAnswers]
        }
        console.log(payload, ">>>payload");

        // TODO: Make API call to submit responses
        // let submitQuestionResponse = await submitResponse(payload);
        // console.log(submitQuestionResponse.data, ">>>submitQuestionResponse");

        // setMessages([...submitQuestionResponse.data.messages]);
      }

    } catch (err) {
      console.log(`ERROR: ${err.message}`);

    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-lg border rounded-lg overflow-hidden bg-purple-50 h-[500px] flex flex-col">
      <div className="bg-purple-600 text-white p-2 text-center font-semibold">Chat Assistant</div>

      {/* Scrollable chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <ChatBox messages={messages} onSubmitResponses={submitResponses} />
      </div>

      {/* Fixed input at the bottom */}
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
