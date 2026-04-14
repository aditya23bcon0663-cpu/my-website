import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { submitApplication } from "@/lib/api";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [position, setPosition] = useState("");
  const [cover, setCover] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const submit = async (e?: React.FormEvent) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name.trim() || !email.trim() || !mobile.trim()) {
      setError("Please fill in Full name, Email and Mobile number before sending.");
      return;
    }
    try {
      setLoading(true);
      const result = await submitApplication({
        name,
        email,
        mobile,
        position,
        cover,
        resumeFile,
      });
      if (result.success) {
        setSuccess("Application sent successfully.");
        // clear form
        setName("");
        setEmail("");
        setMobile("");
        setPosition("");
        setCover("");
        setResumeFile(null);
        setPreviewUrl(null);
      } else {
        setError(result.error || "Failed to send application");
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Network error while sending application");
    } finally {
      setLoading(false);
    }
  };

  

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-3xl mx-auto pt-24 md:pt-28 pb-16 px-6">
        <h1 className="text-3xl font-bold">Apply to Aselea</h1>
        <p className="text-muted-foreground mt-2">Fill the form below and we'll get back to you. You can also attach your CV in the email that opens after submission.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded" placeholder="Your name" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded" placeholder="you@example.com" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Mobile number</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded" placeholder="+1 555 555 5555" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Position</label>
            <select value={position} onChange={(e) => setPosition(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded">
              <option value="">Select a position</option>
              <optgroup label="Engineering & Infrastructure">
                <option>Edge Infrastructure Engineer (Go/Rust)</option>
                <option>AI Solutions Architect (ML Automation)</option>
                <option>Android App Developer (Kotlin/Java)</option>
                <option>iOS App Developer (Swift/SwiftUI)</option>
                <option>Flutter Developer</option>
                <option>React Native Developer</option>
                <option>Cross-Platform Developer</option>
                <option>Node.js Developer</option>
                <option>PHP Developer</option>
                <option>Python Web Developer</option>
                <option>AngularJS Developer</option>
                <option>MEAN Stack Developer</option>
                <option>Frontend Engineer (React/Next.js)</option>
              </optgroup>
              <optgroup label="Product & Design">
                <option>UI/UX Designer</option>
                <option>Wearable App Specialist</option>
                <option>Data Analyst</option>
              </optgroup>
              <optgroup label="Digital Marketing & Growth">
                <option>SEO Specialist</option>
                <option>PPC Specialist</option>
                <option>Facebook Marketing Specialist</option>
                <option>LinkedIn Marketing Specialist</option>
                <option>SMO (Social Media Optimization) Expert</option>
                <option>Email Marketing Specialist</option>
              </optgroup>
              <optgroup label="Operations & Management">
                <option>Global Operations Lead</option>
                <option>HR & Operations Manager</option>
                <option>Technical Support Specialist (24/7 SLAs)</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Resume</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const f = e.target.files && e.target.files[0] ? e.target.files[0] : null;
                // revoke previous preview
                if (previewUrl) {
                  URL.revokeObjectURL(previewUrl);
                  setPreviewUrl(null);
                }
                setResumeFile(f);
                if (f) {
                  try {
                    const url = URL.createObjectURL(f);
                    setPreviewUrl(url);
                  } catch (err) {
                    setPreviewUrl(null);
                  }
                }
              }}
            />
            {resumeFile && (
              <p className="text-sm text-green-600 mt-2">Uploaded: {resumeFile.name}</p>
            )}
            {previewUrl && resumeFile && (
              <div className="mt-3">
                <div className="flex items-start gap-3">
                  <div className="w-20 h-20 flex items-center justify-center border rounded overflow-hidden bg-white">
                    {resumeFile.type === "application/pdf" ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-red-600">
                        <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <text x="6" y="18" fill="currentColor" fontSize="6">PDF</text>
                      </svg>
                    ) : resumeFile.type.startsWith("image/") ? (
                      <img src={previewUrl} alt={resumeFile.name} className="w-full h-full object-cover" />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-gray-600">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    {resumeFile.type === "application/pdf" ? (
                      <object data={previewUrl} type="application/pdf" width="100%" height="300"> 
                        <a href={previewUrl} target="_blank" rel="noreferrer">Open PDF</a>
                      </object>
                    ) : resumeFile.type.startsWith("image/") ? (
                      <img src={previewUrl} alt={resumeFile.name} className="mt-2 max-h-60 w-full object-contain border" />
                    ) : (
                      <p className="mt-2 text-sm">Selected file: <a href={previewUrl} target="_blank" rel="noreferrer" className="underline">{resumeFile.name}</a></p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Cover message (optional)</label>
            <textarea value={cover} onChange={(e) => setCover(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded" rows={6} placeholder="Introduce yourself and highlight relevant experience." />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="submit" onClick={(e) => submit(e)} className="w-full sm:w-auto px-4 py-2 bg-accent text-white rounded" disabled={loading}>{loading ? "Sending..." : "Send application"}</button>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=career@aselea.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground underline break-all sm:break-normal"
            >
              Or email career@aselea.com directly
            </a>
          </div>

          {error && <div className="mt-2 text-sm text-red-600">{error}</div>}
          {success && <div className="mt-2 text-sm text-green-600">{success}</div>}
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
