import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

export interface Order {
  id: string
  user_id: string
  product_name: string
  amount: number
  status: 'pending' | 'paid' | 'cancelled' | 'failed'
  payment_url?: string
  created_at: string
  company_name: string
  bin: string
  contact_person: string
  phone: string
  website?: string
  comment?: string
}

export interface Favorite {
  id: string
  user_id: string
  product_id: string
  created_at: string
}