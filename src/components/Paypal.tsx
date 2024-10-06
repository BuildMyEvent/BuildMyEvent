// import { usePaper } from "@/context/PaperContext";
// import { mintToken, thirdwebClient } from "@/utils/thirdweb";
// import { getChainObject } from "@/utils/utils";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useState } from "react";
// import { Loading } from "./Loading";

interface PaypalProps {
  showSpinner?: boolean
  onSuccess?: (data?: any, triggerFunction?: any) => void
  quantity?: string
  totalPrice?: string
  collectionAddress?: string
  tokenId?: string
  chain?: string
  slug?: string
}

export const Paypal = ({ slug, showSpinner, onSuccess, quantity, totalPrice, collectionAddress, tokenId, chain }: PaypalProps) => {
  // const { connected, address, wallet, smartWallet, smartWalletAccount } = usePaper()
  const [loading, setLoading] = useState(false)
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = async () => {
    console.log('cart', [
      {
        id: "0",
        quantity: "1",
        value: totalPrice
      }
    ],);

    return fetch("/api/paypal/create-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            id: "0",
            quantity: "1",
            value: totalPrice
          }
        ],
      }),
    })
      .then((response) => response.json())
      .then((order) => {
        console.log('order!!', order);

        return order.id
      });
  }

  // const handleSuccessPurchase = async (orderData: any) => {
  //   try {
  //     const transactionHash = await mintToken(collectionAddress ?? '', tokenId ?? '', chain, address, quantity);
  //     onSuccess && onSuccess({
  //       tokenMintTransactionHash: transactionHash,
  //       paymentMethod: 'paypal',
  //       paymentStatus: 'COMPLETED',
  //       payerId: orderData.payer.payer_id
  //     },
  //       () => {
  //         setLoading(false)
  //         router.push(`/event/${slug}/checkout/success?contractAddress=${collectionAddress}&tokenId=${tokenId}`)
  //       }
  //     );
  //   } catch (error) {
  //     // Handle any errors that might occur during the transaction
  //     console.error("Error during minting:", error);
  //   }
  // }

  function onApprove(data: any) {
    setLoading(true)
    console.log('data', data);
    return fetch("/api/paypal/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
      .then((response) => response.json())
      .then((orderData) => {
        console.log('orderData', orderData);
        if (orderData.status === "COMPLETED") {
          //handleSuccessPurchase(orderData)
        }
      });
  }

  const onError = (data: any) => {
    console.log('ERROR on purchase', data);
  }

  return (
    <div className="">
      {/* {(isPending) && <Loading />} */}
      {(isPending) && 'loading'}
      {!loading &&
        <PayPalButtons
          // style={{ layout: 'vertical' }}
          disabled={false}
          // forceReRender={[{ layout: 'vertical' }]}
          fundingSource={undefined}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      }
      {/* {loading && <Loading />} */}
    </div>
  );
}