"use client";
import { useContext, useState } from "react";
import { User, Mail, KeyRound, Eye } from "lucide-react";
import BME from "@public/BME-Logos/BME.svg";
import Image from "next/image";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function Register() {
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log('register data', {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      password: formData.password,
    });

    const bearerToken = ''

    try {
      // --wallet: formData.wallet,
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log('response', response);

      if (response.ok) {
        // Handle success (e.g., redirect or display a success message)
        const data = await response.json();
        console.log('data', data);
        login(data.user); 
        console.log("Registration successful");
      } else {
        const errorData = await response.json();

        console.log('errorData', errorData);

        // Handle error (e.g., display an error message)
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    // try {
    //   // --wallet: formData.wallet,
    //   const response = await fetch("https://api.buildmyevent.xyz/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       lastname: formData.lastname,
    //       email: formData.email,
    //       password: formData.password,
    //     }),
    //     mode: "no-cors",
    //   });

    //   console.log('response', response);

    //   if (response.ok) {
    //     // Handle success (e.g., redirect or display a success message)
    //     console.log("Registration successful");
    //   } else {
    //     // Handle error (e.g., display an error message)
    //     console.log("Registration failed");
    //   }
    // } catch (error) {
    //   console.error("Error during registration:", error);
    // }
  };

  // {
  //   "name":"Juan Pablo",
  //   "lastname": "Villaplana",
  //   "email": "jpvillaplana@gmail.com",
  //   "password":"password",
  //   "wallet":"0x0"
  // }

  return (
    <div className="animate__animated animate__fadeInRight overflow-x-hidden bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4 w-full">
      <div className="max-w-md w-full">
        <div className="flex justify-center items-center w-full flex-col">
          <Image src={BME} alt="BuildMyEvent logo" width={120} />
          <p className="text-[22px] text-stellar-blue font-semibold">
            Crea eventos increíbles en minutos
          </p>
        </div>
        <div className="bg-white mt-4 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border-2 border-gray-300 w-full">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <article className="flex justify-between ">
                <h2 className="text-2xl text-stellar-blue font-medium">¡Registrate!</h2>
                {/* <Link href="/auth/logIn">
                  <div className="bg-amber-100 text-orange-400 px-2 py-1 rounded cursor-pointer">
                    ¿Ya tienes cuenta?
                  </div>
                </Link> */}
              </article>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-light-blue mb-1">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm"
                    placeholder="Juan Pablo"
                    required
                  />
                  <User className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <div className="relative">
                  <label htmlFor="lastname" className="block text-sm font-medium text-light-blue mb-1">
                    Apellido
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm"
                    placeholder="Villaplana"
                    required
                  />
                  <User className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-light-blue mb-1">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="jpvillaplana@gmail.com"
                  required
                />
                <Mail className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-light-blue mb-1">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
                <KeyRound className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Eye className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-light-blue mb-1">
                  Confirmar contraseña
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 bg-white bg-opacity-50 border border-gray-300 rounded-lg shadow-sm"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
                <KeyRound className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Eye className="absolute right-3 top-2/3 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="flex justify-center">
                <ShimmerButton type="submit">¡Estoy Listo!</ShimmerButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
