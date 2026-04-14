import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import OpeningSplash from "@/components/OpeningSplash";
import Index from "./pages/Index.tsx";
import DataRequests from "./pages/DataRequests";
import Privacy from "./pages/Privacy";
import CookieSettings from "./pages/CookieSettings";
import NotFound from "./pages/NotFound.tsx";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import FeaturesPage from "./pages/FeaturesPage";
import TeamPage from "./pages/TeamPage";
import StatsPage from "./pages/StatsPage";
import Android from "./pages/Android";
import ServicesPage from "./pages/ServicesPage";
import IOS from "./pages/IOS";
import CrossPlatform from "./pages/CrossPlatform";
import Wearable from "./pages/Wearable";
import Flutter from "./pages/Flutter";
import ReactNative from "./pages/ReactNative";
import PHP from "./pages/web/PHP";
import MEAN from "./pages/web/MEAN";
import NodeJS from "./pages/web/NodeJS";
import Angular from "./pages/web/Angular";
import PythonWeb from "./pages/web/PythonWeb";
import UIUX from "./pages/web/UIUX";
import Apply from "./pages/Apply";
import Facebook from "./pages/marketing/Facebook";
import LinkedIn from "./pages/marketing/LinkedIn";
import SMO from "./pages/marketing/SMO";
import SEO from "./pages/marketing/SEO";
import PPC from "./pages/marketing/PPC";
import Email from "./pages/marketing/Email";

const queryClient = new QueryClient();

const App = () => {
  const [showOpeningSplash, setShowOpeningSplash] = useState(true);

  useEffect(() => {
    const splashTimer = window.setTimeout(() => setShowOpeningSplash(false), 2200);
    return () => window.clearTimeout(splashTimer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showOpeningSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOpeningSplash]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>{showOpeningSplash ? <OpeningSplash /> : null}</AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/android" element={<Android />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ios" element={<IOS />} />
            <Route path="/cross-platform" element={<CrossPlatform />} />
            <Route path="/wearable" element={<Wearable />} />
            <Route path="/flutter" element={<Flutter />} />
            <Route path="/react-native" element={<ReactNative />} />
            <Route path="/web/php" element={<PHP />} />
            <Route path="/web/mean" element={<MEAN />} />
            <Route path="/web/nodejs" element={<NodeJS />} />
            <Route path="/web/angular" element={<Angular />} />
            <Route path="/web/python" element={<PythonWeb />} />
            <Route path="/web/uiux" element={<UIUX />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/marketing/facebook" element={<Facebook />} />
            <Route path="/marketing/linkedin" element={<LinkedIn />} />
            <Route path="/marketing/smo" element={<SMO />} />
            <Route path="/marketing/seo" element={<SEO />} />
            <Route path="/marketing/ppc" element={<PPC />} />
            <Route path="/marketing/email" element={<Email />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/data-requests" element={<DataRequests />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
