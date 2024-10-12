"use client";
import { useState, useEffect } from 'react';
import { events } from '@/data/events';
import { useParams } from 'next/navigation';
import '../../../app/globals.css';
import { Profile } from '@/components/Profile';
import NavBarComponent from '@/components/NavBar';
import BMELogo from '@public/BME-Logos/BME-Logo-Over-White1.svg';

export default function EventPage() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  const isWalletAddress = (input: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(input);
  };

  const fetchUserById = async (userId: string | string[]) => {
    try {
      const userResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/users/by-id/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (userResponse.ok) {
        const data = await userResponse.json();
        setUserData(data.user);
        console.log('User data:', data);
      } else {
        const errorData = await userResponse.json();
        console.log('Failed to fetch user data:', errorData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (typeof id === 'string' && !isWalletAddress(id)) {
      fetchUserById(id);
    }
  }, [id]);

  console.log(id, 'userData', userData);

  return (
    <div>
      <NavBarComponent logo={BMELogo} />
      <div className="flex flex-col min-h-screen mt-[80px]">
        {/* Display user name if available */}
        {/* {userData ? (
          <h1>Welcome, {userData.name}</h1>
        ) : (
          <p>Loading user data...</p>
        )} */}

        <Profile userData={userData ? userData : {
          wallet: id
        }} />
      </div>
    </div>
  );
}
