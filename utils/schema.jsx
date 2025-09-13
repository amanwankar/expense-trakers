import { pgTable, PgTable,serial,varchar } from "drizzle-orm/pg-core";


export const Bugets = pgTable('bugets',{
  id:serial('id').primaryKey(),
  Name:varchar('Name').notNull(),
  amount:varchar('amount').notNull(),
  icon:varchar('icon'),
  createdBy:varchar('createdBy').notNull()
  
})