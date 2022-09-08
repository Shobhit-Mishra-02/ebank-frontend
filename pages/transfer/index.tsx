const TransferMoneyPage = () => {
  return (
    <div className="w-fit mx-auto px-2 py-4 rounded-md shadow-md mt-12">
      <div className="pb-10">
        <h2 className="text-4xl text-gray-500 text-center font-semibold">
          Transfer money
        </h2>
      </div>
      <div className="flex flex-col pb-2">
        <label className="text-gray-400" htmlFor="receiver">
          Receiver's account number
        </label>
        <input
          type="text"
          className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
          id="receiver"
          name="receiver"
          placeholder="Enter account number..."
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-400" htmlFor="amount">
          Amount to send
        </label>
        <input
          type="text"
          className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
          id="amount"
          name="amount"
          placeholder="Enter amount..."
        />
      </div>
      <div className="pt-6 flex justify-end">
        <button className="text-xl px-6 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default TransferMoneyPage;
