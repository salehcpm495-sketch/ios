# عراقي AI — iOS wrapper

This project wraps the published Lovable website in a Capacitor iOS app. The app loads:

`https://logic-art-nexus.lovable.app/`

An internet connection is required for the website content. The exported HTML is kept in `www/` as the local web fallback, but the live site URL is configured in `capacitor.config.ts`.

## Build an unsigned IPA using GitHub Actions

1. Create a new GitHub repository (for example `iraqi-ai-ios`).
2. Upload all files in this folder to the repository root.
3. Open the repository's **Actions** tab and enable Actions if GitHub asks.
4. Select **Build unsigned iOS IPA for Sideloadly** and press **Run workflow**.
5. When the workflow completes, open its run, scroll to **Artifacts**, and download `Iraqi-AI-unsigned-IPA`.
6. Extract the downloaded artifact ZIP to get `Iraqi-AI-unsigned.ipa`.
7. Use Sideloadly on Windows to sign/install the IPA to the iPad with the owner's Apple ID.

## Important

- This workflow creates an **unsigned** IPA. Sideloadly is expected to sign it during installation using the Apple ID entered by the device owner.
- A free Apple ID sideload normally needs refreshing about every 7 days. Paid developer accounts have different limits.
- Sideloadly's Windows app requires the iPad to be connected to the Windows PC by USB for the initial install.
- The app is a web wrapper, not a fully offline/native rewrite. Changes to the Lovable website appear in the app while it is online.
- If the workflow fails, share the failed Actions log (especially the first red error) so the build can be corrected.
