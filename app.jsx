import React from 'react';
import { Header } from './components/Header';
import { Detector } from './components/Detector';
function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary/30">
      {/* Abstract Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse delay-1000" />
      </div>
      <Header />
      <main className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4 mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
            Detect & <span className="text-primary">Humanize</span> AI Content
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Advanced analysis to identify machine-generated text and rewrite it for a natural, human touch.
          </p>
        </div>
        <Detector />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground relative z-10">
        <p>&copy; {new Date().getFullYear()} AI Sentry. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
