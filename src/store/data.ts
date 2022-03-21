import { MbsResponse } from "./../types/data.types";
export const mbsMultiMap = new Map([
  ["260636", 1],
  ["260638", 2],
  ["260639", 3],
  ["260628", 1],
  ["260629", 2],
  ["260631", 3],
  ["260642", 1],
  ["260644", 2],
  ["260647", 3],
]);
export const assetNameMap = new Map([
  ["318606", "Barley"],
  ["318607", "Corn"],
  ["298595", "Barley Seed"],
  ["298596", "Corn Seed"],
  ["298593", "Milk"],
  ["378691", "Ancient Stone Axe"],
  ["260763", "Stone Axe"],
  ["203881", "Axe"],
  ["203883", "Saw"],
  ["203886", "Chainsaw"],
  ["203887", "Fishing Rod"],
  ["203888", "Fishing Net"],
  ["203889", "Boat"],
  ["203891", "Mining Excavator"],
  ["298592", "Farm Plot"],
  ["298591", "Coop"],
  ["298590", "Cowshed"],
  ["298612", "Chicken Egg"],
  ["298613", "Chick"],
  ["298614", "Chicken"],
  ["298597", "Baby Calf"],
  ["298599", "Female Calf"],
  ["298600", "Male Calf"],
  ["298607", "Dairy Cow"],
  ["298611", "Bull"],
  ["260676", "Farmers Coin"],
  ["260636", "Food Membership Bronze"],
  ["260638", "Food Membership Silver"],
  ["260639", "Food Membership Gold"],
  ["260628", "Wood Membership Bronze"],
  ["260629", "Wood Membership Silver"],
  ["260631", "Wood Membership Gold"],
  ["260642", "Gold Membership Bronze"],
  ["260644", "Gold Membership Silver"],
  ["260647", "Gold Membership Gold"],
]);

// export function getAssetInfo(template_id: string) {
//   const found = assetsDataInfo.find((asset) => asset.template_id === template_id);
//   return found;
// }
export function filterMbsByType(mbs: MbsResponse[], type: string) {
  return mbs.filter((mbs) => mbs.type === type);
}
export const endpoints: string[] = [
  "https://chain.wax.io",
  "https://wax.eu.eosamsterdam.net",
  "https://wax.pink.gg",
  "https://api.waxsweden.org",
  "https://wax.eosphere.io",
];

// export const assetsDataInfo: AssetInfoInterface[] = [
//   {
//     name: "Barley",
//     template_id: "318606",
//     gold: 40,
//     wood: 0,
//     schema_name: "foods",
//     cost: { gold: 41, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Corn",
//     template_id: "318607",
//     gold: 60,
//     wood: 0,
//     schema_name: "foods",
//     cost: { gold: 61, wood: 0, food: 0, fc: 0 },
//   },

//   {
//     name: "Barley Seed",
//     template_id: "298595",
//     gold: 40,
//     wood: 0,
//     schema_name: "plants",
//     cost: { gold: 51, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Corn Seed",
//     template_id: "298596",
//     gold: 60,
//     wood: 0,
//     schema_name: "plants",
//     cost: { gold: 76, wood: 0, food: 0, fc: 0 },
//   },

//   {
//     name: "Milk",
//     template_id: "298593",
//     gold: 140,
//     wood: 0,
//     schema_name: "foods",
//     cost: { gold: 141, wood: 0, food: 0, fc: 0 },
//   },

//   {
//     name: "Ancient Stone Axe",
//     template_id: "378691",
//     gold: 20,
//     wood: 110,
//     schema_name: "tools",
//     cost: { gold: 41, wood: 110, food: 0, fc: 0 },
//     energy: 4,
//     repair: 1,
//     type: "Wood",
//   },
//   {
//     name: "Stone Axe",
//     template_id: "260763",
//     gold: 135,
//     wood: 800,
//     schema_name: "tools",
//     cost: { gold: 135, wood: 800, food: 0, fc: 0 },
//     energy: 5,
//     repair: 3,
//     type: "Wood",
//   },
//   {
//     name: "Axe",
//     template_id: "203881",
//     gold: 400,
//     wood: 2400,
//     schema_name: "tools",
//     cost: { gold: 400, wood: 2400, food: 0, fc: 0 },
//     energy: 10,
//     repair: 5,
//     type: "Wood",
//   },
//   {
//     name: "Saw",
//     template_id: "203883",
//     gold: 1200,
//     wood: 7200,
//     schema_name: "tools",
//     cost: { gold: 1200, wood: 7200, food: 0, fc: 0 },
//     energy: 30,
//     repair: 15,
//     type: "Wood",
//   },
//   {
//     name: "Chainsaw",
//     template_id: "203886",
//     gold: 3600,
//     wood: 21600,
//     schema_name: "tools",
//     cost: { gold: 3600, wood: 21600, food: 0, fc: 0 },
//     energy: 60,
//     repair: 45,
//     type: "Wood",
//   },

//   {
//     name: "Fishing Rod",
//     template_id: "203887",
//     gold: 200,
//     wood: 1200,
//     schema_name: "tools",
//     cost: { gold: 200, wood: 1200, food: 0, fc: 0 },
//     energy: 0,
//     repair: 5,
//     type: "Food",
//   },
//   {
//     name: "Fishing Net",
//     template_id: "203888",
//     gold: 800,
//     wood: 4800,
//     schema_name: "tools",
//     cost: { gold: 800, wood: 4800, food: 0, fc: 0 },
//     energy: 0,
//     repair: 20,
//     type: "Food",
//   },
//   {
//     name: "Boat",
//     template_id: "203889",
//     gold: 3200,
//     wood: 19200,
//     schema_name: "tools",
//     cost: { gold: 3200, wood: 19200, food: 0, fc: 0 },
//     energy: 0,
//     repair: 32,
//     type: "Food",
//   },

