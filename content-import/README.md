This directory preserves legacy lesson content outside the app runtime.

Purpose:

- keep the original JSON content safe
- validate content before import
- support deterministic re-imports
- avoid manual lesson rewrites

Phase 1 only stages the source material.
Phase 3 will add Zod validation and import scripts.
