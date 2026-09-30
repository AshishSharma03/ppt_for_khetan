# Khetan × Effred — Interactive React Presentation

An 11-chapter, Hinglish client presentation based on the supplied PowerPoint. Includes animated ecosystem, interactive admin dashboard, QR enquiry journey, WhatsApp-style conversation, content distribution, business email, website modules, analytics, scripted chatbot, and system overview.

## Run

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use **Chapters**, the bottom arrows, or keyboard **← / →**. The top-right expand icon enters fullscreen. **Auto play** advances every 18 seconds and stops at the final chapter.

## Build and verify

```sh
npm run build
npm run preview
```

With the dev server running on port 5173:

```sh
npx playwright install chromium
npx playwright test
```

## Presentation scope

- All numbers, people, addresses and communication previews are illustrative. No backend, tracking, message sending, AI service or external publishing is connected.
- Enquiry details remain in the current demo component only and are never submitted to a server. QR scanning is simulated with a button; the QR graphic is illustrative.
- The original deck's integration conditions are retained: WhatsApp Business capabilities/templates and consent, email provider limits and consent, supported publishing channels, and approved chatbot content.
- Khetan Ajeya uses the supplied original `public/ajeya-original-logo.png`. The teal, charcoal and white theme is derived from `public/ajeya-catalogue.pdf`. Effred remains a presentation wordmark. Platform icons and WhatsApp styling retain their recognizable colours.
- Fonts load from Google Fonts with local sans-serif fallbacks. Layout is responsive and respects reduced-motion preferences.
- Original PowerPoint remains unchanged.

Main implementation: `src/main.jsx`; visual styling: `src/style.css`.

## Workspace management and security proposal

Dashboard Content now lists actual demo articles/products/updates with search, editable title/body/status, preview and local save. Dashboard Media includes catalogue thumbnails, filters, selected-image preview, a watermark overlay toggle and planned-access selection. Edits/settings survive workspace tab changes but reset when the dashboard chapter unmounts.

The Security tab and Complete System chapter explain proposed media controls, copy deterrence, attack mitigation, team permissions and backups. These are implementation plans, not deployed services. The watermark is a visual overlay demonstration; the public source files remain accessible. No claim of preventing all copying or attacks is made. Components: `src/WorkspacePanels.jsx` and `src/workspace.css`.

## Interactive client previews

- Content Automation starts with an animated, editable blog draft. Publish to see the website article, then select LinkedIn, Facebook, Instagram or Email to preview the edited title and story. Social likes, saves and comments are local demo interactions. Catalogue buttons open the supplied PDF.
- Business Email: select Architect, Dealer, Builder or Customer and choose Introduction, Greeting, Lead acknowledgement or Follow-up. All 16 combinations personalize the subject, message and recipient. Scheduling state is tracked separately per role/template during the current visit to the chapter.
- Workspace: open Leads, search by name/role/email/city, and select a record to view email, masked phone, location, company, product interest, source and consent context. All contacts are fictional examples using reserved email domains.
- These previews are implemented in `src/ClientPreviews.jsx` and `src/previews.css`. The post artwork renders the supplied catalogue's second page.
- Email templates have four distinct visual layouts and thumbnail selectors: editorial product introduction, welcome card, enquiry receipt, and follow-up checklist. `src/EmailDesign.jsx` contains these layouts.
- The assistant offers persistent main options, product sub-options, catalogue links, company location and a validated local callback form. Restart clears the current guided conversation.
- The assistant language selector supports English and Hindi, including product options, location labels, callback fields and confirmations. Switching language preserves the selected step and typed form details; the choice persists for the current browser tab session.
- Website previews include a filterable media gallery with an accessible image dialog, and a company location card. Address/email are transcribed from catalogue page 20; the map graphic is explicitly illustrative, and the Google Maps link performs an address search.
- Blog publishing, guided assistance, gallery and location demos are in `src/GuidedExperiences.jsx`, styled by `src/guided.css`.
