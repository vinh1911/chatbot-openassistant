import { AiOutlineArrowRight } from 'react-icons/ai';

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-white">
      <div className="rounded-lg border bg-background  p-8">
        <h1 className="mb-2 text-lg font-semibold">
          🐸 Welcome to our Froge Assistant! 🎉
        </h1>
        <p className="leading-normal">
          We&apos;re excited to introduce you to our intelligent assistant
          designed to make your life easier. Whether you have questions, need
          assistance, or simply want to engage in a friendly conversation, our
          chatbot is here to help. &apos;s embark on a journey together!
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          Ready to get started? Simply type your first message, and our chatbot
          will be thrilled to assist you. Enjoy the journey!
        </div>
        <div className="mt-4 flex flex-col items-start space-y-2">
          🤝 Let&apos;s begin the conversation!
        </div>
      </div>
    </div>
  );
}
