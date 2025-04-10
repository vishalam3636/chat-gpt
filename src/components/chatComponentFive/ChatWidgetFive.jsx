// // copy of last of ChatWidgetFour
// import { useState, useEffect } from "react";
// import { Menu, X, Send, MessageCircle, Edit2, Loader } from "lucide-react";

// const ChatWidgetFive = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [fullChat, setFullChat] = useState(() => JSON.parse(localStorage.getItem("user_chat")) || []);
//     const [isFollowUpQuestionActive, setIsFollowUpQuestionActive] = useState(false);
//     const [followUpQuestions, setFollowUpQuestions] = useState([]);
//     const [chatSessionId, setChatSessionId] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
//     const [isLoader, setIsLoader] = useState(false);
//     const [isModalOpen, setIsModalOpen] = useState(false);

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

//       const handleEditClick = () => {
//         setIsModalOpen(true); // Open modal
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false); // Close modal
//     };

//     const handleDeleteChat = () => {
//         localStorage.clear();
//         window.location.reload();
//         setIsModalOpen(false); // Close modal
//     }

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
//                             <button className="bg-transparent p-2 rounded-full" onClick={handleEditClick} >
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
//                             <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)}
//                                 onKeyDown={(e) => {
//                                     if (e.key === "Enter") {
//                                         handleSendMessage();
//                                     }
//                                 }}
//                             />
//                             <button disabled={isLoader} onClick={handleSendMessage} className="bg-blue-600 p-2 rounded-lg"><Send size={18} /></button>
//                         </div>
//                     </div>
//                 )}

//                 {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
//                 {/* <button className="btn" >open modal</button> */}
//                 {/* Custom Modal Inside Widget */}
//                 {isModalOpen && (
//                         <div className="absolute inset-0 flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
//                             <div className="bg-white p-6 rounded-lg shadow-xl text-black w-80">
//                                 <h3 className="font-bold text-lg">Confirm Action</h3>
//                                 <p className="py-4">Are you sure you want to delete this chat?</p>
//                                 <div className="flex justify-end gap-4">
//                                     <button className="bg-gray-400 text-white px-4 py-2 rounded" onClick={handleCloseModal}>Cancel</button>
//                                     <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleDeleteChat}>Confirm</button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//             </div>
//     );
// };

// export default ChatWidgetFive;


// Modifyin code for scrollbar move to bottom-
// copy of last of ChatWidgetFour
import { useState, useEffect } from "react";
import { Menu, X, Send, MessageCircle, Edit2, Loader, Trash } from "lucide-react";
import { useRef } from "react";  // Import useRef


const ChatWidgetFive = () => {
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

            setTimeout(() => {
                if (chatContainerRef.current) {
                    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                }
            }, 100); // Short delay to ensure DOM updates before scrolling
            
            setInput("");
        } else {
            let updatedChat = [...fullChat];
            let sessionIndex = updatedChat.findIndex(chat => chat.SessionID === chatSessionId);

            if (sessionIndex !== -1 && currentQuestionIndex !== null) {
                let chat = updatedChat[sessionIndex];
                chat.Questions[currentQuestionIndex].Answer = input;

                if (currentQuestionIndex < chat.Questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                    setTimeout(() => {
                        if (chatContainerRef.current) {
                            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                        }
                    }, 100);
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
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleDeleteChat = () => {
        localStorage.clear();
        window.location.reload();
        setIsModalOpen(false); 
    }

    const chatContainerRef = useRef(null);


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
                                <Trash size={18} />
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

                        <div ref={chatContainerRef} className="flex-1 p-3 overflow-auto bg-[#5a1f61]">
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
                            <input className="flex-1 p-2 text-black rounded-lg bg-gray-100" value={input} onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSendMessage();
                                    }
                                }}
                            />
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

export default ChatWidgetFive;