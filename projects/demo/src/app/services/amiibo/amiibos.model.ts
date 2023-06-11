//Create interface for Amiibo
export interface Amiibo {
  name: string;
  image: string;
  exclusives: string;
  extras: string;
}

export const amiibos: Amiibo[] = [
  {
    name: 'Tears of the Kingdom Link Amiibo',
    image: 'Tears of the Kingdom Link Amiibo.webp',
    exclusives: "Champion's Leathers Paraglider Skin",
    extras: "Knight's Broadsword\r\n" +
      'Assorted Mushrooms (Chillshroom, Hearty Truffle, Hylian Shroom, Rushroom, Zapshroom, Stamella Shroom, Skyshroom, Ironshroom, Sunshroom, Brightcap, Razorshroom)'
  },
  {
    name: 'Breath of the Wild Rider Link Amiibo',
    image: 'Breath of the Wild Rider Link Amiibo.webp',
    exclusives: 'Hylian-Hood Paraglider Fabric',
    extras: "Soldier's Broadsword\r\n" +
      'Arrows\r\n' +
      'Assorted Mushrooms (Chillshroom, Hearty Truffle, Hylian Shroom, Rushroom, Zapshroom, Stamella Shroom, Skyshroom, Ironshroom, Sunshroom, Brightcap, Razorshroom)'
  },
  {
    name: 'Breath of the Wild Archer Link Amiibo',
    image: 'Breath of the Wild Archer Link Amiibo.webp',
    exclusives: 'Tunic of Memories Paraglider Fabric\r\nAncient Blade',
    extras: "Knight's Bow, Soldier's Bow\r\n" +
      'Assorted Meat (Raw Bird Drumstick, Raw Meat, Raw Bird Thigh)\r\n' +
      'Assorted Fish (Armored Carp, Mighty Cap, Chillfin Trout, Hyrule Bass, Mighty Porgy, Staminoka Bass)'
  },
  {
    name: 'Twilight Princess / Smash Brothers Link Amiibo',
    image: 'Twilight Princess : Smash Brothers Link Amiibo.webp',
    exclusives: 'Mirror of Twilght Paraglider Fabric\r\n' +
      'Epona Horse\r\n' +
      'Cap of Twilight\r\n' +
      'Tunic of Twilight\r\n' +
      'Trousers of Twilight',
    extras: "Knight's Broadsword\r\n" +
      "Soldier's Shield\r\n" +
      'Assorted Fruits and Nuts (Wildberry, Voltfruit, Apple, Mighty Bananas, Hydromelon, Palm Fruit, Spicy Pepper, Chickaloo Tree Nut, Acorn)'
  },
  {
    name: 'Ocarina of Time Link / Smash Bros Young Link Amiibo',
    image: 'Ocarina of Time Link : Smash Bros Young Link Amiibo.webp',
    exclusives: 'Lon Lon Ranch Paraglider Fabric\r\n' +
      'Cap of Time\r\n' +
      'Tunic of Time\r\n' +
      'Trousers of Time\r\n' +
      'Biggoron Sword',
    extras: "Soldier's Claymore\r\n" +
      'Arrows\r\n' +
      'Assorted Meat (Raw Meat, Raw Prime Meat, Raw Gourmet Meat)'
  },
  {
    name: "Majora's Mask Link Amiibo",
    image: "Majora's Mask Link Amiibo.webp",
    exclusives: "Majora's Mask Paraglider Fabric\r\n" +
      'Fierce Deity Mask\r\n' +
      'Fierce Deity Armor\r\n' +
      'Fierce Deity Boots\r\n' +
      'Fierce Deity Sword',
    extras: "Knight's Broadsword\r\n" +
      'Assorted Mushrooms (Chillshroom, Hearty Truffle, Hylian Shroom, Rushroom, Zapshroom, Stamella Shroom, Skyshroom, Ironshroom, Sunshroom, Brightcap, Razorshroom)'
  },
  {
    name: 'Skyward Sword Link Amiibo',
    image: 'Skyward Sword Link Amiibo.webp',
    exclusives: 'Sword-Spirit Paraglider Fabric\r\n' +
      'Cap of the Sky\r\n' +
      'Tunic of the Sky\r\n' +
      'Trousers of the Sky\r\n' +
      'White Sword of the Sky',
    extras: "Knight's Broadsword\r\n" +
      "Knight's Shield, Soldier's Shield\r\n" +
      'Arrows\r\n' +
      'Wooden Boxes of Materials'
  },
  {
    name: 'Wind Waker Link / Smash Brothers Toon Link Amiibo',
    image: 'Wind Waker Link : Smash Brothers Toon Link Amiibo.webp',
    exclusives: 'King of Red Lions Paraglider Fabric\r\n' +
      'Cap of the Wind\r\n' +
      'Tunic of Wind\r\n' +
      'Trousers of the Wind\r\n' +
      'Sea Breeze Shield\r\n' +
      'Sea Breeze Boomerang',
    extras: 'Boomerang\r\n' +
      "Knight's Broadsword\r\n" +
      'Arrows\r\n' +
      'Assorted Fish (Armored Carp, Mighty Cap, Chillfin Trout, Hyrule Bass, Mighty Porgy, Staminoka Bass)'
  },
  {
    name: "Link's Awakening Link Amiibo",
    image: "Link's Awakening Link Amiibo.webp",
    exclusives: 'Egg Paraglider Fabric\r\n' +
      'Mask of Awakening\r\n' +
      'Tunic of Awakening\r\n' +
      'Trousers of Awakening',
    extras: "Soldier's Broadsword\r\n" +
      'Arrows\r\n' +
      'Barrels (Explosive and Materials)'
  },
  {
    name: 'The Legend of Zelda 8-Bit Link Amiibo',
    image: 'The Legend of Zelda 8-Bit Link Amiibo.webp',
    exclusives: 'Pixel Paraglider Fabric\r\n' +
      'Cap of the Hero\r\n' +
      'Tunic of the Hero\r\n' +
      'Trousers of the Hero\r\n' +
      'Sword of the Hero',
    extras: "Knight's Broadsword\r\n" +
      "Soldier's Shield, Knight's Shield\r\n" +
      'Arrows\r\n' +
      'Barrels (Explosive and Materials)'
  },
  {
    name: 'Breath of the Wild Zelda Amiibo',
    image: 'Breath of the Wild Zelda Amiibo.webp',
    exclusives: 'Hyrule Princess Paraglider Fabric',
    extras: "Knight's Shield, Soldier's Shield\r\n" +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)\r\n' +
      'Assorted Herbs (Silent Princess, Electric Safflina, Swift Carrot, Mighty Thistle, Blue Nightshade, Hyrule Herb, Fortified Pumpkin, Amoranth, Swift Violet)'
  },
  {
    name: 'Skyward Sword Zelda and Loftwing Amiibo',
    image: 'Skyward Sword Zelda and Loftwing Amiibo.webp',
    exclusives: 'Goddess Paraglider Fabric',
    extras: "Soldier's Bow, Knight's Bow\r\n" +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)\r\n' +
      'Assorted Herbs (Silent Princess, Electric Safflina, Swift Carrot, Mighty Thistle, Blue Nightshade, Hyrule Herb, Fortified Pumpkin, Amoranth, Swift Violet)'
  },
  {
    name: 'Wind Waker Zelda Amiibo',
    image: 'Wind Waker Zelda Amiibo.webp',
    exclusives: 'Bygone Royal Paraglider Fabric\r\nSea Breeze Shield',
    extras: "Soldier's Shield, Knight's Shield\r\n" +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)\r\n' +
      'Assorted Herbs (Silent Princess, Electric Safflina, Swift Carrot, Mighty Thistle, Blue Nightshade, Hyrule Herb, Fortified Pumpkin, Amoranth, Swift Violet)'
  },
  {
    name: 'Smash Brothers Zelda Amiibo',
    image: 'Smash Brothers Zelda Amiibo.webp',
    exclusives: 'Princess of Twilight Paraglider Fabric\r\nDusk Bow',
    extras: "Soldier's Bow, Knight's Bow\r\n" +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)\r\n' +
      'Assorted Herbs (Silent Princess, Electric Safflina, Swift Carrot, Mighty Thistle, Blue Nightshade, Hyrule Herb, Fortified Pumpkin, Amoranth, Swift Violet)'
  },
  {
    name: 'Smash Brothers Sheik Amiibo',
    image: 'Smash Brothers Sheik Amiibo.webp',
    exclusives: "Sheik Paraglider Fabric\r\nSheik's Mask",
    extras: 'Eightfold Blade\r\n' +
      "Shield of the Mind's Eye\r\n" +
      'Phrenic Bow\r\n' +
      'Arrows\r\n' +
      'Assorted Mushrooms (Chillshroom, Hearty Truffle, Hylian Shroom, Rushroom, Zapshroom, Stamella Shroom, Skyshroom, Ironshroom, Sunshroom, Brightcap, Razorshroom)'
  },
  {
    name: 'Twilight Princess Wolf Link Amiibo',
    image: 'Twilight Princess Wolf Link Amiibo.webp',
    exclusives: 'Mirror of Twilight Paraglider Fabric',
    extras: 'Assorted Meat (Raw Meat, Raw Prime Meat, Raw Gourmet Meat, Raw Whole Bird, Seared Gourmet Meat, Roasted Whole Bird)'
  },
  {
    name: 'Smash Brothers Gannondorf Amiibo',
    image: 'Smash Brothers Gannondorf Amiibo.webp',
    exclusives: 'Demon King Paraglider Fabric\r\nDusk Claymore',
    extras: 'Gerudo Claymore\r\n' +
      'Bokoblin Guts\r\n' +
      'Raw Meat\r\n' +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)'
  },
  {
    name: 'Breath of the Wild Mipha Amiibo',
    image: 'Breath of the Wild Mipha Amiibo.webp',
    exclusives: 'Zora Champion Paraglider Fabric\r\nVah Ruta Divine Helm',
    extras: 'Zora Spear\r\n' +
      'Assorted Fish (Armored Carp, Mighty Cap, Chillfin Trout, Hyrule Bass, Mighty Porgy, Staminoka Bass)'
  },
  {
    name: 'Breath of the Wild Daruk Amiibo',
    image: 'Breath of the Wild Daruk Amiibo.webp',
    exclusives: 'Goron Champion Paraglider Fabric\r\nVah Rudania Divine Helm',
    extras: 'Cobble Crusher\r\n' +
      'Assorted Gems (Amber, Opal, Luminous Stone, Star Fragment, Sapphire, Ruby, Topaz, Diamond)'
  },
  {
    name: 'Breath of the Wild Revali Amiibo',
    image: 'Breath of the Wild Revali Amiibo.webp',
    exclusives: 'Rito Champion Paraglider Fabric\r\nVah Medoh Divine Helm',
    extras: 'Falcon Bow, Swallow Bow\r\n' +
      'Arrows\r\n' +
      'Assorted Herbs (Silent Princess, Electric Safflina, Swift Carrot, Mighty Thistle, Blue Nightshade, Hyrule Herb, Fortified Pumpkin, Amoranth, Swift Violet)'
  },
  {
    name: 'Breath of the Wild Urbosa Amiibo',
    image: 'Breath of the Wild Urbosa Amiibo.webp',
    exclusives: 'Gerudo Champion Paraglider Fabric\r\nVah Naboris Divine Helm',
    extras: 'Gerudo Scimitar\r\n' +
      'Assorted Meat (Raw Meat, Raw Prime Meat, Raw Gourmet Meat, Raw Bird Drumstick, Raw Bird Thigh, Raw Whole Bird)'
  },
  {
    name: 'Breath of the Wild Guardian Amiibo',
    image: 'Breath of the Wild Guardian Amiibo.webp',
    exclusives: 'Ancient Sheikah Paraglider Fabric\r\nAncient Blade',
    extras: 'Rusty Broadsword, Rusty Claymore, Rusty Halberd\r\n' +
      'Arrows\r\n' +
      'Iron Boxes of Materials'
  },
  {
    name: 'Breath of the Wild Bokoblin Amiibo',
    image: 'Breath of the Wild Bokoblin Amiibo.webp',
    exclusives: 'Bokoblin Paraglider Fabric',
    extras: 'Boko Bow, Spiked Boko Bow\r\n' +
      'Boko Shield, Spiked Boko Shield\r\n' +
      'Bokoblin Guts\r\n' +
      'Assorted Meat (Raw Meat, Raw Prime Meat, Raw Gourmet Meat)'
  }
]
