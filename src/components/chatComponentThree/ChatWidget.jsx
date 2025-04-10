// Perfect working, but without sidebar functionality

// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");
//   const [formResponses, setFormResponses] = useState({});

//   const followUpQuestions = ["What is your name?", "What is your email?", "What issue are you facing?"];

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id ? { ...chat, messages: [...chat.messages, `User: ${input}`] } : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   const handleFormChange = (index, value) => {
//     setFormResponses({ ...formResponses, [index]: value });
//   };

//   const handleSubmitForm = () => {
//     const updatedChats = chats.map((chat) => (chat.id === selectedChat.id ? { ...chat, formResponses } : chat));
//     setChats(updatedChats);
//     setFormResponses({});
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Chat Button */}
//       {!isOpen && (
//         <button
//           className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle size={24} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-100 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden">
//           {/* Header */}
//           <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//             {isSidebarOpen && (
//               <button className="p-2 rounded bg-blue-600" onClick={() => setIsSidebarOpen(false)}>
//                 <X size={20} />
//               </button>
//             )}
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             <button className="bg-blue-600 p-2 rounded">
//               <Pen size={18} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//             {selectedChat.messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//               >
//                 {msg.replace("User: ", "")}
//               </div>
//             ))}
//           </div>

//           {/* Follow-Up Questions Form */}
//           <div className="p-3 bg-[#5a1f61]">
//             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//             {followUpQuestions.map((question, index) => (
//               <div key={index} className="mb-2">
//                 <label className="block text-xs font-medium">{question}</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
//                   value={formResponses[index] || ""}
//                   onChange={(e) => handleFormChange(index, e.target.value)}
//                 />
//               </div>
//             ))}
//             <button
//               onClick={handleSubmitForm}
//               className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
//             >
//               Submit
//             </button>
//           </div>

//           {/* Input Field */}
//           <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//             <input
//               className="flex-1 p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Ask a question..."
//             />
//             <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//               <Send size={18} />
//             </button>
//           </div>

//           {/* Close Button */}
//           <button
//             className="absolute top-2 right-2 bg-red-600 p-2 rounded-full"
//             onClick={() => setIsOpen(false)}
//           >
//             <X size={18} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;


// // Second (with sidebar, complete UI)
// import { useState } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [chats, setChats] = useState([
//     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//   ]);
//   const [selectedChat, setSelectedChat] = useState(chats[0]);
//   const [input, setInput] = useState("");
//   const [formResponses, setFormResponses] = useState({});

//   const followUpQuestions = ["What is your name?", "What is your email?", "What issue are you facing?"];

//   const handleSendMessage = () => {
//     if (!input.trim()) return;
//     const updatedChats = chats.map((chat) =>
//       chat.id === selectedChat.id ? { ...chat, messages: [...chat.messages, `User: ${input}`] } : chat
//     );
//     setChats(updatedChats);
//     setInput("");
//   };

//   const handleFormChange = (index, value) => {
//     setFormResponses({ ...formResponses, [index]: value });
//   };

//   const handleSubmitForm = () => {
//     const updatedChats = chats.map((chat) => (chat.id === selectedChat.id ? { ...chat, formResponses } : chat));
//     setChats(updatedChats);
//     setFormResponses({});
//     alert("Form submitted successfully!");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Chat Button */}
//       {!isOpen && (
//         <button
//           className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
//           onClick={() => setIsOpen(true)}
//         >
//           <MessageCircle size={24} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//           {/* Header */}
//           <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//             {!isSidebarOpen && (
//               <button className="p-2 rounded bg-blue-600" onClick={() => setIsSidebarOpen(true)}>
//                 <Menu size={20} />
//               </button>
//             )}
//             <h2 className="text-lg font-bold">deAsra Chat</h2>
//             {!isSidebarOpen && (
//               <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                 <X size={18} />
//               </button>
//             )}
//           </div>

//           {/* Sidebar */}
//           {isSidebarOpen && (
//             <div className="absolute inset-0 bg-[#5a1f61] p-4 w-full h-full flex flex-col">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-lg font-bold">deAsra Chat</h2>
//                 <button className="bg-blue-600 p-2 rounded" onClick={() => setIsSidebarOpen(false)}>
//                   <X size={20} />
//                 </button>
//               </div>
//               <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                 <Pen size={18} /> New Chat
//               </button>
//               {chats.map((chat) => (
//                 <button
//                   key={chat.id}
//                   className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${
//                     selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//                   }`}
//                   onClick={() => {
//                     setSelectedChat(chat);
//                     setIsSidebarOpen(false);
//                   }}
//                 >
//                   <MessageSquare size={18} />
//                   <span>{chat.title}</span>
//                 </button>
//               ))}
//             </div>
//           )}

