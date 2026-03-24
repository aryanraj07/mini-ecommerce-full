"use client";

import { useAuth } from "@/hooks/useAuth";
import { TRPCClientError } from "@trpc/client";
import React, { useEffect, useState } from "react";

const AUthProvider = ({ children }: { children: React.ReactNode }) => {
  const { refetch, refresh } = useAuth();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function init() {
      alert("He");
      const res = await refetch();
      if (res?.data?.user) {
        setIsReady(true);
        return;
      }
      if (
        res.error instanceof TRPCClientError &&
        res.error?.data?.httpStatus === 401
      ) {
        try {
          await refresh();
          await refetch();
        } catch {}
      }
    }
    init();
  }, []);
  if (!isReady) {
    return null;
  }
  return <>{children}</>;
};

export default AUthProvider;
