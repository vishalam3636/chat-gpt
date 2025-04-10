// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // const [chats, setChats] = useState([
//     //     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     // ]);
//     // const [selectedChat, setSelectedChat] = useState(chats[0]);
//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     const [fullChat, setFullChat] = useState([
//             {
//                 "SessionID": 12345,
//                 "Question": "How to create an Instagram account ?",
//                 "Questions": [
//                     { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Personal" },
//                     { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Email" },
//                     { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal123" },
//                     { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "Yes Add" },
//                     { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Suggest please" },
//                     { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "suggest privacy" },
//                     { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Theme" },
//                     { "QuestionID": 8888, "Question": "First Post?", "Answer": "Animal post" },
//                     { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Yes suggest growth" },
//                     { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with facebook" }
//                 ],
//                 "finalResponse": "FINAL RESPONSE-1"

//             },
//             {
//                 "SessionID": 12346,
//                 "Question": "How to create an Instagram account ?",
//                 "Questions": [
//                     { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Business" },
//                     { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Phone" },
//                     { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal456" },
//                     { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "No dont add" },
//                     { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Nature pic" },
//                     { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "Personal privacy" },
//                     { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Purple Theme" },
//                     { "QuestionID": 8888, "Question": "First Post?", "Answer": "Bird post" },
//                     { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Not suggest growth" },
//                     { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with Whatsapp" }
//                 ],
//                 "finalResponse": "FINAL RESPONSE-2"
//             }
//         ]
//     )

//     useEffect(() => {
//     }, [])

//     const handleSendMessage = () => {
//     };

//     const handleClearChat = () => {
//         localStorage.clear()
//         window.location.reload();
//     }

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
//                             {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button> */}
//                             {/* {chats?.map((chat) => (
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
//                             ))} */}

//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
//                                 Clear Chat
//                             </button>
//                         </div>
//                     )}

//                     {/* Messages (Single complete chat) */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {
//                                 fullChat.map((chat) => {
//                                     return (<div className="bg-amber-300 mb-10">
//                                         <div
//                                             className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                         >
//                                             {/* {"question"} */}
//                                             {chat.Question}
//                                         </div>

//                                         {
//                                             // Display Q&A for submitted answers
//                                             <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                                 {
//                                                     chat.Questions.map((fQuestion) => {
//                                                         return (
//                                                             <div key={"index"} className="mb-3">
//                                                                 <p className="text-sm font-semibold text-blue-700">{fQuestion.Question}</p>
//                                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                                     {/* {"fq.Answer"} */}
//                                                                     {fQuestion.Answer}
//                                                                 </p>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         }

//                                         {/* final response */}
//                                         {
//                                             <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>
//                                         }
//                                     </div>)
//                                 })
//                             }

//                         </div>

//                     )}

//                     {/* display unanswered follow-up questions one by one  */}
//                     {
//                         isSidebarOpen == false ? (
//                             <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
//                                 <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                                 <div className="mb-2">
//                                     <label className="block text-xs font-medium">{"currentQuestion[Question]"}</label>
//                                 </div>
//                             </div>
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

// export default ChatWidgetFour;


/// modify above code for newchat (not completed  yet)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // const [chats, setChats] = useState([
//     //     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     // ]);
//     // const [selectedChat, setSelectedChat] = useState(chats[0]);

//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     const [fullChat, setFullChat] = useState([
//         {
//             "SessionID": 12345,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Personal" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Email" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal123" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "Yes Add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Suggest please" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "suggest privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Animal post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Yes suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with facebook" }
//             ],
//             "finalResponse": "FINAL RESPONSE-1"

//         },
//         {
//             "SessionID": 12346,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Business" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Phone" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal456" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "No dont add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Nature pic" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "Personal privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Purple Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Bird post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Not suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with Whatsapp" }
//             ],
//             "finalResponse": "FINAL RESPONSE-2"
//         }
//     ]
// )
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false)
//     const [followUpQuestions, setFollowUpQUestions] = useState(null);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//       }

//     useEffect(() => {
        
//     }, [])

//     const handleSendMessage = () => {
//         if(!isFollowUpQuestionActive){
//             let sessionId = getRandomSixDigitNumber();
//             let question = input;
//             let followUpQuestions = [
//                 {"QuestionID": 1111, "Question":"Personal or Business Account?"},
//                 {"QuestionID": 2222, "Question":"Email or Phone Number?"},
//                 {"QuestionID": 3333, "Question":"Username Preference?"},
//                 {"QuestionID": 4444, "Question":"Profile Details?"},
//                 {"QuestionID": 5555, "Question":"Profile Picture?"},
//                 {"QuestionID": 6666, "Question":"Privacy Settings?"},
//                 {"QuestionID": 7777, "Question":"Niche or Theme?"},
//                 {"QuestionID": 8888, "Question":"First Post?"},
//                 {"QuestionID": 9999, "Question":"Account Growth Strategy?"},
//                 {"QuestionID": 1010, "Question":"Linking to Other Accounts?"}
//             ]

//             let copyFullChat = [...fullChat];
//             copyFullChat.push({SessionID: sessionId, Question: question, Questions: followUpQuestions});
//             setFullChat(copyFullChat);
//             localStorage.setItem("user_chat", JSON.stringify(copyFullChat));
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId)
//             setFollowUpQUestions(followUpQuestions);
//             setCurrentQuestion(followUpQuestions[0]);
//             setCurrentQuestionIndex(0);
//             setInput("");
//         }else{
//             currentQuestion.Answer = input;

//         }
//     };

//     const handleClearChat = () => {
//         localStorage.clear()
//         window.location.reload();
//     }

//     console.log(input, ">>>>input");
//     console.log(currentQuestion, ">>>>currentQuestion");
//     console.log(isFollowUpQuestionActive, ">>>>isFollowUpQuestionActive");
//     console.log(followUpQuestions, ">>>>followUpQuestions");
//     console.log(fullChat, ">>>>fullChat");
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
//                             {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button> */}
//                             {/* {chats?.map((chat) => (
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
//                             ))} */}

//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
//                                 Clear Chat
//                             </button>
//                         </div>
//                     )}

//                     {/* Messages (Single complete chat) */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {
//                                 fullChat.map((chat) => {
//                                     return (<div className="bg-amber-300 mb-10">
//                                         <div
//                                             className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                         >
//                                             {/* {"question"} */}
//                                             {chat.Question}
//                                         </div>

//                                         {
//                                             // Display Q&A for submitted answers
//                                             <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                                 {
//                                                     chat.Questions.map((fQuestion, index) => {
//                                                         return (
//                                                             fQuestion.Answer &&
//                                                             <div key={index} className="mb-3">
//                                                                 <p className="text-sm font-semibold text-blue-700">{fQuestion.Question}</p>
//                                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                                     {/* {"fq.Answer"} */}
//                                                                     {fQuestion.Answer}
//                                                                 </p>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         }

//                                         {/* final response */}
//                                         {
//                                             <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>
//                                         }
//                                     </div>)
//                                 })
//                             }

//                         </div>

//                     )}

