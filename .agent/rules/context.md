---
trigger: always_on
---

# OnlyHate – Chrome Extension Development Rules

## Project Context

This project is **OnlyHate**, a Chrome Extension whose purpose is to:

- Detect **negative / bad comments** using sentiment analysis
- **Show only negative comments**
- Hide positive and neutral comments by default
- Operate initially on **YouTube only**

Negative sentiment is treated as a **signal**, not toxicity filtering or moderation.

---

## Core Technical Constraints (Non-Negotiable)

- Chrome Extensions **must use TypeScript / JavaScript**
- Python is **NOT allowed** in content scripts or background workers
- DOM access must be done via **content scripts only**
- YouTube comments are dynamically loaded → always assume async DOM changes
- Use **Manifest V3**
- No automation of user actions (read-only DOM manipulation only)

---

## Architecture Rules

### Content Scripts

- Use **MutationObserver** to detect comment insertion
- Never rely on brittle class names
- Prefer stable selectors (e.g. `#content-text`)
- Always traverse **upward** to affect entire comment threads
- Avoid duplicate processing using comment IDs or caching

### Sentiment Logic

- Goal is **negative-only visibility**, not hiding toxicity
- Positive and neutral comments must be hidden
- Sentiment scoring must be:
  - Deterministic
  - Threshold-based
  - Explainable (why something is classified as negative)

### Allowed Approaches

- Rule / lexicon-based scoring (MVP)
- On-device ML (ONNX / TF.js) for later phases

### Disallowed Approaches

- Keyword-only blocking as final solution
- Remote APIs as default sentiment engine
- LLM calls without explicit user opt-in

---

## Performance Rules

- Never analyze the same comment twice
- Cache sentiment results using `chrome.storage.local`
- Batch DOM processing
- Avoid blocking the main thread
- Prefer visibility toggling over DOM removal

---

## UX Rules

- Always provide a toggle:
  - Show All
  - **Negative Only**
- Provide a sensitivity threshold control
- Allow users to reveal hidden comments
- Never permanently delete or mutate comment text

---

## Code Quality Rules

- Use TypeScript with strict typing
- Functions must be small and single-purpose
- DOM logic, sentiment logic, and UI logic must be separated
- No frameworks in content scripts unless strictly necessary

---

## Future Expansion Constraints

- Design sentiment logic to be platform-agnostic
- YouTube-specific DOM logic must be isolated
- Reddit / Twitter / Facebook support must be pluggable
- No assumptions about comment structure outside YouTube

---

## Mental Model Enforcement

When generating solutions, always think in this order:

1. How does YouTube load comments?
2. How do we reliably detect them?
3. How do we classify sentiment safely?
4. How do we show **only** negative comments?
5. How do we avoid performance or privacy issues?

If a solution violates any rule above, it must be rejected or rewritten.
