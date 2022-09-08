import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home: NextPage = () => {
  const [isUser, setUser] = useState(false);
  return (
    <div>
      <Head>
        <title>E-bank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-6">
        {!isUser ? (
          <div>
            <div className="max-w-lg mx-auto pt-4 pb-3">
              <img className="aspect-square" src="/Hero.svg" alt="hero img" />
            </div>
            <div className="flex justify-center flex-col align-middle items-center space-y-3">
              <div className="flex justify-center space-x-4 w-fit">
                <input
                  type="password"
                  name="pin"
                  id="pin"
                  placeholder="Enter you'r pin"
                  className="border rounded-md px-2 py-2 focus:outline-none focus:border focus:border-black"
                />
                <button className="text-xl px-6 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  Log in
                </button>
              </div>

              <Link href={"/account"}>
                <a className="text-blue-500 underline cursor-pointer hover:text-blue-600">
                  Create account
                </a>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="pt-12">
              <h2 className="text-6xl text-center">Welcome to E-bank</h2>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;