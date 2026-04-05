// ============================================================================
// TASHI BLOCKCHAIN APP - COMPREHENSIVE MOCK DATA
// ============================================================================
// This file contains realistic mock data for three scenarios:
// 1. Wallet/Identity/Stake
// 2. Swarm Mission/Agent Coordination
// 3. Search & Rescue Operations
// ============================================================================

export type ScenarioType = 'wallet' | 'swarm' | 'rescue';

// ============================================================================
// COMMON TYPES
// ============================================================================

export interface UserProfile {
  displayName: string;
  username: string;
  walletAddress: string;
  identityBadge: string;
  trustScore: number;
  verified: boolean;
  activeSessions: number;
  lastLogin: Date;
  preferredNetwork: string;
  securityLevel: 'basic' | 'standard' | 'enhanced' | 'maximum';
  avatar?: string;
}

export interface Notification {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info' | 'critical';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionable?: boolean;
  action?: string;
  category: 'wallet' | 'mission' | 'security' | 'governance' | 'agent' | 'emergency';
}

// ============================================================================
// SCENARIO 1: WALLET / IDENTITY / STAKE
// ============================================================================

export interface Token {
  symbol: string;
  name: string;
  balance: number;
  valueUSD: number;
  priceChange24h: number;
  icon?: string;
}

export interface WalletData {
  totalPortfolioValue: number;
  totalChange24h: number;
  tokens: Token[];
  lockedStake: number;
  availableBalance: number;
  rewardBalance: number;
}

export interface Transaction {
  id: string;
  type: 'stake_deposited' | 'reward_claimed' | 'governance_vote' | 'transfer_received' | 
        'mission_reward' | 'emergency_override' | 'identity_verification' | 'wallet_topup' |
        'transfer_sent' | 'unstake';
  amount: number;
  token: string;
  status: 'completed' | 'pending' | 'failed';
  timestamp: Date;
  network: string;
  txHash: string;
  from?: string;
  to?: string;
}

export interface StakeData {
  activeStake: number;
  lockedStake: number;
  rewardRate: number;
  validatorName: string;
  nextRewardTime: Date;
  historicalRewards: number;
  delegationStatus: 'active' | 'pending' | 'unbonding';
  apr: number;
  lockEndDate?: Date;
}

export interface SecurityData {
  biometricsEnabled: boolean;
  deviceBound: boolean;
  recoveryBackupStatus: 'complete' | 'pending' | 'none';
  recentDevices: Array<{
    name: string;
    lastAccess: Date;
    location: string;
    trusted: boolean;
  }>;
  riskAlerts: number;
  sessionExpiration: Date;
  walletProtectionLevel: number;
}

// ============================================================================
// SCENARIO 2: SWARM MISSION / AGENT COORDINATION
// ============================================================================

export interface Mission {
  id: string;
  name: string;
  type: 'relay_chain' | 'sector_sweep' | 'victim_trace' | 'recon' | 'rescue';
  objective: string;
  startTime: Date;
  currentPhase: string;
  progress: number;
  successProbability: number;
  totalAgents: number;
  activeAgents: number;
  status: 'active' | 'completed' | 'failed' | 'paused';
  estimatedCompletion?: Date;
}

export interface Agent {
  id: string;
  name: string;
  role: 'explorer' | 'relay' | 'rescuer' | 'scout' | 'support' | 'leader' | 'standby';
  batteryLevel: number;
  temperature: number;
  signalStrength: 'excellent' | 'good' | 'medium' | 'weak' | 'critical';
  stakeWeight: number;
  status: 'active' | 'relaying' | 'scanning' | 'warning' | 'standby' | 'offline';
  currentTask: string;
  locationZone: string;
  lastHeartbeat: Date;
  coordinates?: { x: number; y: number };
}

export interface SwarmEvent {
  id: string;
  type: 'role_promoted' | 'relay_gap' | 'victim_found' | 'handoff_completed' | 
        'path_rerouted' | 'battery_warning' | 'consensus_reached' | 'phase_updated' |
        'agent_joined' | 'agent_offline';
  agentId?: string;
  message: string;
  timestamp: Date;
  severity: 'info' | 'warning' | 'critical' | 'success';
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  votesYes: number;
  votesNo: number;
  votesAbstain: number;
  stakeWeightedYes: number;
  stakeWeightedNo: number;
  quorum: number;
  quorumRequired: number;
  confidence: number;
  timeRemaining: number; // minutes
  status: 'active' | 'passed' | 'failed' | 'executed';
  createdAt: Date;
}

