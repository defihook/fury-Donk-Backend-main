-- CreateEnum
CREATE TYPE "FlipType" AS ENUM ('HEAD', 'TAIL');

-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('SOL', 'DUST', 'BONK', 'FRONK', 'FOXY', 'DONKS');

-- CreateEnum
CREATE TYPE "StatusType" AS ENUM ('INIT', 'PROCESSED');

-- CreateEnum
CREATE TYPE "ResultType" AS ENUM ('WIN', 'LOSE');

-- CreateTable
CREATE TABLE "Round" (
    "id" SERIAL NOT NULL,
    "wallet" TEXT NOT NULL,
    "flip_type" "FlipType" NOT NULL,
    "token" "TokenType" NOT NULL,
    "amount" BIGINT NOT NULL,
    "result" "ResultType" NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "status" "StatusType" NOT NULL DEFAULT 'INIT',
    "signature" TEXT NOT NULL,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);