//                     {/* display unanswered follow-up questions one by one  */}
//                     {
//                         isSidebarOpen == false ? (
//                             isFollowUpQuestionActive && <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
//                             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                             <div className="mb-2">
//                                 <label className="block text-xs font-medium">{currentQuestion["Question"]}</label>
//                             </div>
//                         </div>
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

// export default ChatWidgetFour;


/// modifing above code using help of chatgpt-
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // const [chats, setChats] = useState([
//     //     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     // ]);
//     // const [selectedChat, setSelectedChat] = useState(chats[0]);

//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     const [fullChat, setFullChat] = useState([
//         {
//             "SessionID": 12345,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Personal" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Email" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal123" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "Yes Add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Suggest please" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "suggest privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Animal post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Yes suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with facebook" }
//             ],
//             "finalResponse": "FINAL RESPONSE-1"

//         },
//         {
//             "SessionID": 12346,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Business" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Phone" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal456" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "No dont add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Nature pic" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "Personal privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Purple Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Bird post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Not suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with Whatsapp" }
//             ],
//             "finalResponse": "FINAL RESPONSE-2"
//         }
//     ]
// )
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false)
//     const [followUpQuestions, setFollowUpQUestions] = useState(null);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//       }

//     useEffect(() => {
        
//     }, [])

//     const handleSendMessage = () => {
//         if (!isFollowUpQuestionActive) {
//             // New chat session
//             let sessionId = getRandomSixDigitNumber();
//             let question = input.trim();
    
//             if (!question) return; // Prevent empty messages
    
//             let followUpQuestions = [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "" }
//             ];
    
//             let newChat = {
//                 SessionID: sessionId,
//                 Question: question,
//                 Questions: followUpQuestions,
//                 finalResponse: "" // Placeholder for final response
//             };
    
//             let updatedChat = [...fullChat, newChat];
//             setFullChat(updatedChat);
//             localStorage.setItem("user_chat", JSON.stringify(updatedChat));
    
//             // Activate follow-up questions
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId);
//             setFollowUpQUestions(followUpQuestions);
//             setCurrentQuestion(followUpQuestions[0]);
//             setCurrentQuestionIndex(0);
//             setInput("");
    
//         } else {
//             // Answering follow-up questions
//             if (!input.trim()) return; // Prevent empty responses
    
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);
    
//             if (sessionIndex !== -1) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;
    
//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     // Move to next follow-up question
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     // All questions answered, generate final response
//                     chat.finalResponse = `Generated response based on inputs: ${chat.Questions.map(q => `${q.Question}: ${q.Answer}`).join(", ")}`;
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
//                 }
    
//                 setFullChat(updatedChat);
//                 localStorage.setItem("user_chat", JSON.stringify(updatedChat));
//             }
    
//             setInput("");
//         }
//     };
    

//     const handleClearChat = () => {
//         localStorage.clear()
//         window.location.reload();
//     }

//     console.log(input, ">>>>input");
//     console.log(currentQuestion, ">>>>currentQuestion");
//     console.log(isFollowUpQuestionActive, ">>>>isFollowUpQuestionActive");
//     console.log(followUpQuestions, ">>>>followUpQuestions");
//     console.log(fullChat, ">>>>fullChat");
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
//                             {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button> */}
//                             {/* {chats?.map((chat) => (
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
//                             ))} */}

//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
//                                 Clear Chat
//                             </button>
//                         </div>
//                     )}

//                     {/* Messages (Single complete chat) */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {
//                                 fullChat.map((chat) => {
//                                     return (<div className="bg-amber-300 mb-10">
//                                         <div
//                                             className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                         >
//                                             {/* {"question"} */}
//                                             {chat.Question}
//                                         </div>

//                                         {
//                                             // Display Q&A for submitted answers
//                                             <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                                 {
//                                                     chat.Questions.map((fQuestion, index) => {
//                                                         return (
//                                                             fQuestion.Answer &&
//                                                             <div key={index} className="mb-3">
//                                                                 <p className="text-sm font-semibold text-blue-700">{fQuestion.Question}</p>
//                                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                                     {/* {"fq.Answer"} */}
//                                                                     {fQuestion.Answer}
//                                                                 </p>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         }

//                                         {/* final response */}
//                                         {
//                                             <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>
//                                         }
//                                     </div>)
//                                 })
//                             }

//                         </div>

//                     )}

//                     {/* display unanswered follow-up questions one by one  */}
//                     {
//                         isSidebarOpen == false ? (
//                             isFollowUpQuestionActive && <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
//                             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                             <div className="mb-2">
//                                 <label className="block text-xs font-medium">{currentQuestion["Question"]}</label>
//                             </div>
//                         </div>
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

// export default ChatWidgetFour;



// Modify the aove code to save chat in localstorage-
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // const [chats, setChats] = useState([
//     //     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     // ]);
//     // const [selectedChat, setSelectedChat] = useState(chats[0]);

//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     const [fullChat, setFullChat] = useState([
//         {
//             "SessionID": 12345,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Personal" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Email" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal123" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "Yes Add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Suggest please" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "suggest privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Animal post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Yes suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with facebook" }
//             ],
//             "finalResponse": "FINAL RESPONSE-1"

//         },
//         {
//             "SessionID": 12346,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Business" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Phone" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal456" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "No dont add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Nature pic" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "Personal privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Purple Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Bird post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Not suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with Whatsapp" }
//             ],
//             "finalResponse": "FINAL RESPONSE-2"
//         }
//     ]
// )
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false)
//     const [followUpQuestions, setFollowUpQUestions] = useState(null);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//       }

//     useEffect(() => {
        
//     }, [])

//     const handleSendMessage = () => {
//         if (!isFollowUpQuestionActive) {
//             // New chat session
//             let sessionId = getRandomSixDigitNumber();
//             let question = input.trim();
    
//             if (!question) return; // Prevent empty messages
    
//             let followUpQuestions = [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "" }
//             ];
    
//             let newChat = {
//                 SessionID: sessionId,
//                 Question: question,
//                 Questions: followUpQuestions,
//                 finalResponse: ""
//             };
    
//             let updatedChat = [...fullChat, newChat];
//             setFullChat(updatedChat);
//             localStorage.setItem("user_chat", JSON.stringify(updatedChat));
    
//             // Save follow-up session details
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId);
//             setFollowUpQUestions(followUpQuestions);
//             setCurrentQuestion(followUpQuestions[0]);
//             setCurrentQuestionIndex(0);
//             setInput("");
    
//             // Store in local storage
//             localStorage.setItem("follow_up_active", JSON.stringify(true));
//             localStorage.setItem("chat_session_id", JSON.stringify(sessionId));
//             localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//             localStorage.setItem("current_question_index", JSON.stringify(0));
//             localStorage.setItem("current_question", JSON.stringify(followUpQuestions[0]));
    
//         } else {
//             // Answering follow-up questions
//             if (!input.trim()) return; // Prevent empty responses
    
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);
    
//             if (sessionIndex !== -1) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;
    
