import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

interface MessageType {
  message: string;
  sender: string;
  direction?: 'incoming' | 'outgoing';
}

const systemMessage = {
  role: "system",
  content: "You are a assistant called as RakshaAI."
};


const ChatWindow = () => {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      message: "Hello! This is ConversAI",
      sender: "ChatGPT",
      direction: 'incoming'
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (messageText: string) => {
    const newMessage: MessageType = {
      message: messageText,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setIsTyping(true);

    try {
      await processMessageToChatGPT(newMessages);
    } catch (error) {
      console.error("Error communicating with RakshaAI:", error);
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages: MessageType[]) {
    
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [systemMessage, ...apiMessages]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();
      const aiMessage: MessageType = {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        direction: 'incoming'
      };

      setMessages([...chatMessages, aiMessage]);
    } finally {
      setIsTyping(false);
    }
  }

  return (
    <div>
      <div className="relative h-[515px] w-[800px] bg-black">
        <MainContainer>
          <ChatContainer>
            <MessageList typingIndicator={isTyping ? <TypingIndicator content="RakshaAI is typing.." /> : null}>
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type your query here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default ChatWindow;
