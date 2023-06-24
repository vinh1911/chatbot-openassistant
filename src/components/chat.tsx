'use client';

import { useChat } from 'ai/react';
import { ChatPanel } from './chat-panel';
import { EmptyScreen } from './onboarding';
import { ChatMessage } from './chat-message';
import { ChatScrollAnchor } from './chat-scroll-anchor';
import { toast } from 'react-hot-toast';

export function Chat() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    stop,
    reload,
    isLoading,
  } = useChat({
    onResponse(response) {
      if (response.status === 401) {
        toast.error(response.statusText);
      }
    },
  });

  return (
    <>
      <div className="pb-[200px] pt-4 md:pt-10">
        {messages.length > 0 ? (
          <>
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
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen />
        )}
      </div>
      <ChatPanel
        isLoading={isLoading}
        stop={stop}
        reload={reload}
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
