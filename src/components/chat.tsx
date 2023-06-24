'use client';

import { useChat } from 'ai/react';
import { ChatPanel } from './chat-panel';
import { EmptyScreen } from './onboarding';
import { ChatMessage } from './chat-message';

export function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    stop,
    reload,
    isLoading,
  } = useChat();

  return (
    <div className="flex flex-col mx-auto min-h-screen max-w-3xl px-6  md:max-w-5xl pt-12 pb-24">
      {messages.length > 0 ? (
        <div className="relative mx-auto max-w-2xl px-4">
          {messages.map((message, index) => (
            <div key={index}>
              <ChatMessage message={message} />
              {index < messages.length - 1 && (
                <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              )}
            </div>
          ))}
        </div>
      ) : (
        <EmptyScreen />
      )}
      <ChatPanel
        isLoading={isLoading}
        stop={stop}
        reload={reload}
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
