/**
 * Shopee SDK boundary candidate.
 *
 * Boundary:
 * - local metadata only;
 * - no environment file read;
 * - no API call;
 * - no database write;
 * - no request signing.
 */

export type CandidateStatus =
  | "candidate"
  | "suspected"
  | "not_officially_confirmed"
  | "needs_official_doc_check";

export type SdkExportCandidate = {
  exportName: string;
  status: CandidateStatus;
  note: string;
};

export const SHOPEE_SDK_PACKAGE = {
  name: "@congminh1254/shopee-sdk",
  version: "1.13.0",
  source: "local_static_inspect",
  status: "candidate" satisfies CandidateStatus,
} as const;

export const SDK_EXPORT_CANDIDATES: readonly SdkExportCandidate[] = [
  {
    exportName: ".",
    status: "candidate",
    note: "Main export observed from local static package metadata.",
  },
  {
    exportName: "./managers",
    status: "needs_official_doc_check",
    note: "Manager export observed from local static package metadata.",
  },
  {
    exportName: "./schemas",
    status: "needs_official_doc_check",
    note: "Schema export observed from local static package metadata.",
  },
  {
    exportName: "./storage",
    status: "needs_official_doc_check",
    note: "Storage export is auth-adjacent and requires later approval.",
  },
];

export function getSdkBoundarySummary() {
  return {
    package: SHOPEE_SDK_PACKAGE,
    exports: SDK_EXPORT_CANDIDATES,
    boundaries: {
      readEnvironmentFile: false,
      checkSecret: false,
      callApi: false,
      generateSignature: false,
      writeDatabase: false,
      runExamples: false,
      runAuth: false,
      runSandbox: false,
      methodDiscoveryActualRun: false,
      updateRegistry: false,
    },
  };
}
