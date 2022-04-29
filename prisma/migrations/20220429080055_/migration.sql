-- CreateTable
CREATE TABLE "Member" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "emergencyMobile" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Todo" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("uid")
);
