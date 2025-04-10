// import { useState } from "react";
// import { Send, User, Bot, MessageCircle } from "lucide-react";

// const ChatWIdgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const sendMessage = () => {
//     if (input.trim() === "") return;
//     setMessages([...messages, { text: input, sender: "user" }]);
//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-lg font-semibold p-4 flex justify-between items-center">
//             ChatBot
//             <button className="text-white" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                 >
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-6 h-6 text-secondary" />}
//               </div>
//             ))}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button className="btn btn-primary ml-2" onClick={sendMessage}>
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWIdgetSix;



// // // modifying above code to handle first API call and manage follow questions- (not working as expected)
// import { useState } from "react";
// import { Send, User, Bot, MessageCircle } from "lucide-react";
// import axios from "axios";

// const ChatBot = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString()); // Generate a session ID

//   const sendMessage = async () => {
//     console.log(">>>Send message cicked !!");

//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages([...messages, userMessage]);

//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         {
//           Question: input,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         const followUpQuestions = response.data.data;
//         setMessages(prevMessages => [...prevMessages, { text: followUpQuestions, sender: "bot" }]);
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prevMessages => [...prevMessages, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
//     }

//     setInput("");
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-lg font-semibold p-4 flex justify-between items-center">
//             ChatBot
//             <button className="text-white" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                 >
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-6 h-6 text-secondary" />}
//               </div>
//             ))}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//             />
//             <button className="btn btn-primary ml-2" onClick={sendMessage}>
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;


// // modifying code- (working thda finem but showing only question heading part and on finosh of question making the first API call again)
// import { useState } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString()); // Generate a session ID
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < followUpQuestions.length) {
//         setMessages(prev => [...prev, { text: followUpQuestions[nextIndex], sender: "bot" }]);
//         setCurrentQuestionIndex(nextIndex);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questions = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g)?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           setMessages(prev => [...prev, { text: questions[0], sender: "bot" }]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-lg font-semibold p-4 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                 >
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-6 h-6 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-6 h-6 animate-spin text-primary" />
//                 <span className="text-gray-500">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2" onClick={sendMessage} disabled={loading}>
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;


// // modifying above code to display complete question detils in tool-tip-
// import { useState } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpDetails, setFollowUpDetails] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < followUpQuestions.length) {
//         setMessages(prev => [...prev, { text: followUpQuestions[nextIndex], sender: "bot" }]);
//         setCurrentQuestionIndex(nextIndex);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questionMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const questions = questionMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1); // Extract details after each question
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           setFollowUpDetails(details);
//           setMessages(prev => [...prev, { text: questions[0], sender: "bot" }]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[700px] w-[400px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-lg font-semibold p-4 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary" />}
//                 <div
//                   className={`px-4 py-2 rounded-lg text-white relative ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                 >
//                   {msg.text}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-left ml-2" data-tip={followUpDetails[followUpQuestions.indexOf(msg.text)] || "No details available"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-6 h-6 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-6 h-6 animate-spin text-primary" />
//                 <span className="text-gray-500">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2" onClick={sendMessage} disabled={loading}>
//               <Send className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;


// .// modifying the above code to show details as main question in chat and head in tool-tip-
// import { useState } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpHeadings, setFollowUpHeadings] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < followUpQuestions.length) {
//         setMessages(prev => [...prev, { text: followUpQuestions[nextIndex], sender: "bot" }]);
//         setCurrentQuestionIndex(nextIndex);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;

//         // Extract follow-up question headings (short version)
//         const headingMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const headings = headingMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         // Extract follow-up question details (long version)
//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1);
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (headings.length > 0) {
//           setFollowUpHeadings(headings);
//           setFollowUpQuestions(details);
//           setMessages(prev => [...prev, { text: details[0], sender: "bot" }]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot" }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div
//                   className={`px-3 py-2 rounded-lg text-white relative text-sm ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                 >
//                   {msg.text}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-right lg:tooltip-left ml-2" data-tip={followUpHeadings[followUpQuestions.indexOf(msg.text)] || "More info"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;


// // modifying the above code (simulating realtime writing chatbox response and handling chatBot icon size )
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot", animated: false }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpHeadings, setFollowUpHeadings] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const addBotMessageWithAnimation = (text) => {
//     let index = 0;
//     let animatedText = "";
//     setMessages(prev => [...prev, { text: "", sender: "bot", animated: true }]);

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         animatedText += text[index];
//         setMessages(prev => {
//           const newMessages = [...prev];
//           newMessages[newMessages.length - 1] = { text: animatedText, sender: "bot", animated: true };
//           return newMessages;
//         });
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 30); // Adjust speed here (lower is faster)
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;
//       if (nextIndex < followUpQuestions.length) {
//         addBotMessageWithAnimation(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;

//         // Extract headings and details
//         const headingMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const headings = headingMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1);
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (headings.length > 0) {
//           setFollowUpHeadings(headings);
//           setFollowUpQuestions(details);
//           addBotMessageWithAnimation(details[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           style={{ width: "50px", height: "50px" }} 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div
//                   className={`px-3 py-2 rounded-lg text-white relative text-sm ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                   style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
//                 >
//                   {msg.text}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-right lg:tooltip-left ml-2" data-tip={followUpHeadings[followUpQuestions.indexOf(msg.text)] || "More info"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;


// // working perfectly fine (above code, additing second API call on su bmission of fnal amswer)-
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot", animated: false }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpHeadings, setFollowUpHeadings] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const addBotMessageWithAnimation = (text) => {
//     let index = 0;
//     let animatedText = "";
//     setMessages(prev => [...prev, { text: "", sender: "bot", animated: true }]);

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         animatedText += text[index];
//         setMessages(prev => {
//           const newMessages = [...prev];
//           newMessages[newMessages.length - 1] = { text: animatedText, sender: "bot", animated: true };
//           return newMessages;
//         });
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 30);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessageWithAnimation(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         // Final follow-up question answered, make API call
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const headingMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const headings = headingMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];
//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1);
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (headings.length > 0) {
//           setFollowUpHeadings(headings);
//           setFollowUpQuestions(details);
//           addBotMessageWithAnimation(details[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q} - ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: messages[0].text,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         },
//         {
//           headers: { "Content-Type": "application/json" } // Ensures API treats it as JSON
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessageWithAnimation(response.data.data); // Display final response
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };


//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           style={{ width: "50px", height: "50px" }} 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div
//                   className={`px-3 py-2 rounded-lg text-white relative text-sm ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                   style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
//                 >
//                   {msg.text}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-right lg:tooltip-left ml-2" data-tip={followUpHeadings[followUpQuestions.indexOf(msg.text)] || "More info"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// // modifying the above code to format fonal response-(working but not as expected)
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot", animated: false }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpHeadings, setFollowUpHeadings] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const addBotMessageWithAnimation = (text) => {
//     let index = 0;
//     let animatedText = "";
//     setMessages(prev => [...prev, { text: "", sender: "bot", animated: true }]);

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         animatedText += text[index];
//         setMessages(prev => {
//           const newMessages = [...prev];
//           newMessages[newMessages.length - 1] = { text: animatedText, sender: "bot", animated: true };
//           return newMessages;
//         });
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 30);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessageWithAnimation(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         // Final follow-up question answered, make API call
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const headingMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const headings = headingMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];
//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1);
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (headings.length > 0) {
//           setFollowUpHeadings(headings);
//           setFollowUpQuestions(details);
//           addBotMessageWithAnimation(details[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q} - ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: messages[0].text,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         },
//         {
//           headers: { "Content-Type": "application/json" } // Ensures API treats it as JSON
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessageWithAnimation(response.data.data); // Display final response
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };


