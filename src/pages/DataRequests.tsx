import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DataRequests = () => {
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder: send request to backend
    setSent(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-2xl font-display font-bold mb-4">Data Requests</h1>
        <p className="text-muted-foreground mb-6">Request a copy of your data or ask us to delete it. Submit the form below and our privacy team will respond.</p>

        {sent ? (
          <div className="bg-card p-6 rounded-md">Thanks — we received your request and will be in touch.</div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card p-6 rounded-md grid gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Your email</span>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-1">Request details</span>
              <Textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Describe the request (e.g. data export, deletion)" required />
            </label>

            <div>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default DataRequests;
