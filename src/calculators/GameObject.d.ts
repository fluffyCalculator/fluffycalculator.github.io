export interface GameObject {
  [x: string]: any
}

export interface Traps {
  owned: number;
  level: number;
  locked: boolean;
}

export interface AutoBattleData {
  enemyLevel: number;
  dust: number;
  enemiesKilled: number;
  maxEnemyLevel: number;
  autoLevel: boolean;
  lastActions?: (null)[] | null;
  presets: Presets;
  activeContract: string;
  items: Items;
  bonuses: any;
  oneTimers: any;
  settings: any;
}

export interface mutationData {
  Scruffy: boolean;
  NovaScruff: boolean;
  Poppin: boolean;
}

export interface Portal {
  Looting_II: LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII;
  Carpentry_II: LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII;
  Motivation_II: LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII;
  Power_II: LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII;
  Toughness_II: LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII;
  Capable: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Cunning: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Curious: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Classy: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Overkill: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Resourceful: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Coordinated: Coordinated;
  Siphonology: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Anticipation: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Resilience: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Meditation: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Relentlessness: CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness;
  Greed: GreedOrCriticalityOrPrismal;
  Tenacity: Tenacity;
  Criticality: GreedOrCriticalityOrPrismal;
  Equality: Equality;
  Carpentry: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Artisanistry: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Range: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Agility: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Bait: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Trumps: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Pheromones: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Packrat: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Motivation: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Power: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Toughness: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Looting: OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting;
  Prismal: GreedOrCriticalityOrPrismal;
  Hunger: Hunger;
  Championism: Championism;
  Frenzy: Frenzy;
  Observation: Observation;
}
export interface LootingIIOrCarpentryIIOrMotivationIIOrPowerIIOrToughnessII {
  level: number;
  locked: boolean;
  heliumSpent: number;
  additive: boolean;
}
export interface CapableOrCunningOrCuriousOrClassyOrResourcefulOrSiphonologyOrAnticipationOrMeditationOrRelentlessness {
  level: number;
  locked: boolean;
  heliumSpent: number;
}
export interface OverkillOrResilienceOrCarpentryOrArtisanistryOrRangeOrAgilityOrBaitOrTrumpsOrPheromonesOrPackratOrMotivationOrPowerOrToughnessOrLooting {
  level: number;
  locked: boolean;
  radLocked: boolean;
  heliumSpent: number;
  radLevel: number;
  radSpent: number;
}
export interface Coordinated {
  level: number;
  locked: boolean;
  heliumSpent: number;
  currentSend: number;
}
export interface GreedOrCriticalityOrPrismal {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
}
export interface Tenacity {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  timeLastZone: number;
}
export interface Equality {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  scalingActive: boolean;
  scalingSetting: string;
  reversingSetting: number;
  scalingReverse: boolean;
  disabledStackCount: string;
  scalingCount: number;
}
export interface Hunger {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  storedDamage: number;
}
export interface Championism {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  baseStats: number;
  statsPerLevel: number;
}
export interface Frenzy {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  frenzyStarted: number;
  deathless: boolean;
}
export interface Observation {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  trinkets: number;
  trinketsPerLevel: number;
  seed: number;
}