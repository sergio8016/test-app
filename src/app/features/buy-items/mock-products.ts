import { ProductResult, ProviderId } from './product-search.models';

const providers: ProviderId[] = ['amazon', 'ebay', 'buildhub'];
const providerLabels: Record<ProviderId, string> = { amazon: 'Amazon', ebay: 'eBay', buildhub: 'BuildHub Supply' };

// Five offers are generated for every object so provider integrations can replace this file later.
const constructionObjects = [
  'Cement', 'Concrete', 'Mortar', 'Bricks', 'Blocks', 'Sand', 'Gravel', 'Stone', 'Clay', 'Steel', 'Rebar', 'Wood', 'Timber', 'Plywood', 'Drywall', 'Gypsum board', 'Glass', 'Aluminum', 'Copper', 'PVC', 'Insulation', 'Roofing shingles', 'Tiles', 'Asphalt', 'Plaster', 'Paint',
  'Foundation', 'Footing', 'Column', 'Beam', 'Slab', 'Wall', 'Load-bearing wall', 'Floor', 'Ceiling', 'Roof', 'Truss', 'Joist', 'Rafter', 'Staircase', 'Landing', 'Structural frame',
  'Hammer', 'Screwdriver', 'Drill', 'Saw', 'Circular saw', 'Angle grinder', 'Wrench', 'Pliers', 'Chisel', 'Level', 'Tape measure', 'Measuring tape', 'Utility knife', 'Trowel', 'Shovel', 'Pickaxe', 'Crowbar', 'Wheelbarrow', 'Ladder', 'Caulking gun',
  'Crane', 'Excavator', 'Bulldozer', 'Forklift', 'Concrete mixer', 'Concrete pump', 'Scaffolding', 'Jackhammer', 'Compactor', 'Loader', 'Dump truck', 'Drilling rig', 'Generator', 'Air compressor', 'Welding machine',
  'Door', 'Window', 'Door frame', 'Window frame', 'Hinge', 'Lock', 'Handle', 'Stair railing', 'Handrail', 'Cabinet', 'Countertop', 'Sink', 'Toilet', 'Bathtub', 'Shower', 'Light fixture', 'Electrical outlet', 'Switch',
  'Electrical cable', 'Wire', 'Conduit', 'Junction box', 'Circuit breaker', 'Electrical panel', 'Fuse', 'Outlet', 'Transformer', 'Grounding rod',
  'Pipe', 'PVC pipe', 'Copper pipe', 'Valve', 'Faucet', 'Drain', 'Elbow', 'Coupling', 'Connector', 'Water tank', 'Pump', 'Water heater',
  'Hard hat', 'Safety glasses', 'Safety gloves', 'Safety boots', 'Reflective vest', 'Ear protection', 'Face shield', 'Respirator', 'Safety harness', 'Fall protection system', 'Safety barrier', 'Warning sign',
] as const;

const iconFor = (objectName: string): string => {
  const name = objectName.toLowerCase();
  if (['hammer', 'screwdriver', 'drill', 'saw', 'wrench', 'pliers', 'chisel', 'trowel', 'shovel', 'pickaxe', 'crowbar', 'caulking', 'grinder'].some((word) => name.includes(word))) return 'pi pi-wrench';
  if (['safety', 'hard hat', 'respirator', 'helmet', 'glasses', 'gloves', 'boots', 'vest', 'protection', 'face shield', 'warning'].some((word) => name.includes(word))) return 'pi pi-shield';
  if (['cable', 'wire', 'circuit', 'electrical', 'fuse', 'transformer', 'outlet', 'switch', 'grounding', 'light'].some((word) => name.includes(word))) return 'pi pi-bolt';
  if (['pipe', 'valve', 'faucet', 'drain', 'elbow', 'coupling', 'connector', 'water', 'pump', 'shower', 'toilet', 'sink'].some((word) => name.includes(word))) return 'pi pi-arrows-h';
  if (['crane', 'excavator', 'bulldozer', 'forklift', 'mixer', 'pump', 'scaffolding', 'jackhammer', 'compactor', 'loader', 'truck', 'rig', 'generator', 'compressor', 'welding'].some((word) => name.includes(word))) return 'pi pi-cog';
  return 'pi pi-box';
};

export const MOCK_PRODUCTS: ProductResult[] = constructionObjects.flatMap((objectName, objectIndex) => Array.from({ length: 5 }, (_, variantIndex) => {
  const provider = providers[(objectIndex + variantIndex) % providers.length];
  const basePrice = 6 + objectIndex * 3.75;
  const price = Number((basePrice + variantIndex * (1.25 + objectIndex % 4)).toFixed(2));
  const variant = variantIndex + 1;
  const normalizedName = objectName.toLowerCase().replaceAll(' ', '-');

  return {
    id: `${normalizedName}-${variant}`,
    title: `${objectName} - Option ${variant}`,
    description: `Construction-grade ${objectName.toLowerCase()} selected for dependable jobsite work.`,
    category: 'Construction',
    provider,
    providerLabel: providerLabels[provider],
    price,
    currency: 'USD',
    rating: Number((4.2 + variantIndex * 0.15).toFixed(1)),
    reviewCount: 80 + objectIndex * 11 + variantIndex * 137,
    availability: variantIndex === 4 ? 'Limited availability' : 'In stock',
    shipping: provider === 'buildhub' ? 'Pickup available' : `Delivery in ${variantIndex + 1}-${variantIndex + 3} days`,
    condition: variantIndex === 4 && provider === 'ebay' ? 'Used' : 'New',
    sku: `NS-${objectIndex + 1}-${String(variant).padStart(3, '0')}`,
    accent: ['#d9d6cc', '#cfdfdc', '#d9c39f', '#d5dfc4', '#e5c992'][objectIndex % 5],
    icon: iconFor(objectName),
  } satisfies ProductResult;
}));
