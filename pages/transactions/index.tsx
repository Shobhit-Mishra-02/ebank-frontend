const TransactionsPage = () => {
  return (
    <div className="pt-14 divide-y-2 px-6">
      <div className="pb-6">
        <h3 className="text-4xl text-gray-500 text-center font-semibold">
          Transctions
        </h3>

        <h2 className="text-center pt-6">
          <span className="text-xl text-gray-400"> Current balance:</span>{" "}
          <span className="text-xl text-gray-600">$3000</span>
        </h2>
      </div>

      <div className="pt-10">
        <h2 className="text-3xl text-gray-500 text-center font-semibold">
          Transactions record
        </h2>
      </div>
    </div>
  );
};

export default TransactionsPage;
