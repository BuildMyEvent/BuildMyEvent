"use client"
import React from 'react'
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

interface Props {

}

export const LoginButton: React.FC<Props> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogInOpen, setIsLogInOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const loggedIn = false

  return (
    <>
      {!loggedIn &&
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
        <DialogContent className="w-full max-w-[600px] max-h-[800px]">
          <DialogHeader>
            {/* <DialogTitle>Modal Title</DialogTitle> */}
            {/* <DialogDescription>
              This modal contains a sample component.
            </DialogDescription> */}
          </DialogHeader>
          <div>
            {isLogInOpen &&
              <LogIn />
            }

            {isRegisterOpen &&
              <Register />
            }
          </div>
          {/* <SampleComponent /> */}
        </DialogContent>
      </Dialog>

      {loggedIn &&
        <div className='hidden md:block mx-auto'>
          <AvatarButton />
        </div>
      }
    </>
  );
};