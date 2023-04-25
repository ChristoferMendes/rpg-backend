import { AbilityTypeEnum, RacesEnum } from "@prisma/client"

interface RaceBonus {
  race: RacesEnum
  bonus: {
    ability: AbilityTypeEnum
    value: number
  }[]
}

export const raceBonus: RaceBonus[] = [
  {
    race: 'Dwarf', bonus: [
      { ability: 'Strenght', value: 2 },
    ]
  },
  {
    race: 'Human', bonus: [
      { ability: 'Dexterity', value: 2 },
      { ability: 'Magic', value: 1 },
    ]
  },
  {
    race: 'Beastfolk', bonus: [
      { ability: 'Strenght', value: 2 },
      { ability: 'Magic', value: 1 },
    ]
  },
  {
    race: 'Dragonborn', bonus: [
      { ability: 'Strenght', value: 1 },
      { ability: 'Magic', value: 1 },
    ]
  },
  {
    race: 'Half_Elf', bonus: [
      { ability: 'Dexterity', value: 1 },
      { ability: 'Magic', value: 2 }
    ]
  }

]