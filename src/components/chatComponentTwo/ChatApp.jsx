// import { useState } from "react";
// import { MessageSquare, Send, Menu } from "lucide-react";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?"] },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?"] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, input] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   return (
//     <div className="flex h-screen bg-purple-900 text-white">
//       {/* Sidebar Drawer */}
//       <div className="drawer lg:drawer-open">
//         <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col">
//           <label htmlFor="sidebar-drawer" className="p-4 cursor-pointer lg:hidden">
//             <Menu size={24} />
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
//           <div className="w-80 bg-purple-800 p-4 space-y-2 overflow-auto">
//             <h2 className="text-lg font-bold">Chats</h2>
//             {chats.map((chat) => (
//               <button
//                 key={chat.id}
//                 className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
//                   selectedChat.id === chat.id ? "bg-purple-600" : "bg-purple-700"
//                 }`}
//                 onClick={() => setSelectedChat(chat)}
//               >
//                 <MessageSquare size={18} />
//                 <span>{chat.title}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Chat Screen */}
//       <div className="flex flex-col w-full lg:w-3/4 h-full p-4">
//         <div className="flex-1 bg-purple-700 p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div key={index} className="mb-2 bg-purple-600 p-2 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-purple-800 rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-purple-600 hover:bg-purple-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;



// // second
// import { useState } from "react";
// import { MessageSquare, Send, Menu } from "lucide-react";

// const ChatApp = () => {
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?"] },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?"] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, input] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   return (
//     <div className="flex h-screen bg-[#75287c] text-white">
//       {/* Sidebar Drawer */}
//       <div className="drawer lg:drawer-open">
//         <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col">
//           <label htmlFor="sidebar-drawer" className="p-4 cursor-pointer lg:hidden">
//             <Menu size={24} />
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
//           <div className="w-80 bg-[#5a1f61] p-4 space-y-2 overflow-auto">
//             <h2 className="text-lg font-bold">Chats</h2>
//             {chats.map((chat) => (
//               <button
//                 key={chat.id}
//                 className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
//                   selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//                 }`}
//                 onClick={() => setSelectedChat(chat)}
//               >
//                 <MessageSquare size={18} />
//                 <span>{chat.title}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Chat Screen */}
//       <div className="flex flex-col w-full lg:w-3/4 h-full p-4">
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div key={index} className="mb-2 bg-blue-600 p-2 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;


// // third
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare } from "lucide-react";

// const ChatApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?"] },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?"] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, input] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   return (
//     <div className="flex h-screen w-full bg-[#75287c] text-white">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 ${
//           isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"
//         } lg:relative lg:translate-x-0 lg:w-80 lg:block ${isSidebarOpen ? "block" : "hidden"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Close Sidebar Button */}
//           <button
//             className="self-end mb-4 bg-blue-600 p-2 rounded"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <X size={24} />
//           </button>
//           <h2 className="text-lg font-bold mb-4">Chats</h2>
//           {chats.map((chat) => (
//             <button
//               key={chat.id}
//               className={`w-full flex items-center space-x-2 p-2 rounded-lg ${
//                 selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//               }`}
//               onClick={() => setSelectedChat(chat)}
//             >
//               <MessageSquare size={18} />
//               <span>{chat.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Chat Screen */}
//       <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
//         {/* Open Sidebar Button (Visible on all screens) */}
//         <button
//           className="absolute top-4 left-4 bg-blue-600 p-2 rounded"
//           onClick={() => setIsSidebarOpen(true)}
//         >
//           <Menu size={24} />
//         </button>
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div key={index} className="mb-2 bg-blue-600 p-2 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;


// // fourth (PERFECT BASIC CHAT WINDOW)
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen } from "lucide-react";

// const ChatApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?"] },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?"] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, input] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   return (
//     <div className="flex h-screen w-full bg-[#75287c] text-white relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80 
//         ${isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Sidebar Header */}
//           <div className="flex justify-between items-center mb-4">
//             <button
//               className="bg-blue-600 p-2 rounded"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <X size={24} />
//             </button>
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             <button className="bg-blue-600 p-2 rounded">
//               <Pen size={20} />
//             </button>
//           </div>

