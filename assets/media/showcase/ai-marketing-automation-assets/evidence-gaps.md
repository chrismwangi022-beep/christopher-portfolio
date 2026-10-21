# Evidence Gaps - What the Images Cannot Establish

Each item below is **not demonstrated by the 46 images**. "Supported" means the image shows it directly; "Not supported" means a claim would go beyond the evidence.

| Claim | Status | What the images show | What would establish it |
|---|---|---|---|
| Campaign data is stored in a structured sheet | Partly supported | A Google Sheets "Get row(s)" node in `02_Creative_Engine_v1` (A38, A40) | A screenshot of the sheet with columns and sample rows; the node's configuration |
| Rows are filtered/validated before building | Not supported | An "If" node exists; its condition is not visible | The If node's parameters |
| AI-generated copy | Not supported | No model node, prompt, response or logs | The AI node/prompt and its output for a specific row |
| AI-generated imagery | Not supported | Some posters look AI-generated (style only) | Prompts, tool logs or a workflow node that generates images |
| Successful API calls (render service) | Not supported | A "Render Poster API" HTTP POST node pointing at a private-network address (A39) | Execution log with response status/body and the returned file |
| A completed workflow run | Not supported | One run caught in progress (A38: trigger succeeded, sheet read still running) | An execution view with all nodes green and output data |
| Posters in this archive were produced by the pipeline | Not supported | Posters and workflows coexist in the archive; no link between them | Execution output matched to a specific poster file; render logs |
| Branded rendering engine (HTML/CSS -> image) | Not supported | Template-only posters (A41, A42, A46) look like rendered layouts | Renderer code/config and its output files with timestamps |
| Quality checks as a process | Not supported | Visible defects in A09, A26, A27, A15; A30 looks like a corrected A26 | A checklist, validation step, review log or QA node |
| Actual automated distribution (WhatsApp, Facebook, etc.) | Not supported | Files named "WhatsApp Image ..." (A15-A37) | Chat/page screenshots with the posts, publishing-node logs, delivery receipts |
| Who sent or received the WhatsApp-named images | Not supported | Filenames only | Message context |
| Production deployment | Not supported | An n8n editor in a "Personal" workspace with an unpublished state indicator (0 / 1) | Deployment/hosting evidence, published workflow state, scheduler config |
| Measured time savings | Not supported | None | Before/after timings, run durations across many executions |
| Business results (leads, referrals, disbursements, sales) | Not supported | None | Analytics, CRM or sales data |
| Audience reach or engagement | Not supported | None | Platform insights |
| Which poster version was published | Not supported | Several near-identical variants | Publishing logs |
| Order of versions (e.g. A26 before A30) | Inferred only | Content differences | File metadata, version history |
| That AUTOCENTS ads were produced by the same pipeline | Not supported | Similar ad template across variants | Workflow/config for AUTOCENTS |
| Real vs AI-generated people in images | Not determinable | Appearance only | Source files and licences |
| MOONBEAM and the liquor banner belong to this project | Not supported | Different brands | Project context |

## Notes
- File timestamps inside the original ZIP (for example 27 Jul for the n8n screenshots and 17 Oct for the batch of WhatsApp files) reflect when files were saved or exported, not necessarily when they were created, sent or published.
- The private-network address in the render node suggests a locally hosted service; whether it ran successfully is unknown.
