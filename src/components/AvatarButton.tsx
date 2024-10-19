import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useDisconnect } from 'wagmi';

export const AvatarButton = ({ userInfo }: any) => {
  const { user, logout } = useContext(AuthContext);
  const { disconnect } = useDisconnect();

  const handleLogout = () => {
    logout();
    disconnect()
    // Optionally, navigate to a different page or provide a message
    // e.g., router.push('/login'); if using Next.js routing
  };

  return (
    <div className='rounded-3xl border-white p-1 bg-white max-w-12'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage className='object-cover' src={
              userInfo?.profilePicture
                ? userInfo?.profilePicture
                : 'https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg'
            } />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className='cursor-pointer'
            onClick={() => {
              handleLogout()
            }}
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}