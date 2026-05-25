#!/usr/bin/env bash
# Build the Astro site and publish to the sibling zxiiro.github.io repo.
#
# Usage:
#   ./publish.sh           # build, sync, commit; you push manually
#   ./publish.sh --push    # build, sync, commit, push
#
# Override the output repo location with OUT_DIR if it lives elsewhere.

set -euo pipefail

SRC_DIR="$(cd "$(dirname "$0")" && pwd)"
OUT_DIR="${OUT_DIR:-$SRC_DIR/../zxiiro.github.io}"

if [ ! -d "$OUT_DIR/.git" ]; then
  echo "Error: output repo not found at $OUT_DIR" >&2
  echo "Set OUT_DIR=/path/to/zxiiro.github.io if it lives elsewhere." >&2
  exit 1
fi

echo "→ Building Astro site"
npm run build

echo "→ Clearing $OUT_DIR (preserving .git and CNAME)"
find "$OUT_DIR" -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name 'CNAME' \
  -exec rm -rf {} +

echo "→ Syncing dist/ → $OUT_DIR/"
rsync -a "$SRC_DIR/dist/" "$OUT_DIR/"
cp "$SRC_DIR/CNAME" "$OUT_DIR/CNAME"

cd "$OUT_DIR"
git add -A
if git diff --cached --quiet; then
  echo "→ No changes to publish."
  exit 0
fi

SOURCE_SHA="$(git -C "$SRC_DIR" rev-parse --short HEAD)"
git commit -m "Update site $(date -u +%Y%m%d-%H%M) $SOURCE_SHA"

if [ "${1:-}" = "--push" ]; then
  git push
  echo "→ Published."
else
  echo "→ Committed in $OUT_DIR."
  echo "  Run: (cd $OUT_DIR && git push)"
fi
