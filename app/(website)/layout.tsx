

// app/(with-league)/layout.tsx
import "../globals.css";
import Header from "@/components/Header";
import LeaguesPage from "@/components/LeaguesPage";
import TrendingFixturesServer from "@/components/TrendingFixturesServer";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050922] flex flex-col">
      {/* Sticky navbar - ensures it stays at the very top */}
      <header className="sticky top-0 z-50 bg-[#050922]">
        <Header />
      </header>

      {/* Layout Container */}
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-[5%] py-4 items-start">
        
        {/* Main content (left) - This will grow and scroll the whole page */}
        <main className="flex-1 min-w-0">
          {children}
        </main>

      
       <aside
          className="
            hidden md:flex flex-col
            w-[260px] lg:w-[320px]
            sticky 
            top-[100px] 
            self-start 
            h-[calc(100vh-120px)] 
            overflow-y-auto
            scrollbar-hide
            border-l border-white/5
            pl-6
             scrollbar-thin
    scrollbar-track-transparent
    scrollbar-thumb-[#ffffff33]
    scrollbar-thumb-rounded-full
          "

        >
          <TrendingFixturesServer />
          <LeaguesPage />
        </aside> 

{/*  */}


      </div>

      {/* Footer stays at the bottom of the page scroll */}
      {/* <Footer /> */}
    </div>
  );
}