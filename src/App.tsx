import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PreviewBanner } from "@/components/PreviewBanner";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Solution from "./pages/Solution";
import Pricing from "./pages/Pricing";
import ThesisPhd from "./pages/ThesisPhd";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import SimulationDeepDive from "./pages/SimulationDeepDive";
import Compliance from "./pages/Compliance";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import SafeSandboxThreatHunting from "./pages/blog/SafeSandboxThreatHunting";
import Team from "./pages/Team";
import TeamMemberProfile from "./pages/TeamMemberProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <PreviewBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/thesis-phd" element={<ThesisPhd />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/safe-sandbox-threat-hunting" element={<SafeSandboxThreatHunting />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/simulation-deep-dive" element={<SimulationDeepDive />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamMemberProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
