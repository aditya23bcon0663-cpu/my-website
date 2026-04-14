import React, { useEffect, useState } from "react";
import { fetchStatus, NetworkStatus } from "@/lib/api";

const StatusPage = () => {
  const [status, setStatus] = useState<NetworkStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const data = await fetchStatus();
        setStatus(data);
      } catch {
        setStatus({ state: "Status temporarily unavailable" });
      } finally {
        setLoading(false);
      }
    };

    void loadStatus();
  }, []);

  return (
    <section className="py-16" id="status">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">System Status</h2>
          <p className="text-muted-foreground">
            {loading ? "Checking status..." : status?.state || "Status temporarily unavailable"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatusPage;
