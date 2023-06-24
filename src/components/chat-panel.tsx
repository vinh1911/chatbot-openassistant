
import { type UseChatHelpers } from 'ai/react';
import { AiOutlineReload, AiOutlineSend } from 'react-icons/ai';
import { BsStopCircle } from 'react-icons/bs';

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'isLoading'
    | 'reload'
    | 'messages'
    | 'stop'
    | 'input'
    | 'handleInputChange'
    | 'handleSubmit'
  > {}

export function ChatPanel({
  messages,
  input,
  handleInputChange,
  handleSubmit,
  stop,
  reload,
  isLoading,
}: ChatPanelProps) {

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex h-10 items-center justify-center">
          {isLoading ? (
            <button
              type="button"
              className="py-2.5 px-5 mb-8 text-sm font-medium bg-neutral-900 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-700 hover:text-white rounded-lg inline-flex items-center"
              onClick={() => stop()}
            >
              <BsStopCircle size={16} className="mr-2" />
              Stop generating
            </button>
          ) : (
            messages?.length > 0 && (
              <button
                type="button"
                className="py-2.5 px-5 mb-8 text-sm bg-neutral-900 font-medium text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-700 hover:text-white rounded-lg inline-flex items-center"
                onClick={() => reload()}
              >
                <AiOutlineReload size={16} className="mr-2" />
                Regenerate response
              </button>
            )
          )}
        </div>
        <div className="space-y-4 border-t border-neutral-700 bg-neutral-900 px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4">
          <form onSubmit={handleSubmit}>
            <div className="relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:border-neutral-700 sm:px-12">
              <input
                className="text-white min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                value={input}
                placeholder="Send a message."
                onChange={handleInputChange}
              />
              <div className="absolute right-0 top-3 sm:right-4">
                <button
                  type="submit"
                  className="text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-700 hover:text-white font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center"
                  disabled={isLoading || input === ''}
                >
                  {isLoading ? (
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-neutral-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    <AiOutlineSend size={16} />
                  )}
                </button>
              </div>
            </div>
          </form>
          <div className="text-neutral-400 hidden sm:block px-2 text-center text-xs leading-normal">
            May produce inaccurate information about people, places, or facts
          </div>
        </div>
      </div>
    </div>
  );
}
