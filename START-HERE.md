# Dr. Rezwana Karim Snigdha — Website Handover Manual

This folder contains the **complete website** for Dr. Rezwana Karim Snigdha.
This guide takes you from these files to a **live website that you fully own and
can edit yourself** — with **no coding** and **no Netlify**. Everything used here
is **100% free with no usage limits.**

You will use three free services:

1. **GitHub** — stores the website's files (think of it as the master copy).
2. **Cloudflare Pages** — puts the website online and keeps it updated automatically. *(Free, unlimited — this replaces Netlify, which ran out of credits.)*
3. **Pages CMS** — a simple web form where you edit the text and photos. No code.

> ⏱️ One-time setup (Parts 1–2) takes about **20–30 minutes**. After that, editing
> the site (Part 3) takes **seconds**.

---

## Before you start

- Use a **laptop or desktop computer** (not a phone) for the one-time setup.
- Have a working **email address** ready.
- Keep this folder handy — you'll upload it in Part 1.

---

# PART 1 — Put the website on GitHub

### 1.1 Create a free GitHub account
1. Go to **https://github.com**
2. Click **Sign up** (top right).
3. Enter your email, create a password, pick a username (e.g. `rezwana-site`).
4. Verify your email when GitHub asks.

### 1.2 Install GitHub Desktop (the easy, no-typing way)
1. Go to **https://desktop.github.com** and click **Download**.
2. Install it and open it.
3. Click **Sign in to GitHub.com** and log in with the account from step 1.1.

### 1.3 Add this website folder and publish it
1. **Unzip** the file you received (right-click → *Extract All*). You'll get a
   folder named **`rezwana-karim-snigdha`**.
2. In GitHub Desktop, click the menu **File → Add Local Repository…**
3. Click **Choose…**, select the unzipped **`rezwana-karim-snigdha`** folder, click **Select Folder**.
4. GitHub Desktop will say *"This directory does not appear to be a Git repository."*
   Click the blue link **“create a repository”**.
5. On the next screen, leave everything as-is and click **Create Repository**.
6. Top of the window: click **Publish repository**.
7. **IMPORTANT:** *untick* **"Keep this code private"** if you want the site public
   (recommended for SEO), then click **Publish Repository**.

✅ Your website's files are now on GitHub.

---

# PART 2 — Put the website online with Cloudflare Pages (free)

### 2.1 Create a free Cloudflare account
1. Go to **https://dash.cloudflare.com/sign-up**
2. Enter your email + a password → **Sign up**. Verify your email.

### 2.2 Connect your GitHub website
1. In the Cloudflare dashboard, left menu → **Workers & Pages** (under "Build").
2. Click **Create** → choose the **Pages** tab → **Connect to Git**.
3. Click **Connect GitHub**, then **authorize** Cloudflare.
   - When asked which repositories, choose **Only select repositories** →
     pick **`rezwana-karim-snigdha`** → **Install & Authorize**.
   - (If GitHub emails you a verification code, type it in.)
4. Back in Cloudflare, select the **`rezwana-karim-snigdha`** repository → **Begin setup**.

### 2.3 Enter the build settings EXACTLY as below
On the "Set up builds and deployments" screen, type these in:

| Field | What to enter |
|---|---|
| **Project name** | `rezwana-karim-snigdha` (this becomes your web address) |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | `npm run build` |
| **Build output directory** | `_site` |

Then click **Environment variables (advanced) → Add variable** and add:

| Variable name | Value |
|---|---|
| `NODE_VERSION` | `20` |

### 2.4 Deploy
1. Click **Save and Deploy**.
2. Wait ~1 minute. You'll see **"Success!"** and a link like
   **`https://rezwana-karim-snigdha.pages.dev`** — **that is your live website.** 🎉

> 📝 Write down your `.pages.dev` address — you'll need it in the next step.

