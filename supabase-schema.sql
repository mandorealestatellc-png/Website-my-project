-- ============================================================
-- Armando Rosano Real Estate — Supabase Schema
-- Run this in the Supabase SQL Editor to set up all tables
-- ============================================================

-- seller_leads
create table if not exists seller_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text,
  email text,
  property_address text,
  property_condition text,
  timeline text,
  asking_price text,
  reason_for_selling text,
  interested_in text,
  notes text,
  status text default 'New'
);

-- investor_buyers
create table if not exists investor_buyers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text,
  email text,
  buyer_type text,
  preferred_zip_codes text,
  max_purchase_price text,
  financing_type text,
  preferred_property_type text,
  notes text,
  status text default 'New'
);

-- land_leads
create table if not exists land_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text,
  email text,
  land_address text,
  apn text,
  lot_size text,
  utilities_known text,
  asking_price text,
  notes text,
  status text default 'New'
);

-- contact_messages
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text,
  email text,
  message text,
  status text default 'New'
);

-- featured_properties
create table if not exists featured_properties (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  status text default 'Active',
  price text,
  address text,
  city text default 'Tucson',
  beds int,
  baths numeric,
  sqft int,
  lot_size text,
  property_type text,
  angle text,
  image_url text,
  is_spotlight boolean default false,
  sort_order int default 0
);

-- testimonials
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text,
  role text,
  quote text,
  rating int default 5,
  is_active boolean default true,
  sort_order int default 0
);

-- neighborhoods
create table if not exists neighborhoods (
  id uuid primary key default gen_random_uuid(),
  name text,
  slug text unique,
  description text,
  image_url text,
  sort_order int default 0
);

-- ============================================================
-- Row Level Security (enable for all tables)
-- ============================================================

alter table seller_leads enable row level security;
alter table investor_buyers enable row level security;
alter table land_leads enable row level security;
alter table contact_messages enable row level security;
alter table featured_properties enable row level security;
alter table testimonials enable row level security;
alter table neighborhoods enable row level security;

-- Public can insert leads (form submissions)
create policy "Allow public insert on seller_leads"
  on seller_leads for insert to anon with check (true);

create policy "Allow public insert on investor_buyers"
  on investor_buyers for insert to anon with check (true);

create policy "Allow public insert on land_leads"
  on land_leads for insert to anon with check (true);

create policy "Allow public insert on contact_messages"
  on contact_messages for insert to anon with check (true);

-- Public can read featured_properties, testimonials, neighborhoods
create policy "Allow public read on featured_properties"
  on featured_properties for select to anon using (true);

create policy "Allow public read on testimonials"
  on testimonials for select to anon using (is_active = true);

create policy "Allow public read on neighborhoods"
  on neighborhoods for select to anon using (true);

-- Service role (used by admin dashboard) has full access via service_role key
-- No additional policies needed — service_role bypasses RLS

-- ============================================================
-- Sample neighborhood data
-- ============================================================

insert into neighborhoods (name, slug, description, sort_order) values
  ('Tucson', 'tucson', 'City core, central neighborhoods, and urban real estate.', 1),
  ('Catalina Foothills', 'catalina-foothills', 'Luxury estates and premium desert mountain living.', 2),
  ('Oro Valley', 'oro-valley', 'Master-planned communities and family-friendly suburbs.', 3),
  ('Marana', 'marana', 'Fast-growing northwest corridor with new development.', 4),
  ('Vail', 'vail', 'Southeast Tucson with top schools and planned communities.', 5),
  ('Sahuarita', 'sahuarita', 'Affordable south Tucson suburb with room to grow.', 6),
  ('Central Tucson', 'central-tucson', 'Midtown charm, walkable neighborhoods, investment density.', 7),
  ('University Area', 'university-area', 'UA-adjacent rentals, historic properties, and high demand.', 8)
on conflict (slug) do nothing;
