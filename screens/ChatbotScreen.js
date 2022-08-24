import { View, Text } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const ChatbotScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const onQuickReply = (reply) => {
       
        let status = reply[0].value
        switch (status) {
          case 'appinfo':
            let reply = {
              _id: Math.floor(Math.random() * 1000) + 1,
              text: 'I want to know about this app.',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'You',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, reply))
    
            let botreply = {
              _id: Math.floor(Math.random() * 1000) + 1 ,
              text: `Grocery app is a delivery app for grocery products.Vendor can upload their product and receive order from customer and user can order from the app, view the product and etc.`,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Jasper bot',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, botreply))
            // setMessages(previousMessages => GiftedChat.append(previousMessages, repeatMessage))
            break;
    
          case 'Location':
            let reply2 = {
              _id: Math.floor(Math.random() * 1000) + 1,
              text: 'I want to know about location coverage.',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'You',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, reply2))
    
            let botreply2 = {
              _id: Math.floor(Math.random() * 1000) + 1,
              text: `Currently the location coverage is in Kl`,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Jasper bot',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, botreply2))
            break;
          case 'Leaderboard':
            let reply3 = {
              _id: Math.floor(Math.random() * 1000) + 1,
              text: 'I want to know about Leaderboard.',
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'You',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, reply3))
    
            let botreply3 = {
              _id: Math.floor(Math.random() * 1000) + 1,
              text: `Leaderboard is sorted by user's point, the higher the point the higher the rank. User can earn point by buying product and spin the wheel to get the points.`,
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'Jasper bot',
              },
            }
            setMessages(previousMessages => GiftedChat.append(previousMessages, botreply3))
            break;
    
        }
    
      }

    useEffect(() => {
        setMessages([
          {
            _id: 2,
            text: 'How may I help you?.',
            createdAt: new Date(),
            quickReplies: {
              type: 'radio', // or 'checkbox',
              keepIt: true,
              values: [
                {
                  title: 'Info about this app',
                  value: 'appinfo',
                },
                {
                  title: 'Location coverage',
                  value: 'Location',
                },
                {
                  title: 'Leaderboard',
                  value: 'Leaderboard',
                },
              ],
            },
            user: {
              _id: 2,
              name: 'Jasper bot',
            },
          },
          {
            _id: 1,
            text: 'Hi, welcome to Your one stop-shop. My name is Jasper bot. I can answer your questions',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Jasper bot',
            },
          },
        ])
      }, [])


  return (
    <GiftedChat
    messages={messages}
    onQuickReply={quickReply => onQuickReply(quickReply)}
    onSend={messages => onSend(messages)}
    user={{
      _id: 1,
    }}
  />
  )
}

export default ChatbotScreen