//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                     localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex + 1));
//                     localStorage.setItem("current_question", JSON.stringify(chat.Questions[currentQuestionIndex + 1]));
//                 } else {
//                     // All questions answered, generate final response
//                     chat.finalResponse = `Generated response based on inputs: ${chat.Questions.map(q => `${q.Question}: ${q.Answer}`).join(", ")}`;
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
                    
//                     // Remove follow-up session from localStorage
//                     localStorage.removeItem("follow_up_active");
//                     localStorage.removeItem("current_question");
//                     localStorage.removeItem("current_question_index");
//                 }
    
//                 setFullChat(updatedChat);
//                 localStorage.setItem("user_chat", JSON.stringify(updatedChat));
//             }
    
//             setInput("");
//         }
//     };

//     useEffect(() => {
//         let savedChat = localStorage.getItem("user_chat");
//         if (savedChat) {
//             setFullChat(JSON.parse(savedChat));
//         }
    
//         let savedFollowUpStatus = localStorage.getItem("follow_up_active");
//         if (savedFollowUpStatus) {
//             setIsFollowUpQuestionActive(JSON.parse(savedFollowUpStatus));
//         }
    
//         let savedSessionId = localStorage.getItem("chat_session_id");
//         if (savedSessionId) {
//             setChatSessionId(JSON.parse(savedSessionId));
//         }
    
//         let savedFollowUpQuestions = localStorage.getItem("follow_up_questions");
//         if (savedFollowUpQuestions) {
//             setFollowUpQUestions(JSON.parse(savedFollowUpQuestions));
//         }
    
//         let savedCurrentQuestionIndex = localStorage.getItem("current_question_index");
//         if (savedCurrentQuestionIndex) {
//             setCurrentQuestionIndex(JSON.parse(savedCurrentQuestionIndex));
//         }
    
//         let savedCurrentQuestion = localStorage.getItem("current_question");
//         if (savedCurrentQuestion) {
//             setCurrentQuestion(JSON.parse(savedCurrentQuestion));
//         }
//     }, []);

    
//     useEffect(() => {
//         if (fullChat.length > 0) {
//             localStorage.setItem("user_chat", JSON.stringify(fullChat));
//         }
//     }, [fullChat]);

    
//     useEffect(() => {
//         localStorage.setItem("follow_up_active", JSON.stringify(isFollowUpQuestionActive));
//         localStorage.setItem("chat_session_id", JSON.stringify(chatSessionId));
//         localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//         localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex));
//         localStorage.setItem("current_question", JSON.stringify(currentQuestion));
//     }, [isFollowUpQuestionActive, chatSessionId, followUpQuestions, currentQuestionIndex, currentQuestion]);
    
    
//     const handleClearChat = () => {
//         localStorage.clear();
//         setFullChat([]);
//         setIsFollowUpQuestionActive(false);
//         setChatSessionId(null);
//         setFollowUpQUestions(null);
//         setCurrentQuestion(null);
//         setCurrentQuestionIndex(null);
//     };
    

//     console.log(input, ">>>>input");
//     console.log(currentQuestion, ">>>>currentQuestion");
//     console.log(isFollowUpQuestionActive, ">>>>isFollowUpQuestionActive");
//     console.log(followUpQuestions, ">>>>followUpQuestions");
//     console.log(fullChat, ">>>>fullChat");
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
//                             {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button> */}
//                             {/* {chats?.map((chat) => (
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
//                             ))} */}

//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
//                                 Clear Chat
//                             </button>
//                         </div>
//                     )}

//                     {/* Messages (Single complete chat) */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {
//                                 fullChat.map((chat) => {
//                                     return (<div className="bg-amber-300 mb-10">
//                                         <div
//                                             className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                         >
//                                             {/* {"question"} */}
//                                             {chat.Question}
//                                         </div>

//                                         {
//                                             // Display Q&A for submitted answers
//                                             <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                                 {
//                                                     chat.Questions.map((fQuestion, index) => {
//                                                         return (
//                                                             fQuestion.Answer &&
//                                                             <div key={index} className="mb-3">
//                                                                 <p className="text-sm font-semibold text-blue-700">{fQuestion.Question}</p>
//                                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                                     {/* {"fq.Answer"} */}
//                                                                     {fQuestion.Answer}
//                                                                 </p>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         }

//                                         {/* final response */}
//                                         {
//                                             <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>
//                                         }
//                                     </div>)
//                                 })
//                             }

//                         </div>

//                     )}

//                     {/* display unanswered follow-up questions one by one  */}
//                     {
//                         isSidebarOpen == false ? (
//                             isFollowUpQuestionActive && <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
//                             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                             <div className="mb-2">
//                                 <label className="block text-xs font-medium">{currentQuestion["Question"]}</label>
//                             </div>
//                         </div>
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

// export default ChatWidgetFour;


// above code wasnt mainitanint code using localsotrage, when regreshed it didnt worked, below is new cde-
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageSquare, Pen, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     // const [chats, setChats] = useState([
//     //     { id: 1, title: "Chat 1", messages: ["Hello!", "How can I help you?", "User: I need assistance"], formResponses: {} },
//     // ]);
//     // const [selectedChat, setSelectedChat] = useState(chats[0]);

//     const [input, setInput] = useState("");
//     const [formResponses, setFormResponses] = useState({});

//     const [fullChat, setFullChat] = useState([
//         {
//             "SessionID": 12345,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Personal" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Email" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal123" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "Yes Add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Suggest please" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "suggest privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Animal post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Yes suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with facebook" }
//             ],
//             "finalResponse": "FINAL RESPONSE-1"

//         },
//         {
//             "SessionID": 12346,
//             "Question": "How to create an Instagram account ?",
//             "Questions": [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "Business" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "Phone" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "vishal456" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "No dont add" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "Nature pic" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "Personal privacy" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "Purple Theme" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "Bird post" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "Not suggest growth" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "Link with Whatsapp" }
//             ],
//             "finalResponse": "FINAL RESPONSE-2"
//         }
//     ]
// )
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false)
//     const [followUpQuestions, setFollowUpQUestions] = useState(null);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//       }

//     useEffect(() => {
        
//     }, [])

//     const handleSendMessage = () => {
//         if (!isFollowUpQuestionActive) {
//             // New chat session
//             let sessionId = getRandomSixDigitNumber();
//             let question = input.trim();
    
//             if (!question) return; // Prevent empty messages
    
//             let followUpQuestions = [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "" }
//             ];
    
//             let newChat = {
//                 SessionID: sessionId,
//                 Question: question,
//                 Questions: followUpQuestions,
//                 finalResponse: ""
//             };
    
//             let updatedChat = [...fullChat, newChat];
//             setFullChat(updatedChat);
//             localStorage.setItem("user_chat", JSON.stringify(updatedChat));
    
//             // Save follow-up session details
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId);
//             setFollowUpQUestions(followUpQuestions);
//             setCurrentQuestion(followUpQuestions[0]);
//             setCurrentQuestionIndex(0);
//             setInput("");
    
