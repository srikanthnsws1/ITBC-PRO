"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  X,
  Search,
  User,
  UserCog,
  Building,
  Handshake,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import Logo from "@/components/Logo";
import { ROLE_CONFIGS, Role, UserSession, clearSession, getStoredSession } from "@/lib/auth";

interface NavMenuItem {
  label: string;
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface DashboardShellProps {
  role: Role;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  menuItems: NavMenuItem[];
  children: React.ReactNode;
}

const ROLE_ICONS = {
  student: User,
  faculty: UserCog,
  corporate: Building,
  partner: Handshake,
};

export default function DashboardShell({
  role,
  activeTab,
  setActiveTab,
  menuItems,
  children,
}: DashboardShellProps) {
  const router = useRouter();
  const [session, setSession] = useState<UserSession | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const config = ROLE_CONFIGS[role];
  const CurrentIcon = ROLE_ICONS[role];

  useEffect(() => {
    const stored = getStoredSession();
    if (stored && stored.role === role) {
      setSession(stored);
    } else {
      setSession(config.demoUser);
    }
  }, [role, config.demoUser]);

  const handleLogout = () => {
    clearSession();
    router.push(config.loginPath);
  };

  const currentUserName = session?.name || config.demoUser.name;
  const currentUserOrg = session?.organization || config.demoUser.organization;
  const currentUserId = session?.id || config.demoUser.id;

  return (
    <div className="min-h-screen bg-[#070e24] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0a1435]/95 backdrop-blur border-b border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>

            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-1 rounded-md shadow shrink-0">
                <Logo />
              </div>
              <div className="hidden sm:block leading-tight">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Dashboard Portal
                </span>
                <p className="text-[11px] text-slate-400">Information Technology Business Council</p>
              </div>
            </Link>
          </div>

          {/* Center Search (Hidden on Mobile) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-2.5 size-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, internships, verified members, research papers..."
                className="w-full rounded-full bg-white/5 border border-white/15 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Right: Role Switcher, Notifications & Profile */}
          <div className="flex items-center gap-3">
            {/* Quick Role Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRoleSwitcherOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 transition"
              >
                <CurrentIcon className="size-3.5 text-blue-400" />
                <span className="hidden sm:inline">{config.shortLabel} View</span>
                <ChevronDown className={`size-3 text-slate-400 transition ${roleSwitcherOpen ? "rotate-180" : ""}`} />
              </button>

              {roleSwitcherOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/15 bg-[#0b1432] p-2 shadow-2xl backdrop-blur-xl z-50">
                  <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Switch Dashboard
                  </p>
                  {(Object.keys(ROLE_CONFIGS) as Role[]).map((rKey) => {
                    const rCfg = ROLE_CONFIGS[rKey];
                    const RIcon = ROLE_ICONS[rKey];
                    const isSelected = rKey === role;
                    return (
                      <Link
                        key={rKey}
                        href={rCfg.dashboardPath}
                        onClick={() => setRoleSwitcherOpen(false)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                          isSelected
                            ? "bg-blue-600 text-white font-bold"
                            : "text-slate-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <RIcon className="size-4 shrink-0" />
                        <div className="min-w-0">
                          <p className="truncate">{rCfg.label}</p>
                          <p className="text-[10px] text-slate-400 truncate">{rCfg.badge}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotificationsOpen((v) => !v)}
                className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
                aria-label="Notifications"
              >
                <Bell className="size-4" />
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-emerald-400 animate-pulse" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl border border-white/15 bg-[#0b1432] p-3 shadow-2xl backdrop-blur-xl z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-bold text-white">Notifications</span>
                    <span className="text-[10px] text-blue-400 cursor-pointer hover:underline">
                      Mark all read
                    </span>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs transition cursor-pointer">
                      <p className="font-semibold text-white">New Live Project Match</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Cybersecurity Hub posted an enterprise challenge open to your role.
                      </p>
                      <span className="text-[10px] text-slate-500">10m ago</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs transition cursor-pointer">
                      <p className="font-semibold text-white">ITBC Member Verified</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Your credentials have been successfully accredited on the e-Governance gateway.
                      </p>
                      <span className="text-[10px] text-slate-500">2h ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile & Logout */}
            <div className="flex items-center gap-3 pl-3 border-l border-white/15">
              <div className="size-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold grid place-items-center text-xs shadow-md border border-white/20">
                {currentUserName.charAt(0)}
              </div>
              <div className="hidden lg:block text-left text-xs leading-tight">
                <p className="font-bold text-white truncate max-w-[130px]">{currentUserName}</p>
                <p className="text-[10px] text-blue-400 truncate max-w-[130px]">{currentUserId}</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                title="Sign Out"
                className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar (Desktop) */}
        <aside className="hidden lg:flex w-64 flex-col justify-between border-r border-white/10 bg-[#08112d] p-4 shrink-0">
          <div className="space-y-6">
            {/* User Badge Card */}
            <div className="p-3.5 rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-blue-600/30 border border-blue-400/40 text-blue-300 grid place-items-center">
                  <CurrentIcon className="size-5" />
                </div>
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    <ShieldCheck className="size-3 text-emerald-400" />
                    Verified Member
                  </span>
                  <p className="text-xs font-bold text-white truncate mt-1">{currentUserName}</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 truncate">{currentUserOrg}</p>
              <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>ID: {currentUserId}</span>
                <span className="text-emerald-400 font-semibold">● Active</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <div>
              <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Menu Navigation
              </p>
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`size-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Bottom Help / Link */}
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center justify-between text-xs text-slate-400 hover:text-blue-400 py-1"
            >
              <span>ITBC Main Website</span>
              <ExternalLink className="size-3.5" />
            </Link>
            <p className="text-[10px] text-slate-500 mt-2">
              National Digital Knowledge Ecosystem • Support: info@itbc.world
            </p>
          </div>
        </aside>

        {/* Mobile Sidebar Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative w-72 max-w-full bg-[#08112d] border-r border-white/10 p-5 flex flex-col justify-between z-10">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <CurrentIcon className="size-5 text-blue-400" />
                    <span className="font-bold text-sm text-white">{config.label}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="size-4" />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300">
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition"
                >
                  <LogOut className="size-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[#060c20]">
          <div className="max-w-7xl mx-auto space-y-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