//           {/* Messages */}
//           {!isSidebarOpen && (
//             <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//               {selectedChat.messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//                 >
//                   {msg.replace("User: ", "")}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Follow-Up Questions Form */}
//           {!isSidebarOpen && (
//             <div className="p-3 bg-[#5a1f61]">
//               <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//               {followUpQuestions.map((question, index) => (
//                 <div key={index} className="mb-2">
//                   <label className="block text-xs font-medium">{question}</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
//                     value={formResponses[index] || ""}
//                     onChange={(e) => handleFormChange(index, e.target.value)}
//                   />
//                 </div>
//               ))}
//               <button
//                 onClick={handleSubmitForm}
//                 className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
//               >
//                 Submit
//               </button>
//             </div>
//           )}

//           {/* Input Field */}
//           {!isSidebarOpen && (
//             <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//               <input
//                 className="flex-1 p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Ask a question..."
//               />
//               <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//                 <Send size={18} />
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatWidget;




// // Second (with sidebar, complete UI and API integration)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";
// import { getChatHistory, askQuestion, submitUserResponse } from "../../API/api";

// const ChatWidget = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [chats, setChats] = useState([
//         { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     ]);
//     const [selectedChat, setSelectedChat] = useState(chats[0]);
//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     // user and backend chat chronology
//     const [question, setQuestion] = useState(null);
//     const [allFollowUpQuestions, setAllFollowUpQuestions] = useState(null);
//     const [finalResponse, setFinalResponse] = useState(null);
//     const [followUpResponseStatus, setFollowUpResponseStatus] = useState("") //pending or completed
//     const [isFullyAnswered, setIsFullyAnswered] = useState(false); // false or true
//     const [chatId, setChatId] = useState(null);

//     const finalResponseStructureFunc = (finalResponse) => {
//         const formattedResponse = [
//             {
//                 title: "📌 Step 1: Create an Instagram Business Account",
//                 content: [
//                     { label: "📲 Download the Instagram App", text: "Install it from the App Store (iOS) or Google Play Store (Android)." },
//                     { label: "📝 Sign Up", text: "Open the app and tap Sign Up.\nEnter your phone number (preferred) or email address, then tap Next.\nEnter the verification code sent to your phone/email." },
//                     { label: "🔑 Choose a Username & Password", text: "Suggested: @iradientit or @iradient_solutions (Check availability).\nCreate a strong password for security." },
//                     { label: "🏢 Set Your Business Name", text: "Business Name: iRadient IT Solutions" },
//                     { label: "⚙️ Select Business Account Type", text: "After signing up, go to Settings > Account > Switch to Professional Account.\nChoose Business (not Creator)." },
//                 ],
//             },
//             {
//                 title: "📌 Step 2: Set Up Profile Details",
//                 content: [
//                     { label: "🖼 Profile Picture", text: "Suggested: A high-quality logo of iRadient IT Solutions.\nIf no logo, use a clean monogram-style logo with tech typography." },
//                     { label: "📝 Bio Section", text: "🚀 10+ Years of IT Excellence\n💡 Custom Software & Security Solutions\n🏢 Airport Compliance & Security Experts\n🌍 Global IT Services Provider\n📩 DM us for inquiries | Visit: [Website Link]" },
//                     { label: "📞 Add Contact Details", text: "Phone Number (for direct calls), Email (for inquiries), Business Address (if applicable)." },
//                     { label: "🔗 Link to Other Accounts", text: "Go to Settings > Linked Accounts and link to Facebook Page and LinkedIn Profile." },
//                 ],
//             },
//             {
//                 title: "📌 Step 3: First Post Idea",
//                 content: [
//                     { label: "📌 Post Idea", text: "Introduction to iRadient IT Solutions.\n🎨 Create a high-quality carousel post or video showcasing IT services, airport compliance solutions, and a call-to-action." },
//                     { label: "🔖 Caption Example", text: `"Welcome to iRadient IT Solutions! 🚀 With 10+ years of expertise in IT solutions, security, and airport compliance, we’re here to elevate your digital transformation. Follow us for insights & innovations! #ITsolutions #CyberSecurity #TechForAirports #CustomDevelopment"` },
//                 ],
//             },
//             {
//                 title: "📌 Step 4: Growth Strategy",
//                 content: [
//                     { label: "🏷 Use Relevant Hashtags", text: "#ITsolutions #CustomDevelopment #CyberSecurity #BusinessTech #AirportSecurity" },
//                     { label: "💬 Engage With Your Target Audience", text: "Follow and interact with IT-related pages, security firms, airports, and startups. Respond to DMs and comments actively." },
//                     { label: "📆 Post Consistently", text: "Aim for 3-4 posts per week. Share IT trends, success stories, product highlights, and client testimonials." },
//                     { label: "🎥 Leverage Stories & Reels", text: "Post behind-the-scenes content, client success stories, and quick IT tips." },
//                     { label: "📢 Run Paid Promotions", text: "Promote key posts using Instagram Ads targeting IT professionals & businesses." },
//                 ],
//             },
//             {
//                 title: "📌 Step 5: Optimize Instagram Profile",
//                 content: [
//                     { label: "🗂 Add Story Highlights", text: "Create categories like Services, Products, Case Studies, Security Solutions." },
//                     { label: "🎨 Use Professional Templates", text: "Ensure branding is consistent across all posts and profile elements." },
//                 ],
//             },
//         ];