export interface NetworkHealth {
  peerCount: number;
  meshSyncStatus: 'synced' | 'syncing' | 'degraded' | 'offline';
  messageLatency: number; // ms
  packetLoss: number; // percentage
  relayChainIntegrity: number; // percentage
  offlineNodes: number;
  recoveryStatus: 'healthy' | 'recovering' | 'critical';
  blockHeight: number;
  lastBlockTime: Date;
}

// ============================================================================
// SCENARIO 3: SEARCH & RESCUE OPERATIONS
// ============================================================================

export interface RescueMission {
  id: string;
  name: string;
  incidentId: string;
  location: string;
  weather: string;
  stage: 'dispatch' | 'search' | 'extraction' | 'evacuation' | 'complete';
  victimsDetected: number;
  victimsConfirmed: number;
  agentsDeployed: number;
  timeSinceDispatch: number; // minutes
  hazardLevel: 'low' | 'moderate' | 'high' | 'critical';
  status: 'active' | 'completed' | 'emergency';
}

export interface Victim {
  id: string;
  detectionSource: 'thermal' | 'visual' | 'motion' | 'manual' | 'audio';
  confidence: number; // percentage
  priority: 'critical' | 'high' | 'medium' | 'low';
  condition: 'critical' | 'stable' | 'trapped' | 'uncertain' | 'rescued';
  timeDetected: Date;
  estimatedDistance: number; // meters
  assignedAgent?: string;
  extractionStatus: 'pending' | 'in_progress' | 'extracted' | 'failed';
  coordinates?: { x: number; y: number };
  vitalSigns?: {
    heartRate?: number;
    temperature?: number;
    movement?: boolean;
  };
}

export interface Hazard {
  id: string;
  type: 'obstacle' | 'structural' | 'thermal' | 'signal' | 'debris' | 'chemical';
  description: string;
  location: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  timestamp: Date;
  status: 'active' | 'cleared' | 'monitoring';
}

export interface RescueTask {
  id: string;
  type: 'scan_zone' | 'confirm_victim' | 'send_relay' | 'reroute_path' | 
        'dispatch_rescuer' | 'prepare_extraction' | 'retreat' | 'update_log';
  description: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  assignedTo?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  timestamp: Date;
  completedAt?: Date;
}

export interface EmergencyData {
  emergencyRetreatStatus: 'ready' | 'active' | 'completed' | 'unavailable';
  overrideAvailable: boolean;
  operatorAcknowledgement: boolean;
  activeThreatLevel: 'none' | 'low' | 'moderate' | 'high' | 'critical';
  safetyMargin: number; // percentage
  evacuationPathReady: boolean;
  lastOverride?: Date;
}

// ============================================================================
// MOCK DATA - SCENARIO 1: WALLET / IDENTITY / STAKE
// ============================================================================

export const walletScenarioUser: UserProfile = {
  displayName: 'Lucy Low',
  username: 'lucylow',
  walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb5',
  identityBadge: 'Verified Tashi Operator',
  trustScore: 94,
  verified: true,
  activeSessions: 1,
  lastLogin: new Date(Date.now() - 12 * 60 * 1000), // 12 minutes ago
  preferredNetwork: 'Tashi Mainnet Beta',
  securityLevel: 'enhanced',
};

export const walletScenarioData: WalletData = {
  totalPortfolioValue: 18420.75,
  totalChange24h: 3.2,
  tokens: [
    {
      symbol: 'TASHI',
      name: 'Tashi Token',
      balance: 14720.75,
      valueUSD: 14720.75,
      priceChange24h: 2.4,
    },
    {
      symbol: 'USDC',
      name: 'USD Coin',
      balance: 2500.00,
      valueUSD: 2500.00,
      priceChange24h: -0.1,
    },
    {
      symbol: 'TGOV',
      name: 'Tashi Governance',
      balance: 920.00,
      valueUSD: 920.00,
      priceChange24h: 11.2,
    },
    {
      symbol: 'REWARD',
      name: 'Mission Reward',
      balance: 280.00,
      valueUSD: 280.00,
      priceChange24h: 5.8,
    },
  ],
  lockedStake: 12000,
  availableBalance: 2440.75,
  rewardBalance: 280.00,
};

