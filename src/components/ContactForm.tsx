import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";
import { submitContact } from "@/lib/api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(email)) e.email = "Enter a valid email";
    if (!mobile.trim()) e.mobile = "Phone is required";
    if (!message.trim()) e.message = "Message is required";
    else if (message.trim().length < 10) e.message = "Message must be at least 10 characters";
    if (mobile.trim()) {
      const phoneRegex = /^[+0-9()\s\-\.]{7,20}$/;
      if (!phoneRegex.test(mobile)) e.mobile = "Enter a valid phone number";
    }
    return e;
  };

  const handleSubmit = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    setSuccess("");
    setSubmitError("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      await submitContact({
        name: name.trim(),
        email: email.trim(),
        phone: mobile.trim(),
        message: message.trim(),
      });
      setSuccess("Thanks — we'll be in touch soon.");
      setName("");
      setEmail("");
      setMobile("");
      setMessage("");
      setErrors({});
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Could not send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-32 pb-16 relative mesh-section">
      <span className="mesh-blob mesh-blob-cyan" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-violet" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
          <aside className="glass-card-hover p-6 lg:col-span-2">
            <p className="text-primary text-xs uppercase tracking-widest font-semibold">Get in Touch</p>
            <h3 className="text-3xl font-display font-bold mt-2 mb-3">Let's Build Something Powerful</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Share your goal, timeline, and technical scope. Our team will get back with a practical action plan.
            </p>

            <div className="relative overflow-hidden rounded-xl border border-border/40 mb-5">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Client and delivery team discussion"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-border/50 bg-card/45 px-4 py-3 flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                  <p className="text-sm">contact@aselea.com</p>
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/45 px-4 py-3 flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Phone</p>
                  <p className="text-sm">+1 555 123 4567</p>
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/45 px-4 py-3 flex items-start gap-3">
                <Clock3 className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Response Window</p>
                  <p className="text-sm">Within 24 business hours</p>
                </div>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/45 px-4 py-3 flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Coverage</p>
                  <p className="text-sm">Serving clients globally</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="glass-card-hover p-6 md:p-8 lg:col-span-3">
            <h4 className="text-2xl font-display font-semibold mb-2">Contact Us</h4>
            <p className="text-sm text-muted-foreground mb-6">Have questions? Send us a message and we will reply shortly.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <Label>Name</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-1" />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="mt-1" />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <Label>Phone</Label>
                  <Input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+1 555 123 4567" className="mt-1" />
                  {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div className="mt-4">
                <Label>Message</Label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project, timeline, and target users." className="mt-1 min-h-[130px]" />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>

              <div className="mt-6 text-center md:text-left">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 border border-primary/30 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
                {success && <p className="text-sm text-green-500 mt-3">{success}</p>}
                {submitError && <p className="text-sm text-destructive mt-3">{submitError}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
