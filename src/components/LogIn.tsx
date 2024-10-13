"use client";
import { useContext, useState } from "react";
import { Mail, KeyRound, Eye } from "lucide-react";
import BME from "@public/BME-Logos/BME.svg";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

interface LogInProps {
  onLoginSuccess: () => void;
}

export default function LogIn({ onLoginSuccess }: LogInProps) {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log('login data', {
      email: formData.email,
      password: formData.password,
    });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log('response', response);

      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        login(data.user);
        onLoginSuccess();
        console.log("Login successful");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please check your credentials.");
        console.log('errorData', errorData);
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="animate__animated animate__fadeInRight overflow-x-hidden bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 w-full">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center w-full flex-col">
          <Image src={BME} alt="BuildMyEvent logo" width={150} />
          <p className="text-[22px] text-stellar-blue font-semibold">
            Create amazing events in minutes
          </p>
        </div>
        <div className="bg-white mt-4 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border-2 border-gray-300 w-full">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <article className="flex justify-between ">
                <h2 className="text-2xl text-stellar-blue font-medium">Log In!</h2>
              </article>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-light-blue mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                    placeholder="kevin@example.com"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-light-blue mb-1">
                  Password
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-10 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                    placeholder="••••••••"
                    required
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2">
                  {error}
                </p>
              )}
              <div className="flex justify-center">
                <ShimmerButton type="submit">I’m Ready!</ShimmerButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
