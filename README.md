# We pay your prompt – Sponsored Prompts / Virtual Privacy Prompt (VPP)

> **TL;DR**  
> This repository documents the concept and implementation of **ad-funded, privacy-preserving AI prompts** (“Sponsored Prompts” via a **Virtual Privacy Prompt (VPP)** proxy).  
> It is intentionally public to serve as **evidence of authorship and priority** of the idea and its concrete implementation details.  
> The **code is copyrighted and may not be used or reused** without explicit written permission.

---

## 1. What this project is about

**We pay your prompt** is a prototype and concept for:

- A **web interface** where users can:
  - select from different LLM models (e.g. GPT-4o mini, Claude, Gemini, etc. – wired via a proxy),
  - enter prompts **without registration or login**,
  - have the sponsoring mode (banner / video) be selected based on prompt complexity (in the final version; currently fixed to video in the prototype).

- While the LLM processes the prompt:
  - a **full-screen sponsored banner or video** is displayed as a blocking overlay,
  - with a **minimum display time** (e.g. ~5 seconds for banners, ~10–20 seconds for videos),
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

Its main purpose is to act as a **public, time-stamped record** of the following concept and concrete UI/UX implementation:

> **An anonymous LLM proxy (“Virtual Privacy Prompt”) where users select a model, send prompts without registration, and the processing is financed by showing sponsored banners or videos in a blocking/fullscreen manner during the response time. The sponsorship revenue is explicitly used to pay for LLM API and server costs. The service behaves like a “VPN for prompts” and does not permanently store the chat history.**

This includes, in particular:

- The **combination** of:
  - model selection UI,
  - anonymous prompt forwarding through an intermediate service,
  - **blocking ad display** (banner or video) with defined minimum duration,
  - transparent communication that **“this ad is currently paying for your prompt”**,
  - and positioning the service as a **privacy proxy (VPP)** rather than a normal chatbot.

- The explicit idea that:
  - the site **does not require an account**, and
  - the “chat history” is only kept in the browser state and is discarded when the session ends,
  - while ads **sponsor the cost of each individual request**.

- The specific **interaction pattern**:
  - user selects a model,
  - enters a prompt,
  - a **sponsor overlay** appears (banner or video),
  - only **after the sponsorship has finished**, the LLM’s answer is revealed.

I am deliberately publishing this repository so that the following can be verified externally:

1. **Repository creation date and commit history**  
   Git history, tags, and commit timestamps show when this concept and implementation were created and described.

2. **Public deployment under a “sponsored prompts” branding**  
   The project is intended to be deployed under a domain such as `sponsored-prompts` (or similar), anchoring the idea in time via DNS records, hosting logs, and public availability.

3. **Public README, UI copy & footer statements**  
   The application itself and this README explicitly state:
   - the **concept**,
   - the **role of ads** as cost coverage for API/server usage,
   - the **privacy-proxy idea (VPP)**,
   - the fact that this is a **prototype** for ad-funded, privacy-preserving LLM usage.

> ⚠️ **Important:**  
> This repository is meant as **evidence** and **indication** of authorship and timing, **not** as a substitute for formal legal procedures.  
> Whether this constitutes prior art, who is legally recognized as the first inventor/author, or whether any part of this is protectable as IP is ultimately up to courts, intellectual property offices, or other competent authorities.

---

## 3. Concept overview

### 3.1. User flow

1. User opens the website.
2. User selects an LLM model from a **grid of sponsored models** (e.g. GPT-4o mini, GPT-4o, Claude 3 Opus, Gemini 1.5 Pro).
3. The UI clarifies that:
   - prompts are **anonymous**,
   - **ads pay for API and server costs**,
   - no registration is required.
4. User enters a prompt. In the final concept:
   - **short/simple prompts** would typically choose a **banner mode** (min. ~5s),
   - **longer/complex prompts** would typically choose a **video/thinking mode** (min. ~10–20s).
5. While the LLM processes the prompt:
   - a **full-screen overlay** with the sponsorship ad is shown,
   - the UI clearly states:
     - that **this ad is currently financing the LLM/API cost** of the request,
     - that the prompt is forwarded anonymously via the VPP.
6. After the minimum display time is over and the LLM response is ready, the overlay disappears and the chat answer is shown.
7. The **chat history** lives only in the front-end session state and is lost when the tab/page is closed or reloaded.

