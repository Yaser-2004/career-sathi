"use client";

import { Logo, Field } from "./Hero";
import DocUpload from "./DocUpload";
import { FormEvent, ReactNode, useState } from "react";
import {
    ArrowRight,
    Building2,
    Check,
    ChevronLeft,
    ChevronRight,
    CreditCard,
    FileCheck2,
    GraduationCap,
    ScrollText,
    Sparkles,
    Upload,
    User
} from "lucide-react";

const STEPS = [
    { key: "A", title: "Partner Details", short: "Partner", Icon: User, bg: "bg-sky", ring: "text-sky-700" },
    { key: "B", title: "Shop / Business", short: "Shop", Icon: Building2, bg: "bg-mint", ring: "text-emerald-700" },
    { key: "C", title: "Payout / Bank", short: "Bank", Icon: CreditCard, bg: "bg-sun", ring: "text-amber-700" },
    { key: "D", title: "Documents", short: "Docs", Icon: FileCheck2, bg: "bg-lilac", ring: "text-violet-700" },
    { key: "E", title: "Declaration", short: "Declare", Icon: ScrollText, bg: "bg-peach", ring: "text-orange-700" },
];

export interface OnboardingData {
    // Step 0
    full_name: string;
    dob: string;
    mobile: string;
    alt_mobile: string;
    email: string;
    pan: string;
    aadhaar4: string;
    gender: string;

    // Step 1
    shop_name: string;
    biz_type: string;
    address: string;
    locality: string;
    city: string;
    pincode: string;
    google_loc: string;
    footfall: string;

    // Step 2
    acc_holder: string;
    bank_name: string;
    acc_number: string;
    ifsc: string;
    upi: string;

    // Step 3
    doc_id: boolean;
    doc_pan: boolean;
    doc_shop_addr: boolean;
    doc_cheque: boolean;
    doc_photo_out: boolean;
    doc_photo_in: boolean;

    // Step 4
    coi: string;
    coi_specify: string;
    declaration_agree: boolean;
}

const initialFormData: OnboardingData = {
    full_name: "",
    dob: "",
    mobile: "",
    alt_mobile: "",
    email: "",
    pan: "",
    aadhaar4: "",
    gender: "",

    shop_name: "",
    biz_type: "",
    address: "",
    locality: "",
    city: "",
    pincode: "",
    google_loc: "",
    footfall: "",

    acc_holder: "",
    bank_name: "",
    acc_number: "",
    ifsc: "",
    upi: "",

    doc_id: false,
    doc_pan: false,
    doc_shop_addr: false,
    doc_cheque: false,
    doc_photo_out: false,
    doc_photo_in: false,

    coi: "",
    coi_specify: "",
    declaration_agree: false,
};

