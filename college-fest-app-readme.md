# Tatvam 2026 — Fest Management Platform

> The all-in-one registration, commerce, and operations platform behind **Tatvam 2026**, the cultural festival of **JSS Medical College, Mysuru**. Built to handle everything from delegate sign-ups to venue check-ins — at scale, on any device.

🎭 50+ Cultural & Sports Events &nbsp;|&nbsp; 👕 Exclusive Merchandise &nbsp;|&nbsp; 📱 Works on Every Phone &nbsp;|&nbsp; ⚡ Blazing Fast

---

## ✨ What Makes This Platform Special

### For Participants

#### 🎫 Delegate Registration — Three Tiers, One Seamless Flow
Participants choose the tier that fits their experience: **Parampara** (₹67), **Pratishta** (₹249), or **Anushasan** (₹549) — each unlocking different access across the fest. Register solo or as a team of up to 25. Host college students register free with the premium kit.

- College name autocomplete backed by 590+ recognized medical colleges
- Real-time duplicate detection — no two people can claim the same email, phone, or college ID
- College ID upload that works even on slow mobile networks
- Auto-saved drafts — close the tab, come back later, pick up where you left off

#### 🎪 Event Registration — Shop for Events Like You Shop Online
Browse 50+ events across music, dance, drama, art, literary, quiz, and sports. Add as many as you want to your cart, enter your team's delegate IDs, and check out — once. The platform pulls everyone's details instantly so you never type the same thing twice.

- Real-time delegate ID verification during checkout
- Host college students get most cultural events free (only 11 flagship events are paid)
- Sports teams are validated for college homogeneity — mixed teams are caught before checkout
- Separate carts for cultural events and sports, each with their own payment flow

#### 👕 Merch Store — Wear the Fest
Jerseys (₹425), hoodies (₹850), and varsity jackets (₹950) with unique designs. A completely independent cart — no delegate ID required. Just your style decisions.

- 6 T-shirt designs, 8 hoodie designs, 2 varsity jacket variants
- Varsity jackets include custom printed name, front letter, and batch year
- Size charts built into every product page

#### 🔍 Registration Status Lookup
Forgot your delegate ID? Look it up with just your email. Want to see what events your team is in? One search shows everything. Share your delegate ID to WhatsApp in a single tap.

#### 🎫 Digital Pass
Once payment is verified, each delegate gets a personalized digital pass with their photo, tier badge, and a scannable QR code. Flash it at the venue entrance — staff scan it and you're in. Zero paper, zero hassle.

#### 📸 Gallery & 🏆 Results
Relive the fest through the public photo gallery with lightbox viewing and event filtering. Track all results on the live podium page — complete with event-wise rankings across cultural and sports categories.

#### 📅 Public Schedule & 📞 Contact Hub
A public-facing schedule page shows what's happening and when. A dedicated contact page puts organiser phone numbers, WhatsApp group links, important dates, and venue maps in one place.

---

### For Organisers

#### 📊 Live Dashboard — Everything at a Glance
Open the admin dashboard and see the entire fest in one view. Total delegates, pending payments, revenue by tier, top colleges, top events, merch sales, registration trends, and a conversion funnel showing exactly where people drop off.

- Revenue breakdown by delegate tier
- Merchandise sales by item — know which designs are selling out
- Host college vs external delegate split
- New registrations today

#### ✅ Payment Verification — Fast, Foolproof, Reversible
Every registration and order lands in a unified queue. Approve or reject with one click — rejections require confirmation (no accidental clicks). Undo any decision. Verified delegates automatically receive a confirmation email with a direct link to their digital pass.

- Bulk verify up to 100 at once
- Payment-verified emails with one-click pass access

#### 🔄 Google Sheets Auto-Sync
Every registration, event entry, and merch order is automatically mirrored to Google Sheets — delegates go to one tab, cultural registrations to another, sports to a third, and merch to a fourth. Payment status changes update existing rows in-place (no duplicates). A live sync-status dashboard lets you monitor every sync. Failed syncs are retried automatically.

