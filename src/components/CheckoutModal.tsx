"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
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
import Image from "next/image";
import Metamask from "../../public/metamask.png";
import { CreditCard } from "lucide-react";

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "metamask" | null
  >(null);

  const handlePurchase = () => {
    setIsProcessing(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    }).then(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    });
  };

  const handleMetaMaskPayment = () => {
    // Aquí puedes agregar la lógica de pago con MetaMask
    setIsProcessing(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    }).then(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-full flex justify-center">
        <Button disabled={isDisabled}>
          {buttonText ? buttonText : "Get Tickets"}
        </Button>
      </DialogTrigger>

      {ticket && (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {ticket.title}{" "}
              <span className="text-yellow-500">{ticket.price}</span>
            </DialogTitle>
            <DialogDescription>{ticket.description}</DialogDescription>
          </DialogHeader>

          {!paymentSuccess ? (
            <div>
              {!isProcessing ? (
                <>
                  {!paymentMethod ? (
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">
                        Select a payment method
                      </h3>
                      <div className="flex flex-col space-y-4">
                        <Button
                          className="w-full flex justify-between"
                          onClick={() => setPaymentMethod("card")}
                        >
                          <p>Pay with Card</p>
                          <CreditCard color="#fff" size={29} />
                        </Button>
                        <Button
                          className="w-full flex justify-between"
                          onClick={() => setPaymentMethod("metamask")}
                        >
                          <p>Pay with wallet</p>
                          <Image src={Metamask} width={29} alt="Metamask" />
                        </Button>
                      </div>
                    </div>
                  ) : paymentMethod === "card" ? (
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">
                        Enter your card information
                      </h3>
                      <form className="space-y-4">
                        <div>
                          <label
                            htmlFor="cardNumber"
                            className="block text-sm font-medium"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            className="mt-1 block w-full border rounded-md p-2"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="flex space-x-4">
                          <div className="w-1/2">
                            <label
                              htmlFor="expiry"
                              className="block text-sm font-medium"
                            >
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="expiry"
                              className="mt-1 block w-full border rounded-md p-2"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div className="w-1/2">
                            <label
                              htmlFor="cvc"
                              className="block text-sm font-medium"
                            >
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cvc"
                              className="mt-1 block w-full border rounded-md p-2"
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </form>
                      <Button className="mt-4 w-full" onClick={handlePurchase}>
                        Pay
                      </Button>
                    </div>
                  ) : (
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">
                        Pay with MetaMask
                      </h3>
                      <Button
                        className="mt-4 w-full"
                        onClick={handleMetaMaskPayment}
                      >
                        Confirm MetaMask Payment
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center p-4">
                  <p className="text-lg font-semibold mb-2">
                    Processing payment...
                  </p>
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-4">
              <CheckCircle className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Payment Successful!
              </h3>
              <p className="mb-4">Your purchase has been completed.</p>
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
