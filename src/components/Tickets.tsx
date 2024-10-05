import ShimmerButton from './magicui/shimmer-button';
import GeneralTicket from '../../public/GeneralTicket.svg'
import BuilderTicket from '../../public/BuilderTicket.svg'
import VIPTicket from '../../public/VIPTicket.svg'
import Image from 'next/image';
import React from 'react';

export default function Tickets() {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center gap-10 py-12 relative">
            {/* Left License Card */}
            <div className="bg-[#f8f8f9] border rounded-2xl p-8 max-w-md w-full relative lg:-mr-12 -mt-9 ">
                <h2 className="text-lg font-semibold mb-4">Ticket General</h2>
                <div className='flex justify-center w-full mb-2'>
                    <Image src={GeneralTicket} alt='General Ticket' width={120} className='rounded-xl' />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$6</span>
                </div>
                <p className="mb-6 text-gray-700 pr-6">
                    Acceso a todas las charlas y oportunidades de networking en el meetup de Base en Costa Rica.
                </p>
                <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">●</span> Acceso completo a las charlas
                    </li>
                    <li className="flex items-center">
                        <span className="text-yellow-500 mr-2">●</span> Networking con profesionales
                    </li>
                </ul>
                <div className='w-full flex justify-center'>
                    <button className="border border-gray-700 text-black shadow-2xl  py-2 px-4 rounded-xl  w-[70%]">Obtener Tickets </button>
                </div>
            </div>

            {/* Center License Card (Highlighted) */}
            <div className="bg-white shadow-2xl border rounded-2xl p-8 max-w-md w-full relative z-10 lg:-mt-16 lg:-ml-12">
                <div className="absolute top-4 right-4 bg-green-200 text-green-500 px-2 py-1 rounded">Recomendada</div>
                <h2 className="text-lg font-semibold mb-4">Ticket para Builder</h2>
                <div className='flex justify-center w-full mb-2'>
                    <Image src={BuilderTicket} alt='General Ticket' width={120} className='rounded-xl' />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$10</span>
                </div>
                <span className="text-sm text-gray-500 mb-2 block">Para comprar, necesitas 10 puntos en <a href='https://www.talentprotocol.com/' className='font-bold text-light-blue'>Talent Protocol</a></span>
                <p className="mb-6 text-gray-700">
                    Talleres prácticos y sesiones interactivas para aprender sobre este Layer2 con expertos.
                </p>
                <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Talleres prácticos
                    </li>
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Recursos exclusivos
                    </li>
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Networking con desarrolladores
                    </li>
                </ul>
                <div className='w-full flex justify-center'>
                    <ShimmerButton>
                        Obtener Tickets
                    </ShimmerButton>
                </div>
            </div>

            {/* Right License Card (Same as Left) */}
            <div className="bg-[#f8f8f9] border rounded-2xl p-8 max-w-md w-full relative  lg:-ml-12 -mt-8">
                <h2 className="text-lg font-semibold mb-4">Ticket VIP</h2>
                <div className='flex justify-center w-full mb-2'>
                    <Image src={VIPTicket} alt='General Ticket' width={120} className='rounded-xl' />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$8</span>
                </div>
                <p className="mb-6 text-gray-700">
                    Incluye acceso a sesiones privadas con ponentes y beneficios exclusivos.
                </p>
                <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Sesiones privadas
                    </li>
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Regalos exclusivos
                    </li>
                </ul>
                <div className='w-full flex justify-center'>
                    <button className="border border-gray-700 text-black shadow-2xl  py-2 px-4 rounded-xl  w-[70%]">Obtener Tickets </button>
                </div>
            </div>
        </section>
    );
};

