import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useCanonicalUrl() {
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const origin = window.location.origin;
      const fullUrl = origin + router.asPath;
      setCanonicalUrl(fullUrl);
    }
  }, [router.asPath]);

  return canonicalUrl;
}
