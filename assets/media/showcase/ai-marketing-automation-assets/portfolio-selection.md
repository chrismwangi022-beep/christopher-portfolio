# Portfolio Selection - Technical Business Analyst Case Study

Project: **AI-Powered Marketing & Social Media Automation Platform**

The selection is built around the chain you want to show - business process -> structured campaign inputs -> AI-assisted content -> branded creative output -> quality checks -> distribution. The images support some links in that chain and not others; each is labelled.

## Recommended images (7)

### 1. `03-ai-content-and-creative/workflow-n8n-02-creative-engine-sheet-to-campaign-builder-running.png` (A38)
- **Demonstrates:** Workflow orchestration driven by a spreadsheet: manual trigger -> Google Sheets "Get row(s)" -> If -> "Launch Campaign Builder" (Execute Workflow), captured while the sheet node was running (27 Jul, 16:41).
- **Why include:** It is the only image that shows a run starting and that the campaign data is read from a sheet - the structured-input link.
- **Limits:** The sheet contents, the If condition and the end of the run are not visible. It does not show that a poster was produced.

### 2. `03-ai-content-and-creative/workflow-n8n-03-campaign-builder-render-poster-api.png` (A39)
- **Demonstrates:** The Campaign Builder design: normalise campaign payload -> build render payload -> loop over items -> HTTP POST to a render-poster API.
- **Why include:** It shows how campaign rows are turned into render requests - the clearest evidence of a defined, repeatable process.
- **Limits:** Design view only; no execution, payload sample or response. The code inside the nodes is not shown.

### 3. `04-branded-poster-outputs/campaign-referral-contacts-earn-money-template-render.png` (A41)
- **Demonstrates:** A branded template output containing only the campaign copy, footer and logo (no photo).
- **Why include:** Together with A44 and A28 it shows one block of copy in three states. It is the "structured text -> branded layout" end of the chain.
- **Limits:** It is inferred (from appearance) to be a rendering-engine output; the renderer is not shown. The blank area makes it look unfinished, so present it as a stage, not a final.

### 4. `06-tests-and-iterations/test-referral-contacts-earn-money-call-cate-story.png` (A44)
- **Demonstrates:** The same copy as A41 with a photographic scene and an agent contact panel ("Call Cate").
- **Why include:** Evidence of iteration and personalisation of one message.
- **Limits:** Filename says "test"; whether the image or panel was generated automatically is not shown. Redact the agent's name and number.

### 5. `01-campaigns/campaign-referral-contacts-earn-money-story-format.jpeg` (A28)
- **Demonstrates:** A finished vertical (story-format) poster of the same copy.
- **Why include:** Shows the end product that the process is meant to produce, in a format suited to social media.
- **Limits:** Does not prove it was produced by the pipeline or published. It uses a different phone number from most posters (see defects).

### 6. `01-campaigns/campaign-referral-earn-4-percent-prado-branch-contacts.jpeg` (A26)
- **Demonstrates:** Structured data (15 branch contacts) laid out in a poster, and a visible QA defect ("agprovals", "Bomet" without "Branch").
- **Why include:** Useful for discussing data-to-layout mapping and why quality checks are needed.
- **Limits:** The images do not show how the branch data was supplied. Branch numbers should be redacted if the portfolio is public.

### 7. `01-campaigns/campaign-referral-earn-4-percent-prado-internal-campaign.jpeg` (A30)
- **Demonstrates:** An apparent revision of A26 with the typo corrected and an "Internal Campaign" badge.
- **Why include:** Pairs with A26 as a before/after for revision and audience targeting.
- **Limits:** That A30 was produced after A26 as a deliberate QA fix is inferred from content, not shown. Do not describe it as an automated quality check.

## Suggested narrative order
A38 -> A39 -> A41 -> A44 -> A28 -> A26 -> A30

## Evidence status for each link in the chain

| Chain link | Status | Best supporting image |
|---|---|---|
| Business process / campaign planning | Partly visible (workflow names, sheet-driven start) | A38 |
| Structured campaign inputs | Partly visible (Google Sheets node); schema **missing** | A38 |
| Payload normalisation / render request | Visible as a design (no run) | A39 |
| AI-assisted copy | **Missing** (no model node, prompt or output) | none |
| AI-assisted / generated imagery | Appearance only; method **missing** | A44, A28 (inferred) |
| Branded poster rendering | Inferred from outputs; renderer **missing** | A41 |
| Quality checks | **Missing** as a process; one revision pair suggests correction | A26 vs A30 (inferred) |
| Distribution (WhatsApp / social) | **Missing** | none |
| Measured outcomes / time saved | **Missing** | none |

## Images deliberately not selected
- AUTOCENTS product ads (A01-A14, A37): useful as a second client example, but they are near-duplicate variants and prove only finished design; A09 is a QA-defect example.
- Customer Service Week, hiring, salary advance and insurance posters: finished outputs without added process evidence; A27 and A31 carry compliance sensitivities.
- A40: duplicate of A38's workflow, in idle state; use it if you prefer a cleaner full-graph view.
- A20 (liquor banner) and A33-A35 (MOONBEAM): not part of this case study.

## Before publishing
- Redact phone numbers, emails and staff names; consider blurring faces if rights are unclear.
- Do not describe any image as proof of automated distribution, AI model use, deployment or time savings.