//   const renderFormattedMessage = (text) => {
//     const lines = text.split("\n").map((line, index) => {
//       if (line.startsWith("**") && line.endsWith("**")) {
//         return <h3 key={index} className="font-bold text-lg mt-2">{line.replace(/\*\*/g, "")}</h3>;
//       } else if (line.startsWith("-")) {
//         return <li key={index} className="ml-4 list-disc">{line.replace("- ", "")}</li>;
//       } else {
//         return <p key={index} className="mt-1">{line}</p>;
//       }
//     });

//     return <div className="space-y-1">{lines}</div>;
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           style={{ width: "50px", height: "50px" }} 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div
//                   className={`px-3 py-2 rounded-lg text-white relative text-sm ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                   style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
//                 >
//                   {renderFormattedMessage(msg.text)}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-right lg:tooltip-left ml-2" data-tip={followUpHeadings[followUpQuestions.indexOf(msg.text)] || "More info"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// // below modifying the above code to format final response-
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState([
//     { text: "Hello! How can I assist you today?", sender: "bot", animated: false }
//   ]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [followUpHeadings, setFollowUpHeadings] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   const addBotMessageWithAnimation = (text) => {
//     let index = 0;
//     let animatedText = "";
//     setMessages(prev => [...prev, { text: "", sender: "bot", animated: true }]);

//     const interval = setInterval(() => {
//       if (index < text.length) {
//         animatedText += text[index];
//         setMessages(prev => {
//           const newMessages = [...prev];
//           newMessages[newMessages.length - 1] = { text: animatedText, sender: "bot", animated: true };
//           return newMessages;
//         });
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 30);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     const userMessage = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMessage]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessageWithAnimation(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         // Final follow-up question answered, make API call
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const headingMatches = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g);
//         const headings = headingMatches?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];
//         const detailMatches = followUpText.split(/\d+\.\s\*\*.*?\*\*/g).slice(1);
//         const details = detailMatches?.map(d => d.trim()) || [];

//         if (headings.length > 0) {
//           setFollowUpHeadings(headings);
//           setFollowUpQuestions(details);
//           addBotMessageWithAnimation(details[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q} - ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: messages[0].text,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         },
//         {
//           headers: { "Content-Type": "application/json" } // Ensures API treats it as JSON
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessageWithAnimation(response.data.data); // Display final response
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again.", sender: "bot", animated: false }]);
//     }
//     setLoading(false);
//   };


//   const renderFormattedMessage = (text) => {
//     return (
//       <div className="space-y-1">
//         {text.split("\n").map((line, index) => {
//           if (/^\*\*(.*?)\*\*$/.test(line)) {
//             return <h3 key={index} className="font-bold text-lg mt-2">{line.replace(/\*\*/g, "")}</h3>;
//           } else if (/^-/.test(line)) {
//             return <li key={index} className="ml-4 list-disc">{line.replace("- ", "")}</li>;
//           } else if (/^\d+\./.test(line)) {
//             return <p key={index} className="font-semibold">{line}</p>;
//           } else {
//             return <p key={index} className="mt-1">{line}</p>;
//           }
//         })}
//       </div>
//     );
//   };


//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           style={{ width: "50px", height: "50px" }} 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}
//               >
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div
//                   className={`px-3 py-2 rounded-lg text-white relative text-sm ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}
//                   style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
//                 >
//                     {renderFormattedMessage(msg.text)}
//                   {msg.sender === "bot" && followUpQuestions.includes(msg.text) && (
//                     <div className="tooltip tooltip-right lg:tooltip-left ml-2" data-tip={followUpHeadings[followUpQuestions.indexOf(msg.text)] || "More info"}>
//                       <Info className="w-4 h-4 inline-block text-white cursor-pointer" />
//                     </div>
//                   )}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// modifying the above code and storing chat and start new chat after first session ends- (kind of working okay, but failing to start new chat sessionif one ends)
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader, Info } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState(
//     JSON.parse(localStorage.getItem("chatMessages")) || [
//       { text: "Hello! How can I assist you today?", sender: "bot", animated: false }
//     ]
//   );
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   useEffect(() => {
//     localStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   const addBotMessage = (text) => {
//     setMessages(prev => [...prev, { text, sender: "bot", animated: false }]);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     setMessages(prev => [...prev, { text: input, sender: "user" }]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses(prev => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessage(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questions = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g)?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           addBotMessage(questions[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: messages[0].text,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessage(response.data.data);
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// // modifying the above code to start new chat session when one ends-
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState(
//     JSON.parse(localStorage.getItem("chatMessages")) || []
//   );
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId, setSessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});

//   useEffect(() => {
//     localStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   const addBotMessage = (text) => {
//     setMessages((prev) => [...prev, { text, sender: "bot" }]);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessage(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: sessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questions = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g)?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           addBotMessage(questions[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: messages[0].text,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessage(response.data.data);
//         setSessionId(Date.now().toString()); // Start a new session automatically after final response
//         setFollowUpQuestions([]);
//         setCurrentQuestionIndex(-1);
//         setUserResponses({});
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;


// .// above code failing to set the correct payload for the secind chat session,  (SO far the best version)
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState(
//     JSON.parse(localStorage.getItem("chatMessages")) || []
//   );
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId, setSessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});
//   const [currentMainQuestion, setCurrentMainQuestion] = useState("");

//   useEffect(() => {
//     localStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   const addBotMessage = (text) => {
//     setMessages((prev) => [...prev, { text, sender: "bot" }]);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessage(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       const newSessionId = Date.now().toString();
//       setSessionId(newSessionId);
//       setCurrentMainQuestion(input); // Store the new question for final response API

//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: newSessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questions = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g)?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           addBotMessage(questions[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: currentMainQuestion, // Ensure the correct question is sent
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessage(response.data.data);
//         setFollowUpQuestions([]);
//         setCurrentQuestionIndex(-1);
//         setUserResponses({});
//         setCurrentMainQuestion(""); // Reset main question after final response
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// modifying the above code to make a chat session ended notfication below if the user reloads the message
// and chatBot replies simulation like realtime text (working kind of well, but failing to diplay "Previous chat session ended." part)
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState(
//     JSON.parse(localStorage.getItem("chatMessages")) || []
//   );
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId, setSessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});
//   const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//   const [previousSessionEnded, setPreviousSessionEnded] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   const addBotMessage = (text) => {
//     setMessages((prev) => [...prev, { text, sender: "bot" }]);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");

