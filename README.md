# MONOLOG Static Replica

A surgical static-site rebuild inspired by the MONOLOG reference site at `bymonolog.com`.

## What is included

- Full-screen dark hero with oversized MONOLOG wordmark treatment.
- Fixed navigation matching the reference layout: logo left, links centered, sound + project CTA right.
- Founder manifesto section with side metadata and large editorial typography.
- Client logo wall, gap/testimonial block, success stories, service list, process journey, FAQ, CTA, and footer.
- Generated/stock-safe image replacements instead of copied website screenshots.
- Responsive behavior for desktop and mobile.
- Micro-interactions: smooth scrolling, sticky/fixed nav behavior, FAQ disclosure panels, live Hanoi clock, section reveal hooks.

## Files

```txt
index.html   Main static page
styles.css   Complete layout, typography, responsive styles, textures
script.js    Small interactions and live clock
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Notes

This is not a scraped clone and does not include copyrighted media from the original site. The layout, sizing rhythm, typography scale, spacing, and section structure were rebuilt from the provided screen/video reference, with replacement media used where exact assets were unavailable.
