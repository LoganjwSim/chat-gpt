const ChatCard = ({ answer, question }) => {
  return (
    <li className="bg-red-100 flex flex-col gap-4 mt-6">
      <div className="bg-green-300 self-start ml-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
      <div className="bg-yellow-200 self-end mr-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {question}
      </div>
    </li>
  );
};

export default ChatCard;
