import type { CandidateStatus } from "./sdk_boundary.js";

export type ShopeeAdapterDomain =
  | "product"
  | "order"
  | "logistics"
  | "settlement_payment"
  | "after_sales"
  | "shop_basic"
  | "media"
  | "promotion";

export type ShopeeAdapterCandidateRecord = {
  platform: "shopee";
  adapter: "shopee_ts";
  sdkPackage: "@congminh1254/shopee-sdk";
  sdkVersion: "1.13.0";
  businessDomain: ShopeeAdapterDomain;
  sdkModule: string;
  sdkSymbol: string;
  status: CandidateStatus;
  requestShapeCandidate: "not_defined";
  responseShapeCandidate: "not_defined";
  uncertainty: string;
  needsOfficialDocCheck: true;
};

export const OUTPUT_CONTRACT_BOUNDARY = {
  status: "candidate",
  writesDatabase: false,
  writesRawEvidence: false,
  updatesRegistry: false,
  callsApi: false,
} as const;

export function createCandidateRecord(
  businessDomain: ShopeeAdapterDomain,
  sdkModule: string,
  sdkSymbol: string,
  status: CandidateStatus = "candidate",
): ShopeeAdapterCandidateRecord {
  return {
    platform: "shopee",
    adapter: "shopee_ts",
    sdkPackage: "@congminh1254/shopee-sdk",
    sdkVersion: "1.13.0",
    businessDomain,
    sdkModule,
    sdkSymbol,
    status,
    requestShapeCandidate: "not_defined",
    responseShapeCandidate: "not_defined",
    uncertainty: "Community SDK static signal only.",
    needsOfficialDocCheck: true,
  };
}
