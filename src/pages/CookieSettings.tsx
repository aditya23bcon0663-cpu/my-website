import { useState } from "react";

const CookieSettings = () => {
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: save settings
    alert("Settings saved (placeholder)");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-2xl font-display font-bold mb-4">Cookie Settings</h1>
        <p className="text-muted-foreground mb-6">Control which cookies you allow. These are placeholders for actual cookie controls.</p>

        <form onSubmit={handleSave} className="bg-card p-6 rounded-md grid gap-4">
          <label className="flex items-center justify-between">
            <span>Analytics cookies</span>
            <input type="checkbox" checked={analytics} onChange={() => setAnalytics((s) => !s)} />
          </label>

          <label className="flex items-center justify-between">
            <span>Marketing cookies</span>
            <input type="checkbox" checked={marketing} onChange={() => setMarketing((s) => !s)} />
          </label>

          <div>
            <button className="btn">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CookieSettings;
