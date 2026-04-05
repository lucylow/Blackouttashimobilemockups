import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ScenarioProvider } from "./context/ScenarioContext";

export default function App() {
  return (
    <ScenarioProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
        {/* Mobile Phone Mockup - Premium Design */}
        <div className="relative w-full max-w-[390px] h-[844px] bg-slate-900 rounded-[3.2rem] shadow-2xl overflow-hidden border-[16px] border-slate-950 ring-2 ring-slate-800/50">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-950 rounded-b-[24px] z-50" />

          {/* App Content */}
          <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <RouterProvider router={router} />
          </div>

          {/* Home Indicator Bar (iOS style) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-slate-100/30 rounded-full z-50" />
        </div>
      </div>
    </ScenarioProvider>
  );
}