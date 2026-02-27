
import { Product, BusinessVertical, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'id-cards',
    title: 'ID Cards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality ID cards for all purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'lanyards',
    title: 'Lanyards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality lanyards for IDs and keys.',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'id-card-holders-accessories',
    title: 'ID Card Holders & Accessories',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality ID card holders and accessories.',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'personalized-merchandise-gift-products',
    title: 'Personalized Merchandise & Gift Products',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality personalized merchandise and custom gift products.',
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'phone-skin-printing',
    title: 'Phone Skin Printing',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality phone skin printing solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'backlight-printing-solution',
    title: 'Backlight Printing Solution',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality backlight printing solutions and machines.',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'dtf-raw-material',
    title: 'DTF Raw Material',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality raw materials for DTF printing.',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'dtf-machines',
    title: 'DTF Machines',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality DTF printers and heat press machines.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'dtf-printing-services',
    title: 'DTF Printing Services',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality DTF printing and heat press applications.',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=800',
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
  },
];

export const PRODUCTS: Product[] = [

  // --- PRINTING VERTICAL (Smart Cards) ---
  {
    id: 'visiting-cards',
    name: 'Visiting Card',
    shortDescription: 'Premium specialized visiting cards',
    fullDescription: 'High-quality visiting cards available in various finishes and textures to make a lasting impression.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Business ID Card',
    shortDescription: 'Professional corporate business cards',
    fullDescription: 'Durable and professional business cards designed for corporate environments.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Student ID Card',
    shortDescription: 'Secure identification for educational institutions',
    fullDescription: 'Customizable student ID cards with optional barcode or magnetic stripe features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Club Card',
    shortDescription: 'Exclusive membership cards for clubs',
    fullDescription: 'Premium feel club cards for exclusive members, capable of NFC integration.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Membership Card',
    shortDescription: 'Loyalty and membership verification cards',
    fullDescription: 'Standard membership cards for organizations and retail chains.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Health Card',
    shortDescription: 'Durable cards for healthcare patient ID',
    fullDescription: 'Hygienic and durable health cards for patient identification and record access.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Loyalty Card',
    shortDescription: 'Reward program cards for customer retention',
    fullDescription: 'Engaging designs for customer loyalty programs to boost retention.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Hotel Key Card',
    shortDescription: 'RFID room access cards',
    fullDescription: 'Reliable RFID/Magstripe key cards for hotel room security access.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    name: 'Wedding Card',
    shortDescription: 'Elegant invitations and special occasion cards',
    fullDescription: 'Exquisite wedding invitations with premium textures and gold foiling.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
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
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
    badges: ['HOLOGRAPHIC', 'UNIQUE'],
    specs: [
      { label: 'Effect', value: 'Holographic Overlay' },
      { label: 'Base', value: 'Silver / Gold' },
      { label: 'Impact', value: 'High Visual' }
    ],
    applications: ['VIP Passes', 'Creative Business Cards', 'Art Projects']
  },
  {
    id: 'transparent-card',
    name: 'Transparent Card',
    shortDescription: 'Premium Transparent Card',
    fullDescription: 'High-quality Transparent Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'silver-glitter-card',
    name: 'Silver Glitter Card',
    shortDescription: 'Premium Silver Glitter Card',
    fullDescription: 'High-quality Silver Glitter Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'gold-glitter-card',
    name: 'Gold Glitter Card',
    shortDescription: 'Premium Gold Glitter Card',
    fullDescription: 'High-quality Gold Glitter Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'emboss-card',
    name: 'Emboss Card',
    shortDescription: 'Premium Emboss Card',
    fullDescription: 'High-quality Emboss Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'gold-foil-spot-uv-id-card',
    name: 'Gold Foil & Spot UV ID Card',
    shortDescription: 'Premium Gold Foil & Spot UV ID Card',
    fullDescription: 'High-quality Gold Foil & Spot UV ID Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'white-inkjet-card',
    name: 'White Inkjet Card',
    shortDescription: 'Premium White Inkjet Card',
    fullDescription: 'High-quality White Inkjet Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'white-thermal-card',
    name: 'White Thermal Card',
    shortDescription: 'Premium White Thermal Card',
    fullDescription: 'High-quality White Thermal Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'inkjet-chip-card',
    name: 'Inkjet Chip Card',
    shortDescription: 'Premium Inkjet Chip Card',
    fullDescription: 'High-quality Inkjet Chip Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'white-thermal-pvc-rfid-card',
    name: 'White Thermal PVC RFID Card',
    shortDescription: 'Premium White Thermal PVC RFID Card',
    fullDescription: 'High-quality White Thermal PVC RFID Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'both-side-printed-rfid-card',
    name: 'Both Side Printed RFID Card',
    shortDescription: 'Premium Both Side Printed RFID Card',
    fullDescription: 'High-quality Both Side Printed RFID Card with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },
  {
    id: 'jumbo-size-id-cards',
    name: 'Jumbo Size ID Cards',
    shortDescription: 'Premium Jumbo Size ID Cards',
    fullDescription: 'High-quality Jumbo Size ID Cards with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'PVC' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'CR80' }
    ],
    applications: ['Identity', 'Access', 'Events']
  },

  // --- PRINTING VERTICAL (Holders & Lanyards) ---
  {
    id: 'push-button-holder',
    name: 'Aluminum ID Card Holder',
    shortDescription: 'Premium metal holder with quick-release mechanism',
    fullDescription: 'Sleek metal ID card holder featuring a push-button mechanism for easy card removal and insertion.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
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
    name: 'ID Card Holder',
    shortDescription: 'Large capacity durable metal holder',
    fullDescription: 'Oversized metal holder designed for visibility and durability in industrial environments.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
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
    name: 'Horizontal Metal ID Card Holder',
    shortDescription: 'Landscape orientation alloy holder',
    fullDescription: 'Professional landscape-oriented metal holder perfect for standard business ID cards.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
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
    id: 'fish-hook-lanyard',
    name: 'Fish Hook / Oval Hook Lanyard',
    shortDescription: 'Standard lanyard with fish hook clip',
    fullDescription: 'Reliable lanyard featuring a secure fish hook style clip for ID holders.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
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
    name: 'Dog Hook / Lever Hook Lanyard',
    shortDescription: 'Heavy-duty lanyard with dog hook clasp',
    fullDescription: 'Robust lanyard with a strong dog hook clasp, ideal for heavier holders or keys.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
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
    category: 'lanyards',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['CUSTOM', 'BRANDING'],
    specs: [
      { label: 'Customization', value: 'Laser Engraving / Screen Print' },
      { label: 'Material', value: 'Premium Satin / Nylon' },
      { label: 'Order', value: 'Bulk Custom' }
    ],
    applications: ['Corporate Branding', 'VIP Events', 'Promotional']
  },
  {
    id: 'plastic-button-lanyard',
    name: 'Plastic Button Lanyard',
    shortDescription: 'Premium Plastic Button Lanyard',
    fullDescription: 'High-quality Plastic Button Lanyard for secure ID display.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
    imageUrl: 'https://images.unsplash.com/photo-1611175694989-48705251390d?auto=format&fit=crop&q=80&w=600',
    badges: ['DURABLE', 'PREMIUM'],
    specs: [
      { label: 'Material', value: 'Polyester / Nylon' },
      { label: 'Clip', value: 'Standard' },
      { label: 'Width', value: '16mm / 20mm' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'push-button-lanyard',
    name: 'Push Button Lanyard',
    shortDescription: 'Premium Push Button Lanyard',
    fullDescription: 'High-quality Push Button Lanyard for secure ID display.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
    imageUrl: 'https://images.unsplash.com/photo-1611175694989-48705251390d?auto=format&fit=crop&q=80&w=600',
    badges: ['DURABLE', 'PREMIUM'],
    specs: [
      { label: 'Material', value: 'Polyester / Nylon' },
      { label: 'Clip', value: 'Standard' },
      { label: 'Width', value: '16mm / 20mm' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'printed-lanyard-16mm-20mm',
    name: 'Printed Lanyard (16mm & 20mm)',
    shortDescription: 'Premium Printed Lanyard (16mm & 20mm)',
    fullDescription: 'High-quality Printed Lanyard (16mm & 20mm) for secure ID display.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
    imageUrl: 'https://images.unsplash.com/photo-1611175694989-48705251390d?auto=format&fit=crop&q=80&w=600',
    badges: ['DURABLE', 'PREMIUM'],
    specs: [
      { label: 'Material', value: 'Polyester / Nylon' },
      { label: 'Clip', value: 'Standard' },
      { label: 'Width', value: '16mm / 20mm' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'long-pushbutton-aluminum-holder',
    name: 'Long Pushbutton Aluminum Holder',
    shortDescription: 'Premium Long Pushbutton Aluminum Holder',
    fullDescription: 'High-quality Long Pushbutton Aluminum Holder for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'plastic-holder',
    name: 'Plastic Holder',
    shortDescription: 'Premium Plastic Holder',
    fullDescription: 'High-quality Plastic Holder for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'plastic-button',
    name: 'Plastic Button',
    shortDescription: 'Premium Plastic Button',
    fullDescription: 'High-quality Plastic Button for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'two-card-tray',
    name: 'Two Card Tray',
    shortDescription: 'Premium Two Card Tray',
    fullDescription: 'High-quality Two Card Tray for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'visiting-card-stand',
    name: 'Visiting Card Stand',
    shortDescription: 'Premium Visiting Card Stand',
    fullDescription: 'High-quality Visiting Card Stand for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'lamination-pouch',
    name: 'Lamination Pouch',
    shortDescription: 'Premium Lamination Pouch',
    fullDescription: 'High-quality Lamination Pouch for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'a4-document-lamination-machine',
    name: 'A4 Document Lamination Machine',
    shortDescription: 'Premium A4 Document Lamination Machine',
    fullDescription: 'High-quality A4 Document Lamination Machine for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  },
  {
    id: 'desktop-id-card-print-solution',
    name: 'Desktop ID Card Print Solution',
    shortDescription: 'Premium Desktop ID Card Print Solution',
    fullDescription: 'High-quality Desktop ID Card Print Solution for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      { label: 'Material', value: 'Standard' },
      { label: 'Durability', value: 'High' },
      { label: 'Quality', value: 'Premium' }
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
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
  },
  {
    id: 'direct-to-film-printing',
    name: 'Direct To Film Printing',
    shortDescription: 'Premium Direct To Film Printing',
    fullDescription: 'High-quality Direct To Film Printing for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'custom-dtf-printing',
    name: 'Custom DTF Printing',
    shortDescription: 'Premium Custom DTF Printing',
    fullDescription: 'High-quality Custom DTF Printing for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-t-shirt',
    name: 'Heat Press Application - T-Shirt',
    shortDescription: 'Premium Heat Press Application - T-Shirt',
    fullDescription: 'High-quality Heat Press Application - T-Shirt for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-jeans',
    name: 'Heat Press Application - Jeans',
    shortDescription: 'Premium Heat Press Application - Jeans',
    fullDescription: 'High-quality Heat Press Application - Jeans for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-hoodie',
    name: 'Heat Press Application - Hoodie',
    shortDescription: 'Premium Heat Press Application - Hoodie',
    fullDescription: 'High-quality Heat Press Application - Hoodie for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-cap',
    name: 'Heat Press Application - Cap',
    shortDescription: 'Premium Heat Press Application - Cap',
    fullDescription: 'High-quality Heat Press Application - Cap for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-bag',
    name: 'Heat Press Application - Bag',
    shortDescription: 'Premium Heat Press Application - Bag',
    fullDescription: 'High-quality Heat Press Application - Bag for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'heat-press-application-umbrella',
    name: 'Heat Press Application - Umbrella',
    shortDescription: 'Premium Heat Press Application - Umbrella',
    fullDescription: 'High-quality Heat Press Application - Umbrella for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'DTF Printing' },
      { label: 'Application', value: 'Heat Press' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  },
  {
    id: 'a3-dtf-printer-2-head',
    name: 'A3 DTF Printer (2 Head)',
    shortDescription: 'Industrial A3 DTF Printer (2 Head)',
    fullDescription: 'High-performance A3 DTF Printer (2 Head) for professional printing businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-machines',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    badges: ['INDUSTRIAL', 'MACHINE'],
    specs: [
      { label: 'Type', value: 'DTF Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Build', value: 'Heavy Duty' }
    ],
    applications: ['Commercial Printing', 'Apparel Mfg', 'Custom Merchandise']
  },
  {
    id: 'dtf-printer-4-head-epson-i3200',
    name: 'DTF Printer (4 Head Epson i3200)',
    shortDescription: 'Industrial DTF Printer (4 Head Epson i3200)',
    fullDescription: 'High-performance DTF Printer (4 Head Epson i3200) for professional printing businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-machines',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    badges: ['INDUSTRIAL', 'MACHINE'],
    specs: [
      { label: 'Type', value: 'DTF Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Build', value: 'Heavy Duty' }
    ],
    applications: ['Commercial Printing', 'Apparel Mfg', 'Custom Merchandise']
  },
  {
    id: 'heat-press-machine-16x24-new-auto-up',
    name: 'Heat Press Machine (16x24 - New Auto Up)',
    shortDescription: 'Industrial Heat Press Machine (16x24 - New Auto Up)',
    fullDescription: 'High-performance Heat Press Machine (16x24 - New Auto Up) for professional printing businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-machines',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    badges: ['INDUSTRIAL', 'MACHINE'],
    specs: [
      { label: 'Type', value: 'DTF Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Build', value: 'Heavy Duty' }
    ],
    applications: ['Commercial Printing', 'Apparel Mfg', 'Custom Merchandise']
  },
  {
    id: 'heat-press-machine-16x24-double-bed',
    name: 'Heat Press Machine (16x24 - Double Bed)',
    shortDescription: 'Industrial Heat Press Machine (16x24 - Double Bed)',
    fullDescription: 'High-performance Heat Press Machine (16x24 - Double Bed) for professional printing businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-machines',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    badges: ['INDUSTRIAL', 'MACHINE'],
    specs: [
      { label: 'Type', value: 'DTF Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Build', value: 'Heavy Duty' }
    ],
    applications: ['Commercial Printing', 'Apparel Mfg', 'Custom Merchandise']
  },
  {
    id: 'dtf-matt-film',
    name: 'DTF Matt Film',
    shortDescription: 'Premium DTF Matt Film',
    fullDescription: 'High-quality DTF Matt Film for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      { label: 'Type', value: 'DTF Supply' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Commercial' }
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  },
  {
    id: 'high-density-dtf-ink',
    name: 'High Density DTF Ink',
    shortDescription: 'Premium High Density DTF Ink',
    fullDescription: 'High-quality High Density DTF Ink for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      { label: 'Type', value: 'DTF Supply' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Commercial' }
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  },
  {
    id: 'dtf-powder',
    name: 'DTF Powder',
    shortDescription: 'Premium DTF Powder',
    fullDescription: 'High-quality DTF Powder for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      { label: 'Type', value: 'DTF Supply' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Commercial' }
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  },
  {
    id: 'vinyl-rolls',
    name: 'Vinyl Rolls',
    shortDescription: 'Premium Vinyl Rolls',
    fullDescription: 'High-quality Vinyl Rolls for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      { label: 'Type', value: 'DTF Supply' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Commercial' }
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  },
  {
    id: 'blank-cotton-t-shirts',
    name: 'Blank Cotton T-Shirts',
    shortDescription: 'Premium Blank Cotton T-Shirts',
    fullDescription: 'High-quality Blank Cotton T-Shirts for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      { label: 'Type', value: 'DTF Supply' },
      { label: 'Grade', value: 'Premium' },
      { label: 'Use', value: 'Commercial' }
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  },
  {
    id: 'backlight-printing-solution',
    name: 'Backlight Printing Solution',
    shortDescription: 'Premium Backlight Printing Solution',
    fullDescription: 'High-quality Backlight Printing Solution for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'epson-i3200-a1-backlight-printer',
    name: 'Epson i3200-A1 Backlight Printer',
    shortDescription: 'Premium Epson i3200-A1 Backlight Printer',
    fullDescription: 'High-quality Epson i3200-A1 Backlight Printer for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'manual-lamination-machine',
    name: 'Manual Lamination Machine',
    shortDescription: 'Premium Manual Lamination Machine',
    fullDescription: 'High-quality Manual Lamination Machine for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'auto-lamination-machine',
    name: 'Auto Lamination Machine',
    shortDescription: 'Premium Auto Lamination Machine',
    fullDescription: 'High-quality Auto Lamination Machine for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'backlight-film-roll',
    name: 'Backlight Film Roll',
    shortDescription: 'Premium Backlight Film Roll',
    fullDescription: 'High-quality Backlight Film Roll for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'water-base-dye-ink',
    name: 'Water Base Dye Ink',
    shortDescription: 'Premium Water Base Dye Ink',
    fullDescription: 'High-quality Water Base Dye Ink for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      { label: 'Type', value: 'Printing Solution' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  },
  {
    id: 'bharti-phone-skin-printer',
    name: 'Bharti Phone Skin Printer',
    shortDescription: 'Premium Bharti Phone Skin Printer',
    fullDescription: 'High-quality Bharti Phone Skin Printer for professional phone skin and customization businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'phone-skin-printing',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOMIZATION'],
    specs: [
      { label: 'Type', value: 'Phone Skin Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Mobile Shops', 'Customization Kiosks', 'Electronics']
  },
  {
    id: 'phone-skin-film-cutter',
    name: 'Phone Skin Film Cutter',
    shortDescription: 'Premium Phone Skin Film Cutter',
    fullDescription: 'High-quality Phone Skin Film Cutter for professional phone skin and customization businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'phone-skin-printing',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOMIZATION'],
    specs: [
      { label: 'Type', value: 'Phone Skin Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Mobile Shops', 'Customization Kiosks', 'Electronics']
  },
  {
    id: 'phone-skin-printing-kit',
    name: 'Phone Skin Printing Kit',
    shortDescription: 'Premium Phone Skin Printing Kit',
    fullDescription: 'High-quality Phone Skin Printing Kit for professional phone skin and customization businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'phone-skin-printing',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOMIZATION'],
    specs: [
      { label: 'Type', value: 'Phone Skin Equipment' },
      { label: 'Grade', value: 'Professional' },
      { label: 'Quality', value: 'High' }
    ],
    applications: ['Mobile Shops', 'Customization Kiosks', 'Electronics']
  }, , , , ,
  {
    id: 'travel-bags',
    name: 'Travel Bags',
    shortDescription: 'Custom Travel Bags',
    fullDescription: 'High-quality personalized Travel Bags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'personalised-name-hangings',
    name: 'Personalised Name Hangings',
    shortDescription: 'Custom Personalised Name Hangings',
    fullDescription: 'High-quality personalized Personalised Name Hangings perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'customised-pure-cotton-t-shirts',
    name: 'Customised Pure Cotton T-Shirts',
    shortDescription: 'Custom Customised Pure Cotton T-Shirts',
    fullDescription: 'High-quality personalized Customised Pure Cotton T-Shirts perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'customised-paper-gift-bags',
    name: 'Customised Paper Gift Bags',
    shortDescription: 'Custom Customised Paper Gift Bags',
    fullDescription: 'High-quality personalized Customised Paper Gift Bags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'doms-stationery-suitcase',
    name: 'Doms Stationery Suitcase',
    shortDescription: 'Custom Doms Stationery Suitcase',
    fullDescription: 'High-quality personalized Doms Stationery Suitcase perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'sequence-hoodies',
    name: 'Sequence Hoodies',
    shortDescription: 'Custom Sequence Hoodies',
    fullDescription: 'High-quality personalized Sequence Hoodies perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'sequins-tees-pure-cotton',
    name: 'Sequins Tees (Pure Cotton)',
    shortDescription: 'Custom Sequins Tees (Pure Cotton)',
    fullDescription: 'High-quality personalized Sequins Tees (Pure Cotton) perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'hoodies',
    name: 'Hoodies',
    shortDescription: 'Custom Hoodies',
    fullDescription: 'High-quality personalized Hoodies perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'passport-covers-luggage-tags',
    name: 'Passport Covers & Luggage Tags',
    shortDescription: 'Custom Passport Covers & Luggage Tags',
    fullDescription: 'High-quality personalized Passport Covers & Luggage Tags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'neck-pillows-eye-mask-luggage-tag-set',
    name: 'Neck Pillows, Eye Mask & Luggage Tag Set',
    shortDescription: 'Custom Neck Pillows, Eye Mask & Luggage Tag Set',
    fullDescription: 'High-quality personalized Neck Pillows, Eye Mask & Luggage Tag Set perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'gift-tags',
    name: 'Gift Tags',
    shortDescription: 'Custom Gift Tags',
    fullDescription: 'High-quality personalized Gift Tags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'wooden-luggage-tags',
    name: 'Wooden Luggage Tags',
    shortDescription: 'Custom Wooden Luggage Tags',
    fullDescription: 'High-quality personalized Wooden Luggage Tags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'stainless-steel-lunchboxes',
    name: 'Stainless Steel Lunchboxes',
    shortDescription: 'Custom Stainless Steel Lunchboxes',
    fullDescription: 'High-quality personalized Stainless Steel Lunchboxes perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'kids-school-name-slips',
    name: 'Kids School Name Slips',
    shortDescription: 'Custom Kids School Name Slips',
    fullDescription: 'High-quality personalized Kids School Name Slips perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'customised-gift-hampers',
    name: 'Customised Gift Hampers',
    shortDescription: 'Custom Customised Gift Hampers',
    fullDescription: 'High-quality personalized Customised Gift Hampers perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'ceramic-mugs',
    name: 'Ceramic Mugs',
    shortDescription: 'Custom Ceramic Mugs',
    fullDescription: 'High-quality personalized Ceramic Mugs perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'personalized-stationery-hampers',
    name: 'Personalized Stationery Hampers',
    shortDescription: 'Custom Personalized Stationery Hampers',
    fullDescription: 'High-quality personalized Personalized Stationery Hampers perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'engraved-pencils',
    name: 'Engraved Pencils',
    shortDescription: 'Custom Engraved Pencils',
    fullDescription: 'High-quality personalized Engraved Pencils perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'complete-personalized-art-kit',
    name: 'Complete Personalized Art Kit',
    shortDescription: 'Custom Complete Personalized Art Kit',
    fullDescription: 'High-quality personalized Complete Personalized Art Kit perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'personalised-birthday-hampers',
    name: 'Personalised Birthday Hampers',
    shortDescription: 'Custom Personalised Birthday Hampers',
    fullDescription: 'High-quality personalized Personalised Birthday Hampers perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'duffel-bags',
    name: 'Duffel Bags',
    shortDescription: 'Custom Duffel Bags',
    fullDescription: 'High-quality personalized Duffel Bags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: '5-slot-watch-organiser',
    name: '5 Slot Watch Organiser',
    shortDescription: 'Custom 5 Slot Watch Organiser',
    fullDescription: 'High-quality personalized 5 Slot Watch Organiser perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'stainless-steel-coffee-mugs',
    name: 'Stainless Steel Coffee Mugs',
    shortDescription: 'Custom Stainless Steel Coffee Mugs',
    fullDescription: 'High-quality personalized Stainless Steel Coffee Mugs perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'three-section-plate-set',
    name: 'Three Section Plate Set',
    shortDescription: 'Custom Three Section Plate Set',
    fullDescription: 'High-quality personalized Three Section Plate Set perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'round-meal-set',
    name: 'Round Meal Set',
    shortDescription: 'Custom Round Meal Set',
    fullDescription: 'High-quality personalized Round Meal Set perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'waterproof-labels',
    name: 'Waterproof Labels',
    shortDescription: 'Custom Waterproof Labels',
    fullDescription: 'High-quality personalized Waterproof Labels perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'hankies',
    name: 'Hankies',
    shortDescription: 'Custom Hankies',
    fullDescription: 'High-quality personalized Hankies perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'bag-tags-luggage-tags',
    name: 'Bag Tags / Luggage Tags',
    shortDescription: 'Custom Bag Tags / Luggage Tags',
    fullDescription: 'High-quality personalized Bag Tags / Luggage Tags perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'hair-brush',
    name: 'Hair Brush',
    shortDescription: 'Custom Hair Brush',
    fullDescription: 'High-quality personalized Hair Brush perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'aprons',
    name: 'Aprons',
    shortDescription: 'Custom Aprons',
    fullDescription: 'High-quality personalized Aprons perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'personalised-felt-organiser',
    name: 'Personalised Felt Organiser',
    shortDescription: 'Custom Personalised Felt Organiser',
    fullDescription: 'High-quality personalized Personalised Felt Organiser perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
  {
    id: 'diy-fridge-magnets',
    name: 'DIY Fridge Magnets',
    shortDescription: 'Custom DIY Fridge Magnets',
    fullDescription: 'High-quality personalized DIY Fridge Magnets perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      { label: 'Type', value: 'Merchandise' },
      { label: 'Customization', value: 'Available' }
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  },
];
