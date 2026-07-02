# Applied Diff

The applied cleanup changed only the three allowed Shopee TS adapter source files.

```diff
diff --git a/adapters/shopee_ts/src/adapter_candidate.ts b/adapters/shopee_ts/src/adapter_candidate.ts
index 30126e5..ac97e12 100644
--- a/adapters/shopee_ts/src/adapter_candidate.ts
+++ b/adapters/shopee_ts/src/adapter_candidate.ts
@@ -39,7 +39,8 @@ export const STATIC_SUMMARY_NOTES = [
   "No environment file is read here.",
   "No secret or token value is inspected here.",
   "No database write is made here.",
-  "All records require official document check.",
+  "Candidate manager names are static signals only.",
+  "All records require official document check and runtime verification before use.",
 ] as const;

 export function getCandidateDomains(
diff --git a/adapters/shopee_ts/src/output_contract.ts b/adapters/shopee_ts/src/output_contract.ts
index 67105e3..814af06 100644
--- a/adapters/shopee_ts/src/output_contract.ts
+++ b/adapters/shopee_ts/src/output_contract.ts
@@ -12,11 +12,13 @@ export type ShopeeAdapterDomain =

 export type AdapterRuntimeMode = "static_candidate_only";

-export type ShapeDefinitionStatus = "not_defined";
+export type ShapeDefinitionStatus = "not_modeled_static_only";
+export type ShapeVerificationStatus = "not_runtime_verified";

 export type ShopeeAdapterShapeBoundary = {
   request: ShapeDefinitionStatus;
   response: ShapeDefinitionStatus;
+  verification: ShapeVerificationStatus;
 };

 export type ShopeeAdapterCandidateRecord = {
@@ -30,6 +32,7 @@ export type ShopeeAdapterCandidateRecord = {
   sdkSymbol: string;
   status: CandidateStatus;
   shapes: ShopeeAdapterShapeBoundary;
+  verificationScope: "static_signal_only";
   uncertainty: string;
   needsOfficialDocCheck: true;
 };
@@ -57,8 +60,9 @@ export const OUTPUT_CONTRACT_BOUNDARY: OutputContractBoundary = {
 };

 export const UNDEFINED_SHAPE_BOUNDARY: ShopeeAdapterShapeBoundary = {
-  request: "not_defined",
-  response: "not_defined",
+  request: "not_modeled_static_only",
+  response: "not_modeled_static_only",
+  verification: "not_runtime_verified",
 };

 export function createCandidateRecord(
@@ -78,7 +82,8 @@ export function createCandidateRecord(
     sdkSymbol,
     status,
     shapes: UNDEFINED_SHAPE_BOUNDARY,
-    uncertainty: "Community SDK static signal only.",
+    verificationScope: "static_signal_only",
+    uncertainty: "Community SDK static signal only; not an official or runtime-verified capability claim.",
     needsOfficialDocCheck: true,
   };
 }
diff --git a/adapters/shopee_ts/src/sdk_boundary.ts b/adapters/shopee_ts/src/sdk_boundary.ts
index 9649ca5..272b293 100644
--- a/adapters/shopee_ts/src/sdk_boundary.ts
+++ b/adapters/shopee_ts/src/sdk_boundary.ts
@@ -16,17 +16,23 @@ export type CandidateStatus =
   | "needs_official_doc_check";

 export type SdkBoundaryMode = "static_metadata_only";
+export type StaticEvidenceSource = "community_sdk_static_metadata";
+export type VerificationScope = "static_signal_only";

 export type SdkPackageMetadata = {
   name: "@congminh1254/shopee-sdk";
   version: "1.13.0";
   source: "local_static_inspect";
   status: CandidateStatus;
+  evidenceSource: StaticEvidenceSource;
+  verificationScope: VerificationScope;
 };

 export type SdkExportCandidate = {
   exportName: string;
   status: CandidateStatus;
+  evidenceSource: StaticEvidenceSource;
+  verificationScope: VerificationScope;
   note: string;
 };

@@ -56,28 +62,38 @@ export const SHOPEE_SDK_PACKAGE = {
   version: "1.13.0",
   source: "local_static_inspect",
   status: "candidate",
+  evidenceSource: "community_sdk_static_metadata",
+  verificationScope: "static_signal_only",
 } as const satisfies SdkPackageMetadata;

 export const SDK_EXPORT_CANDIDATES: readonly SdkExportCandidate[] = [
   {
     exportName: ".",
     status: "candidate",
-    note: "Main export observed from local static package metadata.",
+    evidenceSource: "community_sdk_static_metadata",
+    verificationScope: "static_signal_only",
+    note: "Main export observed from local static package metadata; not an official capability claim.",
   },
   {
     exportName: "./managers",
     status: "needs_official_doc_check",
-    note: "Manager export observed from local static package metadata.",
+    evidenceSource: "community_sdk_static_metadata",
+    verificationScope: "static_signal_only",
+    note: "Manager export observed from local static package metadata; not runtime verified.",
   },
   {
     exportName: "./schemas",
     status: "needs_official_doc_check",
-    note: "Schema export observed from local static package metadata.",
+    evidenceSource: "community_sdk_static_metadata",
+    verificationScope: "static_signal_only",
+    note: "Schema export observed from local static package metadata; not runtime verified.",
   },
   {
     exportName: "./storage",
     status: "needs_official_doc_check",
-    note: "Storage export is auth-adjacent and requires later approval.",
+    evidenceSource: "community_sdk_static_metadata",
+    verificationScope: "static_signal_only",
+    note: "Storage export is auth-adjacent, not runtime verified, and requires later approval.",
   },
 ];
```