//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         addBotMessage(followUpQuestions[nextIndex]);
//         setCurrentQuestionIndex(nextIndex);
//       } else {
//         getFinalResponse();
//       }
//       return;
//     }

//     setLoading(true);
//     try {
//       if (messages.length > 0) {
//         setPreviousSessionEnded(true);
//         addBotMessage("Previous chat session ended.");
//       }

//       const newSessionId = Date.now().toString();
//       setSessionId(newSessionId);
//       setCurrentMainQuestion(input);
//       setFollowUpQuestions([]);
//       setCurrentQuestionIndex(-1);
//       setUserResponses({});

//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: newSessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;
//         const questions = followUpText.match(/\d+\.\s\*\*(.*?)\*\*/g)?.map(q => q.replace(/\d+\.\s\*\*|\*\*/g, "")) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           addBotMessage(questions[0]);
//           setCurrentQuestionIndex(0);
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: currentMainQuestion,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessage(response.data.data);
//         setFollowUpQuestions([]);
//         setCurrentQuestionIndex(-1);
//         setUserResponses({});
//         setCurrentMainQuestion("");
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



/// modifying the above code for above issue (wprking fine, so far the best version, failing to add "previsous chat session ended when user reloads")
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//   const [messages, setMessages] = useState(
//     JSON.parse(localStorage.getItem("chatMessages")) || []
//   );
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [sessionId, setSessionId] = useState(Date.now().toString());
//   const [loading, setLoading] = useState(false);
//   const [followUpQuestions, setFollowUpQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//   const [userResponses, setUserResponses] = useState({});
//   const [currentMainQuestion, setCurrentMainQuestion] = useState("");

//   useEffect(() => {
//     localStorage.setItem("chatMessages", JSON.stringify(messages));
//   }, [messages]);

//   const addBotMessage = (text) => {
//     setMessages((prev) => [...prev, { text, sender: "bot" }]);
//   };

//   const sendMessage = async () => {
//     if (input.trim() === "") return;

//     setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//     setInput("");

//     // If answering follow-up questions
//     if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//       setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//       const nextIndex = currentQuestionIndex + 1;

//       if (nextIndex < followUpQuestions.length) {
//         setCurrentQuestionIndex(nextIndex);
//         addBotMessage(followUpQuestions[nextIndex]);
//       } else {
//         getFinalResponse();
//       }
//       return;
//     }

//     // If sending a new main question
//     setLoading(true);
//     try {
//       const newSessionId = Date.now().toString();
//       setSessionId(newSessionId);

//       // Reset state for a new session
//       setFollowUpQuestions([]);
//       setCurrentQuestionIndex(-1);
//       setUserResponses({});
//       setCurrentMainQuestion(input);

//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//         { Question: input, SessionID: newSessionId }
//       );

//       if (response.data.code === 200) {
//         const followUpText = response.data.data;

//         // Extract follow-up questions with a flexible regex
//         const questions = followUpText.match(/\d+\.\s(.*?)\n/g)?.map(q => q.replace(/\d+\.\s/, "").trim()) || [];

//         if (questions.length > 0) {
//           setFollowUpQuestions(questions);
//           setCurrentQuestionIndex(0);
//           addBotMessage(questions[0]); // Show first follow-up question immediately
//         } else {
//           addBotMessage("No follow-up questions found.");
//         }
//       } else {
//         addBotMessage("Failed to fetch follow-up questions.");
//       }
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };


//   const getFinalResponse = async () => {
//     setLoading(true);
//     try {
//       const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//       const response = await axios.post(
//         "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//         {
//           Question: currentMainQuestion,
//           QAnswers: formattedAnswers,
//           SessionID: sessionId
//         }
//       );

//       if (response.data.code === 200) {
//         addBotMessage(response.data.data);
//         addBotMessage("Previous chat session ended.");

//         setFollowUpQuestions([]);
//         setCurrentQuestionIndex(-1);
//         setUserResponses({});
//         setCurrentMainQuestion("");
//       }
//     } catch (error) {
//       console.error("Error fetching final response:", error);
//       addBotMessage("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {!isOpen && (
//         <button 
//           className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50" 
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle className="w-6 h-6" />
//         </button>
//       )}
//       {isOpen && (
//         <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//           <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//             ChatWidgetSix
//             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//           </div>
//           <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//             {messages.map((msg, index) => (
//               <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                   {msg.text}
//                 </div>
//                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//               </div>
//             ))}
//             {loading && (
//               <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                 <span className="text-gray-500 text-sm">Fetching response...</span>
//               </div>
//             )}
//           </div>
//           <div className="p-3 flex items-center bg-base-200">
//             <input
//               type="text"
//               className="input input-bordered flex-1 text-sm"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               disabled={loading}
//             />
//             <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//               <Send className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidgetSix;