### 3.2. Privacy / VPP idea

- No user accounts, no mandatory personal data.
- The server does **not** store chat history in this prototype.
- The service positions itself explicitly as a **Virtual Privacy Prompt (VPP)**:
  - acting like a VPN, but for prompts,
  - decoupling the user identity from the underlying LLM provider as much as possible (within realistic technical and provider constraints),
  - treating each session as ephemeral and **non-persistent**.

### 3.3. Sponsorship and transparency

- Ads are shown in a **blocking popup/overlay** while the user waits for the answer.
- The modal explains explicitly:
  - **“This sponsor is currently paying for your active model request.”**
  - Sponsorship revenue is intended to cover **LLM API usage and server costs** of the prompts.
- The cookie/consent banner and privacy policy explain that:
  - in this prototype, **no tracking profiles** are generated by me,
  - only technically necessary storage (e.g. consent choice via `localStorage`) is used,
  - any future integration of third-party ad networks would be transparently disclosed and, where required, subject to separate consent.

---

## 4. Current prototype features (UI & UX details)

This section summarizes the **actual implemented behavior** as additional evidence of the concept and its evolution.

### 4.1. Hero, model grid & layout

- Landing page with a centered title: **“We pay your prompt”**.
- Short explanation under the title:
  - “Choose a LLM model, send your prompt anonymously – and let sponsors pay the API and server costs while a short banner or video is shown.”
- **Model grid**:
  - four demo models (GPT-4o mini, GPT-4o, Claude 3 Opus, Gemini 1.5 Pro),
  - each with a dedicated **logo image**, label, tagline and short description,
  - selection state clearly indicated (“selected” badge),
  - on mobile: heading “Our sponsored models”.
- Responsive behavior:
  - on desktop: hero + model selection + first explanation are **above the fold**,
  - on mobile: the user is guided with arrows (“Models”, “How it works”) and smooth scrolling to model and explanation sections.

### 4.2. Chat UI – WhatsApp / ChatGPT-style conversation

- After selecting a model, a **chat card** appears:
  - heading “Your chat with [MODEL NAME]”,
  - explanation that the session is ephemeral and part of a **Virtual Privacy Prompt**.
- **Conversation behavior**:
  - user messages appear as bubbles on the **right**, white background,
  - model messages appear as bubbles on the **left**, dark background,
  - labels:
    - user: **“You”**,
    - model: actual selected model label (e.g. “GPT-4o mini”), not just “Assistant”.
  - this layout mimics familiar chat apps (WhatsApp) and modern AI UIs.

- **Conversation box logic**:
  - Initially, **no conversation box is shown** – only the input card is visible, slightly larger.
  - After the first sponsored answer arrives, a **“Conversation” box appears**:
    - titled “Conversation” with model name on the right,
    - scrollable area for past messages,
    - each model answer has a small **“Copy”** button to copy the answer text.

- **Centering behavior**:
  - when the first assistant message appears and the conversation box is rendered,
  - the page automatically scrolls and centers this box in the viewport:
    - on desktop: near the vertical center,
    - on mobile: slightly higher, so the input remains reachable.

### 4.3. Input box & Send button

- The input is a dedicated **“Your message”** card below the conversation box.
- Inside the card:
  - a `textarea` with extra padding to the right and bottom,
  - a **Send button** is positioned **inside the input area**, bottom-right, with clear spacing from the borders.
- The input area behaves like a modern LLM prompt bar (e.g. ChatGPT/Gemini):
  - when there is **no answer yet**, the textarea is taller (to visually anchor the interface),
  - after a conversation exists, it becomes more compact.
- Under the input, a line explains:
  - that no login or permanent history exists,
  - and that **while waiting for the answer, a short sponsor banner or video covers the API cost**.

### 4.4. Sponsorship overlay (Ad modal)

- For the prototype, a fixed sponsor is used to demonstrate the flow:
  - **“Rehflektiert”** – a fictional brand for a reflective running jacket.
  - A demo video file (`public/videos/rehflektiert.mp4`) is shown in the ad modal.
