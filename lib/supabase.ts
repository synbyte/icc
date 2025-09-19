import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://afkkbbhspuejreqpehtn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFma2tiYmhzcHVlanJlcXBlaHRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMzc1MzEsImV4cCI6MjA3MzgxMzUzMX0.cn5dc45vGfFO_R0WjzLAnKofqBY7vEqvVMF41MAIWmQ'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Type definitions for the contacts table
export interface ContactForm {
  full_name: string
  email: string
  phone?: string
  subject: string
  message: string
  method: string
  urgency: string
}

export interface Contact extends ContactForm {
  id: number
  created_at: string
}