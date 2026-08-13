export const site = {
  brand: 'Bohu.',
  tagline: 'Wedding Planner',
  email: 'hello@bohu.wedding',
  phone: '+1 (212) 555-0148',
  address: '128 Mercer Street, New York, NY',
  weddingDate: '2026-11-16T16:00:00',
  weddingDateLabel: 'November 16, 2026',
  couple: {
    bride: 'Amelia',
    groom: 'Noah',
  },
}

export type NavItem = {
  label: string
  to?: string
  children?: { label: string; to: string; desc?: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/#our-story' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Countdown', to: '/#countdown' },
  { label: 'Watch Live', to: '/#watch-live' },
]

export const services = [
  {
    title: 'Full Planning',
    text: 'From first sketch to last dance — timeline, vendors, and design direction held with calm precision.',
    icon: '✦',
  },
  {
    title: 'Day-of Coordination',
    text: 'We run the rehearsal, cue the moments, and keep every detail quietly on track.',
    icon: '❧',
  },
  {
    title: 'Floral & Styling',
    text: 'Seasonal arrangements, tablescapes, and ceremony architecture tailored to your story.',
    icon: '❀',
  },
  {
    title: 'Photography Direction',
    text: 'Shot lists, lighting notes, and vendor pairing so your images feel cinematic and true.',
    icon: '◎',
  },
  {
    title: 'Destination Weddings',
    text: 'Travel logistics, guest hospitality, and local partnerships for celebrations abroad.',
    icon: '☽',
  },
  {
    title: 'Afterparty Design',
    text: 'Late-night menus, lounge lighting, and music that extend the evening with ease.',
    icon: '✧',
  },
]

export const portfolio = [
  {
    title: 'Garden Ceremony, Hudson',
    category: 'Outdoor',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Candlelit Reception',
    category: 'Reception',
    image:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Coastal Vows',
    category: 'Destination',
    image:
      'https://images.unsplash.com/photo-1522673607200-164a2e6371ad?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'City Loft Dinner',
    category: 'Intimate',
    image:
      'https://images.unsplash.com/photo-1511285560929-80b456fe0c7b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Floral Arch Study',
    category: 'Styling',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc461bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Golden Hour Portraits',
    category: 'Photography',
    image:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
  },
]

export const team = [
  {
    name: 'Lila Moreau',
    role: 'Creative Director',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'James Ortega',
    role: 'Lead Planner',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sofia Chen',
    role: 'Floral Stylist',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
  },
]

export const testimonials = [
  {
    quote:
      'Bohu made our weekend feel effortless — every vendor arrived synced, every moment felt ours.',
    name: 'Elena & Marcus',
  },
  {
    quote:
      'The design language was quiet and romantic. Guests still talk about the tablescape and lighting.',
    name: 'Priya & Adam',
  },
  {
    quote:
      'From venue walkthrough to midnight send-off, the team anticipated everything we could not.',
    name: 'Claire & Theo',
  },
]

export const posts = [
  {
    title: 'How to build a seasonal floral story',
    date: 'May 12, 2026',
    excerpt: 'Choosing blooms that feel intentional — not trendy — for spring and early autumn vows.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Guest hospitality without the fuss',
    date: 'April 3, 2026',
    excerpt: 'Welcome notes, quiet lounges, and travel kits that make people feel considered.',
    image:
      'https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Writing vows that sound like you',
    date: 'March 18, 2026',
    excerpt: 'A simple structure for couples who want honesty over performance.',
    image:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1000&q=80',
  },
]

export const shopProducts = [
  {
    title: 'Wedding Gown',
    price: '$420',
    image:
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bridal Flower',
    price: '$85',
    image:
      'https://images.unsplash.com/photo-1520854221256-17451cc461bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Bridal Shoes',
    price: '$160',
    image:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Wedding Rings',
    price: '$980',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
  },
]

export const timeline = [
  { time: '3:30 PM', title: 'Guest arrival', place: 'Garden terrace' },
  { time: '4:00 PM', title: 'Ceremony', place: 'Willow lawn' },
  { time: '5:00 PM', title: 'Cocktails', place: 'Orangerie' },
  { time: '7:00 PM', title: 'Dinner & toasts', place: 'Candle hall' },
  { time: '9:30 PM', title: 'First dance', place: 'Ballroom' },
]
