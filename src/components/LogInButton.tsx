"use client"
import React, { useContext } from 'react'
import Link from '../../node_modules/next/link';
import { AvatarButton } from './AvatarButton';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Paypal } from "./Paypal"
import LogIn from './LogIn';
import Register from './Register';
import { AuthContext } from '@/context/AuthContext';
import WalletWrapper from './WalletWrapper';
import { useAccount } from 'wagmi';

interface Props {

}

export const LoginButton: React.FC<Props> = ({ }) => {
  const { user, login, logout } = useContext(AuthContext);
  const { address } = useAccount();
  const [isOpen, setIsOpen] = useState(false)
  const [isLogInOpen, setIsLogInOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const handleLoginSuccess = () => {
    setIsOpen(false);
  };

  console.log('user', user);
  

  console.log('address', address);

  return (
    <>
      <div className='my-auto flex'>
        {!user &&
          <div className='my-auto flex'>
            <Button className='reg bg-light-blue text-white cursor-pointer rounded font-semibold mx-2 w-min py-2 shadow-lg transition duration-400 hover:bg-light-blue hover:shadow-light-blue'
              onClick={() => {
                setIsLogInOpen(true)
                setIsOpen(true)
              }}>Log In</Button>
            <Button
              className='log text-light-blue bg-white border border-light-blue cursor-pointer rounded font-semibold mx-2 w-min py-2 shadow-lg transition duration-400 hover:bg-light-blue hover:text-white hover:shadow-light-blue'
              onClick={() => {
                setIsRegisterOpen(true)
                setIsOpen(true)
              }}>
              Sign Up
            </Button>



            {/* <Button className='' href={'/register'}>Sign Up</Button> */}
          </div>
        }
        {!user &&
          <WalletWrapper
            className="min-w-[90px] z-[100] ml-2"
            text="Connect Wallet"
            withWalletAggregator={true}
          />
        }
      </div>

      {user &&
        <div className='hidden md:block mx-auto'>
          <AvatarButton userInfo={{ id: user?.id ? user?.id : user?.wallet }} />
        </div>
      }

      <Dialog
        open={isOpen}
        onOpenChange={(e: any) => {
          console.log('onOpenChange', e);
          setIsOpen(e)
          setIsLogInOpen(false)
          setIsRegisterOpen(false)
        }}
      >
        {/* <DialogTrigger asChild>
          <Button className="w-full">Obtener Tickets</Button>
        </DialogTrigger> */}
        <DialogContent className="w-full max-w-[600px] max-h-[800px] ">
          <DialogHeader>
            {/* <DialogTitle>Modal Title</DialogTitle> */}
            {/* <DialogDescription>
              This modal contains a sample component.
            </DialogDescription> */}
          </DialogHeader>
          <div className='my-auto'>
            {isLogInOpen &&
              <LogIn onLoginSuccess={handleLoginSuccess} />
            }

            {isRegisterOpen &&
              <Register onRegisterSuccess={handleLoginSuccess} />
            }
          </div>
          {/* <SampleComponent /> */}
        </DialogContent>
      </Dialog>


    </>
  );
};