'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/fetcher/auth";
import Cookies from 'js-cookie';
import Link from "next/link";
import { UserAPI } from "@/lib/fetcher/user/user";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await UserAPI.LoginUser(email, password)

    if (!response.header.error) {
      // Jika berhasil, arahkan ke halaman yang dilindungi
        // Simpan token ke localStorage
        Cookies.set('token', response.data, { expires: 1 }); // Token akan kedaluwarsa dalam 1 hari
      router.push("/");
    } else {
      // Jika gagal, tampilkan pesan error
      setError(response.header.message);
    }
  };
  return (
    <>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 justify-start items-center h-screen mt-24">
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="flex gap-2 text-2xl font-medium">
              <h4>Log</h4>
              <h4 className="text-purple-500">In</h4>
            </div>
            <span className="text-gray-600 font-light">
              Best place to buy and sell digital products
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 w-full md:w-[35rem] px-10 py-6 border border-gray-200 rounded-xl">
              <div className="flex flex-col gap-1 items-start">
                <h5 className="text-gray-500">Email*</h5>
                <input
                  placeholder="Enter Your Email"
                  className="outline-none px-3 py-2 border border-gray-200 rounded-lg text-gray-500 w-full"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 items-start">
                <h5 className="text-gray-500">Password*</h5>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter Your Password"
                  className="outline-none px-3 py-2 border border-gray-200 rounded-lg text-gray-500 w-full"
                />
              </div>
              <span className="text-gray-800">Forgot Password?</span>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="text-white bg-purple-500 rounded-xl px-5 py-2"
                >
                  Login
                </button>
                <Link href="/register" className="text-purple-500 rounded-xl px-5 py-2 hover:text-black">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default LoginPage
