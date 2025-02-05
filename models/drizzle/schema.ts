import { relations } from "drizzle-orm";
import { integer, pgTable, uuid, varchar, pgEnum, boolean, real, timestamp, primaryKey } from "drizzle-orm/pg-core";
export const userRole = pgEnum('role', ["ADMIN", "BASIC"])

export const UserTable = pgTable('user', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),
    age: integer('age'),
    githubId: varchar('github_id', { length: 255 }).unique().notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    role: userRole('userRole').default('BASIC').notNull(),
});


export const PostTable = pgTable('posts', {
    id: uuid('id').primaryKey().defaultRandom(),
    postTitle: varchar('postTitle').notNull(),
    content: varchar('content').notNull(),
    authorId: varchar('authorId').references(() => UserTable.email, { onDelete: 'cascade' }).notNull(),
    avrageRating: real('avarageRating').default(0.0),
    createAt: timestamp('createAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
})
export const PostLikesTable = pgTable('postLikes', {
    id: uuid('id').primaryKey().defaultRandom(),
    postId: uuid('postId').references(() => PostTable.id, { onUpdate: 'cascade' }),
    userId: varchar('userId').references(()=>UserTable.email,{onUpdate:'cascade'}),
    liked:boolean('liked').default(false)
})

export const UserPrefrencesTable = pgTable('prefrences', {
    id: uuid('id').primaryKey().defaultRandom(),
    emailUpdates: boolean("emailUpdates").notNull().default(false),
    userId: uuid('userId').references(() => UserTable.id, { onDelete: 'cascade' }).notNull()


})
export const CategoryTable = pgTable('categoryTable', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: varchar('name', { length: 255 }).notNull(),


})
//* many to many need joint Table 😒
export const PostCatagotryTable = pgTable('postCatagory', {
    postId: uuid('postId').references(() => PostTable.id, { onDelete: 'cascade' }).notNull(),
    CatagoryId: uuid('catagoryId').references(() => CategoryTable.id, { onDelete: 'cascade' }).notNull(),
}, table => {
    return {
        pk: primaryKey({ columns: [table.postId, table.CatagoryId] })
    }
})



// * Relations

export const UserTableRelation = relations(UserTable, ({ one, many }) => {
    return {
        prefrences: one(UserPrefrencesTable),
        posts: many(PostTable)
    }
})
export const UserPrefrencesTableRelations = relations(UserPrefrencesTable, ({ one }) => {
    return {
        user: one(UserTable, {
            fields: [UserPrefrencesTable.userId],
            references: [UserTable.id]

        })
    }
})
//* many to many need joint Table Relations 🥲😒
export const PostTableRelations = relations(PostTable, ({ one, many }) => {
    return {
        author: one(UserTable, {
            fields: [PostTable.authorId],
            references: [UserTable.email]

        }),
        postCatagotries: many(PostCatagotryTable),
        likes:many(PostLikesTable)
    }
})
//im confused of the relation here help
export const PostLikesTableRaltions = relations(PostLikesTable,({one})=>{
    return{
        post: one(PostTable, {
            fields: [PostLikesTable.postId],
            references: [PostTable.id],
        }),
        user: one(UserTable, {
            fields: [PostLikesTable.userId],
            references: [UserTable.id],
        })
    }
})

export const CategoryTableRelations = relations(CategoryTable, ({ many }) => {
    return {
        postCatagotries: many(PostCatagotryTable)
    }
})
export const PostCatagotryTableRelations = relations(PostCatagotryTable, ({ one }) => {
    return {
        posts: one(PostTable, {
            fields: [PostCatagotryTable.postId],
            references: [PostTable.id]
        }),
        catagories: one(CategoryTable, {
            fields: [PostCatagotryTable.CatagoryId],
            references: [CategoryTable.id]
        })
    }
})