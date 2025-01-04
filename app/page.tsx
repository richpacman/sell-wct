'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMemo, useState } from 'react';
import { erc20Abi, formatUnits, parseUnits } from 'viem';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import {
  STAKE_WEIGHT_ABI,
  STAKE_WEIGHT_ADDRESS,
  WCT_ADDRESS,
} from './contracts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function Home() {
  const { address } = useAccount();

  const [buyerAddress, setBuyerAddress] = useState('');
  const [amount, setAmount] = useState('');

  const { data: stakeWeight } = useReadContract({
    abi: STAKE_WEIGHT_ABI,
    address: STAKE_WEIGHT_ADDRESS,
    functionName: 'balanceOf',
    args: [buyerAddress as `0x${string}`],
  });

  const { data: balance } = useReadContract({
    abi: erc20Abi,
    address: WCT_ADDRESS,
    functionName: 'balanceOf',
    args: [buyerAddress as `0x${string}`],
  });

  const { data: locks } = useReadContract({
    abi: STAKE_WEIGHT_ABI,
    address: STAKE_WEIGHT_ADDRESS,
    functionName: 'locks',
    args: [buyerAddress as `0x${string}`],
  });

  const { data: sellerBalance } = useReadContract({
    abi: erc20Abi,
    address: WCT_ADDRESS,
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
  });

  const { data: allowance } = useReadContract({
    abi: erc20Abi,
    address: WCT_ADDRESS,
    functionName: 'allowance',
    args: [address as `0x${string}`, STAKE_WEIGHT_ADDRESS],
    query: {
      refetchInterval: 1000,
    },
  });

  const formatStakeWeight = stakeWeight ? formatUnits(stakeWeight, 18) : '0';
  const formatBalance = balance ? formatUnits(balance, 18) : '0';
  const formatStakedAmount = locks ? formatUnits(locks.amount, 18) : '0';
  const formatSellerBalance = sellerBalance
    ? formatUnits(sellerBalance, 18)
    : '0';

  const formatAllowance = allowance ? formatUnits(allowance, 18) : '0';

  const isAllowanceEnough = amount
    ? allowance
      ? allowance >= parseUnits(amount, 18)
      : false
    : false;

  const { writeContract: approve, error: approveError } = useWriteContract();
  const { writeContract: sell, error: sellError } = useWriteContract();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-10 px-4 md:px-0 border">
      <div className="space-y-4 max-w-2xl">
        <div className="flex justify-center">
          <ConnectButton />
        </div>
        <p className="text-lg font-bold text-center">
          Formula stake weight: Stake weight = (total token * durasi lock) / 209
          (209 minggu)
        </p>
        <Alert variant="destructive">
          <AlertTitle className="font-bold">Tolong di perhatikan</AlertTitle>
          <AlertDescription>
            Konek wallet anda terlebih dahulu, pastikan pembeli sudah stake WCT
            dan paste address pembeli dahulu sebelum menekan tombol approve atau
            sell.
          </AlertDescription>
        </Alert>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Buyer Info</CardTitle>
              <CardDescription>
                Informasi pembeli yang akan menerima WCT
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-y-4">
                <Input
                  placeholder="Paste address pembeli"
                  type="text"
                  value={buyerAddress}
                  onChange={(e) => setBuyerAddress(e.target.value)}
                />
                <div>
                  Total stake weight:{' '}
                  <span className="font-bold">
                    {Number(formatStakeWeight).toFixed(4)}
                  </span>
                </div>
                <div>
                  Balance WCT:{' '}
                  <span className="font-bold">
                    {Number(formatBalance).toFixed(4)} WCT
                  </span>
                </div>
                <div>
                  Total staked WCT:{' '}
                  <span className="font-bold">
                    {Number(formatStakedAmount).toFixed(4)} WCT
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sell WCT</CardTitle>
              <CardDescription>
                Masukan jumlah WCT yang ingin anda jual
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-y-4">
                <div>
                  Allowance:{' '}
                  <span className="font-bold">{formatAllowance} WCT</span>
                </div>
                <div>
                  Balance WCT:{' '}
                  <span className="font-bold">
                    {Number(formatSellerBalance).toFixed(4)} WCT
                  </span>
                </div>

                <Input
                  placeholder="Jumlah WCT"
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <div className="grid gap-3">
                  <Button
                    className="w-full"
                    disabled={!amount || isAllowanceEnough}
                    onClick={() =>
                      approve({
                        abi: erc20Abi,
                        address: WCT_ADDRESS,
                        functionName: 'approve',
                        args: [STAKE_WEIGHT_ADDRESS, parseUnits(amount, 18)],
                      })
                    }
                  >
                    Approve
                  </Button>
                  <Button
                    className="w-full"
                    disabled={!buyerAddress || !isAllowanceEnough}
                    onClick={() =>
                      sell({
                        abi: STAKE_WEIGHT_ABI,
                        address: STAKE_WEIGHT_ADDRESS,
                        functionName: 'depositFor',
                        args: [
                          buyerAddress as `0x${string}`,
                          parseUnits(amount, 18),
                        ],
                      })
                    }
                  >
                    Sell
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {approveError && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{approveError.message}</AlertDescription>
          </Alert>
        )}
        {sellError && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{sellError.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </main>
  );
}
