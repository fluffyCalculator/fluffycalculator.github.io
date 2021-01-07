export interface GameObject {
  global: Global;
  empowerments: Empowerments;
  singleRunBonuses: SingleRunBonuses;
  options: Options;
  talents: Talents;
  portal: Portal;
  c2: C2;
  challenges: Challenges;
  stats: Stats;
  generatorUpgrades: GeneratorUpgrades;
  permanentGeneratorUpgrades: PermanentGeneratorUpgrades;
  achievements: Achievements;
  heirlooms: Heirlooms;
  settings: Settings;
  resources: Resources;
  equipment: Equipment;
  mapUnlocks: MapUnlocks;
  buildings: Buildings;
  jobs: Jobs;
  goldenUpgrades: GoldenUpgrades;
  upgrades: Upgrades;
  triggers: Triggers;
  unlocks: Unlocks;
  playerSpire: PlayerSpire;
}
export interface Global {
  stringVersion: string;
  version: number;
  isBeta: boolean;
  betaV: number;
  killSavesBelow: number;
  uniqueId: string;
  playerGathering: string;
  playerModifier: number;
  buildingsQueue?: string[] | null;
  timeLeftOnCraft: number;
  crafting: string;
  timeLeftOnTrap: number;
  world: number;
  universe: number;
  gridArray?: GridArrayEntity[] | null;
  mapGridArray?: null[] | null;
  mapsOwnedArray?: MapsOwnedArrayEntity[] | null;
  currentMapId: string;
  lastClearedCell: number;
  lastClearedMapCell: number;
  pauseFight: boolean;
  soldierHealth: number;
  soldierHealthMax: number;
  soldierHealthRemaining: number;
  soldierCurrentAttack: number;
  soldierCurrentBlock: number;
  soldierEnergyShield: number;
  soldierEnergyShieldMax: number;
  shieldLayersUsed: number;
  fighting: boolean;
  health: number;
  attack: number;
  block: number;
  autoBattle: boolean;
  autoCraftModifier: number;
  start: number;
  time: number;
  portalTime: number;
  lastFightUpdate: string;
  battleCounter: number;
  firing: boolean;
  mapsActive: boolean;
  preMapsActive: boolean;
  switchToMaps: boolean;
  switchToWorld: boolean;
  lookingAtMap: string;
  mapsOwned: number;
  totalMapsEarned: number;
  freshFight: boolean;
  tab: string;
  repeatMap: boolean;
  buyAmt: number;
  numTab: number;
  spreadsheetMode: boolean;
  lockTooltip: boolean;
  portalActive: boolean;
  mapsUnlocked: boolean;
  lastOnline: number;
  buyTab: string;
  nextQueueId: number;
  kongBonusMode: boolean;
  canRespecPerks: boolean;
  respecActive: boolean;
  heliumLeftover: number;
  viewingUpgrades: boolean;
  totalPortals: number;
  totalRadPortals: number;
  lastCustomAmt: number;
  trapBuildAllowed: boolean;
  trapBuildToggled: boolean;
  lastSkeletimp: number;
  pp?: null[] | null;
  highestLevelCleared: number;
  highestRadonLevelCleared: number;
  b: number;
  challengeActive: string;
  selectedChallenge: string;
  lastOfflineProgress: number;
  sLevel: number;
  totalGifts: number;
  brokenPlanet: boolean;
  formation: number;
  bestHelium: number;
  tempHighHelium: number;
  totalHeliumEarned: number;
  bestRadon: number;
  tempHighRadon: number;
  totalRadonEarned: number;
  radonLeftover: number;
  newUniverse: number;
  removingPerks: boolean;
  lastBreedTime: number;
  antiStacks: number;
  prisonClear: number;
  frugalDone: boolean;
  lastUnlock: number;
  lowestGen: number;
  breedBack: number;
  titimpLeft: number;
  mapBonus: number;
  mapRunCounter: number;
  mapCounterGoal: number;
  slowDone: boolean;
  turkimpTimer: number;
  statsMode: string;
  achievementBonus: number;
  lastLowGen: number;
  presimptStore: string;
  lastWarp: number;
  zoneStarted: number;
  mapStarted: number;
  bionicOwned: number;
  roboTrimpLevel: number;
  roboTrimpCooldown: number;
  useShriek: boolean;
  usingShriek: boolean;
  autoUpgrades: boolean;
  autoUpgradesAvailable: boolean;
  autoPrestiges: number;
  autoStorage: boolean;
  autoStorageAvailable: boolean;
  totalVoidMaps: number;
  voidMapsToggled: boolean;
  voidBuff: string;
  lastVoidMap: number;
  voidSeed: number;
  scrySeed: number;
  heirloomSeed: number;
  heirloomBoneSeed: number;
  eggSeed: number;
  mutationSeed: number;
  enemySeed: number;
  u2WorldSeed: number;
  reincarnateSeed: number;
  heirloomsExtra?: HeirloomsExtraEntity[] | null;
  heirloomsCarried?: HeirloomsCarriedEntity[] | null;
  StaffEquipped: StaffEquipped;
  ShieldEquipped: ShieldEquipped;
  CoreEquipped: CoreEquipped;
  nullifium: number;
  maxCarriedHeirlooms: number;
  selectedHeirloom?: null[] | null;
  lastPortal: number;
  lastRadonPortal: number;
  addonUser: boolean;
  eggLoc: number;
  researched: boolean;
  bonePortalThisRun: boolean;
  maxSplit: number;
  maxSoldiersAtStart: number;
  playFabLoginType: number;
  lastCustomExact: string;
  voidMaxLevel: number;
  voidMaxLevel2: number;
  rememberInfo: boolean;
  spireActive: boolean;
  spireDeaths: number;
  Geneticistassist: boolean;
  GeneticistassistSetting: number;
  GeneticistassistSteps?: number[] | null;
  spireRows: number;
  goldenUpgrades: number;
  voidDeaths: number;
  essence: number;
  spentEssence: number;
  skeleSeed: number;
  decayDone: boolean;
  dailyChallenge: DailyChallenge;
  recentDailies?: number[] | null;
  dailyHelium: number;
  breedTime: number;
  magmite: number;
  magmaFuel: number;
  generatorMode: number;
  trimpsGenerated: number;
  timeSinceLastGeneratorTick: number;
  canMagma: boolean;
  lastBonePresimpt: number;
  runningChallengeSquared: boolean;
  totalSquaredReward: number;
  ArchaeologyDone: boolean;
  archString: string;
  archThresh: number;
  trackedAchieve?: null;
  mayhemCompletions: number;
  perkPresetU1: PerkPresetU1;
  perkPresetU2: PerkPresetU2;
  improvedAutoStorage: boolean;
  firstCustomAmt: number;
  firstCustomExact: number;
  autoGolden: number;
  autoGoldenU2: number;
  autoStructureSetting: AutoStructureSetting;
  autoStructureSettingU2: StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2;
  autoJobsSetting: AutoJobsSetting;
  autoJobsSettingU2: StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2;
  autoEquipSetting: AutoEquipSetting;
  autoEquipSettingU2: StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2;
  autoEquipUnlocked: boolean;
  passive: boolean;
  spiresCompleted: number;
  lastSpireCleared: number;
  sugarRush: number;
  holidaySeed: number;
  hideMapRow: boolean;
  mapExtraBonus: string;
  realBreedTime: number;
  fluffyExp: number;
  fluffyExp2: number;
  fluffyPrestige: number;
  fluffyPrestige2: number;
  selectedMapPreset: number;
  runFluffyExp: number;
  runTokens: number;
  bestTokens: number;
  genPaused: boolean;
  canMapAtZone: boolean;
  capTrimp: boolean;
  lastSoldierSentAt: number;
  supervisionSetting: number;
  canScryCache: boolean;
  waitToScry: boolean;
  waitToScryMaps: boolean;
  freeTalentRespecs: number;
  genStateConfig?: (number[] | null)[] | null;
  uberNature: string;
  logNotBase: number;
  lowestShield: number;
  hemmTimer: number;
  armyAttackCount: number;
  enemyAttackCount: number;
  mapHealthActive: boolean;
  voidPowerActive: boolean;
  stormDone: boolean;
  exterminateDone: boolean;
  parityBonus: number;
  hazShieldCredit: number;
  zoneRes?: number[] | null;
  lastHeirlooms: LastHeirlooms;
  mapPresets: MapPresets;
  mapPresets2: MapPresets2;
  lootAvgs: LootAvgs;
  menu: Menu;
  messages: Messages;
  difs: Difs;
  justAmalged: boolean;
}
export interface GridArrayEntity {
  level: number;
  maxHealth: number;
  health: number;
  attack: number;
  special: string;
  text: string;
  name: string;
  mutation?: string | null;
  corrupted?: string | null;
  plaguebringer?: number | null;
  plagueHits?: number | null;
  OKcount?: number | null;
  overkilled?: boolean | null;
}
export interface MapsOwnedArrayEntity {
  id: string;
  name: string;
  location: string;
  clears: number;
  level: number;
  difficulty: number | string;
  size: number;
  loot: number;
  noRecycle: boolean;
  bonus?: string | null;
  voidBuff?: string | null;
  stacked?: number | null;
}
export interface HeirloomsExtraEntity {
  id: number;
  name: string;
  type: string;
  repSeed: number;
  rarity: number;
  mods?:
    | (
        | (
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
          )[]
        | null
      )[]
    | null;
  icon: string;
  nuMod: number;
}
export interface HeirloomsCarriedEntity {
  id: number;
  name: string;
  type: string;
  repSeed: number;
  rarity: number;
  mods?:
    | (
        | (
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
          )[]
        | null
      )[]
    | null;
  icon: string;
  replaceSpent: number;
}
export interface StaffEquipped {
  id: number;
  name: string;
  type: string;
  repSeed: number;
  rarity: number;
  mods?:
    | (
        | (
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
          )[]
        | null
      )[]
    | null;
  icon: string;
  replaceSpent: number;
}
export interface ShieldEquipped {
  id: number;
  name: string;
  type: string;
  repSeed: number;
  rarity: number;
  mods?:
    | (
        | (
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
            | string
            | number
          )[]
        | null
      )[]
    | null;
  icon: string;
  replaceSpent: number;
}
export interface CoreEquipped {
  id: number;
  name: string;
  type: string;
  repSeed: number;
  rarity: number;
  mods?:
    | ((string | number | string | number | string | number)[] | null)[]
    | null;
  icon: string;
}
export interface DailyChallenge {
  large: LargeOrFamine;
  famine: LargeOrFamine;
  seed: number;
}
export interface LargeOrFamine {
  strength: number;
  stacks: number;
}
export interface PerkPresetU1 {
  perkPreset1: PerkPreset1;
  perkPreset2: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  perkPreset3: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
}
export interface PerkPreset1 {
  Carpentry: number;
  Artisanistry: number;
  Range: number;
  Agility: number;
  Bait: number;
  Trumps: number;
  Pheromones: number;
  Packrat: number;
  Motivation: number;
  Power: number;
  Toughness: number;
  Looting: number;
}
export interface PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy {}
export interface PerkPresetU2 {
  perkPreset1: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  perkPreset2: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  perkPreset3: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
}
export interface AutoStructureSetting {
  enabled: boolean;
  Hut: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  House: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Mansion: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Hotel: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Resort: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Gateway: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Collector: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Warpstation: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Gym: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Tribute: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Nursery: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Gigastation: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Wormhole: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  NurseryZones: string;
}
export interface HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson {
  enabled: boolean;
  value: string;
  buyMax: number;
}
export interface StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2 {
  enabled: boolean;
}
export interface AutoJobsSetting {
  enabled: boolean;
  Farmer: FarmerOrLumberjackOrMiner;
  Explorer: ExplorerOrMagmamancerOrTrainer;
  Lumberjack: FarmerOrLumberjackOrMiner;
  Magmamancer: ExplorerOrMagmamancerOrTrainer;
  Miner: FarmerOrLumberjackOrMiner;
  Trainer: ExplorerOrMagmamancerOrTrainer;
  Scientist: Scientist;
  portalGather: string;
}
export interface FarmerOrLumberjackOrMiner {
  enabled: boolean;
  ratio: number;
}
export interface ExplorerOrMagmamancerOrTrainer {
  enabled: boolean;
  value: number;
  buyMax: number;
}
export interface Scientist {
  enabled: boolean;
  ratio: number;
  buyMax: number;
}
export interface AutoEquipSetting {
  enabled: boolean;
  Shield: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Dagger: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Boots: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Mace: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Helmet: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Polearm: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Pants: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Battleaxe: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Shoulderguards: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Greatsword: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Breastplate: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Arbalest: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  Gambeson: HutOrHouseOrMansionOrHotelOrResortOrGatewayOrCollectorOrWarpstationOrGymOrTributeOrNurseryOrGigastationOrWormholeOrShieldOrDaggerOrBootsOrMaceOrHelmetOrPolearmOrPantsOrBattleaxeOrShoulderguardsOrGreatswordOrBreastplateOrArbalestOrGambeson;
  highestTier: boolean;
}
export interface LastHeirlooms {
  u1: U1OrU2;
  u2: U1OrU2;
}
export interface U1OrU2 {
  Shield: number;
  Staff: number;
}
export interface MapPresets {
  p1: P1OrP2OrP3OrP4OrP5;
  p2: P1OrP2OrP3OrP4OrP5;
  p3: P1OrP2OrP3OrP4OrP5;
  p4: P1OrP2OrP3OrP4OrP5;
  p5: P1OrP2OrP3OrP4OrP5;
}
export interface P1OrP2OrP3OrP4OrP5 {
  loot: number;
  difficulty: number;
  size: number;
  biome: string;
  specMod: string;
  perf: boolean;
  extra: number;
  offset: number;
}
export interface MapPresets2 {
  p1: P1OrP2OrP3OrP4OrP51;
  p2: P1OrP2OrP3OrP4OrP51;
  p3: P1OrP2OrP3OrP4OrP51;
  p4: P1OrP2OrP3OrP4OrP51;
  p5: P1OrP2OrP3OrP4OrP51;
}
export interface P1OrP2OrP3OrP4OrP51 {
  loot: number;
  difficulty: number;
  size: number;
  biome: string;
  specMod: string;
  perf: boolean;
  extra: number;
  offset: string;
}
export interface LootAvgs {
  food: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
  wood: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
  metal: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
  gems: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
  fragments: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
  science: FoodOrWoodOrMetalOrGemsOrFragmentsOrScience;
}
export interface FoodOrWoodOrMetalOrGemsOrFragmentsOrScience {
  average: number;
  accumulator: number;
}
export interface Menu {
  buildings: boolean;
  jobs: boolean;
  upgrades: boolean;
}
export interface Messages {
  Story: StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2;
  Loot: Loot;
  Unlocks: Unlocks1;
  Combat: Combat;
  Notices: StoryOrNoticesOrAutoStructureSettingU2OrAutoJobsSettingU2OrAutoEquipSettingU2;
}
export interface Loot {
  enabled: boolean;
  primary: boolean;
  secondary: boolean;
  bone: boolean;
  exotic: boolean;
  helium: boolean;
  essence: boolean;
  token: boolean;
  magma: boolean;
  events: boolean;
  cache: boolean;
  exp: boolean;
}
export interface Unlocks1 {
  enabled: boolean;
  repeated: boolean;
  unique: boolean;
}
export interface Combat {
  enabled: boolean;
  trimp: boolean;
  enemy: boolean;
}
export interface Difs {
  attack: number;
  health: number;
  block: number;
  trainers: number;
}
export interface Empowerments {
  Poison: PoisonOrWindOrIce;
  Wind: PoisonOrWindOrIce;
  Ice: PoisonOrWindOrIce;
}
export interface PoisonOrWindOrIce {
  currentDebuffPower: number;
  level: number;
  retainLevel: number;
  tokens: number;
  nextUberCost: number;
}
export interface SingleRunBonuses {
  goldMaps: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  quickTrimps: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  sharpTrimps: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  heliumy: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
}
export interface GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum {
  owned: boolean;
}
export interface Options {
  displayed: boolean;
  menu: Menu1;
}
export interface Menu1 {
  autoSave: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  usePlayFab: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  standardNotation: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  tooltips: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  tooltipPosition: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  queueAnimation: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  barOutlines: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  menuFormatting: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  formatPerkLevels: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  smallPerks: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  progressBars: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  confirmhole: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  lockOnUnlock: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  achievementPopups: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  mapLoot: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  repeatUntil: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  exitTo: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  repeatVoids: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  boneAlerts: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  showAlerts: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  showFullBreed: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  darkTheme: DarkTheme;
  fadeIns: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  extraStats: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  useAverages: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  voidPopups: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  detailedPerks: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  alwaysAbandon: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  extraMapBtns: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  GeneticistassistTarget: GeneticistassistTarget;
  liquification: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  overkillColor: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  forceQueue: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  mapsOnSpire: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  mapAtZone: MapAtZone;
  timestamps: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  gaFire: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  tinyButtons: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  masteryTab: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  bigPopups: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  generatorStart: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  showHoliday: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  geneSend: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  fireForJobs: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  ctrlGigas: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  showHeirloomAnimations: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  hotkeys: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  climbBw: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  offlineProgress: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  archAutomator: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  hideCompleteAchieves: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  saveOnPause: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  pauseGame: PauseGame;
  disablePause: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
  deleteSave: AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave;
}
export interface AutoSaveOrUsePlayFabOrStandardNotationOrTooltipsOrTooltipPositionOrQueueAnimationOrBarOutlinesOrMenuFormattingOrFormatPerkLevelsOrSmallPerksOrProgressBarsOrConfirmholeOrLockOnUnlockOrAchievementPopupsOrMapLootOrRepeatUntilOrExitToOrRepeatVoidsOrBoneAlertsOrShowAlertsOrShowFullBreedOrFadeInsOrExtraStatsOrUseAveragesOrVoidPopupsOrDetailedPerksOrAlwaysAbandonOrExtraMapBtnsOrLiquificationOrOverkillColorOrForceQueueOrMapsOnSpireOrTimestampsOrGaFireOrTinyButtonsOrMasteryTabOrBigPopupsOrGeneratorStartOrShowHolidayOrGeneSendOrFireForJobsOrCtrlGigasOrShowHeirloomAnimationsOrHotkeysOrClimbBwOrOfflineProgressOrArchAutomatorOrHideCompleteAchievesOrSaveOnPauseOrDisablePauseOrDeleteSave {
  enabled: number;
}
export interface DarkTheme {
  enabled: number;
  styleNames?: string[] | null;
}
export interface GeneticistassistTarget {
  enabled: number;
  disableOnUnlock: boolean;
}
export interface MapAtZone {
  enabled: number;
  setZone?: SetZoneEntity[] | null;
  setZoneB?: SetZoneBEntityOrSetZoneU2BEntity[] | null;
  setZoneU2?: SetZoneU2Entity[] | null;
  setZoneU2B?: SetZoneBEntityOrSetZoneU2BEntity[] | null;
  U1Mode: string;
  U2Mode: string;
}
export interface SetZoneEntity {
  world: number;
  cell: number;
  check: boolean;
  preset: number;
  repeat: number;
  until: number;
  exit: number;
  bwWorld: number;
  times: number;
  on: boolean;
}
export interface SetZoneBEntityOrSetZoneU2BEntity {
  world: number;
}
export interface SetZoneU2Entity {
  world: number;
  check: boolean;
  preset: number;
  repeat: number;
  until: number;
  exit: number;
  bwWorld: number;
}
export interface PauseGame {
  enabled: number;
  timeAtPause: number;
}
export interface Talents {
  portal: PortalProperties;
  bionic: PortalProperties;
  turkimp: PortalProperties;
  housing: PortalProperties;
  bounty: PortalProperties;
  explorers: PortalProperties;
  voidPower: PortalProperties;
  pierce: PortalProperties;
  heirloom: PortalProperties;
  herbalist: PortalProperties;
  headstart: PortalProperties;
  scry: PortalProperties;
  voidPower2: PortalProperties;
  mapLoot: PortalProperties;
  skeletimp: PortalProperties;
  mapHealth: PortalProperties;
  headstart2: PortalProperties;
  daily: PortalProperties;
  hyperspeed: PortalProperties;
  blacksmith: PortalProperties;
  turkimp2: PortalProperties;
  magimp: PortalProperties;
  headstart3: PortalProperties;
  mapBattery: PortalProperties;
  hyperspeed2: PortalProperties;
  blacksmith2: PortalProperties;
  skeletimp2: PortalProperties;
  quickGen: PortalProperties;
  magmaFlow: PortalProperties;
  explorers2: PortalProperties;
  voidPower3: PortalProperties;
  blacksmith3: PortalProperties;
  heirloom2: PortalProperties;
  liquification: PortalProperties;
  maz: PortalProperties;
  scry2: PortalProperties;
  magmamancer: PortalProperties;
  mapLoot2: PortalProperties;
  nature: PortalProperties;
  deciBuild: PortalProperties;
  stillRowing: PortalProperties;
  patience: PortalProperties;
  voidSpecial: PortalProperties;
  healthStrength: PortalProperties;
  nature2: PortalProperties;
  liquification2: PortalProperties;
  stillRowing2: PortalProperties;
  amalg: PortalProperties;
  voidSpecial2: PortalProperties;
  bionic2: PortalProperties;
  fluffyExp: PortalProperties;
  fluffyAbility: PortalProperties;
  overkill: PortalProperties;
  crit: PortalProperties;
  voidMastery: PortalProperties;
  healthStrength2: PortalProperties;
  stillMagmamancer: PortalProperties;
  liquification3: PortalProperties;
  mesmer: PortalProperties;
  angelic: PortalProperties;
}
export interface PortalProperties {
  purchased: boolean;
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
  Frenzy: Frenzy;
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
  scalingSetting: number;
  scalingReverse: boolean;
  disabledStackCount: number;
  scalingCount: number;
}
export interface Hunger {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  storedDamage: number;
}
export interface Frenzy {
  radLocked: boolean;
  radLevel: number;
  radSpent: number;
  frenzyStarted: number;
  deathless: boolean;
}
export interface C2 {
  Discipline: number;
  Metal: number;
  Size: number;
  Balance: number;
  Meditate: number;
  Trimp: number;
  Trapper: number;
  Electricity: number;
  Coordinate: number;
  Slow: number;
  Nom: number;
  Mapology: number;
  Toxicity: number;
  Watch: number;
  Lead: number;
  Obliterated: number;
  Eradicated: number;
  Unlucky: number;
  Downsize: number;
  Transmute: number;
  Unbalance: number;
  Duel: number;
  Trappapalooza: number;
  Wither: number;
  Quest: number;
  Storm: number;
  Berserk: number;
}
export interface Challenges {
  Daily: Daily;
}
export interface Daily {
  allowU2: boolean;
  fireAbandon: boolean;
}
export interface Stats {
  trimpsKilled: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  battlesWon: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  battlesLost: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  gemsCollected: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  mapsCleared: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  zonesCleared: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  trimpsFired: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  spentOnWorms: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  goldenUpgrades: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  heliumHour: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  bestHeliumHourThisRun: BestHeliumHourThisRunOrBestFluffyExpHourThisRun;
  totalHelium: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  bestHeliumHour: BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken;
  dailyBonusHelium: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  totalRadon: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  bestRadonHour: BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken;
  dailyBonusRadon: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  zonesLiquified: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  highestVoidMap: HighestVoidMapOrHighestVoidMap2;
  highestVoidMap2: HighestVoidMapOrHighestVoidMap2;
  totalVoidMaps: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  totalHeirlooms: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  coresFound: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  cellsOverkilled: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  trimpsGenerated: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  decayedNurseries: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  bestTokens: BestTokensOrBestFluffyExpOrBestFluffyExp2;
  amalgamators: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
  bestFluffyExp: BestTokensOrBestFluffyExpOrBestFluffyExp2;
  bestFluffyExp2: BestTokensOrBestFluffyExpOrBestFluffyExp2;
  fluffyExpHour: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  bestFluffyExpHourThisRun: BestHeliumHourThisRunOrBestFluffyExpHourThisRun;
  bestFluffyExpHour: BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken;
  bestFluffyExpHour2: BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken;
  totalPortals: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  totalRadPortals: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  planetsBroken: BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken;
  highestLevel: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  highestRadLevel: PerkPreset2OrPerkPreset3OrPerkPreset1OrHeliumHourOrTotalHeliumOrTotalRadonOrFluffyExpHourOrTotalPortalsOrTotalRadPortalsOrHighestLevelOrHighestRadLevelOrOccupiedBy;
  tdKills: TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills;
}
export interface TrimpsKilledOrBattlesWonOrBattlesLostOrGemsCollectedOrMapsClearedOrZonesClearedOrTrimpsFiredOrSpentOnWormsOrGoldenUpgradesOrDailyBonusHeliumOrDailyBonusRadonOrZonesLiquifiedOrTotalVoidMapsOrTotalHeirloomsOrCoresFoundOrCellsOverkilledOrTrimpsGeneratedOrDecayedNurseriesOrAmalgamatorsOrTdKills {
  value: number;
  valueTotal: number;
}
export interface BestHeliumHourThisRunOrBestFluffyExpHourThisRun {
  storedValue: number;
  atZone: number;
  noFormat: boolean;
}
export interface BestHeliumHourOrBestRadonHourOrBestFluffyExpHourOrBestFluffyExpHour2OrPlanetsBroken {
  valueTotal: number;
}
export interface HighestVoidMapOrHighestVoidMap2 {
  value: number;
  valueTotal: number;
  noAdd: boolean;
}
export interface BestTokensOrBestFluffyExpOrBestFluffyExp2 {
  value: number;
  valueTotal: number;
  noAdd: boolean;
  keepHighest: boolean;
}
export interface GeneratorUpgrades {
  Efficiency: EfficiencyOrCapacityOrSupplyOrOverclocker;
  Capacity: EfficiencyOrCapacityOrSupplyOrOverclocker;
  Supply: EfficiencyOrCapacityOrSupplyOrOverclocker;
  Overclocker: EfficiencyOrCapacityOrSupplyOrOverclocker;
}
export interface EfficiencyOrCapacityOrSupplyOrOverclocker {
  upgrades: number;
  modifier: number;
}
export interface PermanentGeneratorUpgrades {
  Hybridization: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  Storage: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  Shielding: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  Slowburn: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  Supervision: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
  Simulacrum: GoldMapsOrQuickTrimpsOrSharpTrimpsOrHeliumyOrHybridizationOrStorageOrShieldingOrSlowburnOrSupervisionOrSimulacrum;
}
export interface Achievements {
  zones: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  zones2: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  damage: DamageOrTrimps;
  trimps: DamageOrTrimps;
  housing: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  portals: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalZones: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalMaps: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalHelium: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalRadon: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  heliumHour: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalHeirlooms: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  totalGems: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  dailyHelium: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  humaneRun: HumaneRunOrMapless;
  mapless: HumaneRunOrMapless;
  shielded: ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded;
  blockTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  wallTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  angerTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  doomTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  prisonTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  bionicTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  starTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  spireTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  spire2Timed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  spire3Timed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  spire4Timed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  spire5Timed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  bigWallTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  palaceTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  atlantrimpTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  meltingTimed: BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed;
  oneOffs: OneOffsOrOneOffs2;
  oneOffs2: OneOffsOrOneOffs2;
}
export interface ZonesOrZones2OrHousingOrPortalsOrTotalZonesOrTotalMapsOrTotalHeliumOrTotalRadonOrHeliumHourOrTotalHeirloomsOrTotalGemsOrDailyHeliumOrShielded {
  finished: number;
}
export interface DamageOrTrimps {
  finished: number;
  highest: number;
}
export interface HumaneRunOrMapless {
  finished: number;
  earnable: boolean;
  lastZone: number;
}
export interface BlockTimedOrWallTimedOrAngerTimedOrDoomTimedOrPrisonTimedOrBionicTimedOrStarTimedOrSpireTimedOrSpire2TimedOrSpire3TimedOrSpire4TimedOrSpire5TimedOrBigWallTimedOrPalaceTimedOrAtlantrimpTimedOrMeltingTimed {
  finished: number;
  u: number;
  highest: number;
  reverse: boolean;
  showAll: boolean;
}
export interface OneOffsOrOneOffs2 {
  finished?: boolean[] | null;
}
export interface Heirlooms {
  recycleOverride?: number[] | null;
  slots?: number[] | null;
  universeBreakpoints?: number[] | null;
  priceIncrease?: number[] | null;
  canReplaceMods?: boolean[] | null;
  Core: Core;
  Staff: Staff;
  Shield: Shield;
}
export interface Core {
  fireTrap: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  poisonTrap: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  lightningTrap: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  runestones: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  strengthEffect: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  condenserEffect: CondenserEffect;
}
export interface FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage {
  currentBonus: number;
}
export interface CondenserEffect {
  currentBonus: number;
  max?: number[] | null;
}
export interface Staff {
  metalDrop: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  foodDrop: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  woodDrop: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  gemsDrop: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  fragmentsDrop: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  FarmerSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  LumberjackSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  MinerSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  DragimpSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  ExplorerSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  ScientistSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  FluffyExp: FluffyExp;
  empty: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
}
export interface FluffyExp {
  heirloopy: boolean;
  currentBonus: number;
}
export interface Shield {
  playerEfficiency: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  trainerEfficiency: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  storageSize: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  breedSpeed: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  trimpHealth: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  trimpAttack: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  trimpBlock: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  critDamage: FireTrapOrPoisonTrapOrLightningTrapOrRunestonesOrStrengthEffectOrMetalDropOrFoodDropOrWoodDropOrGemsDropOrFragmentsDropOrFarmerSpeedOrLumberjackSpeedOrMinerSpeedOrDragimpSpeedOrExplorerSpeedOrScientistSpeedOrEmptyOrPlayerEfficiencyOrTrainerEfficiencyOrStorageSizeOrBreedSpeedOrTrimpHealthOrTrimpAttackOrTrimpBlockOrCritDamage;
  critChance: CritChanceOrVoidMapsOrPlaguebringer;
  voidMaps: CritChanceOrVoidMapsOrPlaguebringer;
  plaguebringer: CritChanceOrVoidMapsOrPlaguebringer;
  prismatic: Prismatic;
  gammaBurst: GammaBurst;
  empty: Empty;
}
export interface CritChanceOrVoidMapsOrPlaguebringer {
  currentBonus: number;
  heirloopy: boolean;
  max?: number[] | null;
}
export interface Prismatic {
  currentBonus: number;
  noScaleU2: boolean;
  max?: number[] | null;
}
export interface GammaBurst {
  currentBonus: number;
  stacks: number;
}
export interface Empty {
  currentBonus: number;
  rarity: number;
}
export interface Settings {
  speed: number;
  speedTemp: number;
  slowdown: boolean;
  ewma_alpha: number;
  ewma_ticks: number;
}
export interface Resources {
  food: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  wood: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  metal: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  trimps: Trimps;
  science: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  gems: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  fragments: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
  helium: Helium;
  radon: FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon;
}
export interface FoodOrWoodOrMetalOrScienceOrGemsOrFragmentsOrRadon {
  owned: number;
  max: number;
}
export interface Trimps {
  owned: number;
  max: number;
  maxMod: number;
  working: number;
  speed: number;
  soldiers: number;
  maxSoldiers: number;
  potency: number;
}
export interface Helium {
  owned: number;
  max: number;
  respecMax: number;
}
export interface Equipment {
  Shield: Shield1;
  Dagger: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Boots: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
  Mace: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Helmet: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
  Polearm: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Pants: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
  Battleaxe: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Shoulderguards: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
  Greatsword: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Breastplate: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
  Arbalest: DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest;
  Gambeson: BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson;
}
export interface Shield1 {
  locked: number;
  modifier: number;
  level: number;
  oc: number;
  health: number;
  healthCalculated: number;
  blockNow: boolean;
  block: number;
  blockCalculated: number;
  prestige: number;
}
export interface DaggerOrMaceOrPolearmOrBattleaxeOrGreatswordOrArbalest {
  locked: number;
  modifier: number;
  level: number;
  oc: number;
  attack: number;
  attackCalculated: number;
  prestige: number;
}
export interface BootsOrHelmetOrPantsOrShoulderguardsOrBreastplateOrGambeson {
  locked: number;
  modifier: number;
  level: number;
  oc: number;
  health: number;
  healthCalculated: number;
  prestige: number;
}
export interface MapUnlocks {
  roboTrimp: RoboTrimpOrHeirloom;
  Geneticistassist: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  AutoStorage: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  ImprovedAutoStorage: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  MapAtZone: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  AutoEquip: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  AncientTreasure: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  SmithFree: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Heirloom: RoboTrimpOrHeirloom;
  Keys: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Relentlessness: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Portal: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Prismalicious: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Shieldblock: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Bounty: GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty;
  Supershield: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Dagadder: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Bootboost: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Megamace: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Hellishmet: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Polierarm: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Pantastic: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Axeidic: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Smoldershoulder: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Greatersword: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Bestplate: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Harmbalest: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  GambesOP: SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP;
  Speedexplorer: Speedexplorer;
  TheBlock: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  TheWall: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  BigWall: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  ThePrison: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  BionicWonderland: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  ImplodingStar: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Mansion: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Hotel: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  UberHut: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  UberHouse: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  UberMansion: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  UberHotel: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  UberResort: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Resort: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Gateway: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Wormhole: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Collector: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Trapstorm: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  Nursery: TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery;
  gems: Gems;
  Gems: GemsOrAnyOrMetalOrFoodOrWood;
  Any: GemsOrAnyOrMetalOrFoodOrWood;
  Metal: GemsOrAnyOrMetalOrFoodOrWood;
  Food: GemsOrAnyOrMetalOrFoodOrWood;
  Wood: GemsOrAnyOrMetalOrFoodOrWood;
}
export interface RoboTrimpOrHeirloom {
  title: string;
  canRunWhenever: boolean;
  filterUpgrade: boolean;
}
export interface GeneticistassistOrAutoStorageOrImprovedAutoStorageOrMapAtZoneOrAutoEquipOrAncientTreasureOrSmithFreeOrKeysOrRelentlessnessOrPortalOrPrismaliciousOrShieldblockOrBounty {
  title: string;
  canRunOnce: boolean;
  filterUpgrade: boolean;
}
export interface SupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOP {
  title: string;
  prestige: boolean;
  last: number;
}
export interface Speedexplorer {
  addToCount: boolean;
  title: string;
  next: number;
}
export interface TheBlockOrTheWallOrBigWallOrThePrisonOrBionicWonderlandOrImplodingStarOrMansionOrHotelOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrResortOrGatewayOrWormholeOrCollectorOrTrapstormOrNursery {
  title: string;
  canRunOnce: boolean;
}
export interface Gems {
  title: string;
}
export interface GemsOrAnyOrMetalOrFoodOrWood {
  title: string;
  filter: boolean;
}
export interface Buildings {
  Trap: Trap;
  Barn: Barn;
  Shed: ShedOrForge;
  Forge: ShedOrForge;
  Hut: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  House: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Mansion: Mansion;
  Hotel: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Resort: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Gateway: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Wormhole: Wormhole;
  Collector: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Warpstation: Warpstation;
  Hub: Hub;
  Gym: Gym;
  Smithy: Smithy;
  Tribute: HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute;
  Nursery: Nursery;
  Microchip: MicrochipOrAntenna;
  Antenna: MicrochipOrAntenna;
}
export interface Trap {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
}
export interface Barn {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  percent: boolean;
}
export interface ShedOrForge {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  percent: boolean;
  alert: boolean;
}
export interface HutOrHouseOrHotelOrResortOrGatewayOrCollectorOrTribute {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  increase: Increase;
}
export interface Increase {
  what: string;
  by: number;
}
export interface Mansion {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  increase: Increase;
  alert: boolean;
}
export interface Wormhole {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  blockU2: boolean;
  AP: boolean;
  increase: Increase;
  alert: boolean;
}
export interface Warpstation {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  origTime: number;
  AP: boolean;
  blockU2: boolean;
  increase: Increase;
}
export interface Hub {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  blockU1: boolean;
  increase: Increase;
}
export interface Gym {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  blockU2: boolean;
  increase: Increase;
}
export interface Smithy {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  blockU1: boolean;
}
export interface Nursery {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  AP: boolean;
  blockU2: boolean;
}
export interface MicrochipOrAntenna {
  locked: number;
  owned: number;
  purchased: number;
  craftTime: number;
  blockU1: boolean;
}
export interface Jobs {
  Farmer: FarmerOrLumberjackOrMinerOrScientistOrDragimp;
  Lumberjack: FarmerOrLumberjackOrMinerOrScientistOrDragimp;
  Miner: FarmerOrLumberjackOrMinerOrScientistOrDragimp;
  Scientist: FarmerOrLumberjackOrMinerOrScientistOrDragimp;
  Trainer: TrainerOrGeneticist;
  Explorer: Explorer;
  Dragimp: FarmerOrLumberjackOrMinerOrScientistOrDragimp;
  Geneticist: TrainerOrGeneticist;
  Magmamancer: Magmamancer;
  Amalgamator: Amalgamator;
  Meteorologist: Meteorologist;
  Worshipper: Worshipper;
}
export interface FarmerOrLumberjackOrMinerOrScientistOrDragimp {
  locked: number;
  owned: number;
  increase: string;
  modifier: number;
}
export interface TrainerOrGeneticist {
  locked: number;
  allowAutoFire: boolean;
  owned: number;
  blockU2: boolean;
  increase: string;
  modifier: number;
}
export interface Explorer {
  locked: number;
  allowAutoFire: boolean;
  owned: number;
  increase: string;
  modifier: number;
}
export interface Magmamancer {
  locked: number;
  owned: number;
  blockU2: boolean;
  allowAutoFire: boolean;
  increase: string;
  modifier: number;
  alert: boolean;
}
export interface Amalgamator {
  locked: number;
  owned: number;
  allowAutoFire: boolean;
  increase: string;
  populationModifier: number;
  healthModifier: number;
  damageModifier: number;
  fireThresh: number;
}
export interface Meteorologist {
  locked: number;
  owned: number;
  vestedHires: number;
  blockU1: boolean;
  allowAutoFire: boolean;
  increase: string;
}
export interface Worshipper {
  locked: number;
  owned: number;
  blockU1: boolean;
  allowAutoFire: boolean;
  max: number;
  increase: string;
}
export interface GoldenUpgrades {
  Helium: HeliumOrVoid;
  Battle: Battle;
  Void: HeliumOrVoid;
}
export interface HeliumOrVoid {
  currentBonus: number;
  purchasedAt?: number[] | null;
}
export interface Battle {
  currentBonus: number;
  purchasedAt?: null[] | null;
}
export interface Upgrades {
  attackRelic: AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic;
  enemyAttackRelic: AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic;
  radonRelic: AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic;
  scienceRelic: AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic;
  breedRelic: AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic;
  Coordination: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Gigastation: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Battle: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Bloodlust: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Prismatic: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Blockmaster: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Trapstorm: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Shieldblock: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Bounty: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Egg: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Prismalicious: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Anger: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Rage: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Gymystic: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  SuperShriek: SuperShriek;
  Formations: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Dominance: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Barrier: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Miners: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Scientists: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Trainers: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Explorers: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Magmamancers: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  UberHut: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  UberHouse: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  UberMansion: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  UberHotel: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  UberResort: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Supershield: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Dagadder: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Bootboost: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Megamace: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Hellishmet: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Polierarm: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Pantastic: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Axeidic: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Smoldershoulder: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Greatersword: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Bestplate: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Harmbalest: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  GambesOP: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Potency: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  TrainTacular: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Efficiency: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Speedminer: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Speedlumber: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Speedfarming: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Speedscience: BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience;
  Speedexplorer: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Megaminer: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Megalumber: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Megafarming: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
  Megascience: CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience;
}
export interface AttackRelicOrEnemyAttackRelicOrRadonRelicOrScienceRelicOrBreedRelic {
  name: string;
  isRelic: boolean;
  relic: string;
  locked: number;
  done: number;
  allowed: number;
}
export interface CoordinationOrGigastationOrTrapstormOrMagmamancersOrUberHutOrUberHouseOrUberMansionOrUberHotelOrUberResortOrSupershieldOrDagadderOrBootboostOrMegamaceOrHellishmetOrPolierarmOrPantasticOrAxeidicOrSmoldershoulderOrGreaterswordOrBestplateOrHarmbalestOrGambesOPOrPotencyOrTrainTacularOrEfficiencyOrSpeedexplorerOrMegaminerOrMegalumberOrMegafarmingOrMegascience {
  locked: number;
  done: number;
  allowed: number;
  alert: boolean;
}
export interface BattleOrBloodlustOrPrismaticOrBlockmasterOrShieldblockOrBountyOrEggOrPrismaliciousOrAngerOrRageOrGymysticOrFormationsOrDominanceOrBarrierOrMinersOrScientistsOrTrainersOrExplorersOrSpeedminerOrSpeedlumberOrSpeedfarmingOrSpeedscience {
  locked: number;
  done: number;
  allowed: number;
}
export interface SuperShriek {
  locked: number;
  allowed: number;
}
export interface Triggers {
  Trap: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  wood: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Barn: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Shed: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Forge: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  jobs: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Lumberjack: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  upgrades: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Battle: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  Hut: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  House: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
  breeding: TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding;
}
export interface TrapOrWoodOrBarnOrShedOrForgeOrJobsOrLumberjackOrUpgradesOrBattleOrHutOrHouseOrBreeding {
  done: number;
}
export interface Unlocks {
  imps: Imps;
  impCount: ImpCount;
}
export interface Imps {
  Goblimp: boolean;
  Feyimp: boolean;
  Flutimp: boolean;
  Tauntimp: boolean;
  Venimp: boolean;
  Whipimp: boolean;
  Jestimp: boolean;
  Titimp: boolean;
  Chronoimp: boolean;
  Magnimp: boolean;
}
export interface ImpCount {
  Goblimp: number;
  Feyimp: number;
  Flutimp: number;
  Tauntimp: number;
  TauntimpAdded: number;
  Venimp: number;
  Whipimp: number;
  Jestimp: number;
  Titimp: number;
  Chronoimp: number;
  Magnimp: number;
}
export interface PlayerSpire {
  main: Main;
  traps: Traps;
  settings: Settings1;
}
export interface Main {
  layout?: LayoutEntity[] | null;
  rowsAllowed: number;
  runestones: number;
  spirestones: number;
  maxEnemies: number;
  currentEnemies: number;
  enemiesKilled: number;
  escapees: number;
  ticksSinceLastEnemy: number;
  smallMode: boolean;
  popupOpen: boolean;
  strengthLocations?: number[] | null;
  lightColumns?: number[] | null;
  initialized: boolean;
  difficulty: number;
  tutorialStep: number;
  lootAvg: LootAvg;
  killedSinceLeak: number;
  nextIcon: number;
  spentOnUpgrades: number;
  savedLayout1?: string[] | null;
  savedLayout2?: null[] | null;
  layout1Note: string;
  layout2Note: string;
  difficultyHidden: number;
  peakThreat: number;
  paused: boolean;
}
export interface LayoutEntity {
  trap: Trap1;
  occupiedBy: OccupiedBy;
}
export interface Trap1 {
  name: string;
}
export interface OccupiedBy {
  name?: string | null;
  maxHealth?: number | null;
  health?: number | null;
  toxicity?: number | null;
  threat?: number | null;
  shockTurns?: number | null;
  slowedFor?: number | null;
  canMoveIn?: number | null;
  slowMod?: number | null;
  slowTot?: number | null;
}
export interface LootAvg {
  accumulator: number;
  average: number;
  counter: number;
  lastAvg?: number[] | null;
}
export interface Traps {
  Fire: TrapProperties;
  Frost: TrapProperties;
  Poison: TrapProperties;
  Lightning: TrapProperties;
  Strength: TrapProperties;
  Condenser: TrapProperties;
  Knowledge: TrapProperties;
}
export interface TrapProperties {
  owned: number;
  level: number;
  locked: boolean;
}
export interface Settings1 {
  fctTrap: boolean;
  fctPoison: boolean;
  fctRs: boolean;
  fctStatic: boolean;
  chillGradient: boolean;
  shockEffect: boolean;
  enemyIcons: boolean;
  trapIcons: boolean;
  percentHealth: boolean;
}