// // Modifying the above code for when user reloads the page, add "previous chat session ended"-
// (SO FAR THE BEST WORKING CODE, WITH ALL LOGIC WORKING, only left is clearing chat and making UI more visually appealing and feel)
// import { useState, useEffect } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//         console.log(storedMessages, ">>>>storedMessages");

//         if (storedMessages.length > 0) {
//             // Ensure the "Previous chat session ended." message is included
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended."


//             if (!hasSessionEndedMessage) {
//                 storedMessages = [
//                     ...storedMessages,
//                     { text: "Previous chat session ended.", sender: "bot", type: "message" }
//                 ];
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);



//     const addBotMessage = (text) => {
//         setMessages((prev) => [...prev, { text, sender: "bot" }]);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;

//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         // If answering follow-up questions
//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 addBotMessage(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         // If sending a new main question
//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);

//             // Reset state for a new session
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;

//                 // Extract follow-up questions with a flexible regex
//                 const questions = followUpText.match(/\d+\.\s(.*?)\n/g)?.map(q => q.replace(/\d+\.\s/, "").trim()) || [];

//                 if (questions.length > 0) {
//                     setFollowUpQuestions(questions);
//                     setCurrentQuestionIndex(0);
//                     addBotMessage(questions[0]); // Show first follow-up question immediately
//                 } else {
//                     addBotMessage("No follow-up questions found.");
//                 }
//             } else {
//                 addBotMessage("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             addBotMessage("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };


//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 addBotMessage(response.data.data);
//                 addBotMessage("Previous chat session ended.");

//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             addBotMessage("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// Modifying the above code for making real time chat simukation- (works kind of well making moere mdification below)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         setLoading(true);
//         const interval = setInterval(() => {
//             if (index < text.length) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];
//                     if (lastMessage?.sender === "bot") {
//                         return [...prev.slice(0, -1), { text: lastMessage.text + text[index], sender: "bot" }];
//                     } else {
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 clearInterval(interval);
//                 setLoading(false);
//             }
//         }, delay);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = followUpText.match(/\d+\.\s(.*?)\n/g)?.map(q => q.replace(/\d+\.\s/, "").trim()) || [];

//                 if (questions.length > 0) {
//                     setFollowUpQuestions(questions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(questions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }
//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(response.data.data);
//                 simulateTyping("Previous chat session ended.");
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 <Loader className="w-5 h-5 animate-spin text-primary" />
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} /> {/* Auto-scroll target */}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// // modifying ral time chat text UI (Working,but for some reading appending undefined in follow-up question when displayed)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//         console.log(storedMessages, ">>>>storedMessages");

//         if (storedMessages.length > 0) {
//             // Ensure the "Previous chat session ended." message is included
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended."


//             if (!hasSessionEndedMessage) {
//                 storedMessages = [
//                     ...storedMessages,
//                     { text: "Previous chat session ended.", sender: "bot", type: "message" }
//                 ];
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         // setLoading(true);
//         const interval = setInterval(() => {
//             if (index < text.length) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];
//                     if (lastMessage?.sender === "bot") {
//                         return [...prev.slice(0, -1), { text: lastMessage.text + text[index], sender: "bot" }];
//                     } else {
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 clearInterval(interval);
//                 // setLoading(false);
//             }
//         }, delay);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);

//                 if (questions.length > 0) {
//                     setFollowUpQuestions(questions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(questions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }

//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(response.data.data);
//                 simulateTyping("Previous chat session ended.");
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a numbered question
//             .map((line) => line.replace(/^\d+\.\s*\*\*(.*?)\*\*:\s*/, "").trim()); // Remove numbering and bold labels
//     };


//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 {/* <Loader className="w-5 h-5 animate-spin text-primary" /> */}
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} /> {/* Auto-scroll target */}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// Modifying the above code- (THis below is the so far the best , just need to handle the final response)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//         console.log(storedMessages, ">>>>storedMessages");

//         if (storedMessages.length > 0) {
//             // Ensure the "Previous chat session ended." message is included
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended."


//             if (!hasSessionEndedMessage) {
//                 storedMessages = [
//                     ...storedMessages,
//                     { text: "Previous chat session ended.", sender: "bot", type: "message" }
//                 ];
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     // const simulateTyping = (text, delay = 50) => {
//     //     let index = 0;
//     //     // setLoading(true);
//     //     const interval = setInterval(() => {
//     //         if (index < text.length) {
//     //             setMessages((prev) => {
//     //                 let lastMessage = prev[prev.length - 1];
//     //                 if (lastMessage?.sender === "bot") {
//     //                     return [...prev.slice(0, -1), { text: lastMessage.text + text[index], sender: "bot" }];
//     //                 } else {
//     //                     return [...prev, { text: text[index], sender: "bot" }];
//     //                 }
//     //             });
//     //             index++;
//     //         } else {
//     //             clearInterval(interval);
//     //             // setLoading(false);
//     //         }
//     //     }, delay);
//     // };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;

//         // Initialize the bot message correctly
//         setMessages((prev) => [...prev, { text: "", sender: "bot" }]);

//         const interval = setInterval(() => {
//             console.log(text[index], ">>>>>text[index]");

//             if (index < text.length-1 && text[index] !== undefined) {
//                 setMessages((prev) =>
//                     prev.map((msg, i) =>
//                         i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                     )
//                 );
//                 index++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, delay);
//     };





//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         console.log(followUpQuestions[currentQuestionIndex], ">>>>>current question display");