//           {/* Chat List */}
//           {chats.map((chat) => (
//             <button
//               key={chat.id}
//               className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${
//                 selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//               }`}
//               onClick={() => setSelectedChat(chat)}
//             >
//               <MessageSquare size={18} />
//               <span>{chat.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Top Strip (Visible only when sidebar is closed) */}
//       {!isSidebarOpen && (
//         <div className="fixed top-0 left-0 w-full bg-[#5a1f61] p-4 flex justify-between items-center z-10">
//           <button
//             className="bg-blue-600 p-2 rounded"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>
//           <h2 className="text-lg font-bold">deAsra Chat</h2>
//           <button className="bg-blue-600 p-2 rounded">
//             <Pen size={20} />
//           </button>
//         </div>
//       )}

//       {/* Chat Screen */}
//       <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div key={index} className="mb-2 bg-blue-600 p-2 rounded-lg">
//               {msg}
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;


// // fifth (different side chats for users)
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen } from "lucide-react";

// const ChatApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"] },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?", "User: What are your services?"] },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, `User: ${input}`] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   return (
//     <div className="flex h-screen w-full bg-[#75287c] text-white relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80 
//         ${isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Sidebar Header */}
//           <div className="flex justify-between items-center mb-4">
//             <button
//               className="bg-blue-600 p-2 rounded"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <X size={24} />
//             </button>
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             <button className="bg-blue-600 p-2 rounded">
//               <Pen size={20} />
//             </button>
//           </div>

//           {/* Chat List */}
//           {chats.map((chat) => (
//             <button
//               key={chat.id}
//               className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${
//                 selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//               }`}
//               onClick={() => setSelectedChat(chat)}
//             >
//               <MessageSquare size={18} />
//               <span>{chat.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Top Strip (Visible only when sidebar is closed) */}
//       {!isSidebarOpen && (
//         <div className="fixed top-0 left-0 w-full bg-[#5a1f61] p-4 flex justify-between items-center z-10">
//           <button
//             className="bg-blue-600 p-2 rounded"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>
//           <h2 className="text-lg font-bold">deAsra Chat</h2>
//           <button className="bg-blue-600 p-2 rounded">
//             <Pen size={20} />
//           </button>
//         </div>
//       )}

//       {/* Chat Screen */}
//       <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//             >
//               {msg.replace("User: ", "")}
//             </div>
//           ))}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;

// // sixth (adding form in the chat)
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen } from "lucide-react";

// const ChatApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?", "User: What are your services?"], formResponses: {} },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");
//   const [formResponses, setFormResponses] = useState({});

//   const followUpQuestions = [
//     "What is your name?",
//     "What is your email?",
//     "What issue are you facing?",
//   ];

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, `User: ${input}`] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   const handleFormChange = (index, value) => {
//     setFormResponses({ ...formResponses, [index]: value });
//   };

//   const handleSubmitForm = () => {
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, formResponses }
//         : chat
//     );
//     setChats(updatedChats);
//     setFormResponses({});
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="flex h-screen w-full bg-[#75287c] text-white relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80 
//         ${isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Sidebar Header */}
//           <div className="flex justify-between items-center mb-4">
//             <button
//               className="bg-blue-600 p-2 rounded"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <X size={24} />
//             </button>
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             <button className="bg-blue-600 p-2 rounded">
//               <Pen size={20} />
//             </button>
//           </div>

//           {/* Chat List */}
//           {chats.map((chat) => (
//             <button
//               key={chat.id}
//               className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${
//                 selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//               }`}
//               onClick={() => setSelectedChat(chat)}
//             >
//               <MessageSquare size={18} />
//               <span>{chat.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Top Strip (Visible only when sidebar is closed) */}
//       {!isSidebarOpen && (
//         <div className="fixed top-0 left-0 w-full bg-[#5a1f61] p-4 flex justify-between items-center z-10">
//           <button
//             className="bg-blue-600 p-2 rounded"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>
//           <h2 className="text-lg font-bold">deAsra Chat</h2>
//           <button className="bg-blue-600 p-2 rounded">
//             <Pen size={20} />
//           </button>
//         </div>
//       )}