//         return (
//             <div className="p-4 mt-4 bg-white text-gray-800 rounded-lg shadow-lg border border-blue-200">
//                 {formattedResponse?.map((section, index) => (
//                     <div key={index} className="mb-6">
//                         <h3 className="text-lg font-bold text-blue-600 border-b border-blue-300 pb-2">{section.title}</h3>
//                         {section.content?.map((item, subIndex) => (
//                             <div key={subIndex} className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-200">
//                                 <p className="font-semibold text-blue-700">{item.label}</p>
//                                 <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//                 <p className="text-center text-green-600 font-semibold mt-4">🎉 Your process is now complete!</p>
//             </div>
//         );
//     };


//     useEffect(() => {
//         // chatHistoryApiCall();
//     }, [])

//     const askQuestionApiCall = async () => {
//         try {
//             let askQuestionResponse = await askQuestion(input);
//             console.log(askQuestionResponse?.data?.chat, ">>>>askQuestionResponse.data");

//             const { question, followUpQuestions, finalResponse, isFullyAnswered, status, _id } = askQuestionResponse?.data?.chat

//             setQuestion(question);
//             setAllFollowUpQuestions(followUpQuestions);
//             setFinalResponse(finalResponse);
//             setIsFullyAnswered(isFullyAnswered);
//             setFollowUpResponseStatus(status);
//             setChatId(_id)

//             setInput("")
//         } catch (err) {
//             console.error(`ERROR: ${err.message}`);
//         }
//     }

//     const submitResponseApiCall = async() => {
//         try{
//             console.log(formResponses, ">>>>formResponses");

//             let submitResponse = await submitUserResponse(chatId, formResponses);
//             console.log(submitResponse.data, ">>>submitResponse data");

//             const { question, followUpQuestions, finalResponse, isFullyAnswered, status } = submitResponse?.data?.chat


//             setQuestion(question);
//             setAllFollowUpQuestions(followUpQuestions);
//             setFinalResponse(finalResponse);
//             setIsFullyAnswered(isFullyAnswered);
//             setFollowUpResponseStatus(status);

//         }catch(err){
//             console.error(`ERROR: error submitting form !!`)
//         }
//     }

//     const followUpQuestions = ["What is your name?", "What is your email?", "What issue are you facing?"];

//     const handleSendMessage = () => {
//         if (!input.trim()) return;
//         // const updatedChats = chats.map((chat) =>
//         //     chat.id === selectedChat.id ? { ...chat, messages: [...chat.messages, `User: ${input}`] } : chat
//         // );
//         // setChats(updatedChats);
//         // setInput("");

//         askQuestionApiCall();
//     };

//     const handleFormChange = (index, value) => {
//         setFormResponses({ ...formResponses, [index]: value });
//     };

//     const handleSubmitForm = () => {
//         // const updatedChats = chats?.map((chat) => (chat.id === selectedChat.id ? { ...chat, formResponses } : chat));
//         // setChats(updatedChats);
//         // setFormResponses({});
//         // alert("Form submitted successfully!");
//         console.log(">>>Submit form clicked");

//         submitResponseApiCall()
//     };

//     console.log(isFullyAnswered, ">>>isFullyAnswered");

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {/* Chat Button */}
//             {!isOpen && (
//                 <button
//                     className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
//                     onClick={() => setIsOpen(true)}
//                 >
//                     <MessageCircle size={24} />
//                 </button>
//             )}

//             {/* Chat Window */}
//             {isOpen && (
//                 <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     {/* Header */}
//                     <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                         {!isSidebarOpen && (
//                             <button className="p-2 rounded bg-blue-600" onClick={() => setIsSidebarOpen(true)}>
//                                 <Menu size={20} />
//                             </button>
//                         )}
//                         <h2 className="text-lg font-bold">deAsra Chat</h2>
//                         {!isSidebarOpen && (
//                             <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                                 <X size={18} />
//                             </button>
//                         )}
//                     </div>

//                     {/* Sidebar */}
//                     {isSidebarOpen && (
//                         <div className="absolute inset-0 bg-[#5a1f61] p-4 w-full h-full flex flex-col">
//                             <div className="flex justify-between items-center mb-4">
//                                 <h2 className="text-lg font-bold">deAsra Chat</h2>
//                                 <button className="bg-blue-600 p-2 rounded" onClick={() => setIsSidebarOpen(false)}>
//                                     <X size={20} />
//                                 </button>
//                             </div>
//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button>
//                             {chats?.map((chat) => (
//                                 <button
//                                     key={chat.id}
//                                     className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
//                                         }`}
//                                     onClick={() => {
//                                         setSelectedChat(chat);
//                                         setIsSidebarOpen(false);
//                                     }}
//                                 >
//                                     <MessageSquare size={18} />
//                                     <span>{chat.title}</span>
//                                 </button>
//                             ))}
//                         </div>
//                     )}

