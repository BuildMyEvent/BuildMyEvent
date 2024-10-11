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

  const getEventBySlug = (slug) => {
    return events.find(event => event.slug === slug);
  };

  const fetchUserById = async (userId) => {
    try {
      const userResponse = await fetch(`http://localhost:4000/users/by-id/${userId}`, {
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
    if (id) {
      fetchUserById(id);
    }
  }, [id]);

  console.log(id, 'userData', userData);

  // Placeholder data
  // const user = {
  //   name: "Alex Johnson",
  //   email: "alex@example.com",
  //   avatar: "/placeholder.svg?height=100&width=100",
  //   banner: "/placeholder.svg?height=300&width=1000",
  //   twitter: "alexj",
  //   instagram: "alex.johnson",
  // }

  return (
    <div>
      <NavBarComponent logo={BMELogo}  />
      <div className="flex flex-col min-h-screen mt-[80px]">
        {/* Display user name if available */}
        {/* {userData ? (
          <h1>Welcome, {userData.name}</h1>
        ) : (
          <p>Loading user data...</p>
        )} */}

        <Profile userData={userData} />
      </div>
    </div>
  );
}