//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 console.log(questions, ">>>>>Questions");
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`)


//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }

//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(response.data.data);
//                 simulateTyping("Previous chat session ended.");
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     // const extractFollowUpQuestions = (text) => {
//     //     return text
//     //         .split("\n")
//     //         .map((line) => line.trim())
//     //         .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a numbered question
//     //         .map((line) => line.replace(/^\d+\.\s*\*\*(.*?)\*\*:\s*/, "").trim()); // Remove numbering and bold labels
//     // };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a number
//             .map((line) => {
//                 // Match optional bold text before the actual question
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : ""; // Extract the full question correctly
//             })
//             .filter((q) => q); // Remove any empty entries
//     };


//     console.log(followUpQuestions, ">>>>>>>>followUpQuestions");
//     console.log(messages, ">>>>>>messages");

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 {/* <Loader className="w-5 h-5 animate-spin text-primary" /> */}
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} /> {/* Auto-scroll target */}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// Modifying the above code to handle the final response- (handled the disabling of submit input when simulator is on, yet to handle the final response)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref
//     const [isSimulatorOn, setIsSimulatorOn] = useState(false);

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//         console.log(storedMessages, ">>>>storedMessages");

//         if (storedMessages.length > 0) {
//             // Ensure the "Previous chat session ended." message is included
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended."


//             if (!hasSessionEndedMessage) {
//                 storedMessages = [
//                     ...storedMessages,
//                     { text: "Previous chat session ended.", sender: "bot", type: "message" }
//                 ];
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         setIsSimulatorOn(true)
//         let index = 0;

//         // Initialize the bot message correctly
//         setMessages((prev) => [...prev, { text: "", sender: "bot" }]);

//         const interval = setInterval(() => {
//             console.log(text[index], ">>>>>text[index]");

//             if (index < text.length-1 && text[index] !== undefined) {
//                 setMessages((prev) =>
//                     prev.map((msg, i) =>
//                         i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                     )
//                 );
//                 index++;
//             } else {
//                 setIsSimulatorOn(false)
//                 clearInterval(interval);
//             }
//         }, delay);
//     };





//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         console.log(followUpQuestions[currentQuestionIndex], ">>>>>current question display");


//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 console.log(questions, ">>>>>Questions");
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`)


//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }

//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(response.data.data);
//                 simulateTyping("Previous chat session ended.");
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     // const extractFollowUpQuestions = (text) => {
//     //     return text
//     //         .split("\n")
//     //         .map((line) => line.trim())
//     //         .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a numbered question
//     //         .map((line) => line.replace(/^\d+\.\s*\*\*(.*?)\*\*:\s*/, "").trim()); // Remove numbering and bold labels
//     // };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a number
//             .map((line) => {
//                 // Match optional bold text before the actual question
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : ""; // Extract the full question correctly
//             })
//             .filter((q) => q); // Remove any empty entries
//     };


//     console.log(followUpQuestions, ">>>>>>>>followUpQuestions");
//     console.log(messages, ">>>>>>messages");

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 {/* <Loader className="w-5 h-5 animate-spin text-primary" /> */}
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} /> {/* Auto-scroll target */}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
//                             <Send className="w-4 h-4"  />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;

// ============================================================
// modifying the above code to handle the final response- 
// (SO FAR THE BEST CODE VERSION)
// =============================================================
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, Loader } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref
//     const [isSimulatorOn, setIsSimulatorOn] = useState(false);

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
//         console.log(storedMessages, ">>>>storedMessages");

//         if (storedMessages.length > 0) {
//             // Ensure the "Previous chat session ended." message is included
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended."


//             if (!hasSessionEndedMessage) {
//                 storedMessages = [
//                     ...storedMessages,
//                     { text: "Previous chat session ended.", sender: "bot", type: "message" }
//                 ];
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };


//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         setLoading(true);

//         const interval = setInterval(() => {
//             if (index < text.length-1) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];

//                     if (lastMessage?.sender === "bot") {
//                         // Update the existing last bot message
//                         return prev.map((msg, i) =>
//                             i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                         );
//                     } else {
//                         // Add a new bot message only if the last message isn't from bot
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 clearInterval(interval);
//                 setLoading(false);
//             }
//         }, delay);
//     };





//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         console.log(followUpQuestions[currentQuestionIndex], ">>>>>current question display");


//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 console.log(questions, ">>>>>Questions");
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`)


//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }

//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(` ${response.data.data}. `);
//                 // simulateTyping("Previous chat session ended.");
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line)) // Ensure the line starts with a number
//             .map((line) => {
//                 // Match optional bold text before the actual question
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : ""; // Extract the full question correctly
//             })
//             .filter((q) => q); // Remove any empty entries
//     };


//     console.log(followUpQuestions, ">>>>>>>>followUpQuestions");
//     console.log(messages, ">>>>>>messages");

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button
//                     className="btn btn-primary rounded-full p-3 shadow-lg fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[500px] w-[350px] bg-base-100 shadow-xl rounded-xl overflow-hidden fixed bottom-16 right-4">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-center space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-5 h-5 text-primary" />}
//                                 <div className={`px-3 py-2 rounded-lg text-white ${msg.sender === "user" ? "bg-secondary" : "bg-primary"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-5 h-5 text-secondary" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 {/* <Loader className="w-5 h-5 animate-spin text-primary" /> */}
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} /> {/* Auto-scroll target */}
//                     </div>
//                     <div className="p-3 flex items-center bg-base-200">
//                         <input
//                             type="text"
//                             className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..."
//                             value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
//                             disabled={loading}
//                         />
//                         <button className="btn btn-primary ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
//                             <Send className="w-4 h-4"  />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;



//===============================================================================
// Modifying the abve code for rendering proper structure of the final response-
// Another Best Version Of Code (Proper color combination and foxed bot size)
//=================================================================================
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref
//     const [isSimulatorOn, setIsSimulatorOn] = useState(false);

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

//         if (storedMessages.length > 0) {
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended.";

//             if (!hasSessionEndedMessage) {
//                 storedMessages.push({ text: "Previous chat session ended.", sender: "bot", type: "message" });
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         setLoading(true);

//         const interval = setInterval(() => {
//             if (index < text.length - 1) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];

//                     if (lastMessage?.sender === "bot") {
//                         return prev.map((msg, i) =>
//                             i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                         );
//                     } else {
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 clearInterval(interval);
//                 setLoading(false);
//             }
//         }, delay);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`);

//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }
//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(` ${response.data.data}. `);
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line))
//             .map((line) => {
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : "";
//             })
//             .filter((q) => q);
//     };

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button className="btn bg-white text-primary border border-primary rounded-full p-3 shadow-md fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}>
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[550px] w-[350px] bg-white shadow-lg rounded-xl overflow-hidden fixed bottom-16 right-4 border">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         ChatWidgetSix
//                         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary shrink-0" />}
//                                 <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-6 h-6 text-blue-500 shrink-0" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} />
//                     </div>
//                     <div className="p-3 flex items-center bg-gray-100">
//                         <input type="text" className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..." value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
//                             disabled={loading} />
//                         <button className="btn bg-primary text-white ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;

