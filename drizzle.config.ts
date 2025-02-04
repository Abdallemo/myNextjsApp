import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema:"./models/drizzle/schema.ts",
  out:'./models/migrations',
  dialect:'postgresql',
  dbCredentials:{
    url: process.env.DATABASE_URL as string
  },
  verbose:true,
  strict:true,

  
  
})


