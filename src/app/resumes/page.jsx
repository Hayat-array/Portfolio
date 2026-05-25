import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ResumeSelectorSection } from '@/components/resume-selector-section';

export default function ResumesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        <ResumeSelectorSection />
      </main>
      <Footer />
    </div>
  );
}
