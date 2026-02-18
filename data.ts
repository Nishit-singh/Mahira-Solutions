
import { Product, BusinessVertical, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'franchise-smart-cards',
    title: 'Franchise Premium Smart Cards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality visiting, business, and ID cards for all purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1599056377754-06830554c5e3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'franchise-holders',
    title: 'Franchise Premium ID Card Holders & Lanyards',
    vertical: BusinessVertical.PRINTING,
    description: 'Durable metal holders and premium lanyards.',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'metal-cnc',
    title: 'Precision Machining',
    vertical: BusinessVertical.METAL,
    description: 'Multi-axis CNC milling and turning solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'metal-fab',
    title: 'Sheet Metal Fabrication',
    vertical: BusinessVertical.METAL,
    description: 'Laser cutting, bending, and robotic welding.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
  }
];

export const PRODUCTS: Product[] = [
  // --- PRINTING VERTICAL (Smart Cards) ---
  {
    id: 'visiting-cards',
    name: 'Visiting Cards',
    shortDescription: 'Premium specialized visiting cards',
    fullDescription: 'High-quality visiting cards available in various finishes and textures to make a lasting impression.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM FINISH', 'CUSTOMIZABLE'],
    specs: [
      { label: 'Paper Quality', value: '300-800 GSM' },
      { label: 'Finish', value: 'Matte/Gloss/Textured' },
      { label: 'Size', value: 'Standard 3.5" x 2"' }
    ],
    applications: ['Corporate Identity', 'Networking', 'Sales']
  },
  {
    id: 'business-cards',
    name: 'Business Cards',
    shortDescription: 'Professional corporate business cards',
    fullDescription: 'Durable and professional business cards designed for corporate environments.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PROFESSIONAL', 'BULK ORDER'],
    specs: [
      { label: 'Material', value: 'Premium Cardstock' },
      { label: 'Print Type', value: 'Offset/Digital' },
      { label: 'Durability', value: 'High' }
    ],
    applications: ['Corporate', 'Events', 'Meetings']
  },
  {
    id: 'student-id-cards',
    name: 'Student ID Cards',
    shortDescription: 'Secure identification for educational institutions',
    fullDescription: 'Customizable student ID cards with optional barcode or magnetic stripe features.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['SECURE', 'DURABLE'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Thickness', value: '0.76mm (30 mil)' },
      { label: 'Features', value: 'Photo ID, Barcode' }
    ],
    applications: ['Schools', 'Colleges', 'Universities']
  },
  {
    id: 'club-cards',
    name: 'Club Cards',
    shortDescription: 'Exclusive membership cards for clubs',
    fullDescription: 'Premium feel club cards for exclusive members, capable of NFC integration.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1616464916356-3a777b2b59b1?auto=format&fit=crop&q=80&w=600',
    badges: ['EXCLUSIVE', 'NFC READY'],
    specs: [
      { label: 'Material', value: 'PVC / PET' },
      { label: 'Finish', value: 'Metallic / Matte' },
      { label: 'Tech', value: 'RFID / NFC Optional' }
    ],
    applications: ['Social Clubs', 'Golf Clubs', 'Private Lounges']
  },
  {
    id: 'membership-cards',
    name: 'Membership Cards',
    shortDescription: 'Loyalty and membership verification cards',
    fullDescription: 'Standard membership cards for organizations and retail chains.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=600',
    badges: ['LOYALTY', 'RETAIL'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Customization', value: 'Full Color Print' },
      { label: 'Encoding', value: 'Magstripe / Barcode' }
    ],
    applications: ['Gyms', 'Retail Stores', 'Associations']
  },
  {
    id: 'health-cards',
    name: 'Health Cards',
    shortDescription: 'Durable cards for healthcare patient ID',
    fullDescription: 'Hygienic and durable health cards for patient identification and record access.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    badges: ['HEALTHCARE', 'SANITIZABLE'],
    specs: [
      { label: 'Material', value: 'Chemical Resistant PVC' },
      { label: 'Data', value: 'QR Code / Chip' },
      { label: 'Lifespan', value: '5+ Years' }
    ],
    applications: ['Hospitals', 'Clinics', 'Insurance']
  },
  {
    id: 'loyalty-cards',
    name: 'Loyalty Cards',
    shortDescription: 'Reward program cards for customer retention',
    fullDescription: 'Engaging designs for customer loyalty programs to boost retention.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['REWARDS', 'MARKETING'],
    specs: [
      { label: 'Material', value: 'PVC / Eco-friendly' },
      { label: 'Print', value: 'High Def Thermal' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Retail', 'Hospitality', 'Services']
  },
  {
    id: 'hotel-key-cards',
    name: 'Hotel Key Cards',
    shortDescription: 'RFID room access cards',
    fullDescription: 'Reliable RFID/Magstripe key cards for hotel room security access.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
    badges: ['HOSPITALITY', 'RFID'],
    specs: [
      { label: 'Tech', value: 'Mifare / Proximity' },
      { label: 'Frequency', value: '13.56 MHz / 125 KHz' },
      { label: 'Print', value: 'Custom Branding' }
    ],
    applications: ['Hotels', 'Resorts', 'Guest Houses']
  },
  {
    id: 'wedding-cards',
    name: 'Wedding Cards',
    shortDescription: 'Elegant invitations and special occasion cards',
    fullDescription: 'Exquisite wedding invitations with premium textures and gold foiling.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600',
    badges: ['LUXURY', 'EVENT'],
    specs: [
      { label: 'Paper', value: 'Textured / Metallic' },
      { label: 'Print', value: 'Foil Stamping / Embossing' },
      { label: 'Design', value: 'Custom Bespoke' }
    ],
    applications: ['Weddings', 'Galas', 'Special Events']
  },
  {
    id: 'rainbow-card',
    name: 'Rainbow Card',
    shortDescription: 'Holographic effect specialty cards',
    fullDescription: 'Unique cards with a holographic rainbow finish that changes color with light.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-smart-cards',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
    badges: ['HOLOGRAPHIC', 'UNIQUE'],
    specs: [
      { label: 'Effect', value: 'Holographic Overlay' },
      { label: 'Base', value: 'Silver / Gold' },
      { label: 'Impact', value: 'High Visual' }
    ],
    applications: ['VIP Passes', 'Creative Business Cards', 'Art Projects']
  },

  // --- PRINTING VERTICAL (Holders & Lanyards) ---
  {
    id: 'push-button-holder',
    name: 'Push Button Metal ID Holder',
    shortDescription: 'Premium metal holder with quick-release mechanism',
    fullDescription: 'Sleek metal ID card holder featuring a push-button mechanism for easy card removal and insertion.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1616464916356-3a777b2b59b1?auto=format&fit=crop&q=80&w=600',
    badges: ['METAL', 'QUICK RELEASE'],
    specs: [
      { label: 'Material', value: 'Aluminum Alloy' },
      { label: 'Capacity', value: '1-2 Cards' },
      { label: 'Mechanism', value: 'Spring Loaded Button' }
    ],
    applications: ['Corporate', 'Executive', 'Premium Access']
  },
  {
    id: 'jumbo-metal-holder',
    name: 'Jumbo Metal ID Holder',
    shortDescription: 'Large capacity durable metal holder',
    fullDescription: 'Oversized metal holder designed for visibility and durability in industrial environments.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
    badges: ['HEAVY DUTY', 'LARGE FORMAT'],
    specs: [
      { label: 'Material', value: 'Stainless Steel / Alloy' },
      { label: 'Size', value: 'Oversized' },
      { label: 'Durability', value: 'Impact Resistant' }
    ],
    applications: ['Industrial', 'Factory Floor', 'Logistics']
  },
  {
    id: 'horizontal-metal-holder',
    name: 'Horizontal Metal ID Holder',
    shortDescription: 'Landscape orientation alloy holder',
    fullDescription: 'Professional landscape-oriented metal holder perfect for standard business ID cards.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
    badges: ['LANDSCAPE', 'PROFESSIONAL'],
    specs: [
      { label: 'Orientation', value: 'Horizontal' },
      { label: 'Material', value: 'Brushed Aluminum' },
      { label: 'Face', value: 'Open Face / Closed' }
    ],
    applications: ['Office', 'Events', 'Staff ID']
  },
  {
    id: 'keychain-lanyard',
    name: 'Keychain Lanyard',
    shortDescription: 'Short lanyard with keychain attachment',
    fullDescription: 'Compact lanyard designed for keys and small access tokens.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1611175694989-48705251390d?auto=format&fit=crop&q=80&w=600',
    badges: ['COMPACT', 'UTILITY'],
    specs: [
      { label: 'Length', value: 'Short (Wrist/Pocket)' },
      { label: 'Attachment', value: 'Split Ring' },
      { label: 'Material', value: 'Polyester / Nylon' }
    ],
    applications: ['Keys', 'USB Drives', 'Small Tools']
  },
  {
    id: 'fish-hook-lanyard',
    name: 'Fish Hook Lanyards',
    shortDescription: 'Standard lanyard with fish hook clip',
    fullDescription: 'Reliable lanyard featuring a secure fish hook style clip for ID holders.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['STANDARD', 'SECURE'],
    specs: [
      { label: 'Clip Type', value: 'Fish Hook (Swivel)' },
      { label: 'Width', value: '15mm / 20mm' },
      { label: 'Material', value: 'Polyester' }
    ],
    applications: ['Conferences', 'Employee ID', 'Events']
  },
  {
    id: 'dog-hook-lanyard',
    name: 'Dog Hook Lanyard',
    shortDescription: 'Heavy-duty lanyard with dog hook clasp',
    fullDescription: 'Robust lanyard with a strong dog hook clasp, ideal for heavier holders or keys.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1542315152-47c945b958dd?auto=format&fit=crop&q=80&w=600',
    badges: ['HEAVY DUTY', 'STRONG CLASP'],
    specs: [
      { label: 'Clip Type', value: 'Dog Hook' },
      { label: 'Load', value: 'Heavy' },
      { label: 'Durability', value: 'High' }
    ],
    applications: ['Security', 'Maintenance', 'Industrial']
  },
  {
    id: 'engraving-lanyard',
    name: 'Engraving Lanyard',
    shortDescription: 'Customizable engraved lanyards',
    fullDescription: 'Premium lanyards that allow for custom text or logo engraving on the attachment or fabric.',
    vertical: BusinessVertical.PRINTING,
    category: 'franchise-holders',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['CUSTOM', 'BRANDING'],
    specs: [
      { label: 'Customization', value: 'Laser Engraving / Screen Print' },
      { label: 'Material', value: 'Premium Satin / Nylon' },
      { label: 'Order', value: 'Bulk Custom' }
    ],
    applications: ['Corporate Branding', 'VIP Events', 'Promotional']
  },

  // --- METAL VERTICAL (5 PRODUCTS) ---
  {
    id: 'titan-mill-turbine',
    name: 'TITAN-MILL Turbine Blade',
    shortDescription: 'Inconel 718 Superalloy 5-Axis Precision Milling',
    fullDescription: 'High-performance turbine component machined from Inconel 718 billet. Optimized for extreme temperature resistance and mechanical stress in modern power generation systems. Full NIST-traceable inspection reports included.',
    vertical: BusinessVertical.METAL,
    category: 'metal-cnc',
    imageUrl: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600',
    badges: ['TOLERANCE ±0.002', 'FAA COMPLIANT'],
    specs: [
      { label: 'Material', value: 'Inconel 718 Superalloy' },
      { label: 'Processing', value: '5-Axis Simultaneous Milling' },
      { label: 'Surface', value: 'Ra 0.4 Micron Finish' }
    ],
    applications: ['Jet Engines', 'Gas Turbines', 'Nuclear Power Plant Cooling']
  },
  {
    id: 'precision-fold-rack',
    name: 'PRECISION-FOLD Server Enclosure',
    shortDescription: '19" Rackmount Chassis, Cold Rolled Steel (CRS)',
    fullDescription: 'Custom-engineered 19" rackmount enclosures for mission-critical IT infrastructure. Utilizing multi-stage CNC bending and precision laser cutting to ensure perfect component alignment and airflow optimization.',
    vertical: BusinessVertical.METAL,
    category: 'metal-fab',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600',
    badges: ['NEMA 3R', 'EMC SHIELDED'],
    specs: [
      { label: 'Material', value: '1.5mm Cold Rolled Steel' },
      { label: 'Coating', value: 'Antistatic Powder Coat' },
      { label: 'Mounting', value: 'EIA-310-E Standard' }
    ],
    applications: ['Data Centers', 'Telecomm Hubs', 'Edge Computing Units']
  },
  {
    id: 'steel-sync-frame',
    name: 'STEEL-SYNC Robotic Frame',
    shortDescription: 'Heavy-Duty Structural H-Beam Weldment',
    fullDescription: 'Primary structural frame for automated production lines. Features robotic GMAW (Mig) welding for deep penetration and structural integrity. Stress-relieved and sandblasted for industrial longevity.',
    vertical: BusinessVertical.METAL,
    category: 'metal-fab',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600',
    badges: ['AWS CERTIFIED', 'WELD LOGS'],
    specs: [
      { label: 'Structure', value: 'ASTM A36 Mild Steel' },
      { label: 'Weld Spec', value: 'AWS D1.1 Structural' },
      { label: 'Load Cap', value: '15,000 kg Dynamic' }
    ],
    applications: ['Automotive Assembly', 'Material Handling', 'Factory Mezzanines']
  },
  {
    id: 'opti-cut-panel',
    name: 'OPTI-CUT Perforated Panel',
    shortDescription: 'Micro-Laser Patterned Stainless Steel Filter',
    fullDescription: 'High-precision perforated panels for industrial filtration and acoustic dampening. Utilizing fiber laser technology to achieve hole diameters as small as 0.1mm with zero thermal distortion.',
    vertical: BusinessVertical.METAL,
    category: 'metal-fab',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
    badges: ['316L SS', 'BURR-FREE'],
    specs: [
      { label: 'Aperture', value: '0.1mm - 50.0mm' },
      { label: 'Material', value: 'Marine-grade Stainless' },
      { label: 'Transparency', value: 'Adjustable 5% - 75%' }
    ],
    applications: ['Chemical Processing', 'Architectural Facades', 'Food Processing']
  },
  {
    id: 'max-torque-shaft',
    name: 'MAX-TORQUE Power Shaft',
    shortDescription: 'Hardened 4140 Steel Turning & Splining',
    fullDescription: 'Critical power-train component manufactured from 4140 alloy steel. Induction hardened and precision ground on CNC cylindrical grinders to maintain concentricity within 0.005mm.',
    vertical: BusinessVertical.METAL,
    category: 'metal-cnc',
    imageUrl: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600',
    badges: ['4140 HARDENED', 'SPLINE RATED'],
    specs: [
      { label: 'Hardness', value: 'HRC 55-60' },
      { label: 'Concentricity', value: '0.005mm TIR' },
      { label: 'Processing', value: 'Swiss-style CNC Turning' }
    ],
    applications: ['Heavy Machinery', 'Wind Turbine Gearboxes', 'Mining Drills']
  }
];