//                     {/* Messages */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {/* {selectedChat.messages.map((msg, index) => (
//                     <div
//                     key={index}
//                     className={`mb-2 p-2 rounded-lg max-w-[70%] ${msg.startsWith("User:") ? "ml-auto bg-blue-400 text-black" : "bg-blue-600"}`}
//                     >
//                     {msg.replace("User: ", "")}
//                     </div>
//                 ))} */}
//                             {
//                                 question && <div
//                                     className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                 >
//                                     {question}
//                                 </div>
//                             }

//                             {
//                                 isFullyAnswered ? (
//                                     // Display Q&A when all answers are submitted
//                                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                         {allFollowUpQuestions?.map((fq, index) => (
//                                             <div key={index} className="mb-3">
//                                                 <p className="text-sm font-semibold text-blue-700">{fq.question}</p>
//                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                     {fq.answer}
//                                                 </p>
//                                             </div>
//                                         ))}
//                                     </div>

//                                 ) : ""
//                             }

//                             {
//                                 isFullyAnswered ? <p>{finalResponseStructureFunc(finalResponse)}</p> : ""
//                             }
//                         </div>
//                     )}

//                     {/* Follow-Up Questions Form */}
//                     {/* {!isSidebarOpen && !isFullyAnswered && (
//                         <div className="p-3 bg-[#5a1f61] h-[500px] overflow-auto">
//                             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                             {allFollowUpQuestions?.map((question, index) => (
//                                 <div key={index} className="mb-2">
//                                     <label className="block text-xs font-medium">{question["question"]}</label>
//                                     <input
//                                         type="text"
//                                         className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
//                                         value={formResponses[index] || ""}
//                                         onChange={(e) => handleFormChange(index, e.target.value)}
//                                     />
//                                 </div>
//                             ))}
//                             <button
//                                 onClick={handleSubmitForm}
//                                 className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     )} */}

//                     {
//                         isSidebarOpen == false ? (
//                             isFullyAnswered == false && question ? (
//                                 <div className="p-3 bg-[#5a1f61] h-[500px] overflow-auto">
//                                     <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                                     {allFollowUpQuestions?.map((question, index) => (
//                                         <div key={index} className="mb-2">
//                                             <label className="block text-xs font-medium">{question["question"]}</label>
//                                             <input
//                                                 type="text"
//                                                 className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
//                                                 value={formResponses[index] || ""}
//                                                 onChange={(e) => handleFormChange(index, e.target.value)}
//                                             />
//                                         </div>
//                                     ))}
//                                     <button
//                                         onClick={handleSubmitForm}
//                                         className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
//                                     >
//                                         Submit
//                                     </button>
//                                 </div>
//                             ) : ""
//                         ) : ""
//                     }

//                     {/* Input Field */}
//                     {!isSidebarOpen && (
//                         <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                             <input
//                                 className="flex-1 p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                                 placeholder="Ask a question..."
//                             />
//                             <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
//                                 <Send size={18} />
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidget;




