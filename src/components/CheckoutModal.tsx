"use client";
import { useContext, useState } from "react";
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
import { AuthContext } from "@/context/AuthContext";
import {
  PayEmbed,
  getDefaultToken
} from "thirdweb/react";
import { getChainObject, productionTokens, thirdwebClient } from "@/utils/thirdweb";

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
  const { login, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "metamask" | null
  >(null);
  const [successTransactionHash, setSuccessTransactionHash] = useState('');

  const handlePurchase = () => {
    setIsProcessing(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    }).then(() => {
      const ticketId = getTicketIdByType(ticket?.type ?? '');
      mintTicket(ticketId)

      setIsProcessing(false);
      setPaymentSuccess(true);
    });
  };

  console.log('ticket', ticket);


  const mintTicket = async (ticketId: number) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/mint/${ticketId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userAddress: user?.wallet,
          eventId: 9,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('data', data);
        setSuccessTransactionHash(data.transactionHash)
        // login(data.user);
        // onLoginSuccess();
        // console.log("Login successful");
      } else {
        const errorData = await response.json();
        // setError(errorData.message || "Login failed. Please check your credentials.");
        console.log('errorData', errorData);
        // console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleMetaMaskPayment = () => {
    setIsProcessing(true);

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }).then(() => {
      const ticketId = getTicketIdByType(ticket?.type ?? '');
      mintTicket(ticketId)
      setIsProcessing(false);
      setPaymentSuccess(true);
    });
  };

  const getTicketIdByType = (ticketType: string) => {
    switch (ticketType) {
      case 'GENERAL':
        return 0;
      case 'VIP':
        return 1;
      case 'BUILDER':
        return 2;
      default:
        return -1; // Return -1 if the input doesn't match any case
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-full flex justify-center">
        <Button disabled={isDisabled} className="w-full">
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

                      <PayEmbed
                        client={thirdwebClient}
                        theme={"light"}
                        supportedTokens={
                          productionTokens
                        }
                        payOptions={{
                          mode: "direct_payment",
                          buyWithFiat: false,
                          onPurchaseSuccess(info: any) {
                            console.log('info', info?.status?.destination.transactionHash);

                            handleMetaMaskPayment()
                            // handleSuccessPurchase({
                            //   purchaseTransactionHash: info?.status?.destination.transactionHash
                            // })
                          },
                          paymentInfo: {
                            amount: ticket?.price,
                            chain: getChainObject('baseSepolia'),
                            token: getDefaultToken(getChainObject('baseSepolia'), "USDC"),
                            sellerAddress:
                              "0x173874BfbD1BdCE49D25eF6bF2f20Aff7fcf2b56",
                          },
                          metadata: {
                            name: ticket?.title,
                            image: ticket?.image
                          },
                        }}
                      />

                      {/* <Button
                        className="mt-4 w-full"
                        onClick={handleMetaMaskPayment}
                      >
                        Confirm MetaMask Payment
                      </Button> */}
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
              <p className="mb-2">Your purchase has been completed.</p>
              <p className="">You receive this NFT collectible</p>
              <img src={ticket?.image} className="max-w-[200px]" />
              {successTransactionHash &&
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://sepolia.basescan.org/tx/${successTransactionHash}`}
                  className="underline mb-2"
                >
                  View on block explorer
                </a>
              }
              <Button onClick={() => setIsOpen(false)}>Close</Button>
            </div>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
}