- Behavior:
  - When the user submits a prompt, the **AdModal opens immediately**.
  - The video auto-plays once; after it finishes, the answer appears.
  - The timer and the video are **synchronised**:
    - a countdown indicator shows how many seconds of sponsored time remain,
    - one second after the video ends, the modal is closed and the answer is inserted into the chat.
  - The background is not scrollable while the modal is open.
- Copy in the modal explains:
  - that **this sponsor is currently paying** for the prompt’s model request,
  - that in this prototype, no personal tracking is attached to that ad on the site.

### 4.5. Animated background & design

- The page includes a custom **background-lines** component:
  - a full-screen SVG with **smooth, curved lines**,
  - multi-color gradient based on a “difficulty spectrum” (from bright blues to warm reds/pinks),
  - subtle animation for a dynamic but minimalistic tech feel,
  - lines are adjusted so they do not distract from the main content.
- Design style:
  - **Black/white** core with subtle gray and gradient accents,
  - rounded cards (`rounded-2xl` / `rounded-3xl`),
  - soft borders and shadows to separate foreground content from the dark background.

### 4.6. Cookie banner & sponsor invite popup

- There is a **cookie/consent banner**:
  - styled in line with the rest of the site (dark, rounded, translucent),
  - explains:
    - that only technically necessary storage and the consent choice are kept,
    - that in the prototype no third-party tracking is used,
    - links to Impressum / Privacy pages.
  - choices are stored in `localStorage` under a dedicated key.
- There is also a **sponsor invite popup**:
  - appears (only once, state also stored in localStorage) after the user has interacted,
  - on desktop: as a small promo card in the corner,
  - on mobile: appears in the foreground after a short delay,
  - invites companies, universities, and other institutions to become sponsors and support this experiment,
  - provides a contact address to reach out for collaborations.

### 4.7. Sponsor strip & demo logos

- A **sponsor strip** section lists demo sponsors:
  - Promptify Labs  
  - BannerBoost  
  - AdStack AI  
  - CloudScale Hosting
- Each sponsor has a simple logo placed in small white badges that match the site’s design language, used as **fictional placeholders**.
- A caption explains that:
  - these sponsors (in the conceptual version) would **cover the running API and server costs**,
  - prompts remain anonymous and data is not sold.

---

## 5. Business model sketch, motivation & fairness

### 5.1. Motivation & personal anecdote

The idea came from an everyday reality:

- Modern development and study workflows depend more and more on **LLMs for coding, drafting, and thinking**.
- As a student working heavily in development, I frequently wait for LLM responses and often end up:
  - pulling out my phone,
  - scrolling through short-form content, where **every second video is already an ad**.

This raises the question:

> If I’m going to see ads while waiting anyway, why not show those ads **inside the prompt workflow** and let them **directly pay for the model usage**?

Instead of:
- paying for individual API calls out of pocket, or
- using “credits” in a semi-opaque system where waiting time is not really used,

this setup:
- uses the **wait time** (which naturally exists while the model “thinks”) to show concise, clearly labeled sponsor content,
- and uses that sponsorship revenue to **pay for the LLM calls**.

### 5.2. Comparison to “credits” and built-in ads

There are already ideas in the ecosystem such as:

- earning or buying **credits** and then spending them on prompts,
- or **LLM vendors integrating their own ads** into the answer.

The potential downsides of those approaches include:

- Ads blended into the **answer itself** can **bias** the output,
- credits systems do not necessarily leverage the **waiting time** for meaningful value,
- the user may not know clearly **who pays what, and when**.

In contrast, this concept:

- keeps the **answer itself ad-free** (no sponsor content inside the model’s text),
- moves the ad into a **separate, clearly marked overlay** during waiting time,
- links the sponsorship explicitly to **API and server costs for that specific prompt**,
- keeps the prompt and chat **anonymous** on the proxy side.

### 5.3. Cost vs. revenue – illustrative example

The following is a **rough, purely illustrative** sketch (not a guarantee):

| Item                                   | Example value (assumption)     |
|----------------------------------------|---------------------------------|
| Cost per 1k tokens (cheap model)       | e.g. 0.05–0.10 €               |
| Average tokens per simple prompt       | e.g. 500–1,000 tokens          |
| Approx. cost per simple prompt         | ~0.03–0.08 €                   |
| CPM (cost per 1,000 banner impressions)| e.g. 3–7 € (depends heavily)   |
| CPM (short video, high intent)         | e.g. 5–15 € (depends heavily)  |
| Prompts financed per 1,000 ad views    | potentially hundreds, depending on exact CPM and token usage |

