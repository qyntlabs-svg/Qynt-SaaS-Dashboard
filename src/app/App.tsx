import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { LoginPage } from './pages/LoginPage';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { MainDashboard } from './pages/MainDashboard';
import { YouTubeAnalyzer } from './pages/services/YouTubeAnalyzer';
import { LinkedInJobProfileFinder } from './pages/services/LinkedInJobProfileFinder';
import { LinkedInJobFinder } from './pages/services/LinkedInJobFinder';
import { GmailAutomation } from './pages/services/GmailAutomation';
import { GoogleReviewAnalyzer } from './pages/services/GoogleReviewAnalyzer';
import { Settings } from './pages/Settings';
import { Billing } from './pages/Billing';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="youtube-analyzer" element={<YouTubeAnalyzer />} />
            <Route path="linkedin-job-profile-finder" element={<LinkedInJobProfileFinder />} />
            <Route path="linkedin-job-finder" element={<LinkedInJobFinder />} />
            <Route path="gmail-automation" element={<GmailAutomation />} />
            <Route path="google-review-analyzer" element={<GoogleReviewAnalyzer />} />
            <Route path="settings" element={<Settings />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