export const walletScenarioTransactions: Transaction[] = [
  {
    id: 'tx-001',
    type: 'stake_deposited',
    amount: 5000,
    token: 'TASHI',
    status: 'completed',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x8f3a...c2d1',
    to: 'Validator Pool Alpha',
  },
  {
    id: 'tx-002',
    type: 'reward_claimed',
    amount: 48.5,
    token: 'TASHI',
    status: 'completed',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x7b2e...9a4f',
  },
  {
    id: 'tx-003',
    type: 'governance_vote',
    amount: 0,
    token: 'TGOV',
    status: 'completed',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x6c1d...8b3e',
  },
  {
    id: 'tx-004',
    type: 'transfer_received',
    amount: 1200,
    token: 'USDC',
    status: 'completed',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x5a9c...7d2c',
    from: '0x123...abc',
  },
  {
    id: 'tx-005',
    type: 'mission_reward',
    amount: 125.5,
    token: 'REWARD',
    status: 'completed',
    timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x4f8b...6c1a',
  },
  {
    id: 'tx-006',
    type: 'emergency_override',
    amount: 10,
    token: 'TASHI',
    status: 'completed',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x3e7a...5b0d',
  },
  {
    id: 'tx-007',
    type: 'identity_verification',
    amount: 5,
    token: 'TASHI',
    status: 'completed',
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x2d6c...4a9e',
  },
  {
    id: 'tx-008',
    type: 'wallet_topup',
    amount: 3000,
    token: 'TASHI',
    status: 'pending',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    network: 'Tashi Mainnet',
    txHash: '0x1c5b...3f8d',
  },
];

export const walletScenarioStake: StakeData = {
  activeStake: 12000,
  lockedStake: 7000,
  rewardRate: 14.5,
  validatorName: 'Tashi Validator Pool Alpha',
  nextRewardTime: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
  historicalRewards: 1247.80,
  delegationStatus: 'active',
  apr: 14.5,
  lockEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
};

export const walletScenarioSecurity: SecurityData = {
  biometricsEnabled: true,
  deviceBound: true,
  recoveryBackupStatus: 'complete',
  recentDevices: [
    {
      name: 'iPhone 15 Pro',
      lastAccess: new Date(Date.now() - 12 * 60 * 1000),
      location: 'San Francisco, CA',
      trusted: true,
    },
    {
      name: 'MacBook Pro',
      lastAccess: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      location: 'San Francisco, CA',
      trusted: true,
    },
  ],
  riskAlerts: 0,
  sessionExpiration: new Date(Date.now() + 24 * 60 * 60 * 1000),
  walletProtectionLevel: 95,
};

export const walletScenarioNotifications: Notification[] = [
  {
    id: 'notif-w-001',
    type: 'success',
    title: 'Stake Deposit Confirmed',
    message: '5,000 TASHI successfully staked to Validator Pool Alpha',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    read: false,
    actionable: true,
    action: 'View Transaction',
    category: 'wallet',
  },
  {
    id: 'notif-w-002',
    type: 'info',
    title: 'Rewards Available',
    message: 'You have 48.5 TASHI in claimable rewards',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    read: true,
    actionable: true,
    action: 'Claim Now',
    category: 'wallet',
  },
  {
    id: 'notif-w-003',
    type: 'info',
    title: 'Governance Vote Recorded',
    message: 'Your vote on Proposal #47 has been recorded',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    read: true,
    category: 'governance',
  },
  {
    id: 'notif-w-004',
    type: 'success',
    title: 'Transfer Received',
    message: 'Received 1,200 USDC from 0x123...abc',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    read: true,
    category: 'wallet',
  },
];

// ============================================================================
// MOCK DATA - SCENARIO 2: SWARM MISSION / AGENT COORDINATION
// ============================================================================

export const swarmScenarioMission: Mission = {
  id: 'mission-relay-001',
  name: 'Relay Chain Stabilization',
  type: 'relay_chain',
  objective: 'Maintain continuous communication relay across distributed nodes',
  startTime: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
  currentPhase: 'Active Relay',
  progress: 68,
  successProbability: 91,
  totalAgents: 10,
  activeAgents: 9,
  status: 'active',
  estimatedCompletion: new Date(Date.now() + 30 * 60 * 1000),
};

