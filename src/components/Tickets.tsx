"use client";
import ShimmerButton from './magicui/shimmer-button';
import GeneralTicket from '@public/GeneralTicket.svg';
import BuilderTicket from '@public/BuilderTicket.svg';
import VIPTicket from '@public/VIPTicket.svg';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Tickets() {
    const ticketVariants = (direction: 'left' | 'right' | 'bottom') => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -300 : direction === 'right' ? 200 : 0,
            y: direction === 'bottom' ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.9,
                bounce: 0.4,
            },
        },
        exit: {
            opacity: 0,
            x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
            y: direction === 'bottom' ? 200 : 0,
            transition: {
                type: 'spring',
                duration: 1.2,
            },
        },
    });

    return (
        <section className="no-scrollbar flex flex-col lg:flex-row justify-center items-center gap-10 py-12 relative overflow-x-hidden">
            {/* Left License Card */}
            <motion.div
                className="bg-[#f8f8f9] border-[0.1rem] rounded-2xl p-8 max-w-md w-full relative lg:-mr-12 lg:-mt-9 pointer-events-none"
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={ticketVariants('left')}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="text-xl font-semibold mb-4">
                    Ticket <span className="text-light-yellow">General</span>
                </h2>
                <div className="flex justify-center w-full mb-2">
                    <Image src={GeneralTicket} alt="General Ticket" width={120} className="rounded-xl" />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$6</span>
                </div>
                <p className="mb-2 text-gray-700 pr-6">
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
                <div className="w-full flex justify-center">
                    <button className="border border-gray-700 text-black shadow-2xl py-2 px-4 rounded-xl w-[70%] pointer-events-auto">
                        Obtener Tickets
                    </button>
                </div>
            </motion.div>

            {/* Center License Card */}
            <div
                className="bg-white shadow-2xl border-[0.1rem] rounded-2xl p-8 max-w-md w-full relative z-10 lg:-mt-12 lg:-ml-12 pointer-events-none">
                <div className="absolute top-4 right-4 bg-green-200 text-green-500 px-2 py-1 rounded">
                    Recomendada
                </div>
                <h2 className="text-xl font-semibold mb-4">
                    Ticket para <span className="text-light-yellow">Builder</span>
                </h2>
                <div className="flex justify-center w-full mb-2">
                    <Image src={BuilderTicket} alt="Builder Ticket" width={120} className="rounded-xl" />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$10</span>
                </div>
                <span className="text-sm text-gray-500 mb-2 block">
                    Para comprar, necesitas 10 puntos en{' '}
                    <a href="https://www.talentprotocol.com/" className="font-bold text-light-blue">
                        Talent Protocol
                    </a>
                </span>
                <p className="mb-2 text-gray-700">
                    Talleres prácticos y sesiones interactivas para aprender sobre este Layer2 con expertos.
                </p>
                <ul className="mb-6 space-y-2">
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Talleres prácticos
                    </li>
                    <li className="flex items-center">
                        <span className="text-light-yellow mr-2">●</span> Recursos exclusivos
                    </li>
                </ul>
                <div className="w-full flex justify-center">
                    <ShimmerButton className="pointer-events-auto">Obtener Tickets</ShimmerButton>
                </div>
            </div>

            {/* Right License Card */}
            <motion.div
                className="bg-[#f8f8f9] border-[0.1rem] rounded-2xl p-8 max-w-md w-full relative lg:-ml-12 lg:-mt-9 pointer-events-none"
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={ticketVariants('right')}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="text-xl font-semibold mb-4">
                    Ticket <span className="text-light-yellow">VIP</span>
                </h2>
                <div className="flex justify-center w-full mb-2">
                    <Image src={VIPTicket} alt="VIP Ticket" width={120} className="rounded-xl" />
                </div>
                <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold">$8</span>
                </div>
                <p className="mb-2 text-gray-700">
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
                <div className="w-full flex justify-center">
                    <button className="border border-gray-700 text-black shadow-2xl py-2 px-4 rounded-xl w-[70%] pointer-events-auto">
                        Obtener Tickets
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
