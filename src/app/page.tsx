"use client";

import { Button } from "@/components/ui/button";
import { useConnect, useAccount, useDisconnect, useBalance } from "wagmi";
import { injected } from "wagmi/connectors";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { connect } = useConnect();
  const { chain, address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  // const { chain } = useNetwork();
  const { data: balance } = useBalance({ address });

  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center lg:order-2">
              {isConnected ? (
                <div className="text-black">
                  <button
                    onClick={() => disconnect()}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-4"
                  >
                    Disconnect
                  </button>
                  <Card>
                    <CardHeader>
                      <CardTitle>Wallet Details</CardTitle>
                      <CardDescription>
                        Wallet address: {address}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>Chain ID: {chain?.id}</CardContent>
                    <CardContent>
                      Token: {balance?.symbol} ({balance?.formatted})
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div>
                  {/* <button
                    
                  >
                    Connect Wallet
                  </button> */}

                  <Button
                    onClick={() => connect({ connector: injected() })}
                    className="text-green-100 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Connect Wallet
                  </Button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
