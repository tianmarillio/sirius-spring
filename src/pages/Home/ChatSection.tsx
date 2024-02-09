import { AppDispatch, RootState } from '@/store';
import { Chat, addChat } from '@/store/chat/chatSlice';
import { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twMerge } from 'tailwind-merge';

interface ChatSectionProps {
  className?: string;
}

const ChatSection: FC<ChatSectionProps> = ({ className }) => {
  const dispatch = useDispatch<AppDispatch>();

  const chats = useSelector<RootState, Chat[]>((state) => state.chat.chats);

  const [text, setText] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addChat({
        username: 'TEST',
        text,
      }),
    );

    setText('');
  };

  return (
    <section className={twMerge('flex h-full flex-col bg-red-100', className)}>
      <div className="h-12 bg-black p-2 text-white">USERNAME</div>

      <ul className="flex flex-1 flex-col-reverse gap-2 overflow-x-hidden overflow-y-scroll p-2">
        {chats.map((chat, i) => (
          <li key={i} className="bg-blue-200">
            {chat.username}: {chat.text}
          </li>
        ))}
      </ul>

      <form className="h-24 bg-green-200 p-2" onSubmit={handleSubmit}>
        <input
          type="text"
          className="mb-2 w-full rounded-md px-4 py-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-purple-800 px-3 py-1 text-white"
          >
            Chat
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChatSection;