export const swarmScenarioAgents: Agent[] = [
  {
    id: 'A-01',
    name: 'Agent Alpha-01',
    role: 'leader',
    batteryLevel: 82,
    temperature: 39.1,
    signalStrength: 'excellent',
    stakeWeight: 250,
    status: 'active',
    currentTask: 'Coordinating swarm formation',
    locationZone: 'Sector North-A',
    lastHeartbeat: new Date(Date.now() - 3000),
    coordinates: { x: 50, y: 50 },
  },
  {
    id: 'A-02',
    name: 'Agent Alpha-02',
    role: 'relay',
    batteryLevel: 74,
    temperature: 38.6,
    signalStrength: 'good',
    stakeWeight: 180,
    status: 'relaying',
    currentTask: 'Maintaining relay bridge',
    locationZone: 'Sector North-B',
    lastHeartbeat: new Date(Date.now() - 2000),
    coordinates: { x: 65, y: 45 },
  },
  {
    id: 'A-03',
    name: 'Agent Alpha-03',
    role: 'explorer',
    batteryLevel: 66,
    temperature: 37.4,
    signalStrength: 'good',
    stakeWeight: 200,
    status: 'scanning',
    currentTask: 'Scanning perimeter zone',
    locationZone: 'Sector East-A',
    lastHeartbeat: new Date(Date.now() - 4000),
    coordinates: { x: 70, y: 60 },
  },
  {
    id: 'A-04',
    name: 'Agent Alpha-04',
    role: 'support',
    batteryLevel: 58,
    temperature: 40.2,
    signalStrength: 'medium',
    stakeWeight: 150,
    status: 'warning',
    currentTask: 'Temperature regulation',
    locationZone: 'Sector East-B',
    lastHeartbeat: new Date(Date.now() - 7000),
    coordinates: { x: 55, y: 70 },
  },
  {
    id: 'A-05',
    name: 'Agent Alpha-05',
    role: 'rescuer',
    batteryLevel: 91,
    temperature: 36.8,
    signalStrength: 'excellent',
    stakeWeight: 220,
    status: 'active',
    currentTask: 'Standing by for deployment',
    locationZone: 'Sector South-A',
    lastHeartbeat: new Date(Date.now() - 2500),
    coordinates: { x: 40, y: 35 },
  },
  {
    id: 'A-06',
    name: 'Agent Alpha-06',
    role: 'scout',
    batteryLevel: 79,
    temperature: 38.1,
    signalStrength: 'excellent',
    stakeWeight: 190,
    status: 'active',
    currentTask: 'Forward reconnaissance',
    locationZone: 'Sector West-A',
    lastHeartbeat: new Date(Date.now() - 3500),
    coordinates: { x: 30, y: 50 },
  },
  {
    id: 'A-07',
    name: 'Agent Alpha-07',
    role: 'relay',
    batteryLevel: 68,
    temperature: 39.5,
    signalStrength: 'good',
    stakeWeight: 175,
    status: 'relaying',
    currentTask: 'Secondary relay node',
    locationZone: 'Sector West-B',
    lastHeartbeat: new Date(Date.now() - 5000),
    coordinates: { x: 25, y: 60 },
  },
  {
    id: 'A-08',
    name: 'Agent Alpha-08',
    role: 'explorer',
    batteryLevel: 85,
    temperature: 37.8,
    signalStrength: 'excellent',
    stakeWeight: 210,
    status: 'scanning',
    currentTask: 'Zone mapping',
    locationZone: 'Sector South-B',
    lastHeartbeat: new Date(Date.now() - 2800),
    coordinates: { x: 45, y: 25 },
  },
  {
    id: 'A-09',
    name: 'Agent Alpha-09',
    role: 'support',
    batteryLevel: 72,
    temperature: 38.9,
    signalStrength: 'good',
    stakeWeight: 165,
    status: 'active',
    currentTask: 'Resource management',
    locationZone: 'Sector North-C',
    lastHeartbeat: new Date(Date.now() - 4200),
    coordinates: { x: 60, y: 35 },
  },
  {
    id: 'A-10',
    name: 'Agent Alpha-10',
    role: 'standby',
    batteryLevel: 0,
    temperature: 35.0,
    signalStrength: 'critical',
    stakeWeight: 140,
    status: 'offline',
    currentTask: 'Offline - battery depleted',
    locationZone: 'Base Station',
    lastHeartbeat: new Date(Date.now() - 15 * 60 * 1000),
    coordinates: { x: 50, y: 50 },
  },
];

export const swarmScenarioEvents: SwarmEvent[] = [
  {
    id: 'evt-001',
    type: 'phase_updated',
    message: 'Mission phase advanced to Active Relay',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    severity: 'info',
  },
  {
    id: 'evt-002',
    type: 'battery_warning',
    agentId: 'A-04',
    message: 'Agent A-04 battery level below 60%',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    severity: 'warning',
  },
  {
    id: 'evt-003',
    type: 'handoff_completed',
    agentId: 'A-02',
    message: 'Agent A-02 successfully completed relay handoff',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    severity: 'success',
  },
  {
    id: 'evt-004',
    type: 'consensus_reached',
    message: 'Swarm consensus reached: Shift formation north',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    severity: 'success',
  },
  {
    id: 'evt-005',
    type: 'path_rerouted',
    agentId: 'A-03',
    message: 'Agent A-03 path rerouted to avoid interference',
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
    severity: 'info',
  },
  {
    id: 'evt-006',
    type: 'role_promoted',
    agentId: 'A-05',
    message: 'Agent A-05 promoted to Rescuer role',
    timestamp: new Date(Date.now() - 20 * 60 * 1000),
    severity: 'info',
  },
  {
    id: 'evt-007',
    type: 'relay_gap',
    message: 'Relay gap detected in Sector East-C',
    timestamp: new Date(Date.now() - 25 * 60 * 1000),
    severity: 'warning',
  },
  {
    id: 'evt-008',
    type: 'agent_offline',
    agentId: 'A-10',
    message: 'Agent A-10 went offline - battery depleted',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    severity: 'critical',
  },
];

