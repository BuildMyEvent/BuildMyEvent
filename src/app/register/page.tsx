"use client";
import { User, Mail, KeyRound, Eye } from "lucide-react";
import BME from "../../../public/BME-Logos/BME-Logo-Over-White1.svg";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import "animate.css";
import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="animate__animated animate__fadeInRight overflow-x-hidden min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 w-full">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center w-full flex-col">
          <Image src={BME} alt="BuildMyEvent logo" width={320} />
          <p className="text-[22px] text-stellar-blue font-semibold">
            Crea eventos increíbles en minutos
          </p>
        </div>
        <div className="bg-white mt-4 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border-2 border-gray-300 w-full">
          <div className="p-8">
            <form className="space-y-6">
              <article className="flex justify-between ">
                <h2 className="text-2xl text-stellar-blue font-medium">¡Registrate!</h2>
                {/* <Link href="/auth/logIn">
                  <div className=" bg-amber-100 text-orange-400 px-2 py-1 rounded cursor-pointer">
                    ¿Ya tienes cuenta?
                  </div>
                </Link> */}
              </article>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-light-blue mb-1"
                  >
                    Nombre
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      id="firstName"
                      type="text"
                      className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                      placeholder="Kevin"
                      required
                    />
                  </div>
                </div>
                <div className="relative">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-light-blue mb-1"
                  >
                    Apellido
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      id="lastName"
                      type="text"
                      className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                      placeholder="Latino"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-light-blue mb-1"
                >
                  Correo electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    type="email"
                    className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                    placeholder="kevin@ejemplo.com"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-light-blue mb-1"
                >
                  Contraseña
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    type="password"
                    className="w-full pl-10 pr-10 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-light-blue mb-1"
                >
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="confirmPassword"
                    type="password"
                    className="w-full pl-10 pr-10 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:border-transparent transition duration-200 ease-in-out text-blue-600"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="flex justify-center">
                <ShimmerButton>¡Estoy Listo!</ShimmerButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
