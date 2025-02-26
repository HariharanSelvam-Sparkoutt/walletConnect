"use client";

import { Button } from "@/components/ui/button";
import { useConnect, useAccount, useDisconnect, useBalance } from "wagmi";
import { injected } from "wagmi/connectors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Home() {
  const { connect } = useConnect();
  const { chain, address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });

  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex items-center lg:order-2">
              {clientReady ? (
                isConnected ? (
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
                  <Button
                    onClick={() => connect({ connector: injected() })}
                    className="text-green-100 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                  >
                    Connect Wallet
                  </Button>
                )
              ) : (
                // Placeholder UI to prevent SSR mismatch
                <Button disabled className="opacity-50">
                  Loading...
                </Button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