export const swarmScenarioProposal: Proposal = {
  id: 'prop-001',
  title: 'Shift swarm north corridor',
  description: 'Relocate swarm formation 50m north to improve signal coverage',
  votesYes: 63,
  votesNo: 27,
  votesAbstain: 10,
  stakeWeightedYes: 71,
  stakeWeightedNo: 24,
  quorum: 88,
  quorumRequired: 75,
  confidence: 94,
  timeRemaining: 8, // minutes
  status: 'active',
  createdAt: new Date(Date.now() - 15 * 60 * 1000),
};

export const swarmScenarioNetworkHealth: NetworkHealth = {
  peerCount: 47,
  meshSyncStatus: 'synced',
  messageLatency: 18,
  packetLoss: 0.8,
  relayChainIntegrity: 97,
  offlineNodes: 1,
  recoveryStatus: 'healthy',
  blockHeight: 2847563,
  lastBlockTime: new Date(Date.now() - 12000),
};

export const swarmScenarioNotifications: Notification[] = [
  {
    id: 'notif-s-001',
    type: 'warning',
    title: 'Battery Warning',
    message: 'Agent A-04 battery level below 60%',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    read: false,
    actionable: true,
    action: 'View Agent',
    category: 'agent',
  },
  {
    id: 'notif-s-002',
    type: 'success',
    title: 'Consensus Reached',
    message: 'Swarm approved formation shift with 71% weighted votes',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    read: false,
    category: 'governance',
  },
  {
    id: 'notif-s-003',
    type: 'critical',
    title: 'Agent Offline',
    message: 'Agent A-10 went offline - battery depleted',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    read: true,
    actionable: true,
    action: 'View Details',
    category: 'agent',
  },
  {
    id: 'notif-s-004',
    type: 'info',
    title: 'Mission Phase Update',
    message: 'Mission advanced to Active Relay phase',
    timestamp: new Date(Date.now() - 2 * 60 * 1000),
    read: false,
    category: 'mission',
  },
];

// ============================================================================
// MOCK DATA - SCENARIO 3: SEARCH & RESCUE OPERATIONS
// ============================================================================

export const rescueScenarioMission: RescueMission = {
  id: 'SAR-2048-113',
  name: 'Collapsed Tunnel Rescue – Sector 4',
  incidentId: 'SAR-2048-113',
  location: 'Industrial Complex, Sector 4, Bay Area',
  weather: 'Low visibility, light smoke',
  stage: 'extraction',
  victimsDetected: 4,
  victimsConfirmed: 3,
  agentsDeployed: 8,
  timeSinceDispatch: 14, // minutes
  hazardLevel: 'high',
  status: 'active',
};

export const rescueScenarioVictims: Victim[] = [
  {
    id: 'V-01',
    detectionSource: 'thermal',
    confidence: 93,
    priority: 'critical',
    condition: 'critical',
    timeDetected: new Date(Date.now() - 10 * 60 * 1000),
    estimatedDistance: 18,
    assignedAgent: 'Rescuer-02',
    extractionStatus: 'in_progress',
    coordinates: { x: 35, y: 55 },
    vitalSigns: {
      heartRate: 112,
      temperature: 37.8,
      movement: true,
    },
  },
  {
    id: 'V-02',
    detectionSource: 'visual',
    confidence: 88,
    priority: 'high',
    condition: 'stable',
    timeDetected: new Date(Date.now() - 12 * 60 * 1000),
    estimatedDistance: 22,
    assignedAgent: 'Scout-01',
    extractionStatus: 'pending',
    coordinates: { x: 60, y: 40 },
    vitalSigns: {
      heartRate: 95,
      temperature: 37.2,
      movement: true,
    },
  },
  {
    id: 'V-03',
    detectionSource: 'motion',
    confidence: 79,
    priority: 'high',
    condition: 'trapped',
    timeDetected: new Date(Date.now() - 8 * 60 * 1000),
    estimatedDistance: 31,
    assignedAgent: 'Explorer-03',
    extractionStatus: 'pending',
    coordinates: { x: 45, y: 70 },
    vitalSigns: {
      movement: true,
    },
  },
  {
    id: 'V-04',
    detectionSource: 'audio',
    confidence: 61,
    priority: 'medium',
    condition: 'uncertain',
    timeDetected: new Date(Date.now() - 5 * 60 * 1000),
    estimatedDistance: 42,
    extractionStatus: 'pending',
    coordinates: { x: 25, y: 30 },
  },
];

