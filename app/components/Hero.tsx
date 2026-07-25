import { type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logols.webp";
import { ShieldCheck, Headset, FileText, BadgeCheck } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <span className={`font-display text-2xl font-semibold tracking-tight text-primary ${className}`}>
            <Image src={logo} alt="Logo" width={200} />
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
            {error && <span className="mt-1 text-xs font-semibold text-red-600">{error}</span>}
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
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
                </div>
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:pt-18 lg:pb-28">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            LearningShala Partner Program
                        </span>
                        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                            Bano <span className="text-primary">Career Sathi</span>.
                            <br />
                            Students ko sahi raasta dikhao, aur kamao.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                            Aapke paas roz aane wale students ko top private universities ke Online Degree Programs ke baare mein bataiye — aur har student par kamai kariye.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <CtaButton size="lg">Career Sathi Banein</CtaButton>
                            <a href="#kaam" className="text-sm font-semibold text-foreground underline-offset-4 hover:underline">
                                Kaise kaam karta hai ↓
                            </a>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-foreground/80">
                            {["Zero investment", "Koi target nahi", "Fast payout"].map((t) => (
                                <span key={t} className="inline-flex items-center gap-2">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 6L9 17l-5-5" /></svg>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hero visual card */}
                    <div className="relative">
                        <div className="rounded-3xl border border-border bg-white p-6 shadow-2xl shadow-primary/10">
                            <div className="flex items-center justify-between border-b border-border pb-4">
                                <Logo className="text-lg" />
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                                    Official Partner
                                </span>
                            </div>
                            <div className="mt-6">
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Career Sathi ID</p>
                                <p className="mt-1 font-display text-2xl font-bold text-foreground">CS-00421</p>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div className="rounded-xl bg-cream p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Leads (30d)</p>
                                    <p className="mt-1 font-display text-2xl font-bold text-foreground">37</p>
                                </div>
                                <div className="rounded-xl bg-cream p-4">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Payout</p>
                                    <p className="mt-1 font-display text-2xl font-bold text-primary">₹ 14,200</p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
                                <div className="grid h-16 w-16 place-items-center rounded-lg bg-white">
                                    {/* faux QR */}
                                    <div className="grid h-12 w-12 grid-cols-6 grid-rows-6 gap-[2px]">
                                        {Array.from({ length: 36 }).map((_, i) => (
                                            <span key={i} className={((i * 7) % 3 === 0 || i % 5 === 0) ? "bg-foreground" : "bg-transparent"} />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Aapka Unique QR</p>
                                    <p className="text-xs text-muted-foreground">Students scan karke register karein</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is */}
            <Section id="kya-hai" eyebrow="01" title="Career Sathi kya hai?">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Career Sathi ek simple partnership hai. Aapke paas jo students aate hain, unme se kai aage padhna chahte hain — par unhe sahi guidance nahi milti. Aap unhe top private universities ke Online Degree Programs ke baare mein bata sakte hain, unki detail humein bhej sakte hain — aur har student par kamai kar sakte hain.
                        </p>
                        <p className="text-foreground">
                            Aapko koi expert banne ki zaroorat nahi. Bas students se baat kariye, baaki hum sambhal lenge.
                        </p>
                        <div className="pt-2"><CtaButton>Career Sathi Banein</CtaButton></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { k: "500+", v: "Active Career Sathis" },
                            { k: "20+", v: "Partner Universities" },
                            { k: "24 hr", v: "Onboarding Call" },
                            { k: "1 day", v: "Payout" },
                        ].map((s) => (
                            <div key={s.v} className="rounded-2xl border border-border bg-white p-5">
                                <p className="font-display text-3xl font-semibold text-primary">{s.k}</p>
                                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why */}
            <Section eyebrow="02" title="Career Sathi kyun banein?" tint>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: "Zero investment", d: "Na kuch kharidna hai, na kuch dena hai." },
                        { t: "Koi target nahi", d: "Apni marzi se, apni speed se kamaiye." },
                        { t: "Free branded banner", d: "Aapki dukaan par, aapke unique QR code ke saath." },
                        { t: "Fast, transparent payout", d: "Request daaliye, seedha aapke account mein." },
                        { t: "Apni kamai track kariye", d: "Kitni leads aayin, kitne admission hue, sab pata chalega." },
                        { t: "Top partners ke liye inaam", d: "Best performing Career Sathis ko exciting prizes." },
                    ].map((b, i) => (
                        <div key={b.t} className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-semibold text-primary">
                                {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="mt-5 text-lg font-semibold text-foreground">{b.t}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center"><CtaButton>Career Sathi Banein</CtaButton></div>
            </Section>

            {/* How it works */}
            <Section id="kaam" eyebrow="03" title="Kaise kaam karta hai?">
                <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { t: "Register kariye", d: "Chhota sa form bhariye. Hamari team 24 ghante mein aapko call karegi." },
                        { t: "KYC complete kariye", d: "Field executive dukaan par aayega, KYC karega, phir Head Office Video KYC hoga." },
                        { t: "Live ho jaiye", d: "Aapko unique QR code aur branded banner milega — dukaan par lag jayega." },
                        { t: "Kamana shuru kariye", d: "Students QR scan karke register karenge, aur aapki kamai shuru." },
                    ].map((s, i) => (
                        <li key={s.t} className="relative rounded-2xl border border-border bg-white p-6">
                            <div className="flex items-center gap-3">
                                <span className="grid h-9 w-9 place-items-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">{i + 1}</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Step {i + 1}</span>
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-foreground">{s.t}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                        </li>
                    ))}
                </ol>
                <div className="mt-10 text-center"><CtaButton>Career Sathi Banein</CtaButton></div>
            </Section>

            {/* Who */}
            <Section eyebrow="04" title="Kaun ban sakta hai Career Sathi?" tint>
                <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Koi bhi shop ya business jahan students regular aate hain — aap Career Sathi ban sakte hain. Agar aap students se roz milte hain aur unka bharosa rakhte hain, to ye aapke liye hai.
                        </p>
                        <div className="pt-2"><CtaButton>Career Sathi Banein</CtaButton></div>
                    </div>
                    <ul className="space-y-3">
                        {["Students ka regular footfall", "Valid ID aur PAN card", "Payout ke liye bank account"].map((t) => (
                            <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-white px-5 py-4">
                                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </span>
                                <span className="font-medium text-foreground">{t}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            {/* What you'll tell students */}
            <Section eyebrow="05" title="Students se kya kehna hai?">
                <div className="max-w-5xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                    <p className="text-foreground">Aapko degree ka expert banne ki zaroorat nahi hai.</p>
                    <p>
                        Jab koi student aage padhne ki baat kare, bas itna batayiye — top private universities ab Online Degree Programs offer karti hain. Student ghar baithe, job ke saath, apni speed se degree complete kar sakta hai. Degree bilkul valid aur recognized hoti hai.
                    </p>
                    <p>Uski detail humein bhej dijiye — aage ki poori counselling hamari team karegi.</p>
                    <div className="pt-6"><CtaButton>Career Sathi Banein</CtaButton></div>
                </div>
            </Section>

            {/* Trust */}
            <Section eyebrow="06" title="Aap bharose ke saath jud rahe hain" tint>
                <div className="grid gap-4 md:grid-cols-2">
                    {[
                        {
                            icon: ShieldCheck,
                            text: "Poori KYC aur Video KYC ke baad hi partner banaya jata hai",
                        },
                        {
                            icon: Headset,
                            text: "Har Career Sathi ke liye Head Office se dedicated point of contact",
                        },
                        {
                            icon: FileText,
                            text: "Leads aur payout ka poora transparent record",
                        },
                        {
                            icon: BadgeCheck,
                            text: "Official partner status, aapki dukaan ki apni branding ke saath",
                        },
                    ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                            </span>
                            <p className="text-foreground font-medium">{text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 text-center"><CtaButton>Career Sathi Banein</CtaButton></div>
            </Section>

            {/* FAQ */}
            <section id="faq" className="py-20 w-full">
                <div className="mx-auto max-w-5xl">
                    <h1 className="text-3xl font-bold text-foreground text-center">Aksar poochhe jaane wale sawaal</h1>
                </div>
                <div className="mx-auto mt-10 max-w-5xl divide-y divide-border rounded-2xl border border-border bg-white">
                    {FAQS.map((f, i) => (
                        <details key={i} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                                <span className="text-base font-semibold text-foreground">{f.q}</span>
                                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary transition group-open:rotate-45">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                                </span>
                            </summary>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                        </details>
                    ))}
                </div>
                <div className="mt-10 text-center"><CtaButton>Career Sathi Banein</CtaButton></div>
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
                    <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} LearningShala</p>
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