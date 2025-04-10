import axios from "axios"
let BASE_URL = "http://localhost:3000"

// ask question
export const askQuestion = (input) => {
    let payload = {
        "userId": "67dc6fce404613630b7624df",
        "question": input
    }

    return axios.post(`${BASE_URL}/chats/ask`, payload)
}


// submit response
export const submitUserResponse = (chatId, formResponses) => {
    console.log(">>>enteredd");


    let payload = {
        "chatId": chatId,
        "answers": [
          { "question": "Personal or Business Account?", "answer": formResponses[0] },
          { "question": "Email or Phone Number?", "answer": formResponses[1] },
          { "question": "Username Preference?", "answer": formResponses[2] },
          { "question": "Profile Details?", "answer": formResponses[3] },
          { "question": "Profile Picture?", "answer": formResponses[4] },
          { "question": "Privacy Settings?", "answer": formResponses[5] },
          { "question": "Niche or Theme?", "answer": formResponses[6] },
          { "question": "First Post?", "answer": formResponses[7] },
          { "question": "Account Growth Strategy?", "answer": formResponses[8] },
          { "question": "Linking to Other Accounts?", "answer": formResponses[9] }
        ]
      }      
      
    return axios.post(`${BASE_URL}/chats/submit`, payload)
}


// get complete chat history
export const getChatHistory = () => {
    return axios.get(`${BASE_URL}/chats/chat/${"67dc73dc404613630b7624fa"}`)
}