//   {
//     name: "Mining Excavator",
//     template_id: "203891",
//     gold: 4000,
//     wood: 24000,
//     schema_name: "tools",
//     cost: { gold: 4000, wood: 24000, food: 0, fc: 0 },
//     energy: 133,
//     repair: 5,
//     type: "Gold",
//   },

//   {
//     name: "Farm Plot",
//     template_id: "298592",
//     gold: 120,
//     wood: 200,
//     schema_name: "farmbuilding",
//     building: true,
//     cost: { gold: 120, wood: 200, food: 0, fc: 0 },
//     claim: { energy: 200 },
//   },
//   {
//     name: "Coop",
//     template_id: "298591",
//     gold: 240,
//     wood: 400,
//     schema_name: "farmbuilding",
//     building: true,
//     cost: { gold: 240, wood: 400, food: 0, fc: 0 },
//     claim: { energy: 250 },
//   },
//   {
//     name: "Cowshed",
//     template_id: "298590",
//     gold: 360,
//     wood: 600,
//     schema_name: "farmbuilding",
//     building: true,
//     cost: { gold: 360, wood: 600, food: 0, fc: 0 },
//     claim: { energy: 300 },
//   },

//   {
//     name: "Chicken Egg",
//     template_id: "298612",
//     gold: 280,
//     wood: 0,
//     max_claim: 9,
//     daily_claim_limit: 3,
//     schema_name: "farmanimals",
//     cost: { gold: 281, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Chick",
//     template_id: "298613",
//     gold: 0,
//     wood: 0,
//     max_claim: 16,
//     daily_claim_limit: 4,
//     schema_name: "farmanimals",
//     cost: { gold: 281, wood: 0, food: 9, fc: 0 },
//   },
//   {
//     name: "Chicken",
//     template_id: "298614",
//     gold: 0,
//     wood: 0,
//     max_claim: 28,
//     daily_claim_limit: 4,
//     schema_name: "farmanimals",
//     cost: { gold: 937, wood: 0, food: 9, fc: 0 },
//   },

//   {
//     name: "Baby Calf",
//     template_id: "298597",
//     gold: 0,
//     wood: 0,
//     max_claim: 6,
//     daily_claim_limit: 2,
//     schema_name: "farmanimals",
//     cost: { gold: 1001, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Female Calf",
//     template_id: "298599",
//     gold: 0,
//     wood: 0,
//     max_claim: 16,
//     daily_claim_limit: 4,
//     schema_name: "farmanimals",
//     cost: { gold: 1847, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Male Calf",
//     template_id: "298600",
//     gold: 0,
//     wood: 0,
//     max_claim: 16,
//     daily_claim_limit: 4,
//     schema_name: "farmanimals",
//     cost: { gold: 1847, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Dairy Cow",
//     template_id: "298607",
//     gold: 0,
//     wood: 0,
//     max_claim: 6,
//     daily_claim_limit: 6,
//     schema_name: "farmanimals",
//     cost: { gold: 2503, wood: 0, food: 0, fc: 0 },
//   },
//   {
//     name: "Bull",
//     template_id: "298611",
//     gold: 0,
//     wood: 0,
//     daily_claim_limit: 4,
//     schema_name: "farmanimals",
//     cost: { gold: 2503, wood: 0, food: 0, fc: 0 },
//   },

//   {
//     name: "Farmers Coin",
//     template_id: "260676",
//     gold: 0,
//     wood: 0,
//     schema_name: "farmercoins",
//     cost: { gold: 0, wood: 0, food: 0, fc: 1 },
//   },

//   {
//     name: "Food Membership Bronze",
//     template_id: "260636",
//     gold: 400,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 400, wood: 0, food: 0, fc: 60 },
//     gradeMulti: 1,
//     type: "Food",
//   },
//   {
//     name: "Food Membership Silver",
//     template_id: "260638",
//     gold: 800,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 800, wood: 0, food: 0, fc: 120 },
//     gradeMulti: 2,
//     type: "Food",
//   },
//   {
//     name: "Food Membership Gold",
//     template_id: "260639",
//     gold: 1600,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 1600, wood: 0, food: 0, fc: 240 },
//     gradeMulti: 3,
//     type: "Food",
//   },

//   {
//     name: "Wood Membership Bronze",
//     template_id: "260628",
//     gold: 400,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 400, wood: 0, food: 0, fc: 60 },
//     gradeMulti: 1,
//     type: "Wood",
//   },
//   {
//     name: "Wood Membership Silver",
//     template_id: "260629",
//     gold: 800,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 800, wood: 0, food: 0, fc: 120 },
//     gradeMulti: 2,
//     type: "Wood",
//   },
//   {
//     name: "Wood Membership Gold",
//     template_id: "260631",
//     gold: 1600,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 1600, wood: 0, food: 0, fc: 240 },
//     gradeMulti: 3,
//     type: "Wood",
//   },

//   {
//     name: "Gold Membership Bronze",
//     template_id: "260642",
//     gold: 400,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 400, wood: 0, food: 0, fc: 60 },
//     gradeMulti: 1,
//     type: "Gold",
//   },
//   {
//     name: "Gold Membership Silver",
//     template_id: "260644",
//     gold: 800,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 800, wood: 0, food: 0, fc: 120 },
//     gradeMulti: 2,
//     type: "Gold",
//   },
//   {
//     name: "Gold Membership Gold",
//     template_id: "260647",
//     gold: 1600,
//     wood: 0,
//     schema_name: "memberships",
//     cost: { gold: 1600, wood: 0, food: 0, fc: 240 },
//     gradeMulti: 3,
//     type: "Gold",
//   },
// ];