// Second (with sidebar, complete UI and  without API integration i.e; all on localstorage)
import { useState, useEffect } from "react";
import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";
import { getChatHistory, askQuestion, submitUserResponse } from "../../API/api";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [chats, setChats] = useState([
        { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
    ]);
    const [selectedChat, setSelectedChat] = useState(chats[0]);
    const [input, setInput] = useState("");
    const [formResponses, setFormResponses] = useState({});

    // user and backend chat chronology
    // const [question, setQuestion] = useState(null);
    // const [allFollowUpQuestions, setAllFollowUpQuestions] = useState(null);
    const [finalResponse, setFinalResponse] = useState([
        {
            title: "📌 Step 1: Create an Instagram Business Account",
            content: [
                { label: "📲 Download the Instagram App", text: "Install it from the App Store (iOS) or Google Play Store (Android)." },
                { label: "📝 Sign Up", text: "Open the app and tap Sign Up.\nEnter your phone number (preferred) or email address, then tap Next.\nEnter the verification code sent to your phone/email." },
                { label: "🔑 Choose a Username & Password", text: "Suggested: @iradientit or @iradient_solutions (Check availability).\nCreate a strong password for security." },
                { label: "🏢 Set Your Business Name", text: "Business Name: iRadient IT Solutions" },
                { label: "⚙️ Select Business Account Type", text: "After signing up, go to Settings > Account > Switch to Professional Account.\nChoose Business (not Creator)." },
            ],
        },
        {
            title: "📌 Step 2: Set Up Profile Details",
            content: [
                { label: "🖼 Profile Picture", text: "Suggested: A high-quality logo of iRadient IT Solutions.\nIf no logo, use a clean monogram-style logo with tech typography." },
                { label: "📝 Bio Section", text: "🚀 10+ Years of IT Excellence\n💡 Custom Software & Security Solutions\n🏢 Airport Compliance & Security Experts\n🌍 Global IT Services Provider\n📩 DM us for inquiries | Visit: [Website Link]" },
                { label: "📞 Add Contact Details", text: "Phone Number (for direct calls), Email (for inquiries), Business Address (if applicable)." },
                { label: "🔗 Link to Other Accounts", text: "Go to Settings > Linked Accounts and link to Facebook Page and LinkedIn Profile." },
            ],
        },
        {
            title: "📌 Step 3: First Post Idea",
            content: [
                { label: "📌 Post Idea", text: "Introduction to iRadient IT Solutions.\n🎨 Create a high-quality carousel post or video showcasing IT services, airport compliance solutions, and a call-to-action." },
                { label: "🔖 Caption Example", text: `"Welcome to iRadient IT Solutions! 🚀 With 10+ years of expertise in IT solutions, security, and airport compliance, we’re here to elevate your digital transformation. Follow us for insights & innovations! #ITsolutions #CyberSecurity #TechForAirports #CustomDevelopment"` },
            ],
        },
        {
            title: "📌 Step 4: Growth Strategy",
            content: [
                { label: "🏷 Use Relevant Hashtags", text: "#ITsolutions #CustomDevelopment #CyberSecurity #BusinessTech #AirportSecurity" },
                { label: "💬 Engage With Your Target Audience", text: "Follow and interact with IT-related pages, security firms, airports, and startups. Respond to DMs and comments actively." },
                { label: "📆 Post Consistently", text: "Aim for 3-4 posts per week. Share IT trends, success stories, product highlights, and client testimonials." },
                { label: "🎥 Leverage Stories & Reels", text: "Post behind-the-scenes content, client success stories, and quick IT tips." },
                { label: "📢 Run Paid Promotions", text: "Promote key posts using Instagram Ads targeting IT professionals & businesses." },
            ],
        },
        {
            title: "📌 Step 5: Optimize Instagram Profile",
            content: [
                { label: "🗂 Add Story Highlights", text: "Create categories like Services, Products, Case Studies, Security Solutions." },
                { label: "🎨 Use Professional Templates", text: "Ensure branding is consistent across all posts and profile elements." },
            ],
        },
    ]);
    const [followUpResponseStatus, setFollowUpResponseStatus] = useState("") //pending or completed
    // const [isFullyAnswered, setIsFullyAnswered] = useState(false); // false or true
    const [chatId, setChatId] = useState(null);

    let [fullChat, setFullChat] = useState(null);
    const [question, setQuestion] = useState(null);
    const [allFollowUpQuestions, setAllFollowUpQuestions] = useState(null);
    let [followUpQuestionsCount, setFollowUpQuestionsCount] = useState(null);
    let [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    let [currentQuestion, setCurrentQuestion] = useState(null);
    const [isFullyAnswered, setIsFullyAnswered] = useState(false); // false or true
    const [isFollowUpQuestionActive, setIsFollowUpQUestionActive] = useState(false)


    const finalResponseStructureFunc = (finalResponse) => {
        // const formattedResponse = [
        //     {
        //         title: "📌 Step 1: Create an Instagram Business Account",
        //         content: [
        //             { label: "📲 Download the Instagram App", text: "Install it from the App Store (iOS) or Google Play Store (Android)." },
        //             { label: "📝 Sign Up", text: "Open the app and tap Sign Up.\nEnter your phone number (preferred) or email address, then tap Next.\nEnter the verification code sent to your phone/email." },
        //             { label: "🔑 Choose a Username & Password", text: "Suggested: @iradientit or @iradient_solutions (Check availability).\nCreate a strong password for security." },
        //             { label: "🏢 Set Your Business Name", text: "Business Name: iRadient IT Solutions" },
        //             { label: "⚙️ Select Business Account Type", text: "After signing up, go to Settings > Account > Switch to Professional Account.\nChoose Business (not Creator)." },
        //         ],
        //     },
        //     {
        //         title: "📌 Step 2: Set Up Profile Details",
        //         content: [
        //             { label: "🖼 Profile Picture", text: "Suggested: A high-quality logo of iRadient IT Solutions.\nIf no logo, use a clean monogram-style logo with tech typography." },
        //             { label: "📝 Bio Section", text: "🚀 10+ Years of IT Excellence\n💡 Custom Software & Security Solutions\n🏢 Airport Compliance & Security Experts\n🌍 Global IT Services Provider\n📩 DM us for inquiries | Visit: [Website Link]" },
        //             { label: "📞 Add Contact Details", text: "Phone Number (for direct calls), Email (for inquiries), Business Address (if applicable)." },
        //             { label: "🔗 Link to Other Accounts", text: "Go to Settings > Linked Accounts and link to Facebook Page and LinkedIn Profile." },
        //         ],
        //     },
        //     {
        //         title: "📌 Step 3: First Post Idea",
        //         content: [
        //             { label: "📌 Post Idea", text: "Introduction to iRadient IT Solutions.\n🎨 Create a high-quality carousel post or video showcasing IT services, airport compliance solutions, and a call-to-action." },
        //             { label: "🔖 Caption Example", text: `"Welcome to iRadient IT Solutions! 🚀 With 10+ years of expertise in IT solutions, security, and airport compliance, we’re here to elevate your digital transformation. Follow us for insights & innovations! #ITsolutions #CyberSecurity #TechForAirports #CustomDevelopment"` },
        //         ],
        //     },
        //     {
        //         title: "📌 Step 4: Growth Strategy",
        //         content: [
        //             { label: "🏷 Use Relevant Hashtags", text: "#ITsolutions #CustomDevelopment #CyberSecurity #BusinessTech #AirportSecurity" },
        //             { label: "💬 Engage With Your Target Audience", text: "Follow and interact with IT-related pages, security firms, airports, and startups. Respond to DMs and comments actively." },
        //             { label: "📆 Post Consistently", text: "Aim for 3-4 posts per week. Share IT trends, success stories, product highlights, and client testimonials." },
        //             { label: "🎥 Leverage Stories & Reels", text: "Post behind-the-scenes content, client success stories, and quick IT tips." },
        //             { label: "📢 Run Paid Promotions", text: "Promote key posts using Instagram Ads targeting IT professionals & businesses." },
        //         ],
        //     },
        //     {
        //         title: "📌 Step 5: Optimize Instagram Profile",
        //         content: [
        //             { label: "🗂 Add Story Highlights", text: "Create categories like Services, Products, Case Studies, Security Solutions." },
        //             { label: "🎨 Use Professional Templates", text: "Ensure branding is consistent across all posts and profile elements." },
        //         ],
        //     },
        // ];

        const formattedResponse = [...finalResponse];
        return (
            <div className="p-4 mt-4 bg-white text-gray-800 rounded-lg shadow-lg border border-blue-200">
                {formattedResponse?.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-lg font-bold text-blue-600 border-b border-blue-300 pb-2">{section.title}</h3>
                        {section.content?.map((item, subIndex) => (
                            <div key={subIndex} className="mt-3 p-3 bg-blue-50 rounded-md border border-blue-200">
                                <p className="font-semibold text-blue-700">{item.label}</p>
                                <p className="text-sm text-gray-700 whitespace-pre-line">{item.text}</p>
                            </div>
                        ))}
                    </div>
                ))}
                <p className="text-center text-green-600 font-semibold mt-4">🎉 Your process is now complete!</p>
            </div>
        );
    };


    useEffect(() => {
        // chatHistoryApiCall();
        let userChat = localStorage.getItem("user_chat");
        let parsedChat = JSON.parse(userChat);

        console.log(parsedChat, ">>>>parsedChat");
        
        if(parsedChat){
            setFullChat(parsedChat)
            setQuestion(parsedChat?.Question);
            setAllFollowUpQuestions(parsedChat?.Questions);
        
            // check if all followup questions are answered
            let isAllAnswered = parsedChat?.Questions?.every(obj => obj?.Answer);
            if(isAllAnswered){
                setIsFollowUpQUestionActive(false);
                setIsFullyAnswered(true);
                setFinalResponse(parsedChat?.finalResponse);
            }else{
                let unAnsweredIndex = null;
                let firstUnanswered = parsedChat?.Questions.find((obj, i) => {
                    unAnsweredIndex = i;
                    return !obj.Answer
                });

                console.log(firstUnanswered, ">>>>>firstUnanswered")
                setCurrentQuestion(firstUnanswered);
                setCurrentQuestionIndex(unAnsweredIndex);
                setFollowUpQuestionsCount(parsedChat?.Questions?.length);
                setIsFollowUpQUestionActive(true);
            }

            
        }
        
    }, [])

    // const askQuestionApiCall = async () => {
    //     try {
    //         let askQuestionResponse = await askQuestion(input);
    //         console.log(askQuestionResponse?.data?.chat, ">>>>askQuestionResponse.data");

    //         const { question, followUpQuestions, finalResponse, isFullyAnswered, status, _id } = askQuestionResponse?.data?.chat

    //         setQuestion(question);
    //         setAllFollowUpQuestions(followUpQuestions);
    //         setFinalResponse(finalResponse);
    //         setIsFullyAnswered(isFullyAnswered);
    //         setFollowUpResponseStatus(status);
    //         setChatId(_id)

    //         setInput("")
    //     } catch (err) {
    //         console.error(`ERROR: ${err.message}`);
    //     }
    // }

    // const submitResponseApiCall = async () => {
    //     try {
    //         console.log(formResponses, ">>>>formResponses");

    //         let submitResponse = await submitUserResponse(chatId, formResponses);
    //         console.log(submitResponse.data, ">>>submitResponse data");

    //         const { question, followUpQuestions, finalResponse, isFullyAnswered, status } = submitResponse?.data?.chat


    //         setQuestion(question);
    //         setAllFollowUpQuestions(followUpQuestions);
    //         setFinalResponse(finalResponse);
    //         setIsFullyAnswered(isFullyAnswered);
    //         setFollowUpResponseStatus(status);

    //     } catch (err) {
    //         console.error(`ERROR: error submitting form !!`)
    //     }
    // }

    // const followUpQuestions = ["What is your name?", "What is your email?", "What issue are you facing?"];

    const handleSendMessage = () => {
        console.log(isFollowUpQuestionActive, ">>>>isFollowUpQuestionActive");
        
        if(!isFollowUpQuestionActive){
            if (!input.trim()) return;
            let chat = {
                SessionId: 123456,
                Question: input,
                Questions: [
                    { "QuestionID": 1111, "Question": "Personal or Business Account?" },
                    { "QuestionID": 2222, "Question": "Email or Phone Number?" },
                    { "QuestionID": 3333, "Question": "Username Preference?" },
                    { "QuestionID": 4444, "Question": "Profile Details?" },
                    { "QuestionID": 5555, "Question": "Profile Picture?" },
                    { "QuestionID": 6666, "Question": "Privacy Settings?" },
                    { "QuestionID": 7777, "Question": "Niche or Theme?" },
                    { "QuestionID": 8888, "Question": "First Post?" },
                    { "QuestionID": 9999, "Question": "Account Growth Strategy?" },
                    { "QuestionID": 1010, "Question": "Linking to Other Accounts?" }
                ]

            }
            localStorage.setItem("user_chat", JSON.stringify(chat))
            setFullChat(chat);
            setFollowUpQuestionsCount(Number(chat?.Questions?.length));
            setAllFollowUpQuestions(chat.Questions);
            setCurrentQuestionIndex(0);
            setCurrentQuestion(chat.Questions[0]);
            setInput("");
            setIsFollowUpQUestionActive(true);
            setQuestion(input)
        }else{
            if(!input){
                alert("Value is required !!!")
            }else{
                if(currentQuestionIndex < allFollowUpQuestions?.length-1){
                    console.log(">>>Entered if");
                    
                    console.log(input, ">>>>input");
                    console.log(currentQuestion, ">>>>currentQuestion");
                    currentQuestion.Answer = input
                    console.log(currentQuestion);
    
                    let nextQuestionIndex = currentQuestionIndex+1
                    setCurrentQuestionIndex(nextQuestionIndex)
                    setCurrentQuestion(allFollowUpQuestions[nextQuestionIndex])
                    setInput("");
    
                    localStorage.setItem("user_chat", JSON.stringify(fullChat));
                }else{
                    console.log(">>>>>enteretd else");
                    
                    console.log(input, ">>>>input");
                    console.log(currentQuestion, ">>>>currentQuestion");
                    currentQuestion.Answer = input
                    console.log(currentQuestion);
    
                    setCurrentQuestionIndex(null)
                    setCurrentQuestion(null)
                    setIsFullyAnswered(true)
                    setInput("")
                    setIsFollowUpQUestionActive(false)

                    fullChat.finalResponse = [...finalResponse]
                    localStorage.setItem("user_chat", JSON.stringify(fullChat));
                }
            }
           
        }
    };

    // const handleFormChange = (index, value) => {
    //     setFormResponses({ ...formResponses, [index]: value });
    // };

    // const handleSubmitForm = () => {
    //     // const updatedChats = chats?.map((chat) => (chat.id === selectedChat.id ? { ...chat, formResponses } : chat));
    //     // setChats(updatedChats);
    //     // setFormResponses({});
    //     // alert("Form submitted successfully!");
    //     console.log(">>>Submit form clicked");

    //     submitResponseApiCall()
    // };


    const handleClearChat = () => {
        localStorage.clear()
        window.location.reload();
    }

    console.log(fullChat, ">>>fullChat");
    console.log(currentQuestion, ">>>>currentQuestion");
    console.log(currentQuestionIndex, ">>>>currentQuestionIndex");
    console.log(isFullyAnswered, ">>>>isFullyAnswered");
    console.log(isFollowUpQuestionActive, ">>>>>isFollowUpQuestionActive");
    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition"
                    onClick={() => setIsOpen(true)}
                >
                    <MessageCircle size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
                    {/* Header */}
                    <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
                        {!isSidebarOpen && (
                            <button className="p-2 rounded bg-blue-600" onClick={() => setIsSidebarOpen(true)}>
                                <Menu size={20} />
                            </button>
                        )}
                        <h2 className="text-lg font-bold">deAsra Chat</h2>
                        {!isSidebarOpen && (
                            <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
                                <X size={18} />
                            </button>
                        )}
                    </div>

                    {/* Sidebar */}
                    {isSidebarOpen && (
                        <div className="absolute inset-0 bg-[#5a1f61] p-4 w-full h-full flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">deAsra Chat</h2>
                                <button className="bg-blue-600 p-2 rounded" onClick={() => setIsSidebarOpen(false)}>
                                    <X size={20} />
                                </button>
                            </div>
                            {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
                                <Pen size={18} /> New Chat
                            </button> */}
                            {/* {chats?.map((chat) => (
                                <button
                                    key={chat.id}
                                    className={`w-full flex items-center space-x-2 p-2 mb-2 rounded-lg ${selectedChat.id === chat.id ? "bg-blue-600" : "bg-blue-700"
                                        }`}
                                    onClick={() => {
                                        setSelectedChat(chat);
                                        setIsSidebarOpen(false);
                                    }}
                                >
                                    <MessageSquare size={18} />
                                    <span>{chat.title}</span>
                                </button>
                            ))} */}

                            <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
                                Clear Chat
                            </button>
                        </div>
                    )}

                    {/* Messages */}
                    {!isSidebarOpen && (
                        <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
                            {/* {
                                Object.keys(fullChat).includes("Question") && <div
                                    className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
                                >
                                    {fullChat["Question"]}
                                </div>
                            } */}

                            {
                                question && <div
                                className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
                            >
                                {question}
                            </div>
                            }

                            {
                                // isFullyAnswered ? (
                                //     // Display Q&A when all answers are submitted
                                //     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                //         {allFollowUpQuestions?.map((fq, index) => (
                                //             <div key={index} className="mb-3">
                                //                 <p className="text-sm font-semibold text-blue-700">{fq.question}</p>
                                //                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
                                //                     {fq.answer}
                                //                 </p>
                                //             </div>
                                //         ))}
                                //     </div>

                                // ) : ""

                                // Display Q&A when all answers are submitted
                                (currentQuestionIndex > 0 || isFullyAnswered) &&
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                    {allFollowUpQuestions?.map((fq, index) => (
                                        fq.Answer && (
                                            <div key={index} className="mb-3">
                                                <p className="text-sm font-semibold text-blue-700">{fq.Question}</p>
                                                <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
                                                    {fq.Answer}
                                                </p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            }

                            {
                                isFullyAnswered ? <p>{finalResponseStructureFunc(finalResponse)}</p> : ""
                            }
                        </div>
                    )}

                    {/* Follow-Up Questions Form */}
                    {/* {!isSidebarOpen && !isFullyAnswered && (
                        <div className="p-3 bg-[#5a1f61] h-[500px] overflow-auto">
                            <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
                            {allFollowUpQuestions?.map((question, index) => (
                                <div key={index} className="mb-2">
                                    <label className="block text-xs font-medium">{question["question"]}</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                                        value={formResponses[index] || ""}
                                        onChange={(e) => handleFormChange(index, e.target.value)}
                                    />
                                </div>
                            ))}
                            <button
                                onClick={handleSubmitForm}
                                className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
                            >
                                Submit
                            </button>
                        </div>
                    )} */}

                    {
                        isSidebarOpen == false ? (
                            isFullyAnswered == false && allFollowUpQuestions?.length > 0 ? (
                                <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
                                    <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
                                    {/* {allFollowUpQuestions?.map((question, index) => (
                                        <div key={index} className="mb-2">
                                            <label className="block text-xs font-medium">{question["Question"]}</label>
                                            <input
                                                type="text"
                                                className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                                                value={formResponses[index] || ""}
                                                onChange={(e) => handleFormChange(index, e.target.value)}
                                            />
                                        </div>
                                    ))} */}

                                    {currentQuestion && <div className="mb-2">
                                            <label className="block text-xs font-medium">{currentQuestion["Question"]}</label>
                                            {/* <input
                                                type="text"
                                                className="w-full p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                                                // value={formResponses[index] || ""}
                                                onChange={(e) => handleFormChange(currentQuestion, e.target.value)}
                                            /> */}
                                        </div>}
                                    {/* <button
                                        onClick={handleSubmitForm}
                                        className="mt-2 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg w-full text-white"
                                    >
                                        Submit
                                    </button> */}
                                </div>
                            ) : ""
                        ) : ""
                    }

                    {/* Input Field */}
                    {!isSidebarOpen && (
                        <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
                            <input
                                className="flex-1 p-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask a question..."
                            />
                            <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
                                <Send size={18} />
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ChatWidget;