import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppShell from "@/components/app/AppShell";
import AddAssetPage from "@/pages/AddAsset";
import AssetDetailsPage from "@/pages/AssetDetails";
import AssetsPage from "@/pages/Assets";
import AssignmentsPage from "@/pages/Assignments";
import CategoriesPage from "@/pages/Categories";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import UsersPage from "@/pages/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<AppShell />}>
            <Route path="/" element={<Index />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/assets/new" element={<AddAssetPage />} />
            <Route path="/assets/:id" element={<AssetDetailsPage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
