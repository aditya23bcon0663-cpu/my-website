import React from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$9",
    cadence: "/mo",
    desc: "For small projects and evaluation",
    features: ["1 project", "Basic support", "100GB transfer"],
    popular: false,
  },
  {
    name: "Business",
    price: "$49",
    cadence: "/mo",
    desc: "For growing teams and production workloads",
    features: ["10 projects", "Priority support", "1TB transfer"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    cadence: "",
    desc: "Custom solutions for large organizations",
    features: ["Unlimited projects", "Dedicated support", "Custom SLA"],
    popular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display font-bold">Pricing</h2>
          <p className="text-muted-foreground mt-2">Simple, predictable pricing that scales with you.</p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-2xl border border-border/50 bg-card/40 ${p.popular ? "ring-2 ring-primary/40 scale-102" : ""}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-medium">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
                {p.popular && <div className="text-xs text-primary font-semibold">Most popular</div>}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-display font-bold">{p.price}</div>
                  <div className="text-sm text-muted-foreground">{p.cadence}</div>
                </div>
              </div>

              <ul className="mb-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary/60 inline-block" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Button variant={p.popular ? "default" : "outline"} className="w-full">
                  {p.name === "Enterprise" ? "Contact Sales" : "Choose"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
