'use client';

import { useEffect, ReactNode } from 'react';

interface ConversionEvent {
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  customParams?: Record<string, any>;
}

interface ConversionTrackingWrapperProps {
  children: ReactNode;
  trackPageView?: boolean;
  pageTitle?: string;
}

const ConversionTrackingWrapper = ({ 
  children, 
  trackPageView = true,
  pageTitle = 'Victor Cuellar'
}: ConversionTrackingWrapperProps) => {
  useEffect(() => {
    if (trackPageView && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.href,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString(),
      });
    }
  }, [trackPageView, pageTitle]);

  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      const milestones = [25, 50, 75, 90, 100];
      const milestone = milestones.find(m => scrollPercentage >= m && scrollPercentage < m + 5);

      if (milestone && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'scroll_depth', {
          scroll_percentage: milestone,
          page_title: pageTitle,
        });
      }
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScrollDepth, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [pageTitle]);

  useEffect(() => {
    const trackEngagementTime = () => {
      const engagementTime = Math.round((Date.now() - startTime) / 1000);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'user_engagement', {
          engagement_time_msec: engagementTime * 1000,
          page_title: pageTitle,
        });
      }
    };

    const startTime = Date.now();
    const engagementInterval = setInterval(trackEngagementTime, 30000);

    return () => {
      clearInterval(engagementInterval);
      trackEngagementTime();
    };
  }, [pageTitle]);

  useEffect(() => {
    const trackCTAClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaButton = target.closest('[data-cta]');
      
      if (ctaButton && typeof window !== 'undefined' && window.gtag) {
        const ctaType = ctaButton.getAttribute('data-cta');
        const ctaText = ctaButton.textContent?.trim();
        
        window.gtag('event', 'cta_click', {
          cta_type: ctaType,
          cta_text: ctaText,
          page_title: pageTitle,
        });
      }
    };

    document.addEventListener('click', trackCTAClicks);
    return () => document.removeEventListener('click', trackCTAClicks);
  }, [pageTitle]);

  return <>{children}</>;
};

export default ConversionTrackingWrapper;

export const trackConversionEvent = (event: ConversionEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.eventName, {
      event_category: event.eventCategory,
      event_label: event.eventLabel,
      value: event.eventValue,
      ...event.customParams,
    });
  }
};