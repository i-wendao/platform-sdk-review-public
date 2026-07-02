# Applied Diff

Only the following three source files are included in the applied source diff:

- `adapters/shopee_ts/src/sdk_boundary.ts`
- `adapters/shopee_ts/src/output_contract.ts`
- `adapters/shopee_ts/src/adapter_candidate.ts`

diff --git a/adapters/shopee_ts/src/adapter_candidate.ts b/adapters/shopee_ts/src/adapter_candidate.ts
index 4d1f046..30126e5 100644
--- a/adapters/shopee_ts/src/adapter_candidate.ts
+++ b/adapters/shopee_ts/src/adapter_candidate.ts
@@ -1,7 +1,20 @@
-import { createCandidateRecord } from "./output_contract.js";
-import { getSdkBoundarySummary } from "./sdk_boundary.js";
+import {
+  type ShopeeAdapterCandidateRecord,
+  type ShopeeAdapterDomain,
+  createCandidateRecord,
+} from "./output_contract.js";
+import { getSdkBoundarySummary, type SdkBoundarySummary } from "./sdk_boundary.js";
 
-const MANAGER_CANDIDATES = [
+export type ShopeeAdapterCandidateSummary = {
+  mode: "candidate_static_summary";
+  boundary: SdkBoundarySummary;
+  records: readonly ShopeeAdapterCandidateRecord[];
+  recordCount: number;
+  domains: readonly ShopeeAdapterDomain[];
+  notes: readonly string[];
+};
+
+export const MANAGER_CANDIDATES: readonly ShopeeAdapterCandidateRecord[] = [
   createCandidateRecord("product", "./managers", "ProductManager", "needs_official_doc_check"),
   createCandidateRecord("product", "./managers", "GlobalProductManager", "needs_official_doc_check"),
   createCandidateRecord("order", "./managers", "OrderManager", "needs_official_doc_check"),
@@ -20,17 +33,37 @@ const MANAGER_CANDIDATES = [
   createCandidateRecord("promotion", "./managers", "AddOnDealManager", "needs_official_doc_check"),
 ];
 
-export function buildShopeeAdapterCandidateSummary() {
+export const STATIC_SUMMARY_NOTES = [
+  "No SDK import is executed here.",
+  "No API request is made here.",
+  "No environment file is read here.",
+  "No secret or token value is inspected here.",
+  "No database write is made here.",
+  "All records require official document check.",
+] as const;
+
+export function getCandidateDomains(
+  records: readonly ShopeeAdapterCandidateRecord[] = MANAGER_CANDIDATES,
+): readonly ShopeeAdapterDomain[] {
+  return Array.from(new Set(records.map((record) => record.businessDomain))).sort();
+}
+
+export function getCandidatesByDomain(
+  businessDomain: ShopeeAdapterDomain,
+  records: readonly ShopeeAdapterCandidateRecord[] = MANAGER_CANDIDATES,
+): readonly ShopeeAdapterCandidateRecord[] {
+  return records.filter((record) => record.businessDomain === businessDomain);
+}
+
+export function buildShopeeAdapterCandidateSummary(): ShopeeAdapterCandidateSummary {
+  const records = MANAGER_CANDIDATES;
+
   return {
     mode: "candidate_static_summary",
     boundary: getSdkBoundarySummary(),
-    records: MANAGER_CANDIDATES,
-    notes: [
-      "No SDK import is executed here.",
-      "No API request is made here.",
-      "No environment file is read here.",
-      "No database write is made here.",
-      "All records require official document check.",
-    ],
+    records,
+    recordCount: records.length,
+    domains: getCandidateDomains(records),
+    notes: STATIC_SUMMARY_NOTES,
   };
 }
diff --git a/adapters/shopee_ts/src/output_contract.ts b/adapters/shopee_ts/src/output_contract.ts
index 5bfeaa8..67105e3 100644
--- a/adapters/shopee_ts/src/output_contract.ts
+++ b/adapters/shopee_ts/src/output_contract.ts
@@ -10,28 +10,56 @@ export type ShopeeAdapterDomain =
   | "media"
   | "promotion";
 
+export type AdapterRuntimeMode = "static_candidate_only";
+
+export type ShapeDefinitionStatus = "not_defined";
+
+export type ShopeeAdapterShapeBoundary = {
+  request: ShapeDefinitionStatus;
+  response: ShapeDefinitionStatus;
+};
+
 export type ShopeeAdapterCandidateRecord = {
   platform: "shopee";
   adapter: "shopee_ts";
+  runtimeMode: AdapterRuntimeMode;
   sdkPackage: "@congminh1254/shopee-sdk";
   sdkVersion: "1.13.0";
   businessDomain: ShopeeAdapterDomain;
   sdkModule: string;
   sdkSymbol: string;
   status: CandidateStatus;
-  requestShapeCandidate: "not_defined";
-  responseShapeCandidate: "not_defined";
+  shapes: ShopeeAdapterShapeBoundary;
   uncertainty: string;
   needsOfficialDocCheck: true;
 };
 
-export const OUTPUT_CONTRACT_BOUNDARY = {
+export type OutputContractBoundary = {
+  status: "candidate";
+  runtimeMode: AdapterRuntimeMode;
+  writesDatabase: false;
+  writesRawEvidence: false;
+  updatesRegistry: false;
+  callsApi: false;
+  readsEnvironmentFile: false;
+  readsSecrets: false;
+};
+
+export const OUTPUT_CONTRACT_BOUNDARY: OutputContractBoundary = {
   status: "candidate",
+  runtimeMode: "static_candidate_only",
   writesDatabase: false,
   writesRawEvidence: false,
   updatesRegistry: false,
   callsApi: false,
-} as const;
+  readsEnvironmentFile: false,
+  readsSecrets: false,
+};
+
+export const UNDEFINED_SHAPE_BOUNDARY: ShopeeAdapterShapeBoundary = {
+  request: "not_defined",
+  response: "not_defined",
+};
 
 export function createCandidateRecord(
   businessDomain: ShopeeAdapterDomain,
@@ -42,14 +70,14 @@ export function createCandidateRecord(
   return {
     platform: "shopee",
     adapter: "shopee_ts",
+    runtimeMode: "static_candidate_only",
     sdkPackage: "@congminh1254/shopee-sdk",
     sdkVersion: "1.13.0",
     businessDomain,
     sdkModule,
     sdkSymbol,
     status,
-    requestShapeCandidate: "not_defined",
-    responseShapeCandidate: "not_defined",
+    shapes: UNDEFINED_SHAPE_BOUNDARY,
     uncertainty: "Community SDK static signal only.",
     needsOfficialDocCheck: true,
   };
diff --git a/adapters/shopee_ts/src/sdk_boundary.ts b/adapters/shopee_ts/src/sdk_boundary.ts
index 75fa7d4..9649ca5 100644
--- a/adapters/shopee_ts/src/sdk_boundary.ts
+++ b/adapters/shopee_ts/src/sdk_boundary.ts
@@ -15,18 +15,48 @@ export type CandidateStatus =
   | "not_officially_confirmed"
   | "needs_official_doc_check";
 
+export type SdkBoundaryMode = "static_metadata_only";
+
+export type SdkPackageMetadata = {
+  name: "@congminh1254/shopee-sdk";
+  version: "1.13.0";
+  source: "local_static_inspect";
+  status: CandidateStatus;
+};
+
 export type SdkExportCandidate = {
   exportName: string;
   status: CandidateStatus;
   note: string;
 };
 
+export type SdkBoundaryCapabilityMap = {
+  readEnvironmentFile: false;
+  checkSecret: false;
+  callApi: false;
+  generateSignature: false;
+  writeDatabase: false;
+  runExamples: false;
+  runAuth: false;
+  runSandbox: false;
+  methodDiscoveryActualRun: false;
+  updateRegistry: false;
+};
+
+export type SdkBoundarySummary = {
+  mode: SdkBoundaryMode;
+  package: SdkPackageMetadata;
+  exports: readonly SdkExportCandidate[];
+  boundaries: SdkBoundaryCapabilityMap;
+  unsupportedRuntimeActions: readonly string[];
+};
+
 export const SHOPEE_SDK_PACKAGE = {
   name: "@congminh1254/shopee-sdk",
   version: "1.13.0",
   source: "local_static_inspect",
-  status: "candidate" satisfies CandidateStatus,
-} as const;
+  status: "candidate",
+} as const satisfies SdkPackageMetadata;
 
 export const SDK_EXPORT_CANDIDATES: readonly SdkExportCandidate[] = [
   {
@@ -51,21 +81,37 @@ export const SDK_EXPORT_CANDIDATES: readonly SdkExportCandidate[] = [
   },
 ];
 
-export function getSdkBoundarySummary() {
+export const SDK_BOUNDARY_CAPABILITIES: SdkBoundaryCapabilityMap = {
+  readEnvironmentFile: false,
+  checkSecret: false,
+  callApi: false,
+  generateSignature: false,
+  writeDatabase: false,
+  runExamples: false,
+  runAuth: false,
+  runSandbox: false,
+  methodDiscoveryActualRun: false,
+  updateRegistry: false,
+};
+
+export const UNSUPPORTED_RUNTIME_ACTIONS = [
+  "sdk_client_instantiation",
+  "environment_file_read",
+  "secret_or_token_inspection",
+  "api_call",
+  "request_signing",
+  "database_write",
+  "sdk_example_run",
+  "auth_or_sandbox_run",
+  "method_discovery_actual_run",
+] as const;
+
+export function getSdkBoundarySummary(): SdkBoundarySummary {
   return {
+    mode: "static_metadata_only",
     package: SHOPEE_SDK_PACKAGE,
     exports: SDK_EXPORT_CANDIDATES,
-    boundaries: {
-      readEnvironmentFile: false,
-      checkSecret: false,
-      callApi: false,
-      generateSignature: false,
-      writeDatabase: false,
-      runExamples: false,
-      runAuth: false,
-      runSandbox: false,
-      methodDiscoveryActualRun: false,
-      updateRegistry: false,
-    },
+    boundaries: SDK_BOUNDARY_CAPABILITIES,
+    unsupportedRuntimeActions: UNSUPPORTED_RUNTIME_ACTIONS,
   };
 }
