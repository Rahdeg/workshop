"use client";

import { useEffect, useState } from "react";

import { getSignedUrl } from "@/actions/sign";

export const SecureVideo = () => {
  const [secureUrl, setSecureUrl] = useState("");

  useEffect(() => {
    getSignedUrl()
      .then((response) => {
        setSecureUrl(response);
      })
  }, []);

  if (!secureUrl) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <iframe
      src={secureUrl}
      loading="lazy"
      className="border-0 absolute top-0 h-full w-full"
      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
      allowFullScreen={true}
    />
  );
};
