export type LeadStatus =
  | "New"
  | "Contacted"
  | "Appointment Set"
  | "Offer Sent"
  | "Listed"
  | "Under Contract"
  | "Closed"
  | "Dead";

export interface FeaturedProperty {
  id: string;
  created_at: string;
  status: string;
  price: string;
  address: string;
  city: string;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  lot_size: string | null;
  property_type: string;
  angle: string | null;
  image_url: string | null;
  is_spotlight: boolean;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  name: string | null;
  role: string | null;
  quote: string | null;
  rating: number;
  is_active: boolean;
  sort_order: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  sort_order: number;
}

export interface SellerLead {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  property_address: string | null;
  property_condition: string | null;
  timeline: string | null;
  asking_price: string | null;
  reason_for_selling: string | null;
  interested_in: string | null;
  notes: string | null;
  status: LeadStatus;
}

export interface InvestorBuyer {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  buyer_type: string | null;
  preferred_zip_codes: string | null;
  max_purchase_price: string | null;
  financing_type: string | null;
  preferred_property_type: string | null;
  notes: string | null;
  status: LeadStatus;
}

export interface LandLead {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  land_address: string | null;
  apn: string | null;
  lot_size: string | null;
  utilities_known: string | null;
  asking_price: string | null;
  notes: string | null;
  status: LeadStatus;
}

export interface ContactMessage {
  id: string;
  created_at: string;
  name: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  status: LeadStatus;
}
