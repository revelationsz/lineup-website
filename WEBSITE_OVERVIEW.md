# Lineup Website – Comprehensive Documentation

This document captures the **complete functional and visual specification** of the Lineup marketing website built in Next.js/React + Tailwind CSS.  Share it with any LLM or developer to recreate the project, apply a new visual theme, or migrate the copy elsewhere.

---

## 1. Global Design System

### 1.1 Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0a0a0a` | Body background (animated gradient) |
| `--foreground` | `#ededed` | Base text color |
| `--purple-primary` | `#8b5cf6` | Brand accent / gradients |
| `--purple-secondary` | `#a855f7` | Brand accent shade 2 |
| `--purple-dark` | `#6d28d9` | Brand accent shade 3 |
| `--glass-*` | rgba variants of purple | Glassmorphism backgrounds, borders & shadows |
| **Utility classes:** `.glass`, `.glass-card`, `.glass-button`, `.gradient-text`, `.glow`, `.floating`, `.animated-gradient`.

### 1.2 Typography & Layout
- Base font-family `'Inter', Arial, Helvetica, sans-serif`.
- Headings use Tailwind utility classes (`text-4xl`, `font-bold`, etc.)
- Layout grid widths: `max-w-4xl`, `max-w-6xl`, centered with `mx-auto`.
- Rounded corners: mostly `rounded-2xl / 3xl`.
- Motion: Framer-Motion on interactive components + subtle hover scales.
- Overall aesthetic: **Dark glassmorphism** with purple neon accents.

---

## 2. Page-by-Page Content Map

### 2.1 Home `/`
High-level marketing page with sections:
1. **Hero:** App value proposition & CTA buttons.
2. **Feature Grid:** Live Updates, Smart Reviews, Music & Vibe.
3. **Rewards Card:** Earn rewards for reviews.
4. **App Screenshot:** Static mock-up image.
5. **Final CTA:** "Ready to find the best bars tonight?" + App Store button.

### 2.2 About `/about`
Detailed overview of app mission & feature set.
- Header with gradient title & tagline.
- **Main description** (glass card with screenshot).
- **Key Features grid** (6 feature cards with icons).
- **Social Nightlife Experience** split section (Connect & Discover / Compete & Earn).
- **How Reviews Work** ordered list.
- **Privacy & Support** two-column grid.
- Final CTA with app-store button.

### 2.3 FAQ `/faq`
Frequently-asked-questions accordion (not shown here but present in code).

### 2.4 Partner Landing `/partner`
Explains the Launch-Partner Program and includes **StickyCTAForm** that appears as:  
- Desktop sticky card bottom-right.  
- Mobile bottom sheet.  
Form collects *name, venue, email, phone, best night* with validation and POSTs to `/api/partner`.

### 2.5 Email Confirmed `/email-confirmed`
Success message after account verification. Content blocks:
- Green check icon + "Email Confirmed!" heading.
- Instruction paragraph.
- **Action section**  
  • On **mobile** → Primary "Open Lineup App" button (deeplink `lineup://signin`, 2 sec fallback to App Store).  
  • Always → "Download on the App Store" badge.
- "What’s Next?" checklist card.

### 2.6 Forgot / Reset Password
Simple forms guiding password reset flow (see `/forgot-password`, `/reset-password`).

### 2.7 Contact `/contact`
Glass card form to message the team.

### 2.8 Legal Pages
Full text copied _verbatim_ below.

---

## 3. Terms of Service `/terms` (word-for-word)

```
Please read these terms carefully before using Lineup. By using our app, you agree to these terms.

1. Acceptance of Terms
Welcome to Lineup! By using our app, you agree to these Terms of Service ("Terms"). If you do not agree, you may not use the app.

2. Description of Service
Lineup is a platform that helps users discover bars, track line lengths, view current music, and navigate nightlife locations. The service includes features such as a bar list, map view, and user reviews.

3. Eligibility
You must be at least 21 years old to use this app. By using the app, you represent that you are of legal drinking age in your country.

4. User Accounts
You may be required to create an account to use some features. You are responsible for maintaining the security of your account and for all activities that occur under your account.

5. Prohibited Conduct
• Use the app for any unlawful or unauthorized purpose.  
• Submit false or misleading information.  
• Interfere with or disrupt the app's functionality.  
• Attempt to reverse engineer or hack the app.

6. Intellectual Property
All content, logos, and trademarks within the app are the property of Lineup and its licensors. You may not reproduce or distribute this content without written permission.

7. Disclaimer of Warranties
The app is provided "AS IS" without warranties of any kind. We do not guarantee the accuracy or availability of information provided.

8. Limitation of Liability
We are not liable for any damages resulting from your use of the app, including but not limited to loss of data, loss of revenue, or personal injury.

9. Termination
We reserve the right to suspend or terminate your access to the app at any time for violation of these Terms.

10. Governing Law
These Terms are governed by the laws of The United States. Any disputes will be resolved in the courts of Massachusetts, United States.

11. Changes to Terms
We reserve the right to update these Terms at any time. Continued use of the app after changes signifies acceptance.

12. Contact
If you have questions about these Terms, contact us at lineup.barapp@gmail.com
```

---

## 4. Privacy Policy `/privacy` (word-for-word)

```
1. Introduction
Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal data when you use Lineup.

2. Information We Collect
• Account Information: Name, email address, profile photo.  
• Google Login Information: If you sign in using Google, we store your Google login credentials as provided through Google Sign-In services.  
• Location Data: To show nearby bars and calculate distances.  
• Usage Data: Information about how you interact with the app.  
• Device Information: Device type, operating system, and app version.

3. How We Use Your Information
• Provide and improve app functionality.  
• Show relevant bar recommendations.  
• Send important updates or notifications.  
• Ensure compliance with our Terms of Service.

4. Sharing Your Information
We do not sell or rent your personal data to third parties. We may share your data with:  
• Service Providers: To assist in operating the app.  
• Legal Authorities: If required by law or to enforce our Terms.

5. Data Retention
We retain your data only as long as necessary to provide the app's services or comply with legal obligations.

6. Data Security
We use reasonable measures to protect your data. However, no method of transmission over the internet is 100% secure.

7. Your Rights
Depending on your location, you may have the right to:  
• Access, update, or delete your personal data.  
• Object to or restrict certain data processing.  
• Withdraw consent for data collection.

8. Third-Party Services
The app may link to third-party services (e.g., Google authentication). We store Google login credentials provided by Google Sign-In to facilitate your login and enhance your user experience. We are not responsible for their privacy practices.

9. Children's Privacy
The app is not intended for children under 18. We don't knowingly collect data from minors.

10. Changes to Privacy Policy
We may update this Privacy Policy from time to time. Continued use of the app signifies acceptance of the updated policy.

11. Contact
If you have questions about this Privacy Policy, contact us at lineup.barapp@gmail.com
```

---

## 5. Re-theming / Re-skin Instructions (for another LLM)
1. **Update global color tokens in `globals.css`** — retain the CSS variable names but swap hex values.  
2. Adjust `.gradient-text` linear-gradient stops to match new palette.  
3. Replace SVG icon stroke colors (`text-purple-400`) with new accent classes.  
4. Update images or mock-ups referenced via external URLs.  
5. Keep Tailwind class utilities; just extend the Tailwind config if extra colors/shadows are required.  
6. Review components using Framer-Motion for hover/entrance animations — timing & easing can be tweaked without structural changes.

---

> **End of Document** 