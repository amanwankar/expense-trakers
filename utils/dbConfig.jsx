import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://neondb_owner:npg_mNJ7aVYOI6HQ@ep-bold-brook-ad5d8hjb-pooler.c-2.us-east-1.aws.neon.tech/Expense-traker?sslmode=require&channel_binding=require');
 export const db = drizzle({ client: sql,schema });