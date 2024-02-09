import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialChats = [
  {
    username: 'jonhsmith',
    text: 'allo.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'alex',
    text: ' ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero a',
  },
];

export interface Chat {
  username: string;
  text: string;
}

export interface ChatState {
  chats: Chat[];
}

const initialState: ChatState = {
  chats: initialChats,
  // chats: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.unshift(action.payload);

      if (state.chats.length > 50) {
        state.chats.pop();
      }
    },
  },
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;
