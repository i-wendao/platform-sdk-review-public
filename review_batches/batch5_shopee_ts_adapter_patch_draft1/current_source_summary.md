# Current Source Summary

## `sdk_boundary.ts`

Current file defines candidate package metadata, SDK export candidates, and a summary function with hard-coded false runtime boundaries.

## `output_contract.ts`

Current file defines Shopee adapter domains and candidate records with `requestShapeCandidate` and `responseShapeCandidate` both fixed to `not_defined`.

## `adapter_candidate.ts`

Current file defines static manager candidates and returns them as a summary. It contains no SDK runtime import, no API call, no environment read, and no database write.

## Current risk posture

The skeleton is static-only. The patch draft keeps that posture and only improves type and review boundaries.
