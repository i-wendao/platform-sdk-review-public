import { createCandidateRecord } from "./output_contract.js";
import { getSdkBoundarySummary } from "./sdk_boundary.js";

const MANAGER_CANDIDATES = [
  createCandidateRecord("product", "./managers", "ProductManager", "needs_official_doc_check"),
  createCandidateRecord("product", "./managers", "GlobalProductManager", "needs_official_doc_check"),
  createCandidateRecord("order", "./managers", "OrderManager", "needs_official_doc_check"),
  createCandidateRecord("logistics", "./managers", "LogisticsManager", "needs_official_doc_check"),
  createCandidateRecord("logistics", "./managers", "FirstMileManager", "needs_official_doc_check"),
  createCandidateRecord("settlement_payment", "./managers", "PaymentManager", "needs_official_doc_check"),
  createCandidateRecord("after_sales", "./managers", "ReturnsManager", "needs_official_doc_check"),
  createCandidateRecord("shop_basic", "./managers", "ShopManager", "needs_official_doc_check"),
  createCandidateRecord("shop_basic", "./managers", "MerchantManager", "needs_official_doc_check"),
  createCandidateRecord("shop_basic", "./managers", "PublicManager", "needs_official_doc_check"),
  createCandidateRecord("media", "./managers", "MediaManager", "needs_official_doc_check"),
  createCandidateRecord("media", "./managers", "MediaSpaceManager", "needs_official_doc_check"),
  createCandidateRecord("promotion", "./managers", "DiscountManager", "needs_official_doc_check"),
  createCandidateRecord("promotion", "./managers", "VoucherManager", "needs_official_doc_check"),
  createCandidateRecord("promotion", "./managers", "BundleDealManager", "needs_official_doc_check"),
  createCandidateRecord("promotion", "./managers", "AddOnDealManager", "needs_official_doc_check"),
];

export function buildShopeeAdapterCandidateSummary() {
  return {
    mode: "candidate_static_summary",
    boundary: getSdkBoundarySummary(),
    records: MANAGER_CANDIDATES,
    notes: [
      "No SDK import is executed here.",
      "No API request is made here.",
      "No environment file is read here.",
      "No database write is made here.",
      "All records require official document check.",
    ],
  };
}
