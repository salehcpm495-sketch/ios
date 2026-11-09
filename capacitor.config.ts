import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.salih.iraqiai',
  appName: 'عراقي AI',
  webDir: 'www',
  server: {
    // Loads the currently published Lovable website inside the iOS app.
    // An internet connection is required for the website content.
    url: 'https://logic-art-nexus.lovable.app/',
    cleartext: false,
    allowNavigation: ['logic-art-nexus.lovable.app']
  }
};

export default config;
