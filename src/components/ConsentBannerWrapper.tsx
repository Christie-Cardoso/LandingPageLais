"use client";

import { ConsentBanner } from "./ConsentBanner";

/**
 * Wrapper para ConsentBanner
 * Necessário porque layout.tsx é Server Component
 * e ConsentBanner usa hooks (useState, useEffect)
 */
export const ConsentBannerWrapper = () => {
  return <ConsentBanner />;
};
