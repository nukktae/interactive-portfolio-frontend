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

        // Try to get browser geolocation (non-blocking, won't ask permission if denied)
        let latitude: number | undefined;
        let longitude: number | undefined;

        if (navigator.geolocation) {
          try {
            // Use getCurrentPosition with a timeout to avoid blocking
            const position = await new Promise<GeolocationPosition>((resolve, reject) => {
              const timeout = setTimeout(() => reject(new Error('Timeout')), 2000);
              navigator.geolocation.getCurrentPosition(
                (pos) => {
                  clearTimeout(timeout);
                  resolve(pos);
                },
                (err) => {
                  clearTimeout(timeout);
                  reject(err);
                },
                { timeout: 2000, maximumAge: 60000 }
              );
            });
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
          } catch (err) {
            // Silently fail - geolocation permission denied or unavailable
            // Server will fall back to IP-based geolocation
          }
        }

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
            latitude,
            longitude,
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

