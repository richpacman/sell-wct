// ADDRESS
export const WCT_ADDRESS = '0xeF4461891DfB3AC8572cCf7C794664A8DD927945';
export const STAKE_WEIGHT_ADDRESS =
  '0x521B4C065Bbdbe3E20B3727340730936912DfA46';

// ABI
export const STAKE_WEIGHT_ABI = [
  { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'target', type: 'address' }],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  { inputs: [], name: 'AlreadyCreatedLock', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'currentTime', type: 'uint256' },
      { internalType: 'uint256', name: 'lockEndTime', type: 'uint256' },
    ],
    name: 'ExpiredLock',
    type: 'error',
  },
  { inputs: [], name: 'FailedInnerCall', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'currentBlock', type: 'uint256' },
      { internalType: 'uint256', name: 'requestedBlock', type: 'uint256' },
    ],
    name: 'FutureBlockNumber',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'actualLockedAmount', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'requiredLockedAmount',
        type: 'uint256',
      },
    ],
    name: 'InsufficientLockedAmount',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
    name: 'InvalidAddress',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'InvalidAmount',
    type: 'error',
  },
  { inputs: [], name: 'InvalidInitialization', type: 'error' },
  {
    inputs: [{ internalType: 'uint256', name: 'maxLock', type: 'uint256' }],
    name: 'InvalidMaxLock',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'unlockTime', type: 'uint256' }],
    name: 'InvalidUnlockTime',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'attemptedDuration', type: 'uint256' },
      { internalType: 'uint256', name: 'maxDuration', type: 'uint256' },
    ],
    name: 'LockMaxDurationExceeded',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'lockEndTime', type: 'uint256' }],
    name: 'LockStillActive',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'currentDuration', type: 'uint256' },
      { internalType: 'uint256', name: 'attemptedDuration', type: 'uint256' },
    ],
    name: 'LockTimeNotIncreased',
    type: 'error',
  },
  { inputs: [], name: 'NonExistentLock', type: 'error' },
  { inputs: [], name: 'NotInitializing', type: 'error' },
  { inputs: [], name: 'Paused', type: 'error' },
  { inputs: [], name: 'ReentrancyGuardReentrantCall', type: 'error' },
  {
    inputs: [
      { internalType: 'uint8', name: 'bits', type: 'uint8' },
      { internalType: 'int256', name: 'value', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'int256', name: 'value', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'locktime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'type_',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'transferredAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'transferredAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTimestamp',
        type: 'uint256',
      },
    ],
    name: 'ForcedWithdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint64',
        name: 'version',
        type: 'uint64',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousMaxLock',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMaxLock',
        type: 'uint256',
      },
    ],
    name: 'MaxLockUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'previousSupply',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newSupply',
        type: 'uint256',
      },
    ],
    name: 'Supply',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'transferredAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ACTION_CREATE_LOCK',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ACTION_DEPOSIT_FOR',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ACTION_INCREASE_LOCK_AMOUNT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ACTION_INCREASE_UNLOCK_TIME',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ACTION_UPDATE_LOCK',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'LOCKED_TOKEN_STAKER_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MAX_LOCK_CAP',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'MULTIPLIER',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
    ],
    name: 'balanceOfAt',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
    ],
    name: 'balanceOfAtTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'checkpoint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'config',
    outputs: [
      {
        internalType: 'contract WalletConnectConfig',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'unlockTime', type: 'uint256' },
    ],
    name: 'createLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'for_', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'unlockTime', type: 'uint256' },
    ],
    name: 'createLockFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'for_', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'depositFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'epoch',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'forceWithdrawAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'increaseLockAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'for_', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'increaseLockAmountFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'newUnlockTime', type: 'uint256' },
    ],
    name: 'increaseUnlockTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          { internalType: 'address', name: 'admin', type: 'address' },
          { internalType: 'address', name: 'config', type: 'address' },
        ],
        internalType: 'struct StakeWeight.Init',
        name: 'init',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'locks',
    outputs: [
      {
        components: [
          { internalType: 'int128', name: 'amount', type: 'int128' },
          { internalType: 'uint256', name: 'end', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'transferredAmount',
            type: 'uint256',
          },
        ],
        internalType: 'struct StakeWeight.LockedBalance',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxLock',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'epoch_', type: 'uint256' }],
    name: 'pointHistory',
    outputs: [
      {
        components: [
          { internalType: 'int128', name: 'bias', type: 'int128' },
          { internalType: 'int128', name: 'slope', type: 'int128' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
        ],
        internalType: 'struct StakeWeight.Point',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'callerConfirmation', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'newMaxLock', type: 'uint256' }],
    name: 'setMaxLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'timestamp', type: 'uint256' }],
    name: 'slopeChanges',
    outputs: [{ internalType: 'int128', name: '', type: 'int128' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'supply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'blockNumber', type: 'uint256' }],
    name: 'totalSupplyAt',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'timestamp', type: 'uint256' }],
    name: 'totalSupplyAtTime',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'unlockTime', type: 'uint256' },
    ],
    name: 'updateLock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'userPointEpoch',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'user', type: 'address' },
      { internalType: 'uint256', name: 'epoch_', type: 'uint256' },
    ],
    name: 'userPointHistory',
    outputs: [
      {
        components: [
          { internalType: 'int128', name: 'bias', type: 'int128' },
          { internalType: 'int128', name: 'slope', type: 'int128' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
        ],
        internalType: 'struct StakeWeight.Point',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'withdrawAllFor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