//             // Store in local storage
//             localStorage.setItem("follow_up_active", JSON.stringify(true));
//             localStorage.setItem("chat_session_id", JSON.stringify(sessionId));
//             localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//             localStorage.setItem("current_question_index", JSON.stringify(0));
//             localStorage.setItem("current_question", JSON.stringify(followUpQuestions[0]));
    
//         } else {
//             // Answering follow-up questions
//             if (!input.trim()) return; // Prevent empty responses
    
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);
    
//             if (sessionIndex !== -1) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;
    
//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                     localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex + 1));
//                     localStorage.setItem("current_question", JSON.stringify(chat.Questions[currentQuestionIndex + 1]));
//                 } else {
//                     // All questions answered, generate final response
//                     chat.finalResponse = `Generated response based on inputs: ${chat.Questions.map(q => `${q.Question}: ${q.Answer}`).join(", ")}`;
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
                    
//                     // Remove follow-up session from localStorage
//                     localStorage.removeItem("follow_up_active");
//                     localStorage.removeItem("current_question");
//                     localStorage.removeItem("current_question_index");
//                 }
    
//                 setFullChat(updatedChat);
//                 localStorage.setItem("user_chat", JSON.stringify(updatedChat));
//             }
    
//             setInput("");
//         }
//     };

//     useEffect(() => {
//         let savedChat = localStorage.getItem("user_chat");
//         if (savedChat) {
//             setFullChat(JSON.parse(savedChat));
//         }
    
//         let savedFollowUpStatus = localStorage.getItem("follow_up_active");
//         if (savedFollowUpStatus) {
//             setIsFollowUpQuestionActive(JSON.parse(savedFollowUpStatus));
//         }
    
//         let savedSessionId = localStorage.getItem("chat_session_id");
//         if (savedSessionId) {
//             setChatSessionId(JSON.parse(savedSessionId));
//         }
    
//         let savedFollowUpQuestions = localStorage.getItem("follow_up_questions");
//         if (savedFollowUpQuestions) {
//             setFollowUpQUestions(JSON.parse(savedFollowUpQuestions));
//         }
    
//         let savedCurrentQuestionIndex = localStorage.getItem("current_question_index");
//         if (savedCurrentQuestionIndex) {
//             setCurrentQuestionIndex(JSON.parse(savedCurrentQuestionIndex));
//         }
    
//         let savedCurrentQuestion = localStorage.getItem("current_question");
//         if (savedCurrentQuestion) {
//             setCurrentQuestion(JSON.parse(savedCurrentQuestion));
//         }
//     }, []);

    
//     useEffect(() => {
//         if (fullChat.length > 0) {
//             localStorage.setItem("user_chat", JSON.stringify(fullChat));
//         }
//     }, [fullChat]);

    
//     useEffect(() => {
//         localStorage.setItem("follow_up_active", JSON.stringify(isFollowUpQuestionActive));
//         localStorage.setItem("chat_session_id", JSON.stringify(chatSessionId));
//         localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//         localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex));
//         localStorage.setItem("current_question", JSON.stringify(currentQuestion));
//     }, [isFollowUpQuestionActive, chatSessionId, followUpQuestions, currentQuestionIndex, currentQuestion]);
    
    
//     const handleClearChat = () => {
//         localStorage.clear();
//         setFullChat([]);
//         setIsFollowUpQuestionActive(false);
//         setChatSessionId(null);
//         setFollowUpQUestions(null);
//         setCurrentQuestion(null);
//         setCurrentQuestionIndex(null);
//     };
    

//     console.log(input, ">>>>input");
//     console.log(currentQuestion, ">>>>currentQuestion");
//     console.log(isFollowUpQuestionActive, ">>>>isFollowUpQuestionActive");
//     console.log(followUpQuestions, ">>>>followUpQuestions");
//     console.log(fullChat, ">>>>fullChat");
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
//                             {/* <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2">
//                                 <Pen size={18} /> New Chat
//                             </button> */}
//                             {/* {chats?.map((chat) => (
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
//                             ))} */}

//                             <button className="bg-blue-600 p-2 rounded mb-4 flex items-center gap-2" onClick={handleClearChat}>
//                                 Clear Chat
//                             </button>
//                         </div>
//                     )}

//                     {/* Messages (Single complete chat) */}
//                     {!isSidebarOpen && (
//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {
//                                 fullChat.map((chat) => {
//                                     return (<div className="bg-amber-300 mb-10">
//                                         <div
//                                             className={`mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black`}
//                                         >
//                                             {/* {"question"} */}
//                                             {chat.Question}
//                                         </div>

//                                         {
//                                             // Display Q&A for submitted answers
//                                             <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                                 {
//                                                     chat.Questions.map((fQuestion, index) => {
//                                                         return (
//                                                             fQuestion.Answer &&
//                                                             <div key={index} className="mb-3">
//                                                                 <p className="text-sm font-semibold text-blue-700">{fQuestion.Question}</p>
//                                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">
//                                                                     {/* {"fq.Answer"} */}
//                                                                     {fQuestion.Answer}
//                                                                 </p>
//                                                             </div>
//                                                         )
//                                                     })
//                                                 }
//                                             </div>
//                                         }

//                                         {/* final response */}
//                                         {
//                                             <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>
//                                         }
//                                     </div>)
//                                 })
//                             }

//                         </div>

//                     )}

//                     {/* display unanswered follow-up questions one by one  */}
//                     {
//                         isSidebarOpen == false ? (
//                             isFollowUpQuestionActive && <div className="p-3 bg-[#5a1f61] h-[150px] overflow-auto">
//                             <h3 className="text-sm font-semibold mb-2">Follow-Up Questions</h3>
//                             <div className="mb-2">
//                                 <label className="block text-xs font-medium">{currentQuestion["Question"]}</label>
//                             </div>
//                         </div>
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

// export default ChatWidgetFour;


///// below modiying page reloads- (WORING PERFECTLY)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [input, setInput] = useState("");

//     // 🟢 Load from localStorage or use default values
//     const getStoredData = (key, defaultValue) => {
//         const data = localStorage.getItem(key);
//         return data ? JSON.parse(data) : defaultValue;
//     };

//     const [fullChat, setFullChat] = useState(() => getStoredData("user_chat", []));
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(() => getStoredData("follow_up_active", false));
//     const [followUpQuestions, setFollowUpQuestions] = useState(() => getStoredData("follow_up_questions", null));
//     const [chatSessionId, setChatSessionId] = useState(() => getStoredData("chat_session_id", null));
//     const [currentQuestion, setCurrentQuestion] = useState(() => getStoredData("current_question", null));
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => getStoredData("current_question_index", null));

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//     }

//     // 🟢 Save chat state to localStorage whenever state updates
//     useEffect(() => {
//         localStorage.setItem("user_chat", JSON.stringify(fullChat));
//         localStorage.setItem("follow_up_active", JSON.stringify(isFollowUpQuestionActive));
//         localStorage.setItem("chat_session_id", JSON.stringify(chatSessionId));
//         localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//         localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex));
//         localStorage.setItem("current_question", JSON.stringify(currentQuestion));
//     }, [fullChat, isFollowUpQuestionActive, chatSessionId, followUpQuestions, currentQuestionIndex, currentQuestion]);

