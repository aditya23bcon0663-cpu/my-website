import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bolt, ShieldCheck, Users, Briefcase } from "lucide-react";
import { fetchJobs, JobRole } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const fallbackJobs: JobRole[] = [
  {
    title: "Edge Infrastructure Engineer",
    type: "Full-time",
    techStack: "Go / Rust",
    description:
      "Build the edge stack that delivers sub-10ms tail latencies worldwide.",
  },
  {
    title: "AI Solutions Architect",
    type: "Full-time",
    techStack: "ML automation / Routing",
    description:
      "Architect ML-driven control planes to automate routing and traffic optimization.",
  },
  {
    title: "Global Operations Lead",
    type: "Full-time",
    techStack: "Operations / Reliability",
    description:
      "Lead regional rollouts and reliability programs as we expand our global footprint.",
  },
];

const Careers = () => {
  const [jobs, setJobs] = useState<JobRole[]>(fallbackJobs);
  const [selectedJob, setSelectedJob] = useState<JobRole | null>(null);

  const getCareerPhoto = (jobTitle: string) => {
    const lowerTitle = jobTitle.toLowerCase();

    if (lowerTitle.includes("edge")) {
      return "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80";
    }

    if (lowerTitle.includes("ai") || lowerTitle.includes("architect")) {
      return "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80";
    }

    return "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
  };

  const getJobDetails = (job: JobRole) => {
    const lowerTitle = job.title.toLowerCase();

    if (lowerTitle.includes("edge")) {
      return {
        responsibilities: [
          "Design low-latency routing paths for global traffic.",
          "Build resilient edge deployment pipelines and rollout guardrails.",
          "Collaborate with SRE and platform teams on uptime objectives.",
        ],
        requirements: [
          "Strong Go or Rust experience in production systems.",
          "Hands-on knowledge of networking fundamentals and observability.",
          "Experience with containerized or distributed infrastructure.",
        ],
      };
    }

    if (lowerTitle.includes("ai") || lowerTitle.includes("architect")) {
      return {
        responsibilities: [
          "Define ML-assisted routing and traffic optimization workflows.",
          "Create decision models with monitoring and safety constraints.",
          "Guide teams on architecture, reliability, and model operations.",
        ],
        requirements: [
          "Experience with ML systems in production environments.",
          "Strong API/system design and distributed architecture skills.",
          "Ability to translate business goals into technical solutions.",
        ],
      };
    }

    return {
      responsibilities: [
        "Lead execution for region expansion and operational readiness.",
        "Define incident, escalation, and reliability playbooks.",
        "Coordinate cross-functional teams to meet SLA targets.",
      ],
      requirements: [
        "Strong experience in operations or reliability leadership.",
        "Excellent communication and stakeholder management skills.",
        "Comfort working in high-ownership, fast-moving teams.",
      ],
    };
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        if (Array.isArray(data) && data.length > 0) {
          setJobs(data);
        }
      } catch {
        setJobs(fallbackJobs);
      }
    };

    void loadJobs();
  }, []);

  return (
    <section id="careers" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Join the Mission</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-4">Building the Future of Digital Networks</h2>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">We are everywhere</div>

            <div className="relative overflow-hidden rounded-2xl border border-border/40 mb-6">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
                alt="Aselea team collaboration"
                className="w-full h-52 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <p className="absolute bottom-4 left-4 md:left-6 text-white text-sm md:text-base font-medium">
                Build with a globally connected engineering and operations team.
              </p>
            </div>

            <p className="text-muted-foreground text-lg mb-6">
              Aselea is hiring — join us to build low-latency, globally distributed infrastructure. Below are sample open roles; apply or send a general application if you don't see an exact fit.
            </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            <div className="p-6 bg-card/40 rounded-lg">
              <h3 className="font-semibold mb-4">Core Values</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <Bolt className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Performance First</div>
                    <div className="text-sm text-muted-foreground">Optimize for latency, throughput and predictable behavior.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Radical Ownership</div>
                    <div className="text-sm text-muted-foreground">Ship boldly, own outcomes, and iterate on measurable results.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="font-medium">Zero-Trust Mindset</div>
                    <div className="text-sm text-muted-foreground">Security and correctness are baked into every design decision.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/40 rounded-lg">
              <h3 className="font-semibold mb-4">Perks & Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {['Remote-first', 'Equity', 'Gear stipend', 'Health & Wellness', 'Learning budget', 'Generous PTO'].map((p) => (
                  <span key={p} className="px-3 py-1 bg-background border border-border/20 rounded-full text-sm text-muted-foreground">{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-6">Open Roles</h3>

            <div className="grid grid-cols-1 gap-6">
              {jobs.map((job) => (
                <article key={job.title} className="flex flex-col md:flex-row items-start gap-4 p-5 bg-background/60 border border-border/30 rounded-lg hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 bg-gradient-to-br from-primary to-accent p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-xl border border-border/40 mb-4">
                      <img
                        loading="lazy"
                        src={getCareerPhoto(job.title)}
                        alt={`${job.title} role preview`}
                        className="w-full h-40 md:h-44 object-cover"
                      />
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{job.title}</h4>
                        <div className="text-sm text-muted-foreground mt-1">{job.techStack}</div>
                      </div>
                      <span className="text-sm text-muted-foreground">{job.type}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3">{job.description}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <Link to="/apply">
                        <Button size="sm" className="glow-border">Apply</Button>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSelectedJob(job)}
                        className="text-sm text-primary underline"
                      >
                        See details
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Dialog open={Boolean(selectedJob)} onOpenChange={(open) => !open && setSelectedJob(null)}>
            <DialogContent className="sm:max-w-2xl">
              {selectedJob && (
                <>
                  <DialogHeader>
                    <DialogTitle>{selectedJob.title}</DialogTitle>
                    <DialogDescription>
                      {selectedJob.type} | {selectedJob.techStack}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 text-left">
                    <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                      <h4 className="font-semibold mb-2">Role Overview</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{selectedJob.description}</p>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-border/50">
                      <img
                        loading="lazy"
                        src={getCareerPhoto(selectedJob.title)}
                        alt={`${selectedJob.title} detailed role image`}
                        className="w-full h-48 md:h-60 object-cover"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          {getJobDetails(selectedJob).responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-border/50 bg-card/50 p-4">
                        <h4 className="font-semibold mb-2">Basic Requirements</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          {getJobDetails(selectedJob).requirements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link to="/apply">
                        <Button size="sm" className="glow-border">Apply for this role</Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          <div className="mt-6 text-center">
            <Link to="/apply">
              <Button size="lg" className="glow-border">Apply Now</Button>
            </Link>
            <div className="mt-3 text-sm text-muted-foreground">
              Or email us at {" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=career@aselea.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                career@aselea.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
