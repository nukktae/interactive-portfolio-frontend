'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      try {
        const page = pathname || '/';
        const referrer = document.referrer || undefined;
        const language = navigator.language || undefined;
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || undefined;

        // Use IP-based geolocation only (no permission required)
        // Server will automatically geolocate based on IP address
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page,
            referrer,
            language,
            timezone,
            // No latitude/longitude - server will use IP-based geolocation
          }),
        });
      } catch (error) {
        // Silently fail - don't interrupt user experience
        console.error('Failed to track page view:', error);
      }
    };

    // Small delay to ensure page is fully loaded
    const timeoutId = setTimeout(trackPageView, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
}