function Stepper({ current, onSelectStep }: { current: number; onSelectStep: (idx: number) => void }) {
    const pct = ((current + 1) / STEPS.length) * 100;
    return (
        <div className="border-b border-border bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Step {current + 1} of {STEPS.length}
                </p>
                <p className="text-xs font-semibold text-primary">{Math.round(pct)}% complete</p>
            </div>
            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
            <ol className="flex flex-wrap items-center justify-between gap-3">
                {STEPS.map((s, i) => {
                    const done = i < current;
                    const active = i === current;
                    return (
                        <li key={s.key} className="flex min-w-0 flex-1 items-center gap-2">
                            <button
                                type="button"
                                onClick={() => onSelectStep(i)}
                                className={`flex items-center gap-2 rounded-2xl p-1.5 text-left transition hover:bg-secondary/60 focus:outline-none ${active ? "ring-2 ring-primary/30" : ""}`}
                            >
                                <span
                                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl border transition ${active
                                        ? `${s.bg} ${s.ring} border-transparent shadow-md`
                                        : done
                                            ? "bg-primary text-primary-foreground border-transparent"
                                            : "bg-white text-muted-foreground border-border"
                                        }`}
                                >
                                    {done ? <Check className="h-5 w-5" strokeWidth={2.5} /> : <s.Icon className="h-5 w-5" strokeWidth={2.2} />}
                                </span>
                                <div className="hidden min-w-0 sm:block">
                                    <p className={`text-[10px] font-bold uppercase tracking-wider ${active ? "text-primary" : "text-muted-foreground"}`}>Step {s.key}</p>
                                    <p className={`truncate text-xs font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>{s.short}</p>
                                </div>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

function StepShell({ index, children }: { index: number; children: ReactNode }) {
    const s = STEPS[index];
    return (
        <div>
            <div className="flex items-center gap-3 border-b border-border bg-cream px-6 py-4">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${s.bg} ${s.ring}`}>
                    <s.Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Section {s.key}</p>
                    <p className="font-display text-lg font-extrabold text-foreground">{s.title}</p>
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}

export default function OnboardingForm() {
    const [submitted, setSubmitted] = useState(false);
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<OnboardingData>(initialFormData);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (field: keyof OnboardingData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => {
                const nextErrors = { ...prev };
                delete nextErrors[field];
                return nextErrors;
            });
        }
    };

    const scrollTop = () =>
        setTimeout(() => {
            document.getElementById("form-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);

    const validateStep = (stepIndex: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (stepIndex === 0) {
            if (!formData.full_name.trim()) newErrors.full_name = "Full Name is required";
            if (!formData.dob.trim()) newErrors.dob = "Date of Birth is required";
            
            if (!formData.mobile.trim()) {
                newErrors.mobile = "Mobile number is required";
            } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
                newErrors.mobile = "Enter a valid 10-digit mobile number";
            }

            if (formData.alt_mobile.trim() && !/^[6-9]\d{9}$/.test(formData.alt_mobile.trim())) {
                newErrors.alt_mobile = "Enter a valid 10-digit alternate mobile number";
            }

            if (!formData.email.trim()) {
                newErrors.email = "Email ID is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
                newErrors.email = "Enter a valid email address";
            }

            if (!formData.pan.trim()) {
                newErrors.pan = "PAN Number is required";
            } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(formData.pan.trim())) {
                newErrors.pan = "Enter a valid 10-character PAN (e.g. ABCDE1234F)";
            }

            if (!formData.aadhaar4.trim()) {
                newErrors.aadhaar4 = "Aadhaar number is required";
            } else if (!/^\d{4}$/.test(formData.aadhaar4.trim()) && !/^\d{12}$/.test(formData.aadhaar4.trim())) {
                newErrors.aadhaar4 = "Enter last 4 digits or 12 digits of Aadhaar";
            }

            if (!formData.gender) newErrors.gender = "Please select gender";
        }

        if (stepIndex === 1) {
            if (!formData.shop_name.trim()) newErrors.shop_name = "Shop / Business Name is required";
            if (!formData.biz_type) newErrors.biz_type = "Please select business type";
            if (!formData.address.trim()) newErrors.address = "Full shop address is required";
            if (!formData.locality.trim()) newErrors.locality = "Locality / Landmark is required";
            if (!formData.city.trim()) newErrors.city = "City is required";
            
            if (!formData.pincode.trim()) {
                newErrors.pincode = "Pincode is required";
            } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
                newErrors.pincode = "Enter a valid 6-digit pincode";
            }

            if (!formData.footfall) newErrors.footfall = "Please select daily student footfall";
        }

        if (stepIndex === 2) {
            if (!formData.acc_holder.trim()) newErrors.acc_holder = "Account holder name is required";
            if (!formData.bank_name.trim()) newErrors.bank_name = "Bank name is required";
            
            if (!formData.acc_number.trim()) {
                newErrors.acc_number = "Account number is required";
            } else if (!/^\d{9,18}$/.test(formData.acc_number.trim())) {
                newErrors.acc_number = "Enter valid account number (9-18 digits)";
            }

            if (!formData.ifsc.trim()) {
                newErrors.ifsc = "IFSC code is required";
            } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(formData.ifsc.trim())) {
                newErrors.ifsc = "Enter valid 11-character IFSC (e.g. SBIN0001234)";
            }
        }

        if (stepIndex === 3) {
            if (!formData.doc_id) newErrors.doc_id = "ID Proof document upload is required";
            if (!formData.doc_pan) newErrors.doc_pan = "PAN Card copy upload is required";
            if (!formData.doc_cheque) newErrors.doc_cheque = "Cancelled cheque upload is required";
            if (!formData.doc_photo_out) newErrors.doc_photo_out = "Outside shop photo is required";
            if (!formData.doc_photo_in) newErrors.doc_photo_in = "Inside shop photo is required";
        }

        if (stepIndex === 4) {
            if (!formData.coi) newErrors.coi = "Please select whether relation exists or not";
            if (formData.coi === "yes" && !formData.coi_specify.trim()) {
                newErrors.coi_specify = "Please specify relation details";
            }
            if (!formData.declaration_agree) {
                newErrors.declaration_agree = "You must agree to the declaration statement";
            }
        }

        setErrors((prev) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const next = () => {
        if (validateStep(step)) {
            setStep((s) => Math.min(s + 1, STEPS.length - 1));
            scrollTop();
        }
    };

    const prev = () => {
        setStep((s) => Math.max(s - 1, 0));
        scrollTop();
    };

    const handleSelectStep = (targetStep: number) => {
        if (targetStep < step) {
            setStep(targetStep);
            scrollTop();
        } else if (targetStep > step) {
            if (validateStep(step)) {
                setStep(targetStep);
                scrollTop();
            }
        }
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        let firstInvalidStep = -1;
        for (let i = 0; i < STEPS.length; i++) {
            if (!validateStep(i)) {
                if (firstInvalidStep === -1) firstInvalidStep = i;
            }
        }

        if (firstInvalidStep !== -1) {
            setStep(firstInvalidStep);
            scrollTop();
            return;
        }

        setSubmitted(true);
        setFormData(initialFormData);
        setErrors({});
        setStep(0);
        scrollTop();
    };

    const isLast = step === STEPS.length - 1;

    return (
        <form onSubmit={onSubmit} className="overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
            {/* Form header */}
            <div id="form-top" className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div>
                        <Logo />
                        <p className="mt-1 font-display text-lg font-extrabold text-primary">CAREER SATHI</p>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Partner Onboarding & Basic KYC</p>
                    </div>
                </div>
            </div>

            {submitted && (
                <div className="flex items-center gap-2 border-b border-primary/20 bg-mint px-6 py-4 text-sm font-medium text-emerald-800">
                    <Sparkles className="h-5 w-5 text-emerald-600 shrink-0" /> Dhanyavaad! Aapki details receive ho gayi hain. Hamari team 24 ghante ke andar aapse contact karegi.
                </div>
            )}

            <Stepper current={step} onSelectStep={handleSelectStep} />

            {/* Step 0: Partner Details */}
            {step === 0 && (
                <StepShell index={0}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Field
                            label="Full Name (as per PAN)"
                            name="full_name"
                            required
                            placeholder="e.g. Rahul Kumar Sharma"
                            value={formData.full_name}
                            onChange={(e) => handleChange("full_name", e.target.value)}
                            error={errors.full_name}
                        />
                        <Field
                            label="Date of Birth"
                            name="dob"
                            type="date"
                            required
                            placeholder="DD / MM / YYYY"
                            value={formData.dob}
                            onChange={(e) => handleChange("dob", e.target.value)}
                            error={errors.dob}
                        />
                        <Field
                            label="Mobile No. (WhatsApp)"
                            name="mobile"
                            type="tel"
                            required
                            placeholder="10-digit WhatsApp mobile number"
                            maxLength={10}
                            value={formData.mobile}
                            onChange={(e) => handleChange("mobile", e.target.value)}
                            error={errors.mobile}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <Field
                                label="Alternate Mobile No."
                                name="alt_mobile"
                                type="tel"
                                placeholder="Alternate 10-digit number"
                                maxLength={10}
                                value={formData.alt_mobile}
                                onChange={(e) => handleChange("alt_mobile", e.target.value)}
                                error={errors.alt_mobile}
                            />
                            <Field
                                label="Email ID"
                                name="email"
                                type="email"
                                required
                                placeholder="e.g. rahul.sharma@gmail.com"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                error={errors.email}
                            />
                        </div>
                        <Field
                            label="PAN Number"
                            name="pan"
                            required
                            placeholder="10-character PAN e.g. ABCDE1234F"
                            maxLength={10}
                            value={formData.pan}
                            onChange={(e) => handleChange("pan", e.target.value.toUpperCase())}
                            error={errors.pan}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <Field
                                label="Aadhaar No. (last 4 digits)"
                                name="aadhaar4"
                                required
                                placeholder="Last 4 digits e.g. 4321"
                                maxLength={12}
                                value={formData.aadhaar4}
                                onChange={(e) => handleChange("aadhaar4", e.target.value)}
                                error={errors.aadhaar4}
                            />
                            <Field
                                label="Gender"
                                name="gender"
                                required
                                options={[
                                    { label: "Male", value: "Male" },
                                    { label: "Female", value: "Female" },
                                    { label: "Other", value: "Other" }
                                ]}
                                value={formData.gender}
                                onChange={(e) => handleChange("gender", e.target.value)}
                                error={errors.gender}
                            />
                        </div>
                    </div>
                </StepShell>
            )}

            {/* Step 1: Shop / Business */}
            {step === 1 && (
                <StepShell index={1}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Field
                            label="Shop / Business Name"
                            name="shop_name"
                            required
                            placeholder="e.g. Sharma Cyber Cafe & Digital Services"
                            value={formData.shop_name}
                            onChange={(e) => handleChange("shop_name", e.target.value)}
                            error={errors.shop_name}
                        />
                        <Field
                            label="Business Type"
                            name="biz_type"
                            required
                            options={[
                                { label: "Cyber Cafe", value: "Cyber Cafe" },
                                { label: "Photocopy / Xerox Shop", value: "Photocopy / Xerox Shop" },
                                { label: "Coaching Center", value: "Coaching Center" },
                                { label: "Stationery / Book Shop", value: "Stationery / Book Shop" },
                                { label: "Other", value: "Other" }
                            ]}
                            value={formData.biz_type}
                            onChange={(e) => handleChange("biz_type", e.target.value)}
                            error={errors.biz_type}
                        />
                        <Field
                            full
                            label="Full Shop Address"
                            name="address"
                            required
                            placeholder="Shop No., Building Name, Street / Road Name"
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            error={errors.address}
                        />
                        <Field
                            label="Locality / Landmark"
                            name="locality"
                            required
                            placeholder="e.g. Near Main Market, Opposite SBI Bank"
                            value={formData.locality}
                            onChange={(e) => handleChange("locality", e.target.value)}
                            error={errors.locality}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <Field
                                label="City"
                                name="city"
                                required
                                placeholder="e.g. Jaipur, Lucknow, Delhi"
                                value={formData.city}
                                onChange={(e) => handleChange("city", e.target.value)}
                                error={errors.city}
                            />
                            <Field
                                label="Pincode"
                                name="pincode"
                                required
                                placeholder="6-digit Pincode e.g. 302001"
                                maxLength={6}
                                value={formData.pincode}
                                onChange={(e) => handleChange("pincode", e.target.value)}
                                error={errors.pincode}
                            />
                        </div>
                        <Field
                            label="Exact Google Location (Optional)"
                            name="google_loc"
                            placeholder="Google Maps link or Plus Code"
                            value={formData.google_loc}
                            onChange={(e) => handleChange("google_loc", e.target.value)}
                            error={errors.google_loc}
                        />
                        <Field
                            label="Approx. Daily Student Footfall"
                            name="footfall"
                            required
                            options={[
                                { label: "1 - 20 students / day", value: "1-20" },
                                { label: "20 - 50 students / day", value: "20-50" },
                                { label: "50 - 100 students / day", value: "50-100" },
                                { label: "100+ students / day", value: "100+" }
                            ]}
                            value={formData.footfall}
                            onChange={(e) => handleChange("footfall", e.target.value)}
                            error={errors.footfall}
                        />
                    </div>
                </StepShell>
            )}

            {/* Step 2: Payout / Bank */}
            {step === 2 && (
                <StepShell index={2}>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <Field
                            label="Account Holder Name"
                            name="acc_holder"
                            required
                            placeholder="Name exactly as printed in Bank Account"
                            value={formData.acc_holder}
                            onChange={(e) => handleChange("acc_holder", e.target.value)}
                            error={errors.acc_holder}
                        />
                        <Field
                            label="Bank Name"
                            name="bank_name"
                            required
                            placeholder="e.g. State Bank of India, HDFC Bank"
                            value={formData.bank_name}
                            onChange={(e) => handleChange("bank_name", e.target.value)}
                            error={errors.bank_name}
                        />
                        <Field
                            label="Account Number"
                            name="acc_number"
                            required
                            placeholder="Enter bank account number"
                            maxLength={18}
                            value={formData.acc_number}
                            onChange={(e) => handleChange("acc_number", e.target.value)}
                            error={errors.acc_number}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                            <Field
                                label="IFSC Code"
                                name="ifsc"
                                required
                                placeholder="11-char IFSC e.g. SBIN0001234"
                                maxLength={11}
                                value={formData.ifsc}
                                onChange={(e) => handleChange("ifsc", e.target.value.toUpperCase())}
                                error={errors.ifsc}
                            />
                            <Field
                                label="UPI ID (optional)"
                                name="upi"
                                placeholder="e.g. 9876543210@paytm or name@upi"
                                value={formData.upi}
                                onChange={(e) => handleChange("upi", e.target.value)}
                                error={errors.upi}
                            />
                        </div>
                    </div>
                </StepShell>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
                <StepShell index={3}>
                    <div className="p-5">
                        <div className="mb-4 flex items-start gap-2 rounded-xl bg-sky p-3 text-xs text-sky-900">
                            <Upload className="mt-0.5 h-4 w-4 shrink-0" />
                            <p>Har document ke saamne "Upload document" par click karke JPG, PNG ya PDF file attach kariye. File attach hote hi checkbox apne aap tick ho jayega.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                            <DocUpload
                                label="ID Proof (Aadhaar / Voter / DL)"
                                name="doc_id"
                                required
                                error={errors.doc_id}
                                onFileChange={(hasFile) => handleChange("doc_id", hasFile)}
                            />
                            <DocUpload
                                label="PAN Card copy"
                                name="doc_pan"
                                required
                                error={errors.doc_pan}
                                onFileChange={(hasFile) => handleChange("doc_pan", hasFile)}
                            />
                            <DocUpload
                                label="Shop Address Proof"
                                name="doc_shop_addr"
                                error={errors.doc_shop_addr}
                                onFileChange={(hasFile) => handleChange("doc_shop_addr", hasFile)}
                            />
                            <DocUpload
                                label="Cancelled Cheque / Passbook"
                                name="doc_cheque"
                                required
                                error={errors.doc_cheque}
                                onFileChange={(hasFile) => handleChange("doc_cheque", hasFile)}
                            />
                            <DocUpload
                                label="Shop photo — OUTSIDE (signboard)"
                                name="doc_photo_out"
                                accept="image/*"
                                required
                                error={errors.doc_photo_out}
                                onFileChange={(hasFile) => handleChange("doc_photo_out", hasFile)}
                            />
                            <DocUpload
                                label="Shop photo — INSIDE"
                                name="doc_photo_in"
                                accept="image/*"
                                required
                                error={errors.doc_photo_in}
                                onFileChange={(hasFile) => handleChange("doc_photo_in", hasFile)}
                            />
                        </div>
                    </div>
                </StepShell>
            )}

            {/* Step 4: Declaration & Review */}
            {step === 4 && (
                <StepShell index={4}>
                    <div className="space-y-6 p-6">
                        {/* Declaration Radio Question */}
                        <div className="space-y-3">
                            <p className="text-sm font-semibold text-foreground">
                                Is this partner related to, or associated with, the enrolling FMS (family / friend / business partner / same address)? <span className="text-red-500">*</span>
                            </p>
                            <div className="grid gap-3 md:grid-cols-2">
                                <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition ${formData.coi === "no" ? "border-primary bg-primary/10 ring-2 ring-primary/30 text-primary" : "border-border bg-mint text-emerald-900"}`}>
                                    <input
                                        type="radio"
                                        name="coi"
                                        value="no"
                                        checked={formData.coi === "no"}
                                        onChange={() => handleChange("coi", "no")}
                                        className="h-4 w-4 accent-primary"
                                    />
                                    NO — no relation
                                </label>
                                <label className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition ${formData.coi === "yes" ? "border-primary bg-primary/10 ring-2 ring-primary/30 text-primary" : "border-border bg-peach text-orange-900"}`}>
                                    <input
                                        type="radio"
                                        name="coi"
                                        value="yes"
                                        checked={formData.coi === "yes"}
                                        onChange={() => handleChange("coi", "yes")}
                                        className="h-4 w-4 accent-primary"
                                    />
                                    YES — relation exists
                                </label>
                            </div>
                            {errors.coi && <p className="text-xs font-semibold text-red-600">{errors.coi}</p>}

                            {formData.coi === "yes" && (
                                <div className="mt-3">
                                    <input
                                        name="coi_specify"
                                        placeholder="If yes, specify details of relation / association..."
                                        value={formData.coi_specify}
                                        onChange={(e) => handleChange("coi_specify", e.target.value)}
                                        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    />
                                    {errors.coi_specify && <p className="mt-1 text-xs font-semibold text-red-600">{errors.coi_specify}</p>}
                                </div>
                            )}
                        </div>

                        {/* Legal warning */}
                        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/80 p-4 text-xs font-medium text-amber-900 leading-relaxed">
                            ⚠️ A false declaration is treated as fraud — leads to termination, payout clawback, and possible legal action.
                        </div>

                        {/* Confirmation Checkbox */}
                        <div className="rounded-2xl border border-border bg-cream p-4">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="declaration_agree"
                                    checked={formData.declaration_agree}
                                    onChange={(e) => handleChange("declaration_agree", e.target.checked)}
                                    className="mt-1 h-5 w-5 accent-primary rounded"
                                />
                                <span className="text-xs font-medium text-foreground leading-relaxed">
                                    I hereby confirm and declare that all information provided in this onboarding form and attached documents are true, complete, and accurate. I understand and agree to LearningShala Partner Terms.
                                </span>
                            </label>
                            {errors.declaration_agree && <p className="mt-2 text-xs font-semibold text-red-600 pl-8">{errors.declaration_agree}</p>}
                        </div>

                        {/* Quick Summary Box */}
                        <div className="rounded-2xl border border-border bg-white p-4 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Onboarding Overview Summary</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                <div className="bg-secondary/50 p-2.5 rounded-lg">
                                    <p className="font-semibold text-muted-foreground">Partner</p>
                                    <p className="font-bold text-foreground truncate">{formData.full_name || "Not provided"}</p>
                                    <p className="text-[11px] text-muted-foreground">{formData.mobile || "-"}</p>
                                </div>
                                <div className="bg-secondary/50 p-2.5 rounded-lg">
                                    <p className="font-semibold text-muted-foreground">Shop / Business</p>
                                    <p className="font-bold text-foreground truncate">{formData.shop_name || "Not provided"}</p>
                                    <p className="text-[11px] text-muted-foreground">{formData.city ? `${formData.city} (${formData.pincode})` : "-"}</p>
                                </div>
                                <div className="bg-secondary/50 p-2.5 rounded-lg">
                                    <p className="font-semibold text-muted-foreground">Bank Account</p>
                                    <p className="font-bold text-foreground truncate">{formData.bank_name || "Not provided"}</p>
                                    <p className="text-[11px] text-muted-foreground">{formData.acc_number ? `A/C: ****${formData.acc_number.slice(-4)}` : "-"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </StepShell>
            )}

            {/* Footer nav */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-cream p-6 sm:flex-row">
                <button
                    type="button"
                    onClick={prev}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronLeft className="h-4 w-4" /> Previous
                </button>
                <p className="hidden text-xs text-muted-foreground sm:block">
                    Confidential — for internal onboarding use.
                </p>
                {isLast ? (
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5"
                    >
                        Submit & Career Sathi Banein <ArrowRight className="h-4 w-4" />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={next}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5"
                    >
                        Next <ChevronRight className="h-4 w-4" />
                    </button>
                )}
            </div>
        </form>
    );
}