export const rescueScenarioHazards: Hazard[] = [
  {
    id: 'haz-001',
    type: 'structural',
    description: 'Unstable wall at corridor C-12',
    location: 'Corridor C-12',
    severity: 'critical',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    status: 'active',
  },
  {
    id: 'haz-002',
    type: 'obstacle',
    description: 'Forklift obstacle at loading bay',
    location: 'Loading Bay',
    severity: 'moderate',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    status: 'active',
  },
  {
    id: 'haz-003',
    type: 'thermal',
    description: 'Thermal hotspot near left passage',
    location: 'Left Passage',
    severity: 'high',
    timestamp: new Date(Date.now() - 6 * 60 * 1000),
    status: 'monitoring',
  },
  {
    id: 'haz-004',
    type: 'signal',
    description: 'Signal dropout near lower tunnel',
    location: 'Lower Tunnel',
    severity: 'moderate',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    status: 'active',
  },
  {
    id: 'haz-005',
    type: 'debris',
    description: 'Debris field blocking west route',
    location: 'West Route',
    severity: 'high',
    timestamp: new Date(Date.now() - 9 * 60 * 1000),
    status: 'active',
  },
];

export const rescueScenarioTasks: RescueTask[] = [
  {
    id: 'task-001',
    type: 'confirm_victim',
    description: 'Confirm victim V-01 vital signs',
    priority: 'critical',
    assignedTo: 'Rescuer-02',
    status: 'in_progress',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    id: 'task-002',
    type: 'prepare_extraction',
    description: 'Prepare extraction route for V-01',
    priority: 'critical',
    assignedTo: 'Support-01',
    status: 'in_progress',
    timestamp: new Date(Date.now() - 9 * 60 * 1000),
  },
  {
    id: 'task-003',
    type: 'send_relay',
    description: 'Deploy relay agent to lower tunnel',
    priority: 'high',
    assignedTo: 'Relay-01',
    status: 'completed',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    completedAt: new Date(Date.now() - 11 * 60 * 1000),
  },
  {
    id: 'task-004',
    type: 'reroute_path',
    description: 'Reroute agents away from unstable wall',
    priority: 'critical',
    status: 'completed',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    completedAt: new Date(Date.now() - 7 * 60 * 1000),
  },
  {
    id: 'task-005',
    type: 'dispatch_rescuer',
    description: 'Dispatch additional rescuer to V-02',
    priority: 'high',
    assignedTo: 'Rescuer-03',
    status: 'pending',
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
  },
  {
    id: 'task-006',
    type: 'scan_zone',
    description: 'Secondary scan of east corridor',
    priority: 'medium',
    assignedTo: 'Explorer-03',
    status: 'pending',
    timestamp: new Date(Date.now() - 4 * 60 * 1000),
  },
  {
    id: 'task-007',
    type: 'update_log',
    description: 'Update incident log with hazard data',
    priority: 'low',
    status: 'completed',
    timestamp: new Date(Date.now() - 13 * 60 * 1000),
    completedAt: new Date(Date.now() - 12 * 60 * 1000),
  },
];

export const rescueScenarioEmergency: EmergencyData = {
  emergencyRetreatStatus: 'ready',
  overrideAvailable: true,
  operatorAcknowledgement: true,
  activeThreatLevel: 'high',
  safetyMargin: 67,
  evacuationPathReady: true,
};