The idea is **not** to build a high-margin ad machine, but to:

- cover **running costs** for:
  - students,
  - learners,
  - people who cannot or do not want to maintain their own paid LLM subscription,
- allow **democratic access** to stronger models in a transparent, sponsor-funded way.

Pooling many users through one API account can also be beneficial:

- higher volume can allow better rates in some pricing models,
- infrastructure can be tuned for typical workloads instead of many small, underused individual setups,
- from an energy perspective, a well-utilized shared service may be more efficient than many sporadically used, separate instances (though this depends on concrete infrastructure details).

Again: these are **conceptual arguments**, not formal claims about actual energy usage or guaranteed profitability.

---

## 6. Technical overview (short)

This is a high-level summary; details are in the code.

- **Stack**
  - Next.js (App Router, TypeScript)
  - React (client components where needed)
  - Tailwind CSS (v4 style via `@import "tailwindcss";`)
- **Key components**
  - `ModelGrid` – model selection (grid of sponsored models with logos).
  - `ChatUI` – main chat card:
    - chat with WhatsApp-style bubbles,
    - conversation box that appears only once a response exists,
    - input box with in-field Send button,
    - smooth scrolling & centering behavior.
  - `ModeSelector` – shows the currently chosen sponsoring mode and an explanatory hover tooltip.
  - `AdModal` – full-screen overlay with:
    - banner or video,
    - synchronized countdown,
    - blocking body scroll,
    - explanation that the ad pays for the prompt.
  - `SponsorStrip` – sponsors section with small logo badges and an arrow to the explanation section.
  - `HowItWorks` (and sub-sections) – segmented explanation of:
    - concept,
    - privacy,
    - sponsorship mechanics,
    - business model idea.
  - `CookieBanner` – explains cookies and consent, styled like the rest of the site.
  - `SponsorInvite` – small popup inviting institutions to sponsor the project.
  - `BackgroundLines` – animated SVG background with smooth, multi-color gradient lines.

- **Current backend behavior**
  - The current prototype uses a **simulated backend** answer (static text) to focus on the sponsoring flow, UI/UX, and privacy behavior.
  - The architecture is prepared to be wired to a **server-side proxy** for real LLM APIs (OpenAI, Anthropic, Google, etc.).
  - The idea is that the proxy:
    - accepts prompts from the front end,
    - uses sponsorship revenue to pay for API usage,
    - forwards prompts and returns responses **without creating persistent per-user histories**.

---

## 7. Intellectual property, naming & legal notes

- The following elements are part of this documented concept:
  - The name **“We pay your prompt”** for an ad-funded prompt service.
  - The term **“Virtual Privacy Prompt (VPP)”** as a prompt-proxy analogy to VPNs.
  - The explicit linking of:
    - ad overlays during wait time,
    - to transparent financing of LLM API and server costs,
    - combined with anonymous, session-only chat handling.

- This repository, including the UI/UX details, explanatory texts, and file structure, is published to document:
  - the existence of this idea,
  - its implementation details,
  - and its evolution over time.

> **Non-legal note:**  
> Nothing in this repository is legal advice.  
> For formal protection (e.g. patents, trademarks, etc.) and assessments of prior art, independent legal counsel is required.

---

## 8. Copyright & license

### 8.1. Copyright (code and content)

**Copyright (c) 2025 Mario von Bassen. All rights reserved.**

- All source code in this repository is **copyrighted**.
- All textual content (UI copy, README, component descriptions, etc.) is **copyrighted**.
- The structure of the application, UX flow, and visual design are part of this creative work.

### 8.2. No open-source license

- This repository is **not** licensed under MIT, Apache, GPL, or any other open-source license.
- **You are *not* granted permission to:**
  - copy, modify, distribute, or reuse the code,
  - reuse the design or branding,
  - deploy derivative commercial services based directly on this codebase,
  - incorporate this code into your own products or libraries.

Any reuse, copying, or commercial exploitation of the code or design elements requires **explicit written permission** from the author.

You are welcome to:

- **read** the code,
- **inspect** the structure and concept,
- **reference** this repository as prior work or inspiration (with proper attribution),

but not to reuse or redistribute the implementation itself.

---
