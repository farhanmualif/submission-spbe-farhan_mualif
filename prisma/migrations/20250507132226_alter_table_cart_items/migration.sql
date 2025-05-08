/*
  Warnings:

  - You are about to drop the column `bookID` on the `CartItems` table. All the data in the column will be lost.
  - Added the required column `productID` to the `CartItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartItems" DROP CONSTRAINT "CartItems_bookID_fkey";

-- AlterTable
ALTER TABLE "CartItems" DROP COLUMN "bookID",
ADD COLUMN     "booksId" TEXT,
ADD COLUMN     "productID" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_productID_fkey" FOREIGN KEY ("productID") REFERENCES "BooksProducts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItems" ADD CONSTRAINT "CartItems_booksId_fkey" FOREIGN KEY ("booksId") REFERENCES "Books"("id") ON DELETE SET NULL ON UPDATE CASCADE;
