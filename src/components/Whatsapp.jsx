import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function App() {

  return (
    <FloatingWhatsApp 
    phoneNumber="1234567890" // Required
    accountName="Your Name" // Optional
    chatMessage="Hello! How can I assist you?" // Optional
    notification={true} // Optional
    darkMode={true} // Optional
/>
  )
}