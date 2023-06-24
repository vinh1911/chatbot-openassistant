import { AiOutlineArrowRight } from 'react-icons/ai';

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`,
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n',
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`,
  },
];

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4 text-white">
      <div className="rounded-lg border bg-background  p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Froge Assistant!
        </h1>
        <p className="leading-normal">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <div key={index}>
              <AiOutlineArrowRight className="mr-2" />
              {message.heading}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
