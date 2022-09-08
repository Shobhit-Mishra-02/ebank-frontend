import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="bg-blue-500 px-4 py-3 flex justify-between align-middle items-center">
        <ul className="text-3xl font-semibold">
          <Link href={"/"}>
            <a className="cursor-pointer">Bank.</a>
          </Link>
        </ul>

        <ul className="flex justify-center space-x-4 align-middle items-center">
          <Link href="/transfer">
            <a className=" cursor-pointer hover:text-gray-800">
              Transfer money
            </a>
          </Link>
          <Link href={"/addMoney"}>
            <a className=" cursor-pointer hover:text-gray-800">Add money</a>
          </Link>
          <Link href={"/transactions"}>
            <a className=" cursor-pointer hover:text-gray-800">Transactions</a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