//       {/* Chat Screen */}
//       <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
//           {selectedChat.messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//             >
//               {msg.replace("User: ", "")}
//             </div>
//           ))}
//         </div>

//         {/* Follow-Up Questions Form */}
//         <div className="mt-4 p-4 bg-[#5a1f61] rounded-lg">
//           <h3 className="text-lg font-bold mb-2">Follow-Up Questions</h3>
//           {followUpQuestions.map((question, index) => (
//             <div key={index} className="mb-2">
//               <label className="block text-sm font-medium">{question}</label>
//               <input
//                 type="text"
//                 className="w-full p-2 text-black rounded-lg mt-1"
//                 value={formResponses[index] || ""}
//                 onChange={(e) => handleFormChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//           <button
//             onClick={handleSubmitForm}
//             className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;

// // seventh (proper color combination)
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen } from "lucide-react";

// const ChatApp = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     { id: 2, title: "Chat 2", messages: ["Hi there!", "What's your question?", "User: What are your services?"], formResponses: {} },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");
//   const [formResponses, setFormResponses] = useState({});

//   const followUpQuestions = [
//     "What is your name?",
//     "What is your email?",
//     "What issue are you facing?",
//   ];

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, messages: [...chat.messages, `User: ${input}`] }
//         : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   const handleFormChange = (index, value) => {
//     setFormResponses({ ...formResponses, [index]: value });
//   };

//   const handleSubmitForm = () => {
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id
//         ? { ...chat, formResponses }
//         : chat
//     );
//     setChats(updatedChats);
//     setFormResponses({});
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="flex h-screen w-full bg-gradient-to-br from-purple-800 to-pink-600 text-white relative">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80 
//         ${isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"}`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Sidebar Header */}
//           <div className="flex justify-between items-center mb-4">
//             <button
//               className="bg-blue-600 p-2 rounded"
//               onClick={() => setIsSidebarOpen(false)}
//             >
//               <X size={24} />
//             </button>
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             <button className="bg-blue-600 p-2 rounded">
//               <Pen size={20} />
//             </button>
//           </div>

//           {/* Chat List */}
//           {chats.map((chat) => (
//             <button
//               key={chat.id}
//               className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg hover:bg-blue-500 transition ${
//                 selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//               }`}
//               onClick={() => setSelectedChat(chat)}
//             >
//               <MessageSquare size={18} />
//               <span>{chat.title}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Top Strip (Visible only when sidebar is closed) */}
//       {!isSidebarOpen && (
//         <div className="fixed top-0 left-0 w-full bg-[#5a1f61] p-4 flex justify-between items-center z-10 shadow-lg">
//           <button
//             className="bg-blue-600 p-2 rounded"
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             <Menu size={24} />
//           </button>
//           <h2 className="text-lg font-bold">deAsra Chat</h2>
//           <button className="bg-blue-600 p-2 rounded">
//             <Pen size={20} />
//           </button>
//         </div>
//       )}

//       {/* Chat Screen */}
//       <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
//         <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg shadow-inner">
//           {selectedChat.messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`mb-2 p-2 rounded-lg max-w-[70%] shadow-lg ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//             >
//               {msg.replace("User: ", "")}
//             </div>
//           ))}
//         </div>

//         {/* Follow-Up Questions Form */}
//         <div className="mt-4 p-4 bg-[#5a1f61] rounded-lg shadow-lg">
//           <h3 className="text-lg font-bold mb-2">Follow-Up Questions</h3>
//           {followUpQuestions.map((question, index) => (
//             <div key={index} className="mb-2">
//               <label className="block text-sm font-medium">{question}</label>
//               <input
//                 type="text"
//                 className="w-full p-2 text-black rounded-lg mt-1"
//                 value={formResponses[index] || ""}
//                 onChange={(e) => handleFormChange(index, e.target.value)}
//               />
//             </div>
//           ))}
//           <button
//             onClick={handleSubmitForm}
//             className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full shadow-md"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg shadow-md">
//           <input
//             className="flex-1 p-2 text-black rounded-lg"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//           />
//           <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg shadow-md">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatApp;