- Continuous background sync — no manual exports needed
- Optional backup spreadsheets for redundancy
- Dashboard to monitor sync health in real time
- Automated daily retries for any transient failures

#### 🛑 Registration Toggles — Independent Kill Switches
Close host-college registration but keep external open. Shut down merch while events stay live. Emergency close-all in one click. Each toggle accepts a custom message displayed on the public page, plus a built-in deadline countdown.

#### 🏷️ Smart College Name System
Participants type college names free-form. The platform normalizes them against a 590+ canonical college list. Unmatched names enter a review queue where admins can approve, map, or dismiss suggestions — no database edits required.

#### 📢 Announcements & Alerts
Push site-wide banners — info, warning, or urgent — from the admin panel. Participants see them on every page and can dismiss individually. Perfect for deadline reminders, schedule changes, or weather alerts.

#### 🤝 Sponsor Management
Add sponsor logos with tier-based ordering (platinum → gold → silver → bronze). Displayed automatically in a public sponsor strip. Click tracking tells you exactly how many people tapped each sponsor's link.

#### 🏅 Event Results & Certificates
Mark events as completed and set 1st, 2nd, 3rd positions. Results go live on the public winners page automatically. Generate professional PDF certificates for all participants — or email them in bulk with personalized HTML. Each certificate includes the delegate's name, college, event, position, and fest branding.

#### 🔎 Global Search
Press Cmd+K (Ctrl+K) anywhere in the admin panel to search across delegates, registrations, and merch orders instantly. Jump to any detail page from the search results.

#### 🎥 Photo Gallery Management
Upload event photos, link them to specific events, add captions. Publish or unpublish individually. Supports bulk import and batch drive URL assignment.

#### 👮 Venue Check-in
Built-in QR code scanner — scan a delegate's digital pass and see their photo, name, college, tier, and payment status instantly. Manual ID lookup available as fallback. Every check-in is timestamped and logged.

#### 📅 Schedule Editor
Bulk-edit event schedules — venue, date, time — inline from a single table. Changes save instantly and reflect on the public schedule page.

#### 🎨 Fest Configuration — No-Code Branding
Edit the fest name, dates, branding colors, delegate tier names and prices, organiser contacts, WhatsApp group links, FAQs — all from a form in the admin panel. No code changes, no redeploys. Changes take effect within minutes.

#### 📥 Data Export
Export delegate lists and event registrations to Excel (XLSX) with one click. Perfect for printing ID cards, sharing with event heads, or offline record-keeping.

#### ✉️ Reliable Email Delivery
Every registration confirmation, payment verification, and certificate goes out reliably — the system automatically retries failed sends and uses a backup email provider if the primary one is unavailable. A dedicated email queue with automated cron processing ensures no delegate misses their confirmation.

#### 🪄 Onboarding Wizard
Setting up for a new college? A 6-step wizard walks you through fest name, dates, tiers, branding, and contacts. The platform is ready to launch in minutes, not days.

#### 🧪 System Health & Diagnostics
A dedicated health dashboard shows sync backlogs, collection sizes, and payment breakdowns. One-click reconciliation fixes any stats discrepancy. A full audit log tracks every admin action — who did what and when.

---

## 🛡️ Built Right

**Every payment-status update is consistent** — the payment record and stats counters always agree. No drift, no manual fixes needed.

**Images are compressed before upload** — college IDs and payment screenshots are automatically optimized so they never time out on slow networks, even from older phones.

**Registration drafts auto-save** — close the tab mid-form and pick up where you left off.

**Confetti fires on every success.** Because registering for a fest should feel good.

---

## 🧩 White-Label Ready

While built for Tatvam 2026 at JSSMC, the entire platform is **config-driven**. Change the fest name, dates, host college, tier names, pricing, branding, and contacts from a single config file — or from the admin panel without touching code. The onboarding wizard walks you through setup in 6 steps. The college name system ships with 590+ canonical Indian medical colleges, fully extensible.

---

*Built with ❤️ for the organising team of Tatvam 2026. Private repository — not for redistribution.*