// Modifying the above code to display proper final response
// WORKING WELL (Color format done, refresh deleting the chat done, bot size icon fixed, undefined text in end issue resolved)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, RotateCw } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref
//     const [isSimulatorOn, setIsSimulatorOn] = useState(false);

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);

//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

//         if (storedMessages.length > 0) {
//             const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended.";

//             if (!hasSessionEndedMessage) {
//                 storedMessages.push({ text: "Previous chat session ended.", sender: "bot", type: "message" });
//                 localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//             }
//         }

//         setMessages(storedMessages);
//     }, []);

//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         setLoading(true);

//         const interval = setInterval(() => {
//             if (index < text.length - 1) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];

//                     if (lastMessage?.sender === "bot") {
//                         return prev.map((msg, i) =>
//                             i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                         );
//                     } else {
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 clearInterval(interval);
//                 setLoading(false);
//             }
//         }, delay);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`);

//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }
//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     // realtimr simulation
//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(` ${response.data.data}. `);
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line))
//             .map((line) => {
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : "";
//             })
//             .filter((q) => q);
//     };

//     const handleRefresh = () => {
//         localStorage.removeItem("chatMessages");
//         setMessages([]);
//     };

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button className="btn bg-white text-primary border border-primary rounded-full p-3 shadow-md fixed bottom-4 right-4 z-50"
//                     onClick={() => setIsOpen(true)}>
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[550px] w-[350px] bg-white shadow-lg rounded-xl overflow-hidden fixed bottom-16 right-4 border">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//     ChatWidgetSix
//     <div className="flex space-x-3">
//         <button onClick={handleRefresh} className="text-white">
//             <RotateCw className="w-5 h-5" />
//         </button>
//         <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//     </div>
// </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary shrink-0" />}
//                                 <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-6 h-6 text-blue-500 shrink-0" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} />
//                     </div>
//                     <div className="p-3 flex items-center bg-gray-100">
//                         <input type="text" className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..." value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
//                             disabled={loading} />
//                         <button className="btn bg-primary text-white ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// Adding default bot text "How can i Help you !!" in the beginning of the chat 
// SO FAR THE BEST (ONLY THING LEFT TO DO IS DISPLAY FINAL RESPONSE IN PROPER STRUCTURE)
// import { useState, useEffect, useRef } from "react";
// import { Send, User, Bot, MessageCircle, RotateCw } from "lucide-react";
// import axios from "axios";

// const ChatWidgetSix = () => {
//     const [messages, setMessages] = useState(
//         JSON.parse(localStorage.getItem("chatMessages")) || []
//     );
//     const [input, setInput] = useState("");
//     const [isOpen, setIsOpen] = useState(false);
//     const [sessionId, setSessionId] = useState(Date.now().toString());
//     const [loading, setLoading] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
//     const [userResponses, setUserResponses] = useState({});
//     const [currentMainQuestion, setCurrentMainQuestion] = useState("");
//     const chatEndRef = useRef(null); // Auto-scroll ref
//     const [isSimulatorOn, setIsSimulatorOn] = useState(false);
//     const [isFinalResponse, setIsFinalResponse] = useState(false);

//     const handleOpen = () => {
//         setIsOpen(true);
//         scrollToBottom();
//     }

//     useEffect(() => {
//         localStorage.setItem("chatMessages", JSON.stringify(messages));
//         scrollToBottom();
//     }, [messages]);


//     useEffect(() => {
//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

//         if (storedMessages.length === 0 || storedMessages[storedMessages.length - 1].text !== "Hii !! How can I help you") {
//             // Add default welcome message if no chat history exists
//             storedMessages.push({ text: "Hii !! How can I help you", sender: "bot", type: "message" });
//             localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//         }
//         // else {
//         //     const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended.";
//         //     if (!hasSessionEndedMessage) {
//         //         storedMessages.push({ text: "Previous chat session ended.", sender: "bot", type: "message" });
//         //         localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
//         //     }
//         // }

//         setMessages(storedMessages);
//     }, []);


//     const scrollToBottom = () => {
//         setTimeout(() => {
//             chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//     };

//     const simulateTyping = (text, delay = 50) => {
//         let index = 0;
//         // setLoading(true);
//         setIsSimulatorOn(true)

//         let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

//         const interval = setInterval(() => {
//             if (index < text.length - 1) {
//                 setMessages((prev) => {
//                     let lastMessage = prev[prev.length - 1];

//                     if (lastMessage?.sender === "bot") {
//                         return prev.map((msg, i) =>
//                             i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
//                         );
//                     } else {
//                         return [...prev, { text: text[index], sender: "bot" }];
//                     }
//                 });
//                 index++;
//             } else {
//                 setIsSimulatorOn(false)
//                 setIsFinalResponse(false);
//                 clearInterval(interval);
//                 // setLoading(false);
//             }
//         }, delay);
//     };

//     const sendMessage = async () => {
//         if (input.trim() === "") return;
//         setMessages((prev) => [...prev, { text: input, sender: "user" }]);
//         setInput("");

//         if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
//             setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
//             const nextIndex = currentQuestionIndex + 1;

//             if (nextIndex < followUpQuestions.length) {
//                 setCurrentQuestionIndex(nextIndex);
//                 simulateTyping(followUpQuestions[nextIndex]);
//             } else {
//                 getFinalResponse();
//             }
//             return;
//         }

//         setLoading(true);
//         try {
//             const newSessionId = Date.now().toString();
//             setSessionId(newSessionId);
//             setFollowUpQuestions([]);
//             setCurrentQuestionIndex(-1);
//             setUserResponses({});
//             setCurrentMainQuestion(input);

//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
//                 { Question: input, SessionID: newSessionId }
//             );

//             if (response.data.code === 200) {
//                 const followUpText = response.data.data;
//                 const questions = extractFollowUpQuestions(followUpText);
//                 let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`);

//                 if (appendSpaceBeforeQuestions.length > 0) {
//                     setFollowUpQuestions(appendSpaceBeforeQuestions);
//                     setCurrentQuestionIndex(0);
//                     simulateTyping(appendSpaceBeforeQuestions[0]);
//                 } else {
//                     simulateTyping("No follow-up questions found.");
//                 }
//             } else {
//                 simulateTyping("Failed to fetch follow-up questions.");
//             }
//         } catch (error) {
//             console.error("Error fetching response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     // realtimr simulation
//     const getFinalResponse = async () => {
//         setLoading(true);
//         try {
//             const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
//             const response = await axios.post(
//                 "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
//                 {
//                     Question: currentMainQuestion,
//                     QAnswers: formattedAnswers,
//                     SessionID: sessionId
//                 }
//             );

