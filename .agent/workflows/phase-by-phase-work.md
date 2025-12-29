---
description: Phased workflow
---

# OnlyHate – Chrome Extension Implementation Workflow

## Workflow Objective

Guide the step-by-step implementation of **OnlyHate**, ensuring:

- Correct Chrome Extension architecture
- Reliable YouTube DOM handling
- Incremental sentiment accuracy improvements
- Performance and privacy safety at every stage

The agent must **complete each phase in order** before advancing.

---

## Phase 0 – Scope & Guardrails (Mandatory First Step)

### Goals

- Confirm platform is **YouTube only**
- Confirm behavior is **negative-only comment visibility**
- Confirm tech stack is **TypeScript + Manifest V3**

### Validation Checklist

- [ ] No mention of Python in browser logic
- [ ] No backend or API dependency
- [ ] No framework assumptions (React/Vue)
- [ ] No multi-platform logic

If any item fails, **reset and restate scope** before proceeding.

---

## Phase 1 – Extension Skeleton

### Goals

Create a minimal but correct Chrome Extension structure.

### Required Outputs

- `manifest.json` (MV3)
- Content script entry
- Background/service worker (even if minimal)
- Icons + extension name ("OnlyHate")

### Rules

- Permissions must be minimal
- Host permissions limited to `youtube.com`
- No business logic yet

### Completion Criteria

- Extension loads in Chrome
- Content script executes on YouTube watch pages

---

## Phase 2 – YouTube Comment Detection

### Goals

Reliably detect when comments appear or change.

### Required Outputs

- `MutationObserver` implementation
- Stable selectors for comment text
- Debounced or batched processing
- Duplicate comment prevention

### Rules

- No brittle class selectors
- No polling loops
- Must support lazy-loaded comments

### Completion Criteria

- Console logs show new comments detected as user scrolls
- No duplicate logs for same comment

---

## Phase 3 – Comment Extraction & Identification

### Goals

Extract comment data safely and consistently.

### Required Data

- Comment ID
- Raw text content
- Comment thread container reference

### Rules

- Extraction must be defensive
- Empty or deleted comments must be ignored
- Replies handled separately (or explicitly excluded)

### Completion Criteria

- Extracted comments match what the user sees
- No crashes when replies load or collapse

---

## Phase 4 – MVP Sentiment Scoring (Rule-Based)

### Goals

Implement a **deterministic negative scoring function**.

### Required Outputs

- Lexicon-based sentiment scorer
- Numeric score output (e.g. -1 to 0)
- Configurable negative threshold

### Rules

- No ML models yet
- No external APIs
- Scoring must be explainable

### Completion Criteria

- Clearly negative comments score below threshold
- Positive/neutral comments score above threshold

---

## Phase 5 – Negative-Only Filtering Behavior

### Goals

Enforce OnlyHate’s core behavior.

### Required Outputs

- Hide positive & neutral comments
- Show only negative comments
- Non-destructive DOM manipulation

### Rules

- No comment deletion
- Visibility toggling only
- Thread-level hiding (not text-level)

### Completion Criteria

- Page displays only negative comments
- Scrolling loads more negative comments correctly

---

## Phase 6 – User Controls & UX

### Goals

Give users control and transparency.

### Required Outputs

- Toggle:
  - Show All
  - Negative Only
- Sensitivity threshold control
- Reveal hidden comments option

### Rules

- Controls must be accessible
- Defaults must be safe
- No forced behavior

### Completion Criteria

- User can switch modes instantly
- Filtering updates without page reload

---

## Phase 7 – Performance & Caching

### Goals

Ensure scalability on large comment threads.

### Required Outputs

- Sentiment result caching
- Comment ID deduplication
- Throttled DOM processing

### Rules

- No repeated sentiment computation
- No long main-thread blocking
- Must remain responsive

### Completion Criteria

- Smooth scrolling on large videos
- CPU usage remains reasonable

---

## Phase 8 – On-Device ML Upgrade (Optional)

### Goals

Improve sentiment accuracy.

### Required Outputs

- ONNX or TF.js model integration
- Drop-in replacement for rule-based scorer
- Fallback to rule-based logic

### Rules

- Model runs fully on-device
- No remote calls by default
- Must respect existing thresholds

### Completion Criteria

- Improved classification accuracy
- No UX regression or slowdown

---

## Phase 9 – Hardening & Release Prep

### Goals

Prepare for Chrome Web Store submission.

### Required Outputs

- Privacy policy
- Permissions audit
- Error handling for DOM changes

### Rules

- No unnecessary permissions
- Clear explanation of sentiment behavior
- No telemetry without consent

### Completion Criteria

- Extension passes store checks
- Stable behavior across multiple videos

---

## Workflow Enforcement

- The agent must **never skip phases**
- If a later phase is requested early, the agent must:
  1. Identify missing phases
  2. Return to the earliest incomplete phase
- Optimization is forbidden before correctness

---

## Final Principle

OnlyHate is:

> **A signal-extraction tool, not a moderation tool**

All decisions must reinforce that identity.

---

## Phase 10 – Website Foundation

### Goal

Establish the website structure with Next.js and the "OnlyHate" design system.

### Tasks

- Configure Tailwind CSS with "Red/Black/Bold" theme
- Install `framer-motion` and `lucide-react`
- Create `layout.tsx` with fonts (Inter/Outfit)

### Validation

- "Hello World" page loads with correct dark background

---

## Phase 11 – Website Implementation

### Goal

Build the Landing Page components.

### Tasks

- `Hero`: Bold title, aggressive CTA
- `VisualDemo`: Toggle for negative/positive comments
- `Features`: Explain "Signal vs Noise"
- `Support`: Ko-fi integration

### Validation

- Visual check on mobile and desktop
- Demo works interactively
