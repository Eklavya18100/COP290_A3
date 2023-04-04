export const tabNames = {
  NONE: 'none',
  HOME: 'home',
  DNA: 'dna',
  PLAN: 'plan',
  PROFILE: 'profile',
}

export const getTabList = releaseDnaFeature => releaseDnaFeature ? [
  tabNames.HOME, tabNames.DNA, tabNames.PLAN, tabNames.PROFILE
] : [
  tabNames.HOME, tabNames.PLAN, tabNames.PROFILE, tabNames.NONE
]