//             if (response.data.code === 200) {
//                 simulateTyping(` ${response.data.data}. `);
//                 setFollowUpQuestions([]);
//                 setCurrentQuestionIndex(-1);
//                 setUserResponses({});
//                 setCurrentMainQuestion("");
//                 setIsFinalResponse(true)
//             }
//         } catch (error) {
//             console.error("Error fetching final response:", error);
//             simulateTyping("Sorry, something went wrong. Please try again.");
//         }
//         setLoading(false);
//     };

//     const extractFollowUpQuestions = (text) => {
//         return text
//             .split("\n")
//             .map((line) => line.trim())
//             .filter((line) => /^\d+\.\s/.test(line))
//             .map((line) => {
//                 const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
//                 return match ? match[2].trim() : "";
//             })
//             .filter((q) => q);
//     };

//     const handleRefresh = () => {
//         localStorage.removeItem("chatMessages");
//         setMessages([]);
//     };

//     return (
//         <div className="fixed bottom-4 right-4">
//             {!isOpen && (
//                 <button className="btn bg-white text-primary border border-primary rounded-full p-3 shadow-md fixed bottom-4 right-4 z-50"
//                     onClick={() => handleOpen(true)}>
//                     <MessageCircle className="w-6 h-6" />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="flex flex-col h-[550px] w-[350px] bg-white shadow-lg rounded-xl overflow-hidden fixed bottom-16 right-4 border">
//                     <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
//                         Udyogmitra
//                         <div className="flex space-x-3">
//                             <button onClick={handleRefresh} className="text-white">
//                                 <RotateCw className="w-5 h-5" />
//                             </button>
//                             <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
//                         </div>
//                     </div>
//                     <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
//                         {messages.map((msg, index) => (
//                             <div key={index} className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
//                                 {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary shrink-0" />}
//                                 <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
//                                     {msg.text}
//                                 </div>
//                                 {msg.sender === "user" && <User className="w-6 h-6 text-blue-500 shrink-0" />}
//                             </div>
//                         ))}
//                         {loading && (
//                             <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
//                                 <span className="loading loading-dots loading-sm"></span>
//                                 <span className="text-gray-500 text-sm">Fetching response...</span>
//                             </div>
//                         )}
//                         <div ref={chatEndRef} />
//                     </div>
//                     <div className="p-3 flex items-center bg-gray-100">
//                         <input type="text" className="input input-bordered flex-1 text-sm"
//                             placeholder="Type a message..." value={input}
//                             onChange={(e) => setInput(e.target.value)}
//                             onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
//                             disabled={loading} />
//                         <button className="btn bg-primary text-white ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
//                             <Send className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetSix;


// Modify the above code to display the final response-
// SO FAR THE BEST WITH ALL REQUIRED FEATURES
import { useState, useEffect, useRef } from "react";
import { Send, User, Bot, MessageCircle, RotateCw } from "lucide-react";
import axios from "axios";

