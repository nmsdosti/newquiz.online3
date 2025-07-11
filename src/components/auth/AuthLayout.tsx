import { ReactNode } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF6952] to-[#FF6952] text-white">
      {/* Modern navigation */}
      <header className="fixed top-0 z-50 w-full bg-white backdrop-blur-md shadow-md border-b border-skyblue/30">
        <div className="max-w-[980px] mx-16 flex h-20 items-center justify-left px-4">
          <div>
            <Logo className="bg-white/20 backdrop-blur-md p-1 rounded" />
          </div>
        </div>
      </header>

      <div className="min-h-screen flex items-center justify-left pt-14">
        <div className="max-w-md w-full px-4 ml-16">
          <div className="text-Left mb-8">
            <h2 className="text-5xl font-bold tracking-tight text-white">
              Acoem Engage
            </h2>
            <p className="text-xl font-medium text-white mt-2">
              Where Possibility Meets Learning
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