//     const handleSendMessage = () => {
//         if (!input.trim()) return; // Prevent empty messages

//         if (!isFollowUpQuestionActive) {
//             // Start a new chat session
//             const sessionId = getRandomSixDigitNumber();
//             const question = input.trim();

//             const followUp = [
//                 { "QuestionID": 1111, "Question": "Personal or Business Account?", "Answer": "" },
//                 { "QuestionID": 2222, "Question": "Email or Phone Number?", "Answer": "" },
//                 { "QuestionID": 3333, "Question": "Username Preference?", "Answer": "" },
//                 { "QuestionID": 4444, "Question": "Profile Details?", "Answer": "" },
//                 { "QuestionID": 5555, "Question": "Profile Picture?", "Answer": "" },
//                 { "QuestionID": 6666, "Question": "Privacy Settings?", "Answer": "" },
//                 { "QuestionID": 7777, "Question": "Niche or Theme?", "Answer": "" },
//                 { "QuestionID": 8888, "Question": "First Post?", "Answer": "" },
//                 { "QuestionID": 9999, "Question": "Account Growth Strategy?", "Answer": "" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "" }
//             ];

//             const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
//             setFullChat([...fullChat, newChat]);

//             // Activate follow-up questions
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId);
//             setFollowUpQuestions(followUp);
//             setCurrentQuestionIndex(0);
//             setCurrentQuestion(followUp[0]);
//             setInput("");

//         } else {
//             // Answer follow-up questions
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

//             if (sessionIndex !== -1 && currentQuestionIndex !== null) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;

//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     // All follow-up questions answered
//                     chat.finalResponse = `Generated response: ${chat.Questions.map(q => `${q.Question}: ${q.Answer}`).join(", ")}`;
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
//                 }

//                 setFullChat(updatedChat);
//             }
//             setInput("");
//         }
//     };

//     const handleClearChat = () => {
//         localStorage.clear();
//         setFullChat([]);
//         setIsFollowUpQuestionActive(false);
//         setChatSessionId(null);
//         setFollowUpQuestions(null);
//         setCurrentQuestion(null);
//         setCurrentQuestionIndex(null);
//     };

//     console.log(fullChat, ">>>>fullChat");
    
//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {!isOpen && (
//                 <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
//                     <MessageCircle size={24} />
//                 </button>
//             )}

//             {isOpen && (
//                 <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                         <h2 className="text-lg font-bold">deAsra Chat</h2>
//                         <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                             <X size={18} />
//                         </button>
//                     </div>

//                     <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                         {fullChat.map(chat => (
//                             <div key={chat.SessionID} className="mb-10">
//                                 <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
//                                 {
//                                     chat.Questions[0].Answer &&

//                                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                     {chat.Questions.map((q, index) => q.Answer && (
//                                         <div key={index} className="mb-3">
//                                             <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
//                                             <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 }
//                                 {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>}
//                             </div>
//                         ))}
//                     </div>

//                     {isFollowUpQuestionActive && currentQuestion && (
//                         <div className="p-3 bg-[#5a1f61]">
//                             <h3 className="text-sm font-semibold">{currentQuestion?.Question}</h3>
//                         </div>
//                     )}

//                     <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                         <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
//                         <button onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetFour;


/// MOdifying more(as of now same as above)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [input, setInput] = useState("");

//     // 🟢 Load from localStorage or use default values
//     const getStoredData = (key, defaultValue) => {
//         const data = localStorage.getItem(key);
//         return data ? JSON.parse(data) : defaultValue;
//     };

//     const [fullChat, setFullChat] = useState(() => getStoredData("user_chat", []));
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(() => getStoredData("follow_up_active", false));
//     const [followUpQuestions, setFollowUpQuestions] = useState(() => getStoredData("follow_up_questions", null));
//     const [chatSessionId, setChatSessionId] = useState(() => getStoredData("chat_session_id", null));
//     const [currentQuestion, setCurrentQuestion] = useState(() => getStoredData("current_question", null));
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => getStoredData("current_question_index", null));

//     function getRandomSixDigitNumber() {
//         return Math.floor(100000 + Math.random() * 900000);
//     }

//     // 🟢 Save chat state to localStorage whenever state updates
//     useEffect(() => {
//         localStorage.setItem("user_chat", JSON.stringify(fullChat));
//         localStorage.setItem("follow_up_active", JSON.stringify(isFollowUpQuestionActive));
//         localStorage.setItem("chat_session_id", JSON.stringify(chatSessionId));
//         localStorage.setItem("follow_up_questions", JSON.stringify(followUpQuestions));
//         localStorage.setItem("current_question_index", JSON.stringify(currentQuestionIndex));
//         localStorage.setItem("current_question", JSON.stringify(currentQuestion));
//     }, [fullChat, isFollowUpQuestionActive, chatSessionId, followUpQuestions, currentQuestionIndex, currentQuestion]);

//     const handleSendMessage = () => {
//         if (!input.trim()) return; // Prevent empty messages

//         if (!isFollowUpQuestionActive) {
//             // Start a new chat session
//             const sessionId = getRandomSixDigitNumber();
//             const question = input.trim();

//             const followUp = [
//                 { "QuestionID": 1111, "Question": "Are you creating a personal account or a business account?", "Answer": "" },
//                 { "QuestionID": 2222, "Question": "Do you already have a Facebook account? Instagram offers to sign up using Facebook.", "Answer": "" },
//                 { "QuestionID": 3333, "Question": "Do you want to sign up using your email address or phone number?", "Answer": "" },
//                 { "QuestionID": 4444, "Question": "Do you already have a username in mind or are you open to suggestions?", "Answer": "" },
//                 { "QuestionID": 5555, "Question": "Are you planning to connect your Instagram account with other social media platforms?", "Answer": "" },
//                 { "QuestionID": 6666, "Question": "Do you need assistance in setting up a strong and secure password?", "Answer": "" },
//                 { "QuestionID": 7777, "Question": "Are you familiar with Instagram's policies and terms of use?", "Answer": "" },
//                 { "QuestionID": 8888, "Question": "Do you need help in understanding the basic functionalities of Instagram, like posting photos, following accounts etc?", "Answer": "" },
//                 { "QuestionID": 9999, "Question": "Do you want to set your account as public or private?", "Answer": "" },
//                 { "QuestionID": 1010, "Question": "Linking to Other Accounts?", "Answer": "" }
//             ];

//             const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
//             setFullChat([...fullChat, newChat]);

//             // Activate follow-up questions
//             setIsFollowUpQuestionActive(true);
//             setChatSessionId(sessionId);
//             setFollowUpQuestions(followUp);
//             setCurrentQuestionIndex(0);
//             setCurrentQuestion(followUp[0]);
//             setInput("");

//         } else {
//             // Answer follow-up questions
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

//             if (sessionIndex !== -1 && currentQuestionIndex !== null) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;

