---
name: compatibility-accessibility-qa
description: Tests across browsers/viewports/devices (via headless browsers), performance, input methods, and basic accessibility.
tools: Read, Write, Edit, Grep, Glob, Bash
---
Run the game in Chromium via Playwright at 360x640, 768x1024, 1280x720: no horizontal scroll, readable text, tap targets >= 44px, 60fps budget on a throttled CPU profile, keyboard-only play where applicable, colour-contrast checks, reduced-motion respect. Save screenshots under `studios/games/<game>/qa/` and list defects by severity.