### 2.5 Tell the site its own address (for Google/SEO)
1. Open your live site once to confirm it works.
2. You'll set the correct address inside the editor in **Part 3** (the field is
   called **"Live site URL"**). Do that right after you finish Part 3.

---

# PART 3 — Editing the website (no code!)

You edit content through **Pages CMS** — a friendly web form. It saves your changes
to GitHub, and Cloudflare automatically updates the live site within ~1 minute.

### 3.1 Open the editor
1. Go to **https://app.pagescms.org**
2. Click **Sign in with GitHub** and authorize it.
3. Choose the **`rezwana-karim-snigdha`** repository.

### 3.2 Edit something
1. On the left you'll see sections: **Site, Hero & Contact**, **Research Areas**,
   **Publications**, **Talks & Keynotes**, **Projects**, **Recognition & Service**,
   **Teaching**, **Media & Public Engagement**, **Fieldwork Map**.
2. Click any section, change the text or upload a photo.
3. Click **Save** (top right). Done — the live site updates itself in about a minute.

### 3.3 Set the website address (do this once)
1. Open **Site, Hero & Contact**.
2. Find the field **"Live site URL"**.
3. Replace `https://your-site.pages.dev` with your real address from Part 2.4
   (e.g. `https://rezwana-karim-snigdha.pages.dev`). **Save.**

### ⚠️ One important editing rule
For the list fields — especially **"About — paragraphs"** and **"Long biography"** —
**add each paragraph as its own separate item.** Do **not** paste one giant block of
text containing many commas into a single box, or it may get split incorrectly.
One paragraph = one item. Click **"Add an entry"** for each new paragraph.

---

# PART 4 — How it all works together (good to understand)

```
You edit in Pages CMS  →  it saves to GitHub  →  Cloudflare sees the change
                                              →  rebuilds & updates the live site (~1 min)
```

- You never touch code. You only use the **Pages CMS** form.
- Nothing costs money. There are **no build credits** to run out of (the reason we
  left Netlify).
- To add photos: in Pages CMS, use any **image** field's upload button. Images are
  stored automatically.

---

# PART 5 — Optional but recommended

### A custom domain (e.g. rezwanakarimsnigdha.com)
A custom domain makes the address permanent and professional. You buy one (~$10/year)
from any registrar (Namecheap, GoDaddy, Cloudflare). Then in Cloudflare Pages →
your project → **Custom domains → Set up a domain** and follow the steps.
*If you skip this, the free `.pages.dev` address works perfectly fine.*

### Google Search Console (so she shows up in search)
1. Go to **https://search.google.com/search-console** and sign in.
2. Add a **URL prefix** property with your live address.
3. Verify using the **HTML tag** method (paste the tag Google gives you — ask a
   technical friend, or it can be added to the site's header).
4. Submit your sitemap: type `sitemap.xml` under **Sitemaps**.

---

# Troubleshooting

| Problem | Fix |
|---|---|
| Site didn't update after editing | Wait 1–2 minutes, then refresh. Cloudflare rebuilds on every save. |
| Build "failed" in Cloudflare | Re-check the settings in **2.3** exactly (build command `npm run build`, output `_site`, `NODE_VERSION` = `20`). |
| Can't see the repo in Cloudflare | You logged into Cloudflare/GitHub with different accounts, or didn't grant repo access. Redo **2.2**. |
| Pages CMS shows no sections | Make sure the file **`.pages.yml`** is in the repository (it's included in this folder). |
| Text split into weird short lines | See the editing rule in **3.3 / ⚠️** — keep paragraphs as separate list items. |

---

## Quick reference (save these links)

- **Live website:** your `…pages.dev` address (from Part 2.4)
- **Edit content:** https://app.pagescms.org
- **Files (master copy):** https://github.com → your `rezwana-karim-snigdha` repo
- **Hosting dashboard:** https://dash.cloudflare.com → Workers & Pages

You own all three accounts. No one else is needed to keep this site running. 💛