//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     // All follow-up questions answered
//                     chat.finalResponse = `Generated response: ${chat.Questions.map(q => `${q.Question}: ${q.Answer}`).join(", ")}`;
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
//                 }

//                 setFullChat(updatedChat);
//             }
//             setInput("");
//         }
//     };

//     const handleClearChat = () => {
//         localStorage.clear();
//         setFullChat([]);
//         setIsFollowUpQuestionActive(false);
//         setChatSessionId(null);
//         setFollowUpQuestions(null);
//         setCurrentQuestion(null);
//         setCurrentQuestionIndex(null);
//     };

//     console.log(fullChat, ">>>>fullChat");
    
//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {!isOpen && (
//                 <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
//                     <MessageCircle size={24} />
//                 </button>
//             )}

//             {isOpen && (
//                 <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                         <h2 className="text-lg font-bold">deAsra Chat</h2>
//                         <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                             <X size={18} />
//                         </button>
//                     </div>

//                     <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                         {fullChat.map(chat => (
//                             <div key={chat.SessionID} className="mb-10">
//                                 <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
//                                 {
//                                     chat.Questions[0].Answer &&

//                                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                     {chat.Questions.map((q, index) => q.Answer && (
//                                         <div key={index} className="mb-3">
//                                             <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
//                                             <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 }
//                                 {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>}
//                             </div>
//                         ))}
//                     </div>

//                     {isFollowUpQuestionActive && currentQuestion && (
//                         <div className="p-3 bg-[#5a1f61]">
//                             <h3 className="text-sm font-semibold">{currentQuestion?.Question}</h3>
//                         </div>
//                     )}

//                     <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                         <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
//                         <button onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetFour;


// // ABOVE (perfectly working ) CODE WITH API Integration- (NOT WORKING)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [fullChat, setFullChat] = useState(() => JSON.parse(localStorage.getItem("user_chat")) || []);
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState(null);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

//     useEffect(() => {
//         localStorage.setItem("user_chat", JSON.stringify(fullChat));
//     }, [fullChat]);

//     const handleSendMessage = async () => {
//         if (!input.trim()) return;

//         if (!isFollowUpQuestionActive) {
//             const sessionId = `session_${Date.now()}`;
//             const question = input.trim();
            
//             try {
//                 const response = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ Question: question, SessionID: sessionId })
//                 });
                
//                 const data = await response.json();
//                 if (data.code === 200) {
//                     const followUp = data.data.split("\n").filter(q => q.trim()).map((q, index) => ({
//                         QuestionID: index + 1, 
//                         Question: q.replace(/^\d+\. /, ""), 
//                         Answer: ""
//                     }));
                    
//                     const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
//                     setFullChat([...fullChat, newChat]);
//                     setIsFollowUpQuestionActive(true);
//                     setChatSessionId(sessionId);
//                     setFollowUpQuestions(followUp);
//                     setCurrentQuestionIndex(0);
//                     setCurrentQuestion(followUp[0]);
//                 }
//             } catch (error) {
//                 console.error("Error fetching follow-up questions:", error);
//             }
            
//             setInput("");
//         } else {
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

//             if (sessionIndex !== -1 && currentQuestionIndex !== null) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;

