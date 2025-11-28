# We pay your prompt – Sponsored Prompts / Virtual Privacy Prompt (VPP)

> **TL;DR**  
> This repository documents the concept and implementation of **ad-funded, privacy-preserving AI prompts** (“Sponsored Prompts” via a **Virtual Privacy Prompt (VPP)** proxy).  
> It is intentionally public to serve as **evidence of authorship and priority** of the idea.  
> The **code is copyrighted and may not be used or reused** without explicit written permission.

---

## 1. What this project is about

**We pay your prompt** is a prototype and concept for:

- A **web interface** where users can:
  - select from different LLM models (e.g. GPT-4o mini, etc.),
  - enter prompts without registration or login,
  - choose a **sponsoring mode** (banner or video).

- While the LLM processes the prompt:
  - a **full-screen sponsored banner or video** is displayed,
  - with a **minimum display time** (e.g. 5 seconds for banners, 10 seconds for videos),
  - the sponsor **pays for the underlying API and server costs**.

- The site behaves as a **privacy proxy**:
  - no user account,
  - no server-side chat history storage in this prototype,
  - the conversation context exists only in the browser session,
  - when the session/tab is closed, the history is gone.

I call this concept a **Virtual Privacy Prompt (VPP)**:  
a middle layer between the user and the underlying LLM APIs, where **ads, not the user**, pay for the prompts, and **anonymity** is a core design principle.

---

## 2. Why this repository exists (evidence of the idea)

This repository is **not** primarily meant as an open-source project or as a reusable boilerplate.  
Its main purpose is to act as a **public, time-stamped record** of the following concept:

> **An anonymous LLM proxy (“Virtual Privacy Prompt”) where users select a model, send prompts without registration, and the processing is financed by showing sponsored banners or videos in a blocking/fullscreen manner during the response time. The sponsorship revenue is explicitly used to pay for LLM API and server costs.**

This includes, in particular:

- The **combination** of:
  - model selection UI,
  - anonymous prompt forwarding,
  - **blocking ad display** (banner or video) with defined minimum duration,
  - transparent communication that **“this ad is currently paying for your prompt”**,
  - and positioning the service as a **privacy proxy (VPP)** rather than a normal chatbot.

- The explicit idea that:
  - the site **does not require an account**, and
  - the “chat history” is only kept in the browser state and is discarded when the session ends,
  - while ads **sponsor the cost of each individual request**.

I am deliberately publishing this repository so that the following can be verified externally:

1. **Repository creation date and commit history**  
   Git history, tags, and commit timestamps show when this concept and implementation were created and described.

2. **Public domain / deployment**  
   The project is intended to be deployed under a domain such as `sponsored-prompts` / similar, further anchoring the idea in time through DNS records, hosting logs, and public availability.

3. **Public README & footer statements**  
   The application and this README explicitly state:
   - the **concept**,
   - the **role of ads** as cost coverage for API/server usage,
   - the **privacy-proxy idea (VPP)**.

> ⚠️ **Important:**  
> This repository is meant as **evidence** and **indication** of authorship and timing, **not** as a substitute for legal procedures.  
> Whether this constitutes prior art, who is legally recognized as the first inventor/author, or whether any part of this is protectable as IP is ultimately up to courts, intellectual property offices, or other competent authorities.

---

## 3. Concept overview

### 3.1. User flow

1. User opens the website.
2. User selects an LLM model (e.g. GPT-4o mini, or another connected provider).
3. User chooses a **mode**:
   - **Banner mode**: full-screen banner ad, minimum 5 seconds.
   - **Video mode**: full-screen video ad, minimum 10 seconds.
4. User enters a prompt.
5. While the LLM processes the prompt:
   - a **full-screen overlay** with the chosen sponsorship ad (banner or video) is shown,
   - the UI clearly states:
     - that **this ad is currently financing the LLM/API cost** of the request,
     - that the prompt is forwarded anonymously via the VPP.
6. After the minimum display time is over and the LLM response is ready, the overlay disappears and the answer is shown.
7. The **chat history** lives only in the front-end session state and is lost when the tab/page is closed or reloaded.

### 3.2. Privacy / VPP idea

- No user accounts, no mandatory personal data.
- The server does **not** store chat history in this prototype.
- The site positions itself explicitly as a **Virtual Privacy Prompt (VPP)**:
  - acting like a VPN, but for prompts,
  - decoupling the user identity from the underlying LLM provider as much as possible (within realistic technical and provider constraints).

### 3.3. Sponsorship and transparency

- Ads are shown in a **blocking popup/overlay** during processing.
- The UI and legal text explain clearly that:
  - **“This ad is paying for your prompt right now.”**
  - Sponsorship revenue is intended to cover **LLM API usage and server costs**.
- The cookie/consent banner and privacy policy explain that:
  - in the prototype, no tracking profiles are generated by me,
  - only technically necessary storage (e.g. cookie/consent choice via `localStorage`) is used,
  - any future integration of third-party ad networks would require transparent disclosure and, if necessary, separate consent.

---

## 4. Technical overview (short)

This is just a high-level summary; see the code for details.

- **Stack**
  - Next.js (App Router, TypeScript)
  - React client components
  - Tailwind CSS (v4 style via `@import "tailwindcss";`)
- **Key UI components**
  - Model grid for selecting LLM models.
  - Prompt area that only appears after a model is chosen.
  - Mode selector (banner / video).
  - Full-screen **Ad modal** overlay (banner or video).
  - Sponsor strip footer listing sponsor names (demo data).
- **Privacy concept**
  - No login.
  - Chat history is managed entirely in the client state for the current tab.
  - Prototype uses simulated backend responses; final version is intended to call external LLM APIs via a server-side proxy.

---

### 5.1. Copyright (code)
Copyright (c) 2025 Mario von Bassen. All rights reserved.