export const rescueScenarioAgents: Agent[] = [
  {
    id: 'R-01',
    name: 'Rescuer-02',
    role: 'rescuer',
    batteryLevel: 84,
    temperature: 41.2,
    signalStrength: 'good',
    stakeWeight: 240,
    status: 'active',
    currentTask: 'Extracting victim V-01',
    locationZone: 'Zone C-12',
    lastHeartbeat: new Date(Date.now() - 2000),
    coordinates: { x: 35, y: 55 },
  },
  {
    id: 'R-02',
    name: 'Scout-01',
    role: 'scout',
    batteryLevel: 76,
    temperature: 39.8,
    signalStrength: 'excellent',
    stakeWeight: 200,
    status: 'active',
    currentTask: 'Approaching victim V-02',
    locationZone: 'Zone E-04',
    lastHeartbeat: new Date(Date.now() - 3000),
    coordinates: { x: 60, y: 40 },
  },
  {
    id: 'R-03',
    name: 'Explorer-03',
    role: 'explorer',
    batteryLevel: 68,
    temperature: 40.5,
    signalStrength: 'good',
    stakeWeight: 210,
    status: 'scanning',
    currentTask: 'Scanning trapped victim V-03',
    locationZone: 'Zone B-08',
    lastHeartbeat: new Date(Date.now() - 4000),
    coordinates: { x: 45, y: 70 },
  },
  {
    id: 'R-04',
    name: 'Relay-01',
    role: 'relay',
    batteryLevel: 92,
    temperature: 38.2,
    signalStrength: 'excellent',
    stakeWeight: 180,
    status: 'relaying',
    currentTask: 'Maintaining signal in lower tunnel',
    locationZone: 'Lower Tunnel',
    lastHeartbeat: new Date(Date.now() - 2500),
    coordinates: { x: 50, y: 50 },
  },
  {
    id: 'R-05',
    name: 'Support-01',
    role: 'support',
    batteryLevel: 81,
    temperature: 39.3,
    signalStrength: 'good',
    stakeWeight: 170,
    status: 'active',
    currentTask: 'Preparing extraction route',
    locationZone: 'Zone C-10',
    lastHeartbeat: new Date(Date.now() - 3500),
    coordinates: { x: 40, y: 50 },
  },
  {
    id: 'R-06',
    name: 'Rescuer-03',
    role: 'rescuer',
    batteryLevel: 88,
    temperature: 38.9,
    signalStrength: 'excellent',
    stakeWeight: 230,
    status: 'standby',
    currentTask: 'Awaiting dispatch to V-02',
    locationZone: 'Base Station',
    lastHeartbeat: new Date(Date.now() - 4500),
    coordinates: { x: 10, y: 10 },
  },
  {
    id: 'R-07',
    name: 'Leader-01',
    role: 'leader',
    batteryLevel: 79,
    temperature: 39.7,
    signalStrength: 'excellent',
    stakeWeight: 260,
    status: 'active',
    currentTask: 'Coordinating rescue operation',
    locationZone: 'Command Zone',
    lastHeartbeat: new Date(Date.now() - 2800),
    coordinates: { x: 50, y: 30 },
  },
  {
    id: 'R-08',
    name: 'Explorer-04',
    role: 'explorer',
    batteryLevel: 71,
    temperature: 40.8,
    signalStrength: 'medium',
    stakeWeight: 190,
    status: 'warning',
    currentTask: 'Temperature warning - reducing activity',
    locationZone: 'Zone A-05',
    lastHeartbeat: new Date(Date.now() - 6000),
    coordinates: { x: 30, y: 65 },
  },
];

export const rescueScenarioNotifications: Notification[] = [
  {
    id: 'notif-r-001',
    type: 'critical',
    title: 'Critical Victim Detected',
    message: 'Victim V-01 detected with 93% confidence - Critical condition',
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
    read: false,
    actionable: true,
    action: 'View Victim',
    category: 'emergency',
  },
  {
    id: 'notif-r-002',
    type: 'error',
    title: 'Structural Hazard',
    message: 'Unstable wall detected at corridor C-12',
    timestamp: new Date(Date.now() - 8 * 60 * 1000),
    read: false,
    actionable: true,
    action: 'View Hazard',
    category: 'emergency',
  },
  {
    id: 'notif-r-003',
    type: 'warning',
    title: 'Agent Temperature Warning',
    message: 'Rescuer-02 temperature at 41.2°C',
    timestamp: new Date(Date.now() - 6 * 60 * 1000),
    read: true,
    category: 'agent',
  },
  {
    id: 'notif-r-004',
    type: 'success',
    title: 'Path Rerouted',
    message: 'Agents successfully rerouted away from hazard zone',
    timestamp: new Date(Date.now() - 7 * 60 * 1000),
    read: true,
    category: 'mission',
  },
  {
    id: 'notif-r-005',
    type: 'info',
    title: 'Victim Confirmed',
    message: 'Victim V-02 visually confirmed - Stable condition',
    timestamp: new Date(Date.now() - 12 * 60 * 1000),
    read: true,
    category: 'emergency',
  },
];

// ============================================================================
// SCENARIO SELECTOR & HELPERS
// ============================================================================

