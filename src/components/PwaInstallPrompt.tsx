import { useEffect, useState } from "react";
import { X, Download, Share, Smartphone } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed or dismissed
    const dismissed = localStorage.getItem("pwa-install-dismissed");
    if (dismissed === "true") return;

    // Check if running as installed PWA
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;
    if (standalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS Safari
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(ua);
    const isSafari = /safari/.test(ua) && !/chrome/.test(ua);
    setIsIOS(isIOSDevice && isSafari);

    // Listen for beforeinstallprompt (Chrome/Edge/Android)
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // If iOS, show prompt after a short delay
    if (isIOSDevice && isSafari) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      };
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("pwa-install-dismissed", "true");
  };

  if (!isVisible || isInstalled) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="mx-4 mb-4 rounded-xl border border-[#3a5d3a]/20 bg-[#f5f1e8] p-4 shadow-lg shadow-black/10 sm:mx-auto sm:max-w-md">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3a5d3a]/10">
            <Smartphone className="h-5 w-5 text-[#3a5d3a]" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1a1a1a]">
                {isIOS ? "Add to Home Screen" : "Install Woodpecker App"}
              </p>
              <button
                onClick={handleDismiss}
                className="ml-2 rounded-full p-1 text-[#4a4a4a] hover:bg-[#3a5d3a]/10 hover:text-[#1a1a1a]"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {isIOS ? (
              <p className="mt-1 text-xs leading-relaxed text-[#4a4a4a]">
                Tap{" "}
                <Share className="mx-0.5 inline h-3.5 w-3.5 text-[#3a5d3a]" />
                Share, then select{" "}
                <strong className="text-[#1a1a1a]">Add to Home Screen</strong> for quick
                access.
              </p>
            ) : (
              <p className="mt-1 text-xs leading-relaxed text-[#4a4a4a]">
                Install our app for faster booking, offline browsing, and a
                full-screen experience.
              </p>
            )}

            {!isIOS && (
              <button
                onClick={handleInstall}
                className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-[#3a5d3a] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#2d4a2d]"
              >
                <Download className="h-3.5 w-3.5" />
                Install Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