const ChatWidgetSix = () => {
    const [messages, setMessages] = useState(
        JSON.parse(localStorage.getItem("chatMessages")) || []
    );
    let [input, setInput] = useState("");
    let [isOpen, setIsOpen] = useState(false);
    let [sessionId, setSessionId] = useState(Date.now().toString());
    let [loading, setLoading] = useState(false);
    let [followUpQuestions, setFollowUpQuestions] = useState([]);
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    let [userResponses, setUserResponses] = useState({});
    let [currentMainQuestion, setCurrentMainQuestion] = useState("");
    let chatEndRef = useRef(null); // Auto-scroll ref
    let [isSimulatorOn, setIsSimulatorOn] = useState(false);
    let [isFinalResponse, setIsFinalResponse] = useState(false);
    let [finalResponse, setFinalResponse] = useState(null);
    

    let handleOpen = () => {
        setIsOpen(true);
        scrollToBottom();
    }

    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
        scrollToBottom();
    }, [messages]);


    useEffect(() => {
        let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

        if (storedMessages.length === 0 || storedMessages[storedMessages.length - 1].text !== "Hii !! How can I help you") {
            // Add default welcome message if no chat history exists
            storedMessages.push({ text: "Hii !! How can I help you", sender: "bot", type: "message" });
            localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
        }
        // else {
        //     const hasSessionEndedMessage = storedMessages[storedMessages.length - 1].text === "Previous chat session ended.";
        //     if (!hasSessionEndedMessage) {
        //         storedMessages.push({ text: "Previous chat session ended.", sender: "bot", type: "message" });
        //         localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
        //     }
        // }

        setMessages(storedMessages);
    }, []);


    const scrollToBottom = () => {
        setTimeout(() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const simulateTyping = (text, delay = 50) => {
        let index = 0;
        // setLoading(true);
        setIsSimulatorOn(true)

        let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

        const interval = setInterval(() => {
            if (index < text.length - 1) {
                setMessages((prev) => {
                    let lastMessage = prev[prev.length - 1];

                    if (lastMessage?.sender === "bot") {
                        return prev.map((msg, i) =>
                            i === prev.length - 1 ? { ...msg, text: msg.text + text[index] } : msg
                        );
                    } else {
                        return [...prev, { text: text[index], sender: "bot" }];
                    }
                });
                index++;
            } else {
                setIsSimulatorOn(false)
                setIsFinalResponse(false);
                clearInterval(interval);
                // setLoading(false);
            }
        }, delay);
    };

    const sendMessage = async () => {
        if (input.trim() === "") return;
        setMessages((prev) => [...prev, { text: input, sender: "user" }]);
        setInput("");

        if (currentQuestionIndex >= 0 && currentQuestionIndex < followUpQuestions.length) {
            setUserResponses((prev) => ({ ...prev, [currentQuestionIndex]: input }));
            const nextIndex = currentQuestionIndex + 1;

            if (nextIndex < followUpQuestions.length) {
                setCurrentQuestionIndex(nextIndex);
                simulateTyping(followUpQuestions[nextIndex]);
            } else {
                getFinalResponse();
            }
            return;
        }

        setLoading(true);
        try {
            const newSessionId = Date.now().toString();
            setSessionId(newSessionId);
            setFollowUpQuestions([]);
            setCurrentQuestionIndex(-1);
            setUserResponses({});
            setCurrentMainQuestion(input);

            const response = await axios.post(
                "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request",
                { Question: input, SessionID: newSessionId }
            );

            if (response.data.code === 200) {
                const followUpText = response.data.data;
                const questions = extractFollowUpQuestions(followUpText);
                let appendSpaceBeforeQuestions = questions.map((ques) => ` ${ques}`);

                if (appendSpaceBeforeQuestions.length > 0) {
                    setFollowUpQuestions(appendSpaceBeforeQuestions);
                    setCurrentQuestionIndex(0);
                    simulateTyping(appendSpaceBeforeQuestions[0]);
                } else {
                    simulateTyping("No follow-up questions found.");
                }
            } else {
                simulateTyping("Failed to fetch follow-up questions.");
            }
        } catch (error) {
            console.error("Error fetching response:", error);
            simulateTyping("Sorry, something went wrong. Please try again.");
        }
        setLoading(false);
    };

    // realtimr simulation
    const getFinalResponse = async () => {
        setLoading(true);
        try {
            const formattedAnswers = followUpQuestions.map((q, index) => `${q}: ${userResponses[index]}`).join("\n");
            const response = await axios.post(
                "https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request",
                {
                    Question: currentMainQuestion,
                    QAnswers: formattedAnswers,
                    SessionID: sessionId
                }
            );

            if (response.data.code === 200) {
                // simulateTyping(` ${response.data.data}. `);
                setFinalResponse(response.data.data);
                setMessages((prev) => [...prev, { text: response.data.data, sender: "bot", finalResponse: true }]);
                setFollowUpQuestions([]);
                setCurrentQuestionIndex(-1);
                setUserResponses({});
                setCurrentMainQuestion("");
                setIsFinalResponse(true)
            }
        } catch (error) {
            console.error("Error fetching final response:", error);
            simulateTyping("Sorry, something went wrong. Please try again.");
        }
        setLoading(false);
    };

    const extractFollowUpQuestions = (text) => {
        return text
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => /^\d+\.\s/.test(line))
            .map((line) => {
                const match = line.match(/^\d+\.\s*(?:\*\*(.*?)\*\*\s*:)?\s*(.*)/);
                return match ? match[2].trim() : "";
            })
            .filter((q) => q);
    };

    const handleRefresh = () => {
        console.log(">>>>Refresh clicked ");
        
        localStorage.removeItem("chatMessages");
        let storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];

        if (storedMessages.length === 0 || storedMessages[storedMessages.length - 1].text !== "Hii !! How can I help you") {
            storedMessages.push({ text: "Hii !! How can I help you", sender: "bot", type: "message" });
            localStorage.setItem("chatMessages", JSON.stringify(storedMessages));
        }

        setMessages(storedMessages);
    };

    const ChatResponseView = (response) => {
        const formatResponse = (text) => {
            if (!text) return "";
    
            return text
                .replace(/\n### (.*?)\n/g, '<h3 class="text-lg font-semibold mt-4">$1</h3>') // Main Headings
                .replace(/\n#### (.*?)\n/g, '<h4 class="text-md font-semibold mt-3">$1</h4>') // Subheadings
                .replace(/\n(\d+\..*?)(?=\n\d+\.|\n\n|$)/gs, '<ol class="list-decimal pl-6 mt-2">$&</ol>') // Wrap ordered lists
                .replace(/\n\d+\.\s(.*?)\n/g, '<li class="mb-2">$1</li>') // List items
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
                .replace(/\n\n/g, "</p><p>") // Convert double line breaks into paragraphs
                .replace(/\n/g, "<br />"); // Line breaks for single new lines
        };
    
        return (
            <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
                {/* <h2 className="text-xl font-bold mb-3">Response</h2> */}
                <p dangerouslySetInnerHTML={{ __html: formatResponse(response) }} />
            </div>
        );
    };
    

    return (
        <div className="fixed bottom-4 right-4">
            {!isOpen && (
                <button className="btn bg-white text-primary border border-primary rounded-full p-3 shadow-md fixed bottom-4 right-4 z-50"
                    onClick={() => handleOpen(true)}>
                    <MessageCircle className="w-6 h-6" />
                </button>
            )}
            {isOpen && (
                <div className="flex flex-col h-[580px] w-[370px] bg-white shadow-lg rounded-xl overflow-hidden fixed bottom-16 right-4 border">
                    <div className="bg-primary text-white text-sm font-semibold p-3 flex justify-between items-center">
                        Udyogmitra
                        <div className="flex space-x-3">
                            <button onClick={handleRefresh} className="text-white">
                                <RotateCw className="w-5 h-5" />
                            </button>
                            <button className="text-white text-lg" onClick={() => setIsOpen(false)}>✕</button>
                        </div>
                    </div>
                    <div className="flex-1 p-4 overflow-auto space-y-2 text-sm">
                        {/* {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
                                {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary shrink-0" />}
                                <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                                    {msg.text}
                                </div>
                                {msg.sender === "user" && <User className="w-6 h-6 text-blue-500 shrink-0" />}
                            </div>
                        ))} */}
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-start space-x-2 ${msg.sender === "user" ? "justify-end" : ""}`}>
                                {msg.sender === "bot" && <Bot className="w-6 h-6 text-primary shrink-0" />}
                                {
                                    !msg.finalResponse ? (
                                        <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                                            {msg.text}
                                        </div>
                                    ): (
                                        <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"}`}>
                                            {ChatResponseView(msg.text)}
                                        </div>
                                    )
                                }
                                {msg.sender === "user" && <User className="w-6 h-6 text-blue-500 shrink-0" />}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex items-center space-x-2 animate-pulse bg-gray-200 p-3 rounded-lg">
                                <span className="loading loading-dots loading-sm"></span>
                                <span className="text-gray-500 text-sm">Fetching response...</span>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>
                    <div className="p-3 flex items-center bg-gray-100">
                        <input type="text" className="input input-bordered flex-1 text-sm"
                            placeholder="Type a message..." value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && !isSimulatorOn && sendMessage()}
                            disabled={loading} />
                        <button className="btn bg-primary text-white ml-2 text-sm" onClick={sendMessage} disabled={loading || isSimulatorOn}>
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidgetSix;
