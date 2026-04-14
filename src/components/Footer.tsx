import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="/"
            className="inline-flex items-center rounded-md px-2 py-1"
            aria-label="Aselea Network"
          >
            <img
              src="/assets/aselea-logo.svg"
              alt="Aselea Network"
              className="h-8 w-auto"
            />
          </a>

          <nav className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Our Team</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            <details className="relative group">
              <summary className="list-none cursor-pointer hover:text-foreground transition-colors flex items-center gap-1">
                Privacy
                <span className="text-muted-foreground group-hover:text-foreground">▾</span>
              </summary>
              <div className="absolute mt-2 right-0 bg-card/90 border border-border rounded-md p-2 w-44 shadow-lg">
                <Link to="/privacy" className="block text-sm py-1 px-2 hover:bg-accent/5 rounded">Privacy Policy</Link>
                <Link to="/cookie-settings" className="block text-sm py-1 px-2 hover:bg-accent/5 rounded">Cookie Settings</Link>
                <Link to="/data-requests" className="block text-sm py-1 px-2 hover:bg-accent/5 rounded">Data Requests</Link>
              </div>
            </details>
          </nav>

          <div className="flex items-center gap-4">
            {[
              {
                Icon: FaInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/",
                iconClass: "text-[#E4405F]",
              },
              {
                Icon: FaXTwitter,
                label: "Twitter",
                href: "https://x.com/",
                iconClass: "text-black dark:text-white",
              },
              {
                Icon: FaFacebookF,
                label: "Facebook",
                href: "https://www.facebook.com/",
                iconClass: "text-[#1877F2]",
              },
            ].map(({ Icon, label, href, iconClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-80 hover-scale"
              >
                <Icon className={`h-4 w-4 ${iconClass}`} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Aselea Network. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
