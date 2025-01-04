'use client';

import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider as RainbowKit,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { optimism } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '3648bca755fc6806964fef7f1beb06e4',
  chains: [optimism],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export const RainbowKitProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKit theme={darkTheme()} initialChain={optimism}>
          {children}
        </RainbowKit>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
