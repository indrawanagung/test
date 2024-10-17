'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { useRouter } from "next/navigation";
import { RegisterRequest, registerUser } from "@/lib/fetcher/auth";
import { request } from "http";

const page = () => {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil elemen input langsung dari event.target.elements
    const form = event.target as HTMLFormElement;
    const request : RegisterRequest = {
        full_name : form.first_name.value + form.last_name.value,
        email_address : form.email.value,
        phone_number : form.phone.value,
        password : form.password.value
    }
    const response = await registerUser(request);
    if (!response.header.error) {
      // Jika berhasil, arahkan ke halaman yang dilindungi
      router.push("/login");
    } else {
     
    }
  };
  return (
    <>
      <MaxWidthWrapper className="flex justify-center items-start h-screen mt-12">
        <div className="flex flex-col w-full md:w-[60rem]  h-fit py-10 px-10 items-center justify-center gap-6 border rounded-xl border-gray-200 ">
          <div className="flex flex-col gap-2 items-center w-full">
            <h2 className="text-2xl text-gray-600 font-medium tracking-wider">
              Register
            </h2>
            <span className="text-gray-400">
              Best place to buy and sell digital products
            </span>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-5 w-full px-6">
              {/* FIRST AND LAST NAME  */}
              <div className="flex flex-col gap-5 md:flex-row justify-between w-full">
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">First Name*</h4>
                  <input
                    name="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">Last Name*</h4>
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
              </div>
              {/* EMAIL AND PHONE NUMBER  */}
              <div className="flex flex-col gap-5 md:flex-row justify-between">
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">Email*</h4>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">Phonne Number*</h4>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h4 className="text-gray-600 font-medium">Address*</h4>
                <input
                  name="address"
                  type="text"
                  placeholder="Enter your first name"
                  className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                />
              </div>
              {/* CITY AND POST CODE  */}
              <div className="flex flex-col gap-5 md:flex-row justify-between">
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">City*</h4>
                  <input
                    name="city"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start w-full">
                  <h4 className="text-gray-600 font-medium">Post Code*</h4>
                  <input
                    name="post_code"
                    type="number"
                    placeholder="Enter your first name"
                    className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h4 className="text-gray-600 font-medium">Password*</h4>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your first name"
                  className="py-2 px-3 w-full border border-gray-200 rounded-lg outline-none text-gray-600"
                />
              </div>
              <button type="submit" className="text-white bg-purple-500 px-6 py-2 hover:text-purple-500 hover:bg-white border border-purple-500 rounded-lg self-center mt-2 duration-300">
                Register
              </button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