//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestion(chat.Questions[currentQuestionIndex + 1]);
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     try {
//                         const finalResponse = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify({
//                                 Question: chat.Question,
//                                 QAnswers: chat.Questions.map(q => `${q.Question} - ${q.Answer}`).join("\n"),
//                                 SessionID: chatSessionId
//                             })
//                         });
//                         const finalData = await finalResponse.json();
//                         if (finalData.code === 200) {
//                             chat.finalResponse = finalData.data;
//                         }
//                     } catch (error) {
//                         console.error("Error fetching final response:", error);
//                     }
                    
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestion(null);
//                     setCurrentQuestionIndex(null);
//                 }
//                 setFullChat(updatedChat);
//             }
//             setInput("");
//         }
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {!isOpen && (
//                 <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
//                     <MessageCircle size={24} />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                         <h2 className="text-lg font-bold">deAsra Chat</h2>
//                         <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                             <X size={18} />
//                         </button>
//                     </div>
//                     <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                         {fullChat.map(chat => (
//                             <div key={chat.SessionID} className="mb-10">
//                                 <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
//                                 {chat.Questions.some(q => q.Answer) && (
//                                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                         {chat.Questions.map((q, index) => q.Answer && (
//                                             <div key={index} className="mb-3">
//                                                 <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
//                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                                 {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>}
//                             </div>
//                         ))}
//                     </div>
//                     {isFollowUpQuestionActive && currentQuestion && (
//                         <div className="p-3 bg-[#5a1f61]">
//                             <h3 className="text-sm font-semibold">{currentQuestion?.Question}</h3>
//                         </div>
//                     )}
//                     <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                         <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
//                         <button onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetFour;


// NEW CODE- (WORKING PERFECTLY WITH API INTEGRATION)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [fullChat, setFullChat] = useState(() => JSON.parse(localStorage.getItem("user_chat")) || []);
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

//     useEffect(() => {
//         localStorage.setItem("user_chat", JSON.stringify(fullChat));
//     }, [fullChat]);

//     const extractQuestions = (text) => {
//         return text.split("\n").filter(line => line.match(/^\d+\.\s/)).map((q, index) => ({
//             QuestionID: index + 1,
//             Question: q.replace(/^\d+\.\s/, ""),
//             Answer: ""
//         }));
//     };

//     const handleSendMessage = async () => {
//         if (!input.trim()) return;

//         if (!isFollowUpQuestionActive) {
//             const sessionId = `session_${Date.now()}`;
//             const question = input.trim();
            
//             try {
//                 const response = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ Question: question, SessionID: sessionId })
//                 });
                
//                 const data = await response.json();
//                 if (data.code === 200) {
//                     const followUp = extractQuestions(data.data);
                    
//                     const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
//                     setFullChat([...fullChat, newChat]);
//                     setIsFollowUpQuestionActive(true);
//                     setChatSessionId(sessionId);
//                     setFollowUpQuestions(followUp);
//                     setCurrentQuestionIndex(0);
//                 }
//             } catch (error) {
//                 console.error("Error fetching follow-up questions:", error);
//             }
            
//             setInput("");
//         } else {
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

//             if (sessionIndex !== -1 && currentQuestionIndex !== null) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;

//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     try {
//                         const finalResponse = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify({
//                                 Question: chat.Question,
//                                 QAnswers: chat.Questions.map(q => `${q.Question} - ${q.Answer}`).join("\n"),
//                                 SessionID: chatSessionId
//                             })
//                         });
//                         const finalData = await finalResponse.json();
//                         if (finalData.code === 200) {
//                             chat.finalResponse = finalData.data;
//                         }
//                     } catch (error) {
//                         console.error("Error fetching final response:", error);
//                     }
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestionIndex(null);
//                 }
//                 setFullChat(updatedChat);
//             }
//             setInput("");
//         }
//     };

//     return (
//         <div className="fixed bottom-4 right-4 z-50">
//             {!isOpen && (
//                 <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
//                     <MessageCircle size={24} />
//                 </button>
//             )}
//             {isOpen && (
//                 <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                         <h2 className="text-lg font-bold">deAsra Chat</h2>
//                         <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                             <X size={18} />
//                         </button>
//                     </div>
//                     <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                         {fullChat.map(chat => (
//                             <div key={chat.SessionID} className="mb-10">
//                                 <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
//                                 {chat.Questions.some(q => q.Answer) && (
//                                     <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                         {chat.Questions.map((q, index) => q.Answer && (
//                                             <div key={index} className="mb-3">
//                                                 <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
//                                                 <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                                 {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>}
//                             </div>
//                         ))}
//                     </div>
//                     {isFollowUpQuestionActive && currentQuestionIndex !== null && (
//                         <div className="p-3 bg-[#5a1f61]">
//                             <h3 className="text-sm font-semibold">{followUpQuestions[currentQuestionIndex]?.Question}</h3>
//                         </div>
//                     )}
//                     <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                         <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
//                         <button onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ChatWidgetFour;


// More modification of perfectly working with API integration COde (above code, Loader working on API call)
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle, Edit2, Loader } from "lucide-react";

// const ChatWidgetFour = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [fullChat, setFullChat] = useState(() => JSON.parse(localStorage.getItem("user_chat")) || []);
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//     const [isLoader, setIsLoader] = useState(false);

//     useEffect(() => {
//         localStorage.setItem("user_chat", JSON.stringify(fullChat));
//     }, [fullChat]);

//     const extractQuestions = (text) => {
//         return text.split("\n").filter(line => line.match(/^\d+\.\s/)).map((q, index) => ({
//             QuestionID: index + 1,
//             Question: q.replace(/^\d+\.\s/, ""),
//             Answer: ""
//         }));
//     };

//     const handleSendMessage = async () => {
//         if (!input.trim()) return;

//         if (!isFollowUpQuestionActive) {
//             const sessionId = `session_${Date.now()}`;
//             const question = input.trim();
            
//             try {
//                 setIsLoader(true);
//                 const response = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({ Question: question, SessionID: sessionId })
//                 });
                
//                 const data = await response.json();
//                 if (data.code === 200) {
//                     const followUp = extractQuestions(data.data);
                    
//                     const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
//                     setFullChat([...fullChat, newChat]);
//                     setIsFollowUpQuestionActive(true);
//                     setChatSessionId(sessionId);
//                     setFollowUpQuestions(followUp);
//                     setCurrentQuestionIndex(0);

//                     setIsLoader(false);
//                 }
//             } catch (error) {
//                 console.error("Error fetching follow-up questions:", error);
//                 setIsLoader(false);
//             }
            
//             setInput("");
//         } else {
//             let updatedChat = [...fullChat];
//             let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

//             if (sessionIndex !== -1 && currentQuestionIndex !== null) {
//                 let chat = updatedChat[sessionIndex];
//                 chat.Questions[currentQuestionIndex].Answer = input;

//                 if (currentQuestionIndex < chat.Questions.length - 1) {
//                     setCurrentQuestionIndex(currentQuestionIndex + 1);
//                 } else {
//                     try {
//                         setIsLoader(true)
//                         const finalResponse = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request", {
//                             method: "POST",
//                             headers: { "Content-Type": "application/json" },
//                             body: JSON.stringify({
//                                 Question: chat.Question,
//                                 QAnswers: chat.Questions.map(q => `${q.Question} - ${q.Answer}`).join("\n"),
//                                 SessionID: chatSessionId
//                             })
//                         });
//                         const finalData = await finalResponse.json();
//                         if (finalData.code === 200) {
//                             chat.finalResponse = finalData.data;
//                         }
//                         setIsLoader(false);
//                     } catch (error) {
//                         console.error("Error fetching final response:", error);
//                         setIsLoader(false);
//                     }
//                     setIsFollowUpQuestionActive(false);
//                     setCurrentQuestionIndex(null);
//                 }
//                 setFullChat(updatedChat);
//             }
//             setInput("");
//         }
//     };

//     const ChatResponseView = (response) => {
//         // Function to parse the response text and format it into HTML
//         const formatResponse = (text) => {
//           if (!text) return "";
      
//           return text
//             .replace(/\n### (.*?)\n/g, '<h3 class="text-lg font-semibold mt-4">$1</h3>') // Headings
//             .replace(/\n\d+\.\s(.*?)\n/g, '<li class="mb-2">$1</li>') // Ordered lists
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
//             .replace(/\n/g, "<br />"); // Line breaks
//         };
      
//         return (
//           <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
//             {/* <h2 className="text-xl font-bold mb-3">Response</h2> */}
//             <div dangerouslySetInnerHTML={{ __html: formatResponse(response) }} />
//           </div>
//         );
//       };

//     const clearAllChat = (modalId) => {
//         document.getElementById(modalId).showModal();
//     };

//     return (
//             <div className="fixed bottom-4 right-4 z-50">
//                 {!isOpen && (
//                     <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
//                         <MessageCircle size={24} />
//                     </button>
//                 )}
//                 {isOpen && (
//                     // <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
//                     <div className={`w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative ${isLoader ? 'opacity-50' : ''}`}>
//                         <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
//                             <button className="bg-transparent p-2 rounded-full" onClick={()=>clearAllChat("my_modal_1")} >
//                                 <Edit2 size={18} />
//                             </button>
//                             <h2 className="text-lg font-bold">deAsra Chat</h2>
//                             <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
//                                 <X size={18} />
//                             </button>
//                         </div>

//                         {isLoader && (
//                             <div className="absolute top-0 left-0 right-0 bg-[#75287c] p-2 flex justify-center">
//                                 <Loader size={24} className="animate-spin" />
//                             </div>
//                         )}

//                         <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
//                             {fullChat.map(chat => (
//                                 <div key={chat.SessionID} className="mb-10">
//                                     <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
//                                     {chat.Questions.some(q => q.Answer) && (
//                                         <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
//                                             {chat.Questions.map((q, index) => q.Answer && (
//                                                 <div key={index} className="mb-3">
//                                                     <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
//                                                     <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                     {/* {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>} */}
//                                     {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4 border-r-4 rounded-2xl">{ChatResponseView(chat.finalResponse)}</p>}
//                                 </div>
//                             ))}
//                         </div>
//                         {isFollowUpQuestionActive && currentQuestionIndex !== null && (
//                             <div className="p-3 bg-[#5a1f61]">
//                                 <h3 className="text-sm font-semibold">{followUpQuestions[currentQuestionIndex]?.Question}</h3>
//                             </div>
//                         )}
//                         <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
//                             <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
//                             <button disabled={isLoader} onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                         </div>
//                     </div>
//                 )}

//                 {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
//                 {/* <button className="btn" >open modal</button> */}
//                 <dialog id="my_modal_1" className="modal">
//                     <div className="modal-box">
//                         <h3 className="font-bold text-lg">Hello!</h3>
//                         <p className="py-4">Press ESC key or click the button below to close</p>
//                         <div className="modal-action">
//                         <form method="dialog">
//                             {/* if there is a button in form, it will close the modal */}
//                             <button className="btn">Close</button>
//                         </form>
//                         </div>
//                     </div>
//                 </dialog>
//             </div>
//     );
// };

// export default ChatWidgetFour;


// Modifying above code for adding modal to confirm delete chat-
// Below is perfectly working chat code (PERFECHATONE)
import { useState, useEffect } from "react";
import { Menu, X, Send, MessageCircle, Edit2, Loader } from "lucide-react";

const ChatWidgetFour = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [fullChat, setFullChat] = useState(() => JSON.parse(localStorage.getItem("user_chat")) || []);
    const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false);
    const [followUpQuestions, setFollowUpQuestions] = useState([]);
    const [chatSessionId, setChatSessionId] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
    const [isLoader, setIsLoader] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("user_chat", JSON.stringify(fullChat));
    }, [fullChat]);

    const extractQuestions = (text) => {
        return text.split("\n").filter(line => line.match(/^\d+\.\s/)).map((q, index) => ({
            QuestionID: index + 1,
            Question: q.replace(/^\d+\.\s/, ""),
            Answer: ""
        }));
    };

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        if (!isFollowUpQuestionActive) {
            const sessionId = `session_${Date.now()}`;
            const question = input.trim();
            
            try {
                setIsLoader(true);
                const response = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_Question_Request", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ Question: question, SessionID: sessionId })
                });
                
                const data = await response.json();
                if (data.code === 200) {
                    const followUp = extractQuestions(data.data);
                    
                    const newChat = { SessionID: sessionId, Question: question, Questions: followUp, finalResponse: "" };
                    setFullChat([...fullChat, newChat]);
                    setIsFollowUpQuestionActive(true);
                    setChatSessionId(sessionId);
                    setFollowUpQuestions(followUp);
                    setCurrentQuestionIndex(0);

                    setIsLoader(false);
                }
            } catch (error) {
                console.error("Error fetching follow-up questions:", error);
                setIsLoader(false);
            }
            
            setInput("");
        } else {
            let updatedChat = [...fullChat];
            let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

            if (sessionIndex !== -1 && currentQuestionIndex !== null) {
                let chat = updatedChat[sessionIndex];
                chat.Questions[currentQuestionIndex].Answer = input;

                if (currentQuestionIndex < chat.Questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    try {
                        setIsLoader(true)
                        const finalResponse = await fetch("https://testseriesapi.econsignsoft.com/api/v1/admin/chat_GPT_user_followup_question_Request", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                Question: chat.Question,
                                QAnswers: chat.Questions.map(q => `${q.Question} - ${q.Answer}`).join("\n"),
                                SessionID: chatSessionId
                            })
                        });
                        const finalData = await finalResponse.json();
                        if (finalData.code === 200) {
                            chat.finalResponse = finalData.data;
                        }
                        setIsLoader(false);
                    } catch (error) {
                        console.error("Error fetching final response:", error);
                        setIsLoader(false);
                    }
                    setIsFollowUpQuestionActive(false);
                    setCurrentQuestionIndex(null);
                }
                setFullChat(updatedChat);
            }
            setInput("");
        }
    };

    const ChatResponseView = (response) => {
        // Function to parse the response text and format it into HTML
        const formatResponse = (text) => {
          if (!text) return "";
      
          return text
            .replace(/\n### (.*?)\n/g, '<h3 class="text-lg font-semibold mt-4">$1</h3>') // Headings
            .replace(/\n\d+\.\s(.*?)\n/g, '<li class="mb-2">$1</li>') // Ordered lists
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
            .replace(/\n/g, "<br />"); // Line breaks
        };
      
        return (
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-800">
            {/* <h2 className="text-xl font-bold mb-3">Response</h2> */}
            <div dangerouslySetInnerHTML={{ __html: formatResponse(response) }} />
          </div>
        );
      };

      const handleEditClick = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    const handleDeleteChat = () => {
        localStorage.clear();
        window.location.reload();
        setIsModalOpen(false); // Close modal
    }

    return (
            <div className="fixed bottom-4 right-4 z-50">
                {!isOpen && (
                    <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition" onClick={() => setIsOpen(true)}>
                        <MessageCircle size={24} />
                    </button>
                )}
                {isOpen && (
                    // <div className="w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative">
                    <div className={`w-120 h-[900px] bg-[#75287c] text-white rounded-xl shadow-xl flex flex-col overflow-hidden relative ${isLoader ? 'opacity-50' : ''}`}>
                        <div className="bg-[#5a1f61] p-3 flex justify-between items-center">
                            <button className="bg-transparent p-2 rounded-full" onClick={handleEditClick} >
                                <Edit2 size={18} />
                            </button>
                            <h2 className="text-lg font-bold">deAsra Chat</h2>
                            <button className="bg-red-600 p-2 rounded-full" onClick={() => setIsOpen(false)}>
                                <X size={18} />
                            </button>
                        </div>

                        {isLoader && (
                            <div className="absolute top-0 left-0 right-0 bg-[#75287c] p-2 flex justify-center">
                                <Loader size={24} className="animate-spin" />
                            </div>
                        )}

                        <div className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
                            {fullChat.map(chat => (
                                <div key={chat.SessionID} className="mb-10">
                                    <div className="mb-2 p-2 rounded-lg max-w-[70%] ml-auto bg-blue-400 text-black">{chat.Question}</div>
                                    {chat.Questions.some(q => q.Answer) && (
                                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                            {chat.Questions.map((q, index) => q.Answer && (
                                                <div key={index} className="mb-3">
                                                    <p className="text-sm font-semibold text-blue-700">{q.Question}</p>
                                                    <p className="text-sm text-gray-800 bg-white p-2 rounded-lg border border-gray-300 shadow-sm">{q.Answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {/* {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4">{chat.finalResponse}</p>} */}
                                    {chat.finalResponse && <p className="bg-blue-50 text-gray-800 mt-4 border-r-4 rounded-2xl">{ChatResponseView(chat.finalResponse)}</p>}
                                </div>
                            ))}
                        </div>
                        {isFollowUpQuestionActive && currentQuestionIndex !== null && (
                            <div className="p-3 bg-[#5a1f61]">
                                <h3 className="text-sm font-semibold">{followUpQuestions[currentQuestionIndex]?.Question}</h3>
                            </div>
                        )}
                        <div className="flex items-center gap-2 p-3 bg-[#5a1f61]">
                            <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button disabled={isLoader} onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
                        </div>
                    </div>
                )}

                {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
                {/* <button className="btn" >open modal</button> */}
                {/* Custom Modal Inside Widget */}
                {isModalOpen && (
                        <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                            <div className="bg-white p-6 rounded-lg shadow-xl text-black w-80">
                                <h3 className="font-bold text-lg">Confirm Action</h3>
                                <p className="py-4">Are you sure you want to delete this chat?</p>
                                <div className="flex justify-end gap-4">
                                    <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={handleCloseModal}>Cancel</button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleDeleteChat}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
    );
};

export default ChatWidgetFour;