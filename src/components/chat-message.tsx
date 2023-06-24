import { cn } from '@/lib/utils';
import { Message } from 'ai';
import Image from 'next/image';
import { AiOutlineUser } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div className="group relative mb-4 flex items-start md:-ml-12" {...props}>
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 select-none items-center justify-center',
          message.role === 'user'
            ? 'bg-background'
            : 'bg-primary text-primary-foreground'
        )}
      >
        {message.role === 'user' ? (
          <AiOutlineUser size={24} className="text-neutral-400" />
        ) : (
          <Image src="/logo.png" width={24} height={24} alt="" />
        )}
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1 text-white">
        <ReactMarkdown>{message.content}</ReactMarkdown>
      </div>
    </div>
  );
}
