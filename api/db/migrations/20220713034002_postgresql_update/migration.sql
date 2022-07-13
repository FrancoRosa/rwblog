-- AlterTable
CREATE SEQUENCE "contact_id_seq";
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT nextval('contact_id_seq'),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
ALTER SEQUENCE "contact_id_seq" OWNED BY "Contact"."id";

-- AlterTable
CREATE SEQUENCE "post_id_seq";
ALTER TABLE "Post" ALTER COLUMN "id" SET DEFAULT nextval('post_id_seq'),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP(3);
ALTER SEQUENCE "post_id_seq" OWNED BY "Post"."id";

-- AlterTable
CREATE SEQUENCE "user_id_seq";
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT nextval('user_id_seq'),
ALTER COLUMN "resetTokenExpiresAt" SET DATA TYPE TIMESTAMP(3);
ALTER SEQUENCE "user_id_seq" OWNED BY "User"."id";