// eights (more good color combo, best so far)
import { useState } from "react";
import { Menu, X, Send, MessageSquare, Pen } from "lucide-react";

const ChatApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chats, setChats] = useState([
    { id: 1, title: "Chat 1", messages: ["How to create an Instagram account ?"], formResponses: {} },
    // { id: 2, title: "Chat 2", messages: ["Hi there!", "How to create instagram account?", "User: What are your services?"], formResponses: {} },
    { id: 2, title: "Chat 2", messages: ["How to create an Instagram account ?"], formResponses: {} },
  ]);
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [input, setInput] = useState("");
  const [formResponses, setFormResponses] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(true);

  const followUpQuestions = [
    "Personal or Business Account?",
    "Email or Phone Number?",
    "Username Preference?",
    "Profile Details?",
    "Profile Picture?",
    "Privacy Settings?"
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat.id
        ? { ...chat, messages: [...chat.messages, `User: ${input}`] }
        : chat
    );
    setChats(updatedChats);
    setInput("");
  };

  const handleFormChange = (index, value) => {
    setFormResponses({ ...formResponses, [index]: value });
  };

  const handleSubmitForm = () => {
    const updatedChats = chats.map((chat) =>
      chat.id === selectedChat.id
        ? { ...chat, formResponses }
        : chat
    );
    setChats(updatedChats);
    setFormResponses({});
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex h-screen w-full bg-[#75287c] text-white relative">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-[#5a1f61] p-4 overflow-auto transition-transform duration-300 lg:relative lg:translate-x-0 lg:w-80 
        ${isSidebarOpen ? "translate-x-0 w-80" : "-translate-x-full w-80"}`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-blue-600 p-2 rounded"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-lg font-bold">deAsra Chat</h2>
            <button className="bg-blue-600 p-2 rounded">
              <Pen size={20} />
            </button>
          </div>

          {/* Chat List */}
          {chats.map((chat) => (
            <button
              key={chat.id}
              className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${
                selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <MessageSquare size={18} />
              <span>{chat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Top Strip (Visible only when sidebar is closed) */}
      {!isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full bg-[#5a1f61] p-4 flex justify-between items-center z-10">
          <button
            className="bg-blue-600 p-2 rounded"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-bold">deAsra Chat</h2>
          <button className="bg-blue-600 p-2 rounded">
            <Pen size={20} />
          </button>
        </div>
      )}

      {/* Chat Screen */}
      <div className={`flex flex-col flex-1 h-full p-4 transition-all ${isSidebarOpen ? "lg:ml-80" : "ml-0"}`}>
        <div className="flex-1 bg-[#5a1f61] p-4 overflow-auto rounded-lg">
          {selectedChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
            >
              {msg.replace("User: ", "")}
            </div>
          ))}
        </div>

        {/* Follow-Up Questions Form */}
        {
            isFormOpen && <div className="mt-4 p-4 bg-[#44214a] rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">Follow-Up Questions</h3>
            {followUpQuestions.map((question, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-semibold text-gray-300">{question}</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-200 text-black rounded-lg mt-2 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                  value={formResponses[index] || ""}
                  onChange={(e) => handleFormChange(index, e.target.value)}
                />
              </div>
            ))}
            <button
              onClick={handleSubmitForm}
              className="mt-2 bg-blue-600 hover:bg-blue-500 p-3 rounded-lg w-full font-semibold shadow-md"
            >
              Submit
            </button>
          </div>
        }

        {/* Input Field */}
        <div className="flex items-center gap-2 mt-2 p-2 bg-[#5a1f61] rounded-lg">
          <input
            className="flex-1 p-2 text-black bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
          />
          <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;