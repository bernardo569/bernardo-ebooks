import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Catalog from "@/pages/Catalog";
import Offer from "@/pages/Offer";
import Payment from "@/pages/Payment";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}

function Router() {
  return <WouterRouter base={import.meta.env.BASE_URL}><Switch><Route path="/" component={Home} /><Route path="/catalogo" component={Catalog} /><Route path="/oferta" component={Offer} /><Route path="/pagamento" component={Payment} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch></WouterRouter>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><ScrollToTop /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