export interface ScenarioData {
  type: ScenarioType;
  user: UserProfile;
  notifications: Notification[];
  // Wallet data
  wallet?: WalletData;
  transactions?: Transaction[];
  stake?: StakeData;
  security?: SecurityData;
  // Swarm data
  swarmMission?: Mission;
  agents?: Agent[];
  swarmEvents?: SwarmEvent[];
  proposal?: Proposal;
  networkHealth?: NetworkHealth;
  // Rescue data
  rescueMission?: RescueMission;
  victims?: Victim[];
  hazards?: Hazard[];
  tasks?: RescueTask[];
  emergency?: EmergencyData;
}

export const scenarios: Record<ScenarioType, ScenarioData> = {
  wallet: {
    type: 'wallet',
    user: walletScenarioUser,
    notifications: walletScenarioNotifications,
    wallet: walletScenarioData,
    transactions: walletScenarioTransactions,
    stake: walletScenarioStake,
    security: walletScenarioSecurity,
  },
  swarm: {
    type: 'swarm',
    user: {
      ...walletScenarioUser,
      displayName: 'Commander Sarah Chen',
      username: 'schen',
      identityBadge: 'Swarm Coordinator',
      trustScore: 97,
    },
    notifications: swarmScenarioNotifications,
    swarmMission: swarmScenarioMission,
    agents: swarmScenarioAgents,
    swarmEvents: swarmScenarioEvents,
    proposal: swarmScenarioProposal,
    networkHealth: swarmScenarioNetworkHealth,
  },
  rescue: {
    type: 'rescue',
    user: {
      ...walletScenarioUser,
      displayName: 'Captain Marcus Rodriguez',
      username: 'mrodriguez',
      identityBadge: 'Search & Rescue Operator',
      trustScore: 99,
      securityLevel: 'maximum',
    },
    notifications: rescueScenarioNotifications,
    rescueMission: rescueScenarioMission,
    victims: rescueScenarioVictims,
    hazards: rescueScenarioHazards,
    tasks: rescueScenarioTasks,
    emergency: rescueScenarioEmergency,
    agents: rescueScenarioAgents,
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function getScenario(type: ScenarioType): ScenarioData {
  return scenarios[type];
}

export function formatRelativeTime(date: Date): string {
  const now = Date.now();
  const diff = now - date.getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return 'Just now';
  if (minutes === 1) return '1 min ago';
  if (minutes < 60) return `${minutes} min ago`;
  if (hours === 1) return '1 hour ago';
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return '1 day ago';
  return `${days} days ago`;
}

export function formatAbsoluteTime(date: Date): string {
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  });
}

export function formatCurrency(amount: number, decimals = 2): string {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatPercentage(value: number, decimals = 1): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(decimals)}%`;
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    // General statuses
    active: 'text-emerald-400',
    completed: 'text-teal-400',
    pending: 'text-yellow-400',
    failed: 'text-red-400',
    warning: 'text-orange-400',
    critical: 'text-red-500',
    offline: 'text-gray-500',
    
    // Agent specific
    relaying: 'text-purple-400',
    scanning: 'text-cyan-400',
    standby: 'text-gray-400',
    
    // Rescue specific
    stable: 'text-green-400',
    trapped: 'text-yellow-500',
    uncertain: 'text-orange-400',
    rescued: 'text-teal-400',
    in_progress: 'text-blue-400',
    extracted: 'text-emerald-400',
  };
  
  return statusColors[status] || 'text-gray-400';
}

export function getBatteryColor(level: number): string {
  if (level >= 75) return 'text-emerald-400';
  if (level >= 50) return 'text-teal-400';
  if (level >= 25) return 'text-yellow-400';
  return 'text-red-400';
}

export function getTemperatureColor(temp: number): string {
  if (temp < 38) return 'text-emerald-400';
  if (temp < 40) return 'text-yellow-400';
  if (temp < 42) return 'text-orange-400';
  return 'text-red-500';
}

export function getSignalIcon(strength: string): string {
  const icons: Record<string, string> = {
    excellent: '📶',
    good: '📶',
    medium: '📡',
    weak: '📡',
    critical: '⚠️',
  };
  return icons[strength] || '📡';
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: 'text-red-500',
    high: 'text-orange-400',
    medium: 'text-yellow-400',
    low: 'text-gray-400',
  };
  return colors[priority] || 'text-gray-400';
}

export function getSeverityColor(severity: string): string {
  const colors: Record<string, string> = {
    critical: 'bg-red-500/20 text-red-400 border-red-500/30',
    high: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    moderate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    low: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    info: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    error: 'bg-red-500/20 text-red-400 border-red-500/30',
  };
  return colors[severity] || colors.info;
}