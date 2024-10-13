"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ticket } from "@/types/interfaces";

// Sample component to be displayed inside the modal
const SampleComponent = () => (
  <div className="p-4 bg-gray-100 rounded-md">
    <h3 className="text-lg font-semibold mb-2">Sample Component</h3>
    <p>This is a sample component displayed inside the modal.</p>
  </div>
);

interface CheckoutModalProps {
  isDisabled?: boolean;
  buttonText?: string;
  ticket?: Ticket;
}

export default function CheckoutModal({
  isDisabled,
  buttonText,
  ticket,
}: CheckoutModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full" disabled={isDisabled}>
          {buttonText ? buttonText : "Obtener Tickets"}
        </Button>
      </DialogTrigger>

      {ticket && ( // Verifica que 'ticket' no sea undefined
        <DialogContent className="w-full max-w-none">
          <DialogHeader>
            <DialogTitle>
              {ticket.title} <span className="text-yellow-500">{ticket.price}</span>
            </DialogTitle>
            <DialogDescription>{ticket.description}</DialogDescription>
          </DialogHeader>
          <SampleComponent />
        </DialogContent>
      )}
    </Dialog>
  );
}
