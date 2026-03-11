import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Header } from './Header';
import { MobileHeader } from './MobileHeader';
import { MobileNavigation } from './MobileNavigation';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { QuickTip } from './QuickTip';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');

  // Sync internal state with router location for legacy components
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setCurrentPage('home');
    else if (path === '/bet-of-the-day') setCurrentPage('bet-of-the-day');
    else if (path === '/leagues') setCurrentPage('leagues');
    else if (path.startsWith('/league')) setCurrentPage('league-page');
    else if (path.startsWith('/match')) setCurrentPage('match-details');
    else if (path === '/blog') setCurrentPage('blog');
    else if (path.startsWith('/blog/details')) setCurrentPage('blog-details');
    else if (path === '/contact-us') setCurrentPage('contact-us');
    else if (path === '/faq') setCurrentPage('faq');
    else if (path === '/privacy') setCurrentPage('privacy');
    else if (path === '/terms-of-use') setCurrentPage('terms-of-use');
  }, [location]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') navigate('/');
    else if (page === 'bet-of-the-day') navigate('/bet-of-the-day');
    else if (page === 'leagues') navigate('/leagues');
    else if (page === 'league-page') navigate('/league');
    else if (page === 'match-details') navigate('/match');
    else if (page === 'blog') navigate('/blog');
    else if (page === 'blog-details') navigate('/blog/details');
    else if (page === 'contact-us') navigate('/contact-us');
    else if (page === 'faq') navigate('/faq');
    else if (page === 'privacy') navigate('/privacy');
    else if (page === 'terms-of-use') navigate('/terms-of-use');
  };

  // Determine Sidebar and QuickTip visibility
  const path = location.pathname;
  
  const isMatchDetails = path.startsWith('/match');
  const isLeaguePage = path.startsWith('/league');
  const isHomePage = path === '/';
  
  // Pages that generally hide sidebar and/or QuickTip
  const isTextPage = ['/terms-of-use', '/privacy', '/faq', '/contact-us', '/blog'].some(p => path.startsWith(p));
  const isBlogDetails = path.startsWith('/blog/details');

  const showSidebar = !isTextPage && !isBlogDetails && !isMatchDetails;
  const showQuickTip = !isTextPage && !isBlogDetails; 

  // Special case: League Page sidebar is modified, Match Page has NO sidebar
  // But Match Page HAS QuickTip (checked in App.tsx)
  
  return (
    <div className="min-h-screen bg-[#1e2749] flex flex-col font-sans">
      
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-50">
        <MobileHeader />
        <MobileNavigation onNavigate={handleNavigate} currentPage={currentPage} />
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className={`max-w-[1440px] mx-auto w-full ${(isLeaguePage || isHomePage) ? 'px-0 md:px-[50px] py-0 md:py-[30px]' : 'px-[15px] md:px-[50px] py-[20px] md:py-[30px]'}`}>
          
          <div className={`flex flex-col md:flex-row items-start ${(isLeaguePage || isHomePage) ? 'gap-0 md:gap-[30px]' : 'gap-[20px] md:gap-[30px]'}`}>
            {/* Left Content Column (Full width on mobile) */}
            <div className={`flex-1 flex flex-col min-w-0 w-full ${(isLeaguePage || isHomePage) ? 'gap-0 md:gap-[30px]' : 'gap-[20px] md:gap-[30px]'}`}>
              
              <Outlet />

              {/* Quick Tip Section */}
              {showQuickTip && (
                <div className="bg-white rounded-[20px] shadow-sm overflow-hidden mx-[15px] md:mx-0 mb-[20px] md:mb-0">

                </div>
              )}
            </div>

            {/* Right Sidebar (Desktop Only) */}
            {showSidebar && (
              <div className="hidden md:block w-[350px] shrink-0">
                 <Sidebar onNavigate={handleNavigate} withTrending={!isLeaguePage} />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
