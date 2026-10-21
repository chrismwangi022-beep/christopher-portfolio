# Asset Audit Report - AI-Powered Marketing & Social Media Automation

Prepared for: Christopher Mwangi (Technical Business Analyst portfolio, Aimsoft application)
Source archive: `AI-marketing-assets.zip` (46 image files)

## 1. Method and coverage

- The archive was extracted (its Windows-style backslash paths were normalised) and every image was opened and read individually; text was transcribed from the images, not from filenames. Large posters (3375 px) were viewed at reduced size for reading only; **originals were copied byte-for-byte into the new archive**.
- 45 images were opened one at a time. **A37 was not opened separately because it is byte-identical (SHA-256) to A06**, which was inspected.
- Inspection failures: none. No file was unreadable.
- "Visible" statements are what the image shows. "Inferred" statements are marked as such. Image-generation methods, tools and workflow steps are **not** established by the images unless stated.

## 2. Inventory by folder

| Folder | Files |
|---|---|
| 01-campaigns | 18 |
| 02-product-advertisements | 15 |
| 03-ai-content-and-creative | 3 |
| 04-branded-poster-outputs | 3 |
| 06-tests-and-iterations | 3 |
| 07-unclassified | 4 |
| 05-distribution-evidence | 0 (not created: no image qualifies - see section 7) |

Folder choices:
- **03** holds the three n8n screenshots. They are orchestration evidence rather than AI-generated content; 03 was the closest listed category (the workflows are named "Creative Engine" and "Campaign Builder").
- **04** holds the three plain template renders (`july-referral-awareness-campaign`, `sme-business-protection`, `women-in-business`). Their clean, text-only look suggests a template render with the image slot unfilled, but the renderer itself is not shown, so this placement is an inference.
- **06** holds the three files whose original names start with `test_`.
- **07** holds items whose link to this project is not established: a liquor-shop banner and three MOONBEAM Lifting Solutions logo/banner files.

## 3. Brands and campaign themes

**Spread Capital Limited (24 files, including 3 template renders and 3 tests).** Themes:
1. **Referral / 4% commission for logbook loans** (largest theme): A16, A17, A18, A19, A26, A28, A29, A30, A32, A41, A43, A44, A45. Recurring headlines: "Your network can earn you more", "Earn 4% commission...", "Help a business grow. Earn a reward.", "Your contacts could earn you money". One poster names a programme, "Project Atlas" (A18). One is badged "Internal Campaign" (A30).
2. **Brand awareness:** A15 ("Empowering success, financing your growth").
3. **Customer Service Week 2026:** A21, A22, A23, A24, A25.
4. **Other products:** salary advance (A31), boda boda insurance (A36), SME business protection (A42), women-entrepreneur business loans (A46).
5. **Recruitment:** Relationship Officer hiring poster (A27).

**AUTOCENTS Spare parts (15 files).** Product ads on one template: water pump (3 variants), Mazda ball joint (5 variants plus 1 exact duplicate), K13 ball joint (1), LED dual-beam projector (5). Same CTA ("WhatsApp to order") and two phone numbers across all.

**Workflow screenshots (3 files).** n8n editor views of `02_Creative_Engine_v1` and `03_Campaign_Builder_v1`.

**Other:** Moh Vibes & Cheers Liquor banner (1); MOONBEAM Lifting Solutions logo and two banner drafts (3).

## 4. Duplicate and version relationships

- **Exact duplicate:** A06 = A37 (same SHA-256). Both retained.
- **Same copy, different imagery/crop:** water pump A01/A02/A03; Mazda ball joint A04-A08; projector A10-A14; Customer Service Week A22 vs A24 (hands visible vs hidden) and A23 vs A25 (footer tagline differs).
- **Same copy across formats/stages:** "Your contacts could earn you money" appears as a plain template render (A41), a test with a photo and agent panel (A44), and a finished story-format poster with a different scene and footer numbers (A28). "Help a business grow. Earn a reward." appears in A18, A32 and test A45. "Earn 4% commission" appears as A17/A29 and as the Prado posters A26/A30.
- **Likely revision:** A30 appears to correct A26 (the "agprovals" typo is fixed and the branch grid is replaced). This ordering is inferred from the content; no dates in the files confirm it.
- **Misleading filename stems:** `test_03Cate.jpeg` (A43) and `test_03Cate.png` (A44) are **different designs** despite the shared stem.
- **Moonbeam:** A34 (greyscale) and A35 (colour) are two states of one header banner; both are unfinished.

## 5. Quality problems observed

| Asset | Problem |
|---|---|
| A09 | Body spells the brand "AutoCentss"; smeared footer tagline |
| A01, A10, A12, A14 | AUTOCENTS wordmark is dark blue on dark navy (low contrast) |
| All AUTOCENTS ads | Gear glyph overlaps the "O" of the wordmark; A04-A07, A09 show a pale patch behind the logo |
| A05, A07 | Hard white/dark split with headline and sub-copy on different backgrounds |
| A15 | "GROWTH" partly hidden by the figure; low-contrast "CALL CAROL"; possible glyph defect in footer number (low confidence) |
| A19 | Two stacked sub-headlines repeat the offer; text over bright glare |
| A21, A22, A24 | Stray "(" before the first footer number |
| A23, A25 | Body text meets the circular photo edge; "LOAN APPLICATION" prop cropped |
| A26 | "agprovals" typo; "Bomet" missing "Branch"; clipped tagline |
| A27 | Soft/upscaled image; age-requirement line and tagline clipped |
| A28, A29, A32 | Same number shown for phone and WhatsApp; differs from the numbers on most posters (+254 709 877000 vs 0712 336 666 / 0715 179 599) |
| A28 | Invented-looking shop name and garbled signage in the scene |
| A32 | Subject and tablet text cropped at right edge |
| A41, A42, A46 | Right side of the canvas is blank (no hero image) |
| A34, A35 | Lower half or more of the canvas is blank |

## 6. Content and compliance cautions (for portfolio use)

- Personal data: staff names and phone numbers (Carol, Cate), branch numbers, emails. Redact or replace before publishing.
- Faces: the images show people; whether they are real photographs or AI-generated cannot be determined from the images. Confirm consent/usage rights.
- Third-party marks: Toyota (Prado), Mercedes-Benz, and many alcohol brands in A20.
- Claims: "approved in minutes" / "same day" (A31); "Nairobi's financial leader" (A15); affordability claims (A36); an age requirement (A27).
- Alcohol advertising (A20) and a separate brand (MOONBEAM) are unrelated to the Spread Capital/AUTOCENTS case study.

## 7. Workflow evidence summary

- **Visible:** two n8n workflows (sheet read -> If -> sub-workflow; payload normalisation -> render payload -> loop -> HTTP POST to a render API at a private address), one screenshot captured while the sheet node was still running (27 Jul, 16:41).
- **Not visible anywhere:** the Google Sheet contents; AI text/image generation nodes or outputs; any completed execution or API response; renderer code; any social post, WhatsApp chat, delivery receipt or analytics. Files named "WhatsApp Image ..." only show an image passed through WhatsApp.
- See `evidence-gaps.md` for the full list.

## 8. Naming notes

- All 46 destination filenames are unique (also case-insensitively and across folders), lowercase-hyphenated, and keep the original extensions (`.jpg`/`.jpeg`/`.png` preserved as-is).
- Variant descriptors (e.g. `plain-white`, `hands-cropped`) are used only where files share a headline.
