"use client"
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

// Sample component to be displayed inside the modal
const SampleComponent = () => (
  <div className="p-4 bg-gray-100 rounded-md">
    <h3 className="text-lg font-semibold mb-2">Sample Component</h3>
    <p>This is a sample component displayed inside the modal.</p>
  </div>
)

interface CheckoutModalProps {
  isDisabled?: boolean
  buttonText?: string
}

export default function CheckoutModal({ isDisabled, buttonText }: CheckoutModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Open Modal</Button> */}
        <Button className="w-full" disabled={isDisabled}>{buttonText ? buttonText : 'Obtener Tickets'}</Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-none">
        <DialogHeader>
          {/* <DialogTitle>Modal Title</DialogTitle> */}
          <DialogDescription>
            This modal contains a sample component.
          </DialogDescription>
        </DialogHeader>
        {/* <div>
          <Paypal />
        </div> */}
        <SampleComponent />
      </DialogContent>
    </Dialog>
  )
}