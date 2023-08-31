-- CreateTable
CREATE TABLE "ClientInformation" (
    "id" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "regionCode" TEXT NOT NULL,
    "regionName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "countryName" TEXT NOT NULL,
    "continentCode" TEXT NOT NULL,
    "continentName" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "craetedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClientInformation_pkey" PRIMARY KEY ("id")
);
