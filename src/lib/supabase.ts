import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type UserRole = 'client' | 'farmer'
export type OrderStatus = 'pending' | 'confirmed' | 'ready' | 'completed' | 'cancelled'
export type ProductUnit = 'kg' | 'unit' | 'liter' | 'bunch'

export interface Profile {
  user_id: string
  first_name: string | null
  last_name: string | null
  phone: string | null
  role: UserRole
}

export interface Farm {
  id: string
  owner_id: string
  name: string
  slug: string
  logo_url: string | null
  created_at: string
}

export interface Product {
  id: string
  farm_id: string
  name: string
  description: string | null
  unit: ProductUnit
  generic_product_id: string
  created_at: string
}

export interface Inventory {
  id: string
  product_id: string
  farm_id: string
  price: number
  stock_quantity: number
  is_visible: boolean
  updated_at: string
}

export interface Order {
  id: string
  client_id: string
  farm_id: string
  pickup_point_id: string | null
  status: OrderStatus
  total_price: number
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price_at_order: number
}

export interface PickupPoint {
  id: string
  farm_id: string
  name: string
  address: string | null
  hours: string | null
}

export interface GenericProduct {
  id: string
  generic_name: string
  image_url: string
  created_at: string
}