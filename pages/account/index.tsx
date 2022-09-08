const createAccount = () => {
  return (
    <div className="w-fit flex justify-center align-middle items-center flex-col mx-auto  mt-12 px-3 py-4 rounded-md shadow-md mb-8">
      <div className="pb-8">
        <h2 className="text-4xl text-gray-500 text-center font-semibold">
          Create Account
        </h2>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-400">
            Name
          </label>
          <input
            type="text"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="name"
            name="name"
            placeholder="Enter name..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-400">
            Email
          </label>
          <input
            type="email"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="email"
            name="email"
            placeholder="Enter email..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phNumber" className="text-gray-400">
            Phone number
          </label>
          <input
            type="text"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="phNumber"
            name="phNumber"
            placeholder="Enter ph no...."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age" className="text-gray-400">
            Age
          </label>
          <input
            type="text"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="age"
            name="age"
            placeholder="Enter age..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pin" className="text-gray-400">
            Enter pin
          </label>
          <input
            type="text"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="pin"
            name="pin"
            placeholder="Enter pin..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmPin" className="text-gray-400">
            Confirm pin
          </label>
          <input
            type="text"
            className="border rounded-md focus:outline-none  border-gray-400 px-2 py-2 w-[300px]"
            id="confirmPin"
            name="confirmPin"
            placeholder="Confirm pin..."
          />
        </div>
        <div className="pt-4 flex justify-end">
          <button className="text-xl px-6 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default createAccount;
