export const siteConfig = {
  name: "Suresh Dhakal",
  shortName: "SD",
  title: "Real Estate Sales Representative",
  domain: "sdhakal.ca",
  email: "sdhakal2022@gmail.com",
  phoneDisplay: "647-328-4896",
  phoneHref: "+10000000000",
  brokerage: "RE/MAX REAL ESTATE CENTRE INC., REAL ESTATE BROKERAGE",
  serviceArea: "Greater Toronto Area",
  cityLine: "Brampton · Mississauga · Caledon · Toronto",
  instagram: "#",
  facebook: "#",
  linkedIn: "#",
  formspreeEndpoint: "https://formspree.io/f/xeeyrzew",
  hero: {
    eyebrow: "Your GTA real estate guide",
    heading: "A better way to buy or sell your next home.",
    description:
      "Straightforward advice, responsive service, and confident negotiation—every step of the way.",
  },
  stats: [
    { value: "Local", label: "GTA market knowledge" },
    { value: "1-on-1", label: "Personal guidance" },
    { value: "Full", label: "End-to-end support" },
  ],
  areas: ["Brampton", "Mississauga", "Caledon", "Toronto", "Oakville", "Milton"],
  listings: [
    {
      title: "Modern Family Home",
      location: "Replace with listing address",
      price: "$—",
      beds: "4",
      baths: "3",
      type: "Detached",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    },
    {
      title: "Bright Urban Condo",
      location: "Replace with listing address",
      price: "$—",
      beds: "2",
      baths: "2",
      type: "Condo",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    },
    {
      title: "Elegant Townhome",
      location: "Replace with listing address",
      price: "$—",
      beds: "3",
      baths: "3",
      type: "Townhome",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
    },
  ],
  testimonials: [
    {
      quote:
        "Replace this with a real client testimonial about Suresh's communication, care, and professionalism.",
      author: "Client name",
      detail: "Buyer in the GTA",
    },
    {
      quote:
        "Add a second verified review here. Specific stories feel more trustworthy than generic praise.",
      author: "Client name",
      detail: "Seller in the GTA",
    },
  ],
} as const;
