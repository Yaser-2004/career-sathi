import { type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logols.webp";
import { ShieldCheck, Headset, FileText, BadgeCheck, UserCheck2, Laptop, Headphones, MessageSquare, Quote, Lock, MessageCircle, ChevronDown, HelpCircle, Sparkles } from "lucide-react"
import {
    Wallet,
    Target,
    QrCode,
    Zap,
    TrendingUp,
    Trophy,
    CheckCircle2,
    ArrowUpRight
} from 'lucide-react';
import { Users, GraduationCap, PhoneCall, ClockCheck, ArrowRight, CheckCircle } from 'lucide-react';
import {
    UserPlus,
    Coins,
    Building2
} from 'lucide-react';
import {
    Landmark,
    Store,
    Printer,
    BookOpen
} from 'lucide-react';

export function Logo({ className = "" }: { className?: string }) {
    return (
        <span className={`font-display text-2xl font-semibold tracking-tight text-primary ${className}`}>
            <Image src={logo} alt="Logo" className="w-[120px] md:w-[180px] " />
        </span>
    );
}

export function SectionBand({ letter, title }: { letter: string; title: string }) {
    return (
        <div className="section-band flex items-center gap-3">
            <span className="text-primary-foreground/90">{letter}</span>
            <span aria-hidden>·</span>
            <span>{title}</span>
        </div>
    );
}

export function Field({
    label,
    name,
    type = "text",
    full = false,
    placeholder = "",
    value,
    onChange,
    onBlur,
    error,
    required = false,
    options,
    maxLength,
}: {
    label: string;
    name: string;
    type?: string;
    full?: boolean;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?: string;
    required?: boolean;
    options?: { label: string; value: string }[];
    maxLength?: number;
}) {
    return (
        <label className={`form-cell flex flex-col justify-between ${full ? "col-span-full" : ""} ${error ? "border-red-500 bg-red-50/10" : ""}`}>
            <div>
                <span className="form-label flex items-center justify-between">
                    <span>
                        {label} {required && <span className="font-bold text-red-500">*</span>}
                    </span>
                </span>
                {options ? (
                    <select
                        className={`form-input bg-transparent py-1 ${error ? "text-red-900 font-medium" : ""}`}
                        name={name}
                        value={value ?? ""}
                        onChange={onChange}
                        onBlur={onBlur}
                    >
                        <option value="">Select option...</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        className={`form-input py-1 ${error ? "text-red-900 placeholder:text-red-300 font-medium" : ""}`}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={value ?? ""}
                        onChange={onChange}
                        onBlur={onBlur}
                        maxLength={maxLength}
                    />
                )}
            </div>
            {error && <span className="mt-1 text-sm font-semibold text-red-600">{error}</span>}
        </label>
    );
}

export function Check({ label, name }: { label: string; name: string }) {
    return (
        <label className="flex items-center gap-3 border border-border bg-white px-4 py-3">
            <input type="checkbox" name={name} className="h-4 w-4 accent-[oklch(0.55_0.22_27)]" />
            <span className="text-sm text-foreground">{label}</span>
        </label>
    );
}

export function CtaButton({ children, href = "/become-career-sathi", size = "md" }: { children: React.ReactNode; href?: string; size?: "md" | "lg" }) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.55_0.22_27/0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_oklch(0.55_0.22_27/0.7)] ${size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
                }`}
        >
            {children}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </Link>
    );
}



export default function Hero() {

    const benefits = [
        {
            t: "Zero Investment",
            d: "Na kuch kharidna hai, na kuch dena hai.",
            icon: Wallet,
            badge: "100% Free",
            bg: "bg-emerald-50/80 border-emerald-100/80",
            accent: "bg-emerald-500",
            textColor: "text-emerald-950",
            mutedColor: "text-emerald-700/80",
            visual: (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-emerald-100">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800">Joining Fee</p>
                            <p className="text-xs text-slate-500">₹0 / Lifetime</p>
                        </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-sm font-bold text-emerald-700">FREE</span>
                </div>
            )
        },
        {
            t: "Koi Target Nahi",
            d: "Apni marzi se, apni speed se kamaiye.",
            icon: Target,
            badge: "No Pressure",
            bg: "bg-amber-50/80 border-amber-100/80",
            accent: "bg-amber-500",
            textColor: "text-amber-950",
            mutedColor: "text-amber-800/80",
            visual: (
                <div className="mt-4 rounded-xl bg-white p-3 shadow-sm border border-amber-100">
                    <div className="flex justify-between items-center text-sm mb-1.5 font-medium text-amber-900">
                        <span>Work Flexibility</span>
                        <span>100% Yours</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-amber-100 overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full w-3/4"></div>
                    </div>
                </div>
            )
        },
        {
            t: "Free Branded Banner",
            d: "Aapki dukaan par, aapke unique QR code ke saath.",
            icon: QrCode,
            badge: "Marketing Support",
            bg: "bg-sky-50/80 border-sky-100/80",
            accent: "bg-sky-500",
            textColor: "text-sky-950",
            mutedColor: "text-sky-800/80",
            visual: (
                <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-sky-100">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                        <QrCode className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-slate-800">Custom Printed QR</p>
                        <p className="text-xs text-slate-500">Directly linked to your ID</p>
                    </div>
                </div>
            )
        },
        {
            t: "Fast, Transparent Payout",
            d: "Request daaliye, seedha aapke account mein.",
            icon: Zap,
            badge: "Instant Transfer",
            bg: "bg-indigo-50/80 border-indigo-100/80",
            accent: "bg-indigo-500",
            textColor: "text-indigo-950",
            mutedColor: "text-indigo-800/80",
            visual: (
                <div className="mt-4 rounded-xl bg-white p-3 shadow-sm border border-indigo-100">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Recent Payout</p>
                    <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-bold text-slate-800">₹12,450.00</span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                            <ArrowUpRight className="h-3 w-3" /> Transferred
                        </span>
                    </div>
                </div>
            )
        },
        {
            t: "Apni Kamai Track Kariye",
            d: "Kitni leads aayin, kitne admission hue, sab pata chalega.",
            icon: TrendingUp,
            badge: "Live Dashboard",
            bg: "bg-violet-50/80 border-violet-100/80",
            accent: "bg-violet-500",
            textColor: "text-violet-950",
            mutedColor: "text-violet-800/80",
            visual: (
                <div className="mt-4 flex gap-2">
                    <div className="flex-1 rounded-xl bg-white p-2.5 shadow-sm border border-violet-100 text-center">
                        <p className="text-xs text-slate-400 font-medium">Leads</p>
                        <p className="text-sm font-bold text-violet-700">42</p>
                    </div>
                    <div className="flex-1 rounded-xl bg-white p-2.5 shadow-sm border border-violet-100 text-center">
                        <p className="text-xs text-slate-400 font-medium">Admissions</p>
                        <p className="text-sm font-bold text-emerald-600">18</p>
                    </div>
                </div>
            )
        },
        {
            t: "Top Partners ke liye Inaam",
            d: "Best performing Career Sathis ko exciting prizes.",
            icon: Trophy,
            badge: "Rewards",
            bg: "bg-rose-50/80 border-rose-100/80",
            accent: "bg-rose-500",
            textColor: "text-rose-950",
            mutedColor: "text-rose-800/80",
            visual: (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-rose-100">
                    <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-amber-500" />
                        <span className="text-sm font-semibold text-slate-800">Monthly Leaderboard</span>
                    </div>
                    <span className="text-sm font-bold text-rose-600">Prizes & Bonus</span>
                </div>
            )
        },
    ];

    const stats = [
        { k: "500+", v: "Active Career Sathis", icon: Users, color: "from-blue-500 to-indigo-600", bg: "bg-blue-50/70 border-blue-100" },
        { k: "20+", v: "Partner Universities", icon: GraduationCap, color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50/70 border-emerald-100" },
        { k: "24 hr", v: "Onboarding Call", icon: PhoneCall, color: "from-amber-500 to-orange-600", bg: "bg-amber-50/70 border-amber-100" },
        { k: "1 day", v: "Fast Payout", icon: ClockCheck, color: "from-violet-500 to-purple-600", bg: "bg-violet-50/70 border-violet-100" },
    ];

    const steps = [
        { title: "Student se baat kariye", desc: "Aapke paas aane wale students ko online degrees ke baare me bataiye." },
        { title: "Details share kariye", desc: "Aapko koi expert banne ki zaroorat nahi, bas basic info humein bhejiye." },
        { title: "Har student par kamaiye", desc: "Aapke reference se admission hone par direct payout seedha account mein." },
    ];

    const kaiseSteps = [
        {
            title: "Register kariye",
            desc: "Chhota sa form bhariye. Hamari team 24 hr me call karegi.",
            icon: UserPlus,
            bg: "bg-sky-50/80 border-sky-100",
            accent: "bg-sky-500",
            textColor: "text-sky-950",
            badge: "Fast Onboarding",
            visual: (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-sky-100">
                    <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                            <PhoneCall className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">Callback in 24h</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-sky-500 animate-ping" />
                </div>
            )
        },
        {
            title: "KYC complete kariye",
            desc: "Field executive dukaan par aayega, phir HO Video KYC hoga.",
            icon: ShieldCheck,
            bg: "bg-indigo-50/80 border-indigo-100",
            accent: "bg-indigo-500",
            textColor: "text-indigo-950",
            badge: "Verified Partner",
            visual: (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-white p-3 shadow-sm border border-indigo-100">
                    <Building2 className="h-4 w-4 text-indigo-500 shrink-0" />
                    <div className="text-sm font-medium text-slate-600">
                        Dukaan Visit + Video KYC
                    </div>
                </div>
            )
        },
        {
            title: "Live ho jaiye",
            desc: "Unique QR code & branded banner dukaan par lag jayega.",
            icon: QrCode,
            bg: "bg-amber-50/80 border-amber-100",
            accent: "bg-amber-500",
            textColor: "text-amber-950",
            badge: "Free Branding",
            visual: (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-amber-100">
                    <div className="flex items-center gap-2">
                        <QrCode className="h-5 w-5 text-amber-600" />
                        <span className="text-sm font-semibold text-slate-700">QR Kit Ready</span>
                    </div>
                    <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">ACTIVE</span>
                </div>
            )
        },
        {
            title: "Kamana shuru kariye",
            desc: "Students QR scan karke register karenge, aur kamai shuru!",
            icon: Coins,
            bg: "bg-emerald-50/80 border-emerald-100",
            accent: "bg-emerald-500",
            textColor: "text-emerald-950",
            badge: "Instant Earning",
            visual: (
                <div className="mt-4 rounded-xl bg-white p-3 shadow-sm border border-emerald-100 flex items-center justify-between">
                    <span className="text-sm font-bold text-emerald-800">Har Referral par</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semi text-emerald-600">
                        Payout <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                </div>
            )
        }
    ];

    const eligibleBusinesses = [
        { name: "Cyber Cafe", icon: Store, bg: "bg-sky-50/80 border-sky-100", accent: "bg-sky-500", tag: "High Demand" },
        { name: "Photocopy / Xerox Shop", icon: Printer, bg: "bg-indigo-50/80 border-indigo-100", accent: "bg-indigo-500", tag: "Daily Footfall" },
        { name: "Coaching Center", icon: GraduationCap, bg: "bg-amber-50/80 border-amber-100", accent: "bg-amber-500", tag: "Direct Reach" },
        { name: "Stationery / Book Shop", icon: BookOpen, bg: "bg-emerald-50/80 border-emerald-100", accent: "bg-emerald-500", tag: "High Trust" },
    ];

    const requirements = [
        { title: "Students ka regular footfall", desc: "Aapke dukaan par daily students aate hon", icon: Users, bg: "bg-blue-50 text-blue-600" },
        { title: "Valid ID & PAN Card", desc: "Aapki Identity aur Video KYC ke liye", icon: FileText, bg: "bg-amber-50 text-amber-600" },
        { title: "Payout ke liye Bank Account", desc: "Har admission par direct transfer ke liye", icon: Landmark, bg: "bg-emerald-50 text-emerald-600" },
    ];

    const talkingPoints = [
        {
            text: "Top private universities ab Online Degree Programs offer karti hain.",
            icon: Laptop,
            highlight: "Online Degrees",
            accent: "bg-indigo-50 border-indigo-100 text-indigo-700"
        },
        {
            text: "Student ghar baithe, job ke saath, apni speed se degree complete kar sakta hai.",
            icon: UserCheck2,
            highlight: "Flexible Learning",
            accent: "bg-amber-50 border-amber-100 text-amber-700"
        },
        {
            text: "UGC Recognized aur 100% valid degree milti hai.",
            icon: ShieldCheck,
            highlight: "100% Valid Degree",
            accent: "bg-emerald-50 border-emerald-100 text-emerald-700"
        }
    ];

    const trustPoints = [
        {
            title: "100% Verified Onboarding",
            text: "Poori KYC aur Video KYC ke baad hi official partner banaya jata hai.",
            bg: "bg-emerald-50/80 border-emerald-100",
            textColor: "text-emerald-950",
            tag: "Secure KYC",
            // Vector Illustration 1: Verified Document & Video KYC Shield
            illustration: (
                <svg viewBox="0 0 200 120" className="w-full h-28 object-contain">
                    <rect x="30" y="20" width="140" height="85" rx="12" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
                    <rect x="45" y="35" width="45" height="45" rx="8" fill="#ECFDF5" />
                    <circle cx="67" cy="52" r="12" fill="#10B981" opacity="0.2" />
                    <path d="M67 46a6 6 0 100 12 6 6 0 000-12zM57 70c0-4 4-7 10-7s10 3 10 7" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <rect x="100" y="40" width="55" height="6" rx="3" fill="#D1FAE5" />
                    <rect x="100" y="52" width="40" height="6" rx="3" fill="#E5E7EB" />
                    <rect x="100" y="64" width="48" height="6" rx="3" fill="#E5E7EB" />
                    {/* Badge */}
                    <circle cx="150" cy="85" r="16" fill="#10B981" />
                    <path d="M144 85l4 4 8-8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            )
        },
        {
            title: "Dedicated HO Support",
            text: "Har Career Sathi ke liye Head Office se dedicated manager milega.",
            bg: "bg-indigo-50/80 border-indigo-100",
            textColor: "text-indigo-950",
            tag: "Direct Contact",
            // Vector Illustration 2: Dedicated Call & Support Avatar
            illustration: (
                <svg viewBox="0 0 200 120" className="w-full h-28 object-contain">
                    <circle cx="100" cy="50" r="30" fill="#EEF2FF" />
                    {/* Headset Character */}
                    <circle cx="100" cy="45" r="14" fill="#6366F1" />
                    <path d="M80 85c0-10 9-18 20-18s20 8 20 18" fill="#4F46E5" />
                    {/* Headset Arc */}
                    <path d="M84 45a16 16 0 0132 0" stroke="#312E81" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <rect x="81" y="41" width="5" height="9" rx="2" fill="#312E81" />
                    <rect x="114" y="41" width="5" height="9" rx="2" fill="#312E81" />
                    <path d="M116 50v4a4 4 0 01-4 4h-4" stroke="#312E81" strokeWidth="2" fill="none" />
                    {/* Floating Message Bubble */}
                    <rect x="125" y="20" width="45" height="26" rx="8" fill="#4F46E5" />
                    <path d="M135 32h25M135 38h15" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Transparent Reporting",
            text: "Leads, admissions aur payouts ka 100% clear real-time record.",
            bg: "bg-sky-50/80 border-sky-100",
            textColor: "text-sky-950",
            tag: "Zero Delays",
            // Vector Illustration 3: Analytics & Payout Dashboard Graphic
            illustration: (
                <svg viewBox="0 0 200 120" className="w-full h-28 object-contain">
                    <rect x="25" y="15" width="150" height="90" rx="10" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" />
                    {/* Bars */}
                    <rect x="45" y="60" width="16" height="30" rx="4" fill="#E0F2FE" />
                    <rect x="70" y="45" width="16" height="45" rx="4" fill="#38BDF8" />
                    <rect x="95" y="35" width="16" height="55" rx="4" fill="#0284C7" />
                    <rect x="120" y="50" width="16" height="40" rx="4" fill="#BAE6FD" />
                    {/* Growth Trend Arrow */}
                    <path d="M40 50l30-20 30 10 50-25" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="150" cy="15" r="5" fill="#0284C7" />
                </svg>
            )
        },
        {
            title: "Official Branding Kit",
            text: "Aapki dukaan ki branding ke saath certified partner status.",
            bg: "bg-amber-50/80 border-amber-100",
            textColor: "text-amber-950",
            tag: "Official Status",
            // Vector Illustration 4: Store Front Banner & Official Certificate
            illustration: (
                <svg viewBox="0 0 200 120" className="w-full h-28 object-contain">
                    {/* Store Canopy / Banner */}
                    <path d="M30 35h140l10 20H20l10-20z" fill="#F59E0B" />
                    <path d="M30 35l5 20M60 35l2 20M90 35v20M120 35l-2 20M150 35l-5 20" stroke="#FFFFFF" strokeWidth="2" />
                    {/* Shop Building */}
                    <rect x="35" y="55" width="130" height="50" rx="4" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
                    {/* QR Poster on Store */}
                    <rect x="50" y="65" width="25" height="30" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
                    <rect x="55" y="70" width="15" height="15" fill="#D97706" />
                    {/* Certificate Badge */}
                    <circle cx="130" cy="80" r="16" fill="#F59E0B" />
                    <path d="M125 80l3 3 7-7" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Nav */}
            <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
                    <Logo />
                    <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
                        <a href="#kya-hai" className="hover:text-foreground">Kya Hai</a>
                        <a href="#kaam" className="hover:text-foreground">Kaise Kaam Karta Hai</a>
                        <a href="#faq" className="hover:text-foreground">FAQ</a>
                    </nav>
                    <CtaButton>Career Sathi Banein</CtaButton>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-50/50 py-12 lg:py-20">
                {/* Background Decorative Mesh & Glows */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
                </div>

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:pt-2 lg:pb-16">

                    {/* Left Column: Headline & Value Prop */}
                    <div>
                        {/* Tagline Badge */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-xs">
                            <Sparkles className="h-3.5 w-3.5 text-primary" />
                            LearningShala Partner Program
                        </span>

                        {/* Main Heading */}
                        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
                            Bano <span className="bg-primary bg-clip-text text-transparent">Career Sathi</span>.
                            <br />
                            Students ko sahi raasta dikhao, aur kamao.
                        </h1>

                        {/* Subtext */}
                        <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                            Aapke paas roz aane wale students ko top private universities ke <strong className="text-slate-800">Online Degree Programs</strong> ke baare mein bataiye — aur har student par kamai kariye.
                        </p>

                        {/* Action CTAs */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:opacity-90 hover:shadow-xl active:scale-95">
                                Career Sathi Banein
                                <ArrowRight className="h-5 w-5" />
                            </button>

                            <a
                                href="#kaam"
                                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:text-primary"
                            >
                                Kaise kaam karta hai ↓
                            </a>
                        </div>

                        {/* Key Value Points (Directly declared without arrays) */}
                        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-slate-700">
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                Zero investment
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                Koi target nahi
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                Fast payout
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Partner Dashboard Card */}
                    <div className="relative">

                        {/* Floating Live Badge 1: Top Right Success Pulse */}
                        <div className="absolute -top-5 -right-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white p-3 shadow-xl border border-slate-100 animate-bounce-[3s]">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                                <TrendingUp className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">New Payout</p>
                                <p className="text-xs font-semibold text-emerald-600">+ ₹ 1,500 Credited</p>
                            </div>
                        </div>

                        {/* Floating Live Badge 2: Bottom Left Partner Status */}
                        <div className="absolute -bottom-6 -left-4 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl bg-slate-900 p-3.5 text-white shadow-2xl border border-slate-800">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                                <ShieldCheck className="h-4 w-4" />
                            </div>
                            <div>
                                <p className="text-xs font-bold">Verified Partner</p>
                                <p className="text-[10px] text-slate-400">Video KYC Approved</p>
                            </div>
                        </div>

                        {/* Main Card Container */}
                        <div className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xl shadow-slate-200/80 transition-all hover:shadow-primary/10">

                            {/* Header Row */}
                            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                                <div className="flex items-center gap-2.5">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <div className="w-32"><Logo /></div>
                                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Education Partner</p>
                                    </div>
                                </div>

                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 border border-emerald-200/60">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Official Partner
                                </span>
                            </div>

                            {/* Partner ID Details */}
                            <div className="mt-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Career Sathi ID</p>
                                    <p className="mt-1 font-mono text-2xl font-black text-slate-900 tracking-tight">CS-00421</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Status</p>
                                    <p className="mt-1 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">Active</p>
                                </div>
                            </div>

                            {/* Metrics Dashboard Cards */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 transition-colors hover:bg-slate-100/60">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Leads (30d)</p>
                                        <Users className="h-4 w-4 text-slate-400" />
                                    </div>
                                    <p className="mt-2 font-display text-2xl font-semibold text-slate-900">37</p>
                                </div>

                                <div className="rounded-2xl bg-emerald-50/60 p-4 border border-emerald-100/80 transition-colors hover:bg-emerald-50">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Total Payout</p>
                                        <Wallet className="h-4 w-4 text-emerald-600" />
                                    </div>
                                    <p className="mt-2 font-display text-2xl font-semibold text-emerald-700">₹ 14,200</p>
                                </div>
                            </div>

                            {/* QR Scanner Card */}
                            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
                                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs border border-slate-200">
                                    {/* SVG Vector QR Code */}
                                    <svg viewBox="0 0 24 24" className="h-11 w-11 text-slate-900" fill="currentColor">
                                        <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm11-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm13-2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm-4 0h2v2h-2v-2zm2-6h2v2h-2v-2z" />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                        Aapka Unique QR
                                        <QrCode className="h-3.5 w-3.5 text-primary" />
                                    </p>
                                    <p className="text-xs text-slate-500 mt-0.5">Students scan karke direct register karein</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* What is */}
            <section id="kya-hai" className="py-16 px-4 max-w-7xl mx-auto">
                {/* Header Eyebrow */}
                <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary bg-red-50 px-3 py-1 rounded-full border border-red-100">
                        01 • Introduction
                    </span>
                </div>

                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    {/* Left Column: Narrative & How it works */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl leading-tight">
                                Career Sathi <span className="text-primary">kya hai?</span>
                            </h2>
                            <p className="mt-4 text-base text-slate-600 leading-relaxed">
                                Career Sathi ek simple aur profitable partnership hai. Aapke paas jo students aate hain, unme se kai aage padhna chahte hain — par unhe sahi guidance nahi milti.
                            </p>
                        </div>

                        {/* 3 Step Micro-Flow Visual */}
                        <div className="space-y-3 bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
                            <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Ye kaise kaam karta hai?</p>

                            {steps.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-3.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm transition hover:border-primary-200">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                                        <p className="text-sm text-slate-500 mt-0.5">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Highlight Callout + CTA */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link
                                href="/become-career-sathi"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700 hover:shadow-red-300 active:scale-95"
                            >
                                Career Sathi Banein
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <div className="flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" />
                                <span>Koi technical experience zaroori nahi</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Pastel Stat Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((s) => {
                            const Icon = s.icon;
                            return (
                                <div
                                    key={s.v}
                                    className={`group relative overflow-hidden rounded-2xl border ${s.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                >
                                    {/* Decorative background accent blob */}
                                    <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-white/40 blur-xl group-hover:scale-150 transition-transform"></div>

                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100">
                                            <Icon className="h-5 w-5 text-slate-700" />
                                        </div>
                                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                                    </div>

                                    <p className={`bg-gradient-to-r ${s.color} bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl`}>
                                        {s.k}
                                    </p>
                                    <p className="mt-1 text-sm font-medium text-slate-600">
                                        {s.v}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                        02 • Benefits
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Career Sathi kyun banein?
                    </h2>
                    <p className="mt-2 text-base text-slate-600">
                        Humare partner program ke saath judiye aur bina kisi risk ke apni nayi kamai shuru kariye.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((b) => {
                        const Icon = b.icon;
                        return (
                            <div
                                key={b.t}
                                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${b.bg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                            >
                                <div>
                                    {/* Top Row: Icon + Badge */}
                                    <div className="flex items-center justify-between">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${b.accent} text-white shadow-md shadow-slate-200/50`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <span className="rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm border border-white">
                                            {b.badge}
                                        </span>
                                    </div>

                                    {/* Text Content */}
                                    <h3 className={`mt-5 text-xl font-bold ${b.textColor}`}>
                                        {b.t}
                                    </h3>
                                    <p className={`mt-2 text-sm leading-relaxed ${b.mutedColor}`}>
                                        {b.d}
                                    </p>
                                </div>

                                {/* Custom Mini Visual Widget */}
                                {b.visual}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <CtaButton>Career Sathi Banein</CtaButton>
                </div>
            </section>

            {/* How it works */}
            <section id="kaam" className="py-16 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Kaise kaam karta hai?
                    </h2>
                    <p className="mt-2 text-base text-slate-600">
                        Bas 4 aasan steps mein banein aadhunik Career Sathi
                    </p>
                </div>

                {/* Process Flow Cards Grid */}
                <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {/* Desktop Connecting Line (Behind Cards) */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-dashed bg-slate-200 -z-10 border-t-2 border-dashed border-slate-300" />

                    {kaiseSteps.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.title}
                                className={`group relative flex flex-col justify-between rounded-3xl border ${s.bg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl`}
                            >
                                <div>
                                    {/* Step Pill + Number */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                                Step 0{i + 1}
                                            </span>
                                        </div>
                                        <span className="rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-0.5 text-xs font-bold text-slate-700 shadow-xs border border-white">
                                            {s.badge}
                                        </span>
                                    </div>

                                    {/* Main Step Icon */}
                                    <div className="mt-5 flex items-center gap-3">
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.accent} text-white shadow-md shadow-slate-200/50`}>
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>

                                    {/* Title & Short Text */}
                                    <h3 className={`mt-4 text-lg font-bold ${s.textColor}`}>
                                        {s.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                                        {s.desc}
                                    </p>
                                </div>

                                {/* Interactive Visual Element */}
                                {s.visual}
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="mt-12 text-center">
                    <Link href="/become-career-sathi" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 active:scale-95">
                        Career Sathi Banein
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Who */}
            <section id="eligibility" className="py-16 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
                        04 • Eligibility
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Kaun ban sakta hai Career Sathi?
                    </h2>
                    <p className="mt-2 text-base text-slate-600">
                        Agar aap students se roz milte hain aur unka bharosa rakhte hain — to ye partnership aapke liye hai.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                    {/* Left Column: Who can join (Target Persona Grid) */}
                    <div className="space-y-4">
                        <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
                            Aapki Dukan Inme Se Koi Ek Hai?
                        </p>

                        <div className="grid grid-cols-2 gap-3.5">
                            {eligibleBusinesses.map((b) => {
                                const Icon = b.icon;
                                return (
                                    <div
                                        key={b.name}
                                        className={`group relative flex flex-col justify-between rounded-2xl border ${b.bg} p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${b.accent} text-white shadow-sm`}>
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-xs font-semibold text-slate-600 bg-white/80 px-2 py-0.5 rounded-full border border-white">
                                                {b.tag}
                                            </span>
                                        </div>
                                        <h3 className="mt-4 text-sm font-bold text-slate-900">
                                            {b.name}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Subtext Callout */}
                        <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Store className="h-4 w-4" />
                            </div>
                            <p className="text-sm text-slate-600 font-medium">
                                Ya koi bhi aisi dukaan jahan students ka aana-jaana rehta hai.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Key Requirements Checklist Widget */}
                    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100/80 relative overflow-hidden">

                        {/* Subtle Top Gradient Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Zaroori Cheezein</h3>
                                <p className="text-sm text-slate-500 mt-0.5">Shuru karne ke liye bas ye 3 cheezein chahiye</p>
                            </div>
                            <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Easy KYC
                            </span>
                        </div>

                        {/* Checklist Items */}
                        <div className="space-y-4">
                            {requirements.map((req) => {
                                const Icon = req.icon;
                                return (
                                    <div
                                        key={req.title}
                                        className="flex items-start gap-4 p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 transition hover:bg-white hover:border-slate-200 hover:shadow-xs"
                                    >
                                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${req.bg}`}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm font-bold text-slate-900">{req.title}</p>
                                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                            </div>
                                            <p className="text-sm text-slate-500 mt-0.5">{req.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Inside Widget */}
                        <div className="mt-8">
                            <Link href={"/become-career-sathi"} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 active:scale-[0.98]">
                                Career Sathi Banein
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                    </div>

                </div>
            </section>

            {/* What you'll tell students */}
            <section id="students-se-kya-kehna-hai" className="py-16 px-4 max-w-6xl mx-auto">
                {/* Eyebrow Header */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
                        05 • Sales Script Guidance
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Students se kya kehna hai?
                    </h2>

                    {/* Reassuring Sub-pill */}
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700 border border-slate-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        <span>Aapko degree ka expert banne ki koi zaroorat nahi hai!</span>
                    </div>
                </div>

                {/* Main Container Card (Hero Speech Bubble style) */}
                <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50/50 p-6 sm:p-10 shadow-xl shadow-indigo-100/50">

                    {/* Quote Icon Backdrop Overlay */}
                    <Quote className="absolute -top-4 -right-4 h-32 w-32 text-indigo-100/60 rotate-180 -z-0 pointer-events-none" />

                    <div className="relative z-10 space-y-6">

                        {/* Prompt Header */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Simple 1-Minute Pitch</p>
                                <h3 className="text-lg font-bold text-slate-900">Jab bhi koi student aage padhne ki baat kare, bas itna batayiye:</h3>
                            </div>
                        </div>

                        {/* Interactive Stacked Talking Points */}
                        <div className="space-y-3 pt-2">
                            {talkingPoints.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl bg-white p-4 border border-slate-200/80 shadow-xs transition hover:border-primary/40 hover:shadow-md"
                                    >
                                        <div className="flex items-start gap-3.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 font-bold text-sm mt-0.5 sm:mt-0">
                                                <Icon className="h-4 w-4 text-primary" />
                                            </div>
                                            <p className="text-sm font-medium leading-relaxed text-slate-800">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        <span className={`self-start sm:self-center shrink-0 rounded-full px-3 py-1 text-xs font-bold border ${item.accent}`}>
                                            {item.highlight}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Next Step Callout Box */}
                        <div className="mt-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-5 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400 backdrop-blur-md">
                                    <Headphones className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Bas detail humein bhej dijiye!</p>
                                    <p className="text-sm text-slate-300 mt-0.5">Aage ki poori counselling hamari expert team karegi.</p>
                                </div>
                            </div>

                            <span className="shrink-0 text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                                Zero Effort For You
                            </span>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4 text-center">
                            <Link href={"/become-career-sathi"} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 active:scale-95">
                                Career Sathi Banein
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust */}
            <section id="trust" className="py-16 px-4 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/80">
                        <Lock className="w-3.5 h-3.5 text-emerald-600" /> 06 • Trust & Verification
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Aap bharose ke saath jud rahe hain
                    </h2>
                    <p className="mt-2 text-base text-slate-600">
                        Hamara partner program poore bharose, legal compliance aur transparency par chalta hai.
                    </p>
                </div>

                {/* Grid with Inline Vector Illustrations */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {trustPoints.map((item) => (
                        <div
                            key={item.title}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border ${item.bg} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-white`}
                        >
                            <div>
                                {/* Badge Tag */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="rounded-full bg-slate-900 px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Vector Illustration Container */}
                                <div className="my-2 py-2 rounded-2xl bg-white/60 border border-slate-100 shadow-inner flex items-center justify-center">
                                    {item.illustration}
                                </div>

                                {/* Title & Description */}
                                <h3 className={`mt-4 text-lg font-bold ${item.textColor}`}>
                                    {item.title}
                                </h3>
                                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Banner */}
                <div className="mt-10 rounded-2xl bg-slate-900 text-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                    <div className="flex items-center gap-3.5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">100% Safe & Transparent Partnership</p>
                            <p className="text-sm text-slate-400">Aapki details aur earnings bank-grade security standards ke saath fully encrypted hain.</p>
                        </div>
                    </div>

                    <Link href={"/become-career-sathi"} className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95">
                        Career Sathi Banein
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 w-full max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
                        <HelpCircle className="w-3.5 h-3.5 text-primary" /> FAQ • Clear Your Doubts
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                        Aksar poochhe jaane wale sawaal
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                        Career Sathi program ke baare me sabhi zaroori jawabh yahan dekhein.
                    </p>
                </div>

                {/* Accordion Stack with Active State Distinctiveness */}
                <div className="space-y-4">
                    {FAQS.map((f, i) => (
                        <details
                            key={i}
                            className="group rounded-2xl border border-slate-200/90 bg-white transition-all duration-300 hover:border-slate-300 open:bg-indigo-50/60 open:border-primary/40 open:shadow-lg open:shadow-indigo-100/50 [&_summary::-webkit-details-marker]:hidden"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 sm:p-6 text-left select-none">
                                <div className="flex items-center gap-3.5">
                                    {/* Question Number Pill */}
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-bold text-sm text-slate-600 group-open:bg-primary group-open:text-primary-foreground transition-colors">
                                        0{i + 1}
                                    </span>
                                    <span className="text-base sm:text-lg font-semibold text-slate-900 group-open:text-indigo-950 transition-colors">
                                        {f.q}
                                    </span>
                                </div>

                                {/* Rotational Chevron Badge */}
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all duration-300 group-open:rotate-180 group-open:bg-primary group-open:text-primary-foreground">
                                    <ChevronDown className="h-5 w-5" />
                                </span>
                            </summary>

                            {/* Answer Content */}
                            <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 text-md leading-relaxed text-slate-700 border-t border-transparent group-open:border-indigo-100/80">
                                <div className="pl-10 text-slate-600 font-base">
                                    {f.a}
                                </div>
                            </div>
                        </details>
                    ))}
                </div>

                {/* Support Helper Footer */}
                <div className="mt-10 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                            <MessageCircle className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-slate-600 font-medium text-center sm:text-left">
                            Koi aur sawaal hai? Hamari team se baat karke apna doubt door karein.
                        </p>
                    </div>

                    <Link href={"/become-career-sathi"} className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95">
                        Career Sathi Banein
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
                <div className="pointer-events-none absolute inset-0 opacity-20">
                    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
                    <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
                </div>
                <div className="relative mx-auto max-w-3xl px-5 text-center">
                    <h2 className="font-display text-4xl font-semibold sm:text-5xl">Aaj hi Career Sathi baniye</h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/90">
                        Roz aapke paas aane wale students ko sahi raasta dikhaiye — aur apni kamai badhaiye. Registration bilkul free hai, aur koi obligation nahi.
                    </p>
                    <div className="mt-8">
                        <Link href="/become-career-sathi" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-5 text-base font-bold text-primary shadow-2xl transition hover:-translate-y-0.5">
                            Career Sathi Banein
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border bg-background py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
                    <Logo />
                    <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-foreground">LearningShala ke baare mein</a>
                        <a href="#" className="hover:text-foreground">Terms & Conditions</a>
                        <a href="#" className="hover:text-foreground">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground">Helpline</a>
                    </nav>
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} LearningShala</p>
                </div>
            </footer>
        </div>
    );
}

export function Section({ id, eyebrow, title, children, tint = false }: { id?: string; eyebrow: string; title: string; children: React.ReactNode; tint?: boolean }) {
    return (
        <section id={id} className={`py-20 ${tint ? "bg-cream" : ""}`}>
            <div className="mx-auto max-w-7xl px-5">
                <div className="mb-12 max-w-2xl">
                    <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
                </div>
                {children}
            </div>
        </section>
    );
}

const FAQS = [
    { q: "Career Sathi banne ka koi charge hai?", a: "Bilkul nahi. Registration, KYC, banner, QR code — sab kuch free hai. Aapko ek rupaya bhi nahi dena. Ulta hum aapki dukaan par branding lagate hain, bina kisi kharche ke." },
    { q: "Payment kab aur kaise milega?", a: "Jab bhi aap payout request daalenge, paisa seedha aapke bank account mein credit ho jayega — 1 business day ke andar. Isiliye onboarding ke time hum aapka bank account aur cancelled cheque lete hain." },
    { q: "Kya mujhe koi target pura karna hoga?", a: "Nahi. Koi monthly target nahi, koi pressure nahi. Aap apni marzi se, apni speed se kaam kariye. Jitne students aayenge, utni kamai hogi — bas itni si baat hai." },
    { q: "Kya mujhe students ko convince karna padega?", a: "Nahi. Aapko sirf itna karna hai ki jo student aage padhne ki baat kare, use bata dijiye ki online degree ka option hai — aur uski detail humein bhej dijiye. Convince karna, counselling karna, admission karana — ye sab hamari team ka kaam hai." },
    { q: "Agar student admission nahi leta to?", a: "Koi problem nahi. Har genuine lead ke liye aapko earning milti hai, chahe admission ho ya na ho. Admission hone par extra milta hai — par lead ka fayda aapko har haal mein milega." },
    { q: "Main apni leads aur kamai kaise track karunga?", a: "Aap jab chahein apni leads ka count aur unka status pooch sakte hain — kitni leads aayin, kitni qualified hui, kitne admission hue. Ye jaankari aapko din mein ek baar mil jati hai. Poora record transparent rehta hai." },
    { q: "Kya mujhe degree programs ki poori jaankari honi chahiye?", a: "Bilkul zaroori nahi. Onboarding ke time hamari team aapko basic training degi — bas itna ki aap student ko sahi direction dikha sakein. Detailed jaankari, fees, eligibility — ye sab hamare counsellors student ko khud batate hain." },
];