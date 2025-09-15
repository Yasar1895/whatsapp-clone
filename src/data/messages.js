// initial message threads grouped by conversationId (same as user id except 'u1' is you)
const messages = {
  // conversation with Aisha
  u2: [
    { id: 'm1', from: 'u2', to: 'u1', text: 'Hey! Did you watch the new movie?', ts: Date.now() - 1000 * 60 * 60 * 24 },
    { id: 'm2', from: 'u1', to: 'u2', text: 'Not yet, planning tonight. Any recommendations?', ts: Date.now() - 1000 * 60 * 60 * 23.5 }
  ],

  // conversation with Rahul
  u3: [
    { id: 'm3', from: 'u3', to: 'u1', text: 'Can you send the project files?', ts: Date.now() - 1000 * 60 * 60 * 5 },
    { id: 'm4', from: 'u1', to: 'u3', text: 'Sure — uploading now.', ts: Date.now() - 1000 * 60 * 60 * 4.5 }
  ],

  // family group
  u4: [
    { id: 'm5', from: 'u4', to: 'u1', text: 'Dinner at 8pm?', ts: Date.now() - 1000 * 60 * 60 * 2.4 },
    { id: 'm6', from: 'u1', to: 'u4', text: 'I will be there!', ts: Date.now() - 1000 * 60 * 60 * 2 }
  ]
}

export default messages
