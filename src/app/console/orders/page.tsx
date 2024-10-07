"use client";

import React, { useEffect, useState } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const orders = [
  { username: 'Villarley', avatar: 'https://i.pravatar.cc/150?img=1', dateBought: '23/10/2024', type: 'Gold', quantity: '1' },
  { username: 'Alice', avatar: 'https://i.pravatar.cc/150?img=2', dateBought: '11/09/2024', type: 'Silver', quantity: '3' },
  { username: 'John', avatar: 'https://i.pravatar.cc/150?img=3', dateBought: '01/10/2024', type: 'Platinum', quantity: '2' },
  { username: 'Sophia', avatar: 'https://i.pravatar.cc/150?img=4', dateBought: '18/10/2024', type: 'Gold', quantity: '4' },
];

export default function OrdersPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="text-3xl font-bold" style={{ color: '#14162E' }}>Event Name</div>
        {currentDate && <div className="text-gray-500 text-lg">{currentDate}</div>}
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-light-blue/20">
            <tr>
              <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">UserName</th>
              <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Date Bought</th>
              <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
              <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
              <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-light-White' : 'bg-white'} transition-opacity opacity-90 hover:opacity-100`}>
                <td className="px-8 py-6 text-gray-800 flex items-center space-x-4">
                  <img src={order.avatar} alt={`${order.username}'s avatar`} className="w-12 h-12 rounded-full" />
                  <span className="font-semibold">{order.username}</span>
                </td>
                <td className="px-8 py-6 text-gray-800">{order.dateBought}</td>
                <td className="px-8 py-6 text-gray-800">{order.type}</td>
                <td className="px-8 py-6 text-gray-800">X{order.quantity}</td>
                <td className="px-8 py-6">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex items-center justify-center text-stellar-grey p-2 rounded-full transition-opacity opacity-80 hover:opacity-100">
                        <MoreVertical className="w-6 h-6" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-36 p-4 bg-white shadow-md rounded-md">
                      <div className="flex flex-col space-y-3">
                        <button className="flex items-center space-x-2 px-4 py-2 text-sm text-light-blue rounded transition-opacity opacity-80 hover:opacity-100">
                          <Edit className="w-5 h-5" />
                          <span>Edit</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 text-sm text-strong-red rounded transition-opacity opacity-80 hover:opacity-100">
                          <Trash2 className="w-5 h-5" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
