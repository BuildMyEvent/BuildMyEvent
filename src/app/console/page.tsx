"use client";

import React, { useEffect, useState } from 'react';
import { Edit, Trash2, MoreVertical } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const orders = [
  { username: 'Villarley', avatar: 'https://i.pravatar.cc/150?img=1', dateBought: '23/10/2024', type: 'Gold', quantity: '1' },
  { username: 'Alice', avatar: 'https://i.pravatar.cc/150?img=2', dateBought: '11/09/2024', type: 'Silver', quantity: '3' },
  { username: 'John', avatar: 'https://i.pravatar.cc/150?img=3', dateBought: '01/10/2024', type: 'Platinum', quantity: '2' },
  { username: 'Sophia', avatar: 'https://i.pravatar.cc/150?img=4', dateBought: '18/10/2024', type: 'Gold', quantity: '4' },
];

function OrdersTable() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="bg-white p-8 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div className="text-2xl font-bold" style={{ color: '#14162E' }}>logo</div>
        <Button variant="outline" onClick={() => alert('Signing out...')} className="border-light-blue text-light-blue ">Sign Out</Button>
      </div>

      <Tabs defaultValue="orders">
        <TabsList className="mb-8">
          <TabsTrigger value="home" className="text-lg px-6 py-3 text-light-blue border-b-2 border-transparent hover:border-light-yellow">Home</TabsTrigger>
          <TabsTrigger value="my-page" className="text-lg px-6 py-3 text-light-blue border-b-2 border-transparent hover:border-light-yellow">My Page</TabsTrigger>
          <TabsTrigger value="events" className="text-lg px-6 py-3 text-light-blue border-b-2 border-transparent hover:border-light-yellow">Events</TabsTrigger>
          <TabsTrigger value="orders" className="text-lg px-6 py-3 text-light-blue border-b-2 border-light-blue">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <div className="flex items-center justify-between mb-6">
            <div className="text-3xl font-bold" style={{ color: '#14162E' }}>Event Name</div>
            {currentDate && <div className="text-gray-500 text-base">{currentDate}</div>}
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <table className="min-w-full bg-white">
              <thead className="bg-light-blue/20">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">UserName</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">DateBought</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-light-White' : 'bg-white'} hover:bg-light-blue/10`}>
                    <td className="px-8 py-6 text-gray-800 flex items-center space-x-4">
                      <img src={order.avatar} alt={`${order.username}'s avatar`} className="w-10 h-10 rounded-full" />
                      <span>{order.username}</span>
                    </td>
                    <td className="px-8 py-6 text-gray-800">{order.dateBought}</td>
                    <td className="px-8 py-6 text-gray-800">{order.type}</td>
                    <td className="px-8 py-6 text-gray-800">X{order.quantity}</td>
                    <td className="w-fit">
                      <Popover>
                        <PopoverTrigger asChild>
                          <button className="flex items-center justify-center text-stellar-grey p-2 rounded-full">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-32 p-2 bg-white shadow-md rounded-md">
                          <div className="flex flex-col space-y-2">
                            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-light-blue rounded">
                              <Edit className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-strong-red rounded">
                              <Trash2 className="w-4 h-4" />
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
        </TabsContent>

        <TabsContent value="home">
          <p>Home content goes here...</p>
        </TabsContent>
        <TabsContent value="my-page">
          <p>My Page content goes here...</p>
        </TabsContent>
        <TabsContent value="events">
          <p>Events content goes here...</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default OrdersTable;
