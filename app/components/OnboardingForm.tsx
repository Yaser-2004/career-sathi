"use client";

import { Logo, SectionBand, Field } from "./Hero";
import DocUpload from "./DocUpload";
import { FormEvent, useState } from "react";

export default function OnboardingForm() {
    const [formData, setFormData] = useState({
        full_name: "",
        dob: "",
        mobile: "",
        alt_mobile: "",
        email: "",
        pan: "",
        aadhaar: "",
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
        coi: "",
        coi_specify: "",
    });

    const [docs, setDocs] = useState({
        doc_id: false,
        doc_pan: false,
        doc_shop_addr: false,
        doc_cheque: false,
        doc_photo_out: false,
        doc_photo_in: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleDocChange = (name: keyof typeof docs, hasFile: boolean) => {
        setDocs((prev) => ({ ...prev, [name]: hasFile }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        // Section A: Owner Details
        if (!formData.full_name.trim()) {
            newErrors.full_name = "Full Name (as per PAN) is required";
        } else if (formData.full_name.trim().length < 2) {
            newErrors.full_name = "Name must be at least 2 characters";
        }

        if (!formData.dob.trim()) {
            newErrors.dob = "Date of Birth is required";
        } else if (
            !/^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-](19|20)\d\d$/.test(formData.dob.trim()) &&
            !/^\d{4}-\d{2}-\d{2}$/.test(formData.dob.trim())
        ) {
            newErrors.dob = "Enter valid Date of Birth (DD / MM / YYYY)";
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = "WhatsApp Mobile Number is required";
        } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
            newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
        }

        if (formData.alt_mobile.trim()) {
            if (!/^[6-9]\d{9}$/.test(formData.alt_mobile.trim())) {
                newErrors.alt_mobile = "Enter a valid 10-digit mobile number";
            } else if (formData.alt_mobile.trim() === formData.mobile.trim()) {
                newErrors.alt_mobile = "Alternate mobile cannot be same as WhatsApp number";
            }
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email ID is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Enter a valid Email address";
        }

        if (!formData.pan.trim()) {
            newErrors.pan = "PAN Number is required";
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i.test(formData.pan.trim())) {
            newErrors.pan = "Enter a valid 10-character PAN (e.g. ABCDE1234F)";
        }

        if (!formData.aadhaar.trim()) {
            newErrors.aadhaar = "Aadhaar Number is required";
        } else if (!/^\d{12}$/.test(formData.aadhaar.trim())) {
            newErrors.aadhaar = "Enter a valid 12-digit Aadhaar number";
        }

        if (!formData.gender.trim()) {
            newErrors.gender = "Please select gender";
        }

        // Section B: Shop Details
        if (!formData.shop_name.trim()) {
            newErrors.shop_name = "Shop / Business Name is required";
        }

        if (!formData.biz_type.trim()) {
            newErrors.biz_type = "Business Type is required";
        }

        if (!formData.address.trim()) {
            newErrors.address = "Full Shop Address is required";
        } else if (formData.address.trim().length < 5) {
            newErrors.address = "Address must be at least 5 characters";
        }

        if (!formData.locality.trim()) {
            newErrors.locality = "Locality / Landmark is required";
        }

        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }

        if (!formData.pincode.trim()) {
            newErrors.pincode = "Pincode is required";
        } else if (!/^\d{6}$/.test(formData.pincode.trim())) {
            newErrors.pincode = "Enter a valid 6-digit Pincode";
        }

        if (!formData.google_loc.trim()) {
            newErrors.google_loc = "Google Location (Plus Code / Pin Link) is required";
        }

        if (!formData.footfall.trim()) {
            newErrors.footfall = "Daily Student Footfall estimate is required";
        }

        // Section C: Payout / Bank Details
        if (!formData.acc_holder.trim()) {
            newErrors.acc_holder = "Account Holder Name is required";
        }

        if (!formData.bank_name.trim()) {
            newErrors.bank_name = "Bank Name is required";
        }

        if (!formData.acc_number.trim()) {
            newErrors.acc_number = "Account Number is required";
        } else if (!/^\d{9,18}$/.test(formData.acc_number.trim())) {
            newErrors.acc_number = "Enter valid Account Number (9 to 18 digits)";
        }

        if (!formData.ifsc.trim()) {
            newErrors.ifsc = "IFSC Code is required";
        } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/i.test(formData.ifsc.trim())) {
            newErrors.ifsc = "Enter valid 11-character IFSC (e.g. SBIN0001234)";
        }

        if (formData.upi.trim() && !/^[\w\.\-]+@[\w\-]+$/.test(formData.upi.trim())) {
            newErrors.upi = "Enter a valid UPI ID (e.g. name@bank)";
        }

        // Section D: Documents
        if (!docs.doc_id) newErrors.doc_id = "ID Proof document upload is required";
        if (!docs.doc_pan) newErrors.doc_pan = "PAN Card copy document upload is required";
        if (!docs.doc_shop_addr) newErrors.doc_shop_addr = "Shop Address Proof document upload is required";
        if (!docs.doc_cheque) newErrors.doc_cheque = "Cancelled Cheque document upload is required";
        if (!docs.doc_photo_out) newErrors.doc_photo_out = "Outside Shop photo upload is required";
        if (!docs.doc_photo_in) newErrors.doc_photo_in = "Inside Shop photo upload is required";

        // Section E: Declaration
        if (!formData.coi) {
            newErrors.coi = "Conflict-of-interest declaration selection is required";
        } else if (formData.coi === "yes" && !formData.coi_specify.trim()) {
            newErrors.coi_specify = "Please specify relation details";
        }

        return newErrors;
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSubmitted(false);
            setTimeout(() => {
                document.getElementById("form-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 50);
            return;
        }

        setErrors({});
        setSubmitted(true);
        setFormData({
            full_name: "",
            dob: "",
            mobile: "",
            alt_mobile: "",
            email: "",
            pan: "",
            aadhaar: "",
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
            coi: "",
            coi_specify: "",
        });
        setDocs({
            doc_id: false,
            doc_pan: false,
            doc_shop_addr: false,
            doc_cheque: false,
            doc_photo_out: false,
            doc_photo_in: false,
        });
        (e.currentTarget as HTMLFormElement).reset();
        setTimeout(() => {
            document.getElementById("form-top")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const errorCount = Object.keys(errors).length;

    return (
        <form onSubmit={onSubmit} noValidate className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
            {/* Form header */}
            <div id="form-top" className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <Logo />
                    <p className="mt-2 font-display text-xl font-semibold text-primary">CAREER SATHI</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Partner Onboarding & Basic KYC Form</p>
                </div>
            </div>

            {/* Error Notification Banner */}
            {errorCount > 0 && (
                <div className="border-b border-red-200 bg-red-50 px-6 py-4 text-sm font-semibold text-red-700">
                    ⚠️ Kripya form ke {errorCount} highlight kiye gaye field(s) ko sahi se bhariye.
                </div>
            )}

            {/* Success Banner */}
            {submitted && (
                <div className="border-b border-primary/20 bg-primary/5 px-6 py-4 text-sm font-medium text-primary">
                    ✓ Dhanyavaad! Aapki details receive ho gayi hain. Hamari team 24 ghante ke andar aapse contact karegi.
                </div>
            )}

            {/* A */}
            <SectionBand letter="A" title="Partner (Owner) Details" />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Field
                    label="Full Name (as per PAN)"
                    name="full_name"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    error={errors.full_name}
                    placeholder="Enter full name as per PAN card"
                />
                <Field
                    label="Date of Birth (DD / MM / YYYY)"
                    name="dob"
                    required
                    placeholder="DD / MM / YYYY"
                    value={formData.dob}
                    onChange={handleChange}
                    error={errors.dob}
                />
                <Field
                    label="Mobile No. (WhatsApp)"
                    name="mobile"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    error={errors.mobile}
                    placeholder="10-digit mobile number"
                />
                <div className="grid grid-cols-2">
                    <Field
                        label="Alternate Mobile No."
                        name="alt_mobile"
                        type="tel"
                        maxLength={10}
                        value={formData.alt_mobile}
                        onChange={handleChange}
                        error={errors.alt_mobile}
                        placeholder="Optional"
                    />
                    <Field
                        label="Email ID"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="name@example.com"
                    />
                </div>
                <Field
                    label="PAN Number"
                    name="pan"
                    required
                    maxLength={10}
                    value={formData.pan}
                    onChange={(e) => {
                        e.target.value = e.target.value.toUpperCase();
                        handleChange(e);
                    }}
                    error={errors.pan}
                    placeholder="ABCDE1234F"
                />
                <div className="grid grid-cols-2">
                    <Field
                        label="Aadhaar Number"
                        name="aadhaar"
                        required
                        maxLength={12}
                        value={formData.aadhaar}
                        onChange={handleChange}
                        error={errors.aadhaar}
                        placeholder="12-digit Aadhaar number"
                    />

                    <Field
                        label="Gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        error={errors.gender}
                        options={[
                            { label: "Male", value: "Male" },
                            { label: "Female", value: "Female" },
                            { label: "Other", value: "Other" },
                        ]}
                    />
                </div>
            </div>

            {/* B */}
            <SectionBand letter="B" title="Shop / Business Details" />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Field
                    label="Shop / Business Name"
                    name="shop_name"
                    required
                    value={formData.shop_name}
                    onChange={handleChange}
                    error={errors.shop_name}
                    placeholder="Enter shop or business name"
                />
                <Field
                    label="Business Type"
                    name="biz_type"
                    required
                    value={formData.biz_type}
                    onChange={handleChange}
                    error={errors.biz_type}
                    options={[
                        { label: "Cyber Cafe", value: "Cyber Cafe" },
                        { label: "Photocopy / Print Shop", value: "Photocopy / Print Shop" },
                        { label: "Stationery & Book Store", value: "Stationery & Book Store" },
                        { label: "Coaching Center", value: "Coaching Center" },
                        { label: "CSC / Jan Seva Kendra", value: "CSC / Jan Seva Kendra" },
                        { label: "Other", value: "Other" },
                    ]}
                />
                <Field
                    full
                    label="Full Shop Address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    error={errors.address}
                    placeholder="Building name, shop number, street name"
                />
                <Field
                    label="Locality / Landmark"
                    name="locality"
                    required
                    value={formData.locality}
                    onChange={handleChange}
                    error={errors.locality}
                    placeholder="Near landmark / colony"
                />
                <div className="grid grid-cols-2">
                    <Field
                        label="City"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        error={errors.city}
                        placeholder="City"
                    />
                    <Field
                        label="Pincode"
                        name="pincode"
                        required
                        maxLength={6}
                        value={formData.pincode}
                        onChange={handleChange}
                        error={errors.pincode}
                        placeholder="6-digit pincode"
                    />
                </div>
                <Field
                    label="Exact Google Location (Plus Code / Pin Link)"
                    name="google_loc"
                    required
                    value={formData.google_loc}
                    onChange={handleChange}
                    error={errors.google_loc}
                    placeholder="https://maps.google.com/?q=... or Plus code"
                />
                <Field
                    label="Approx. Daily Student Footfall"
                    name="footfall"
                    required
                    value={formData.footfall}
                    onChange={handleChange}
                    error={errors.footfall}
                    options={[
                        { label: "1 - 25 students / day", value: "1-25" },
                        { label: "26 - 50 students / day", value: "26-50" },
                        { label: "51 - 100 students / day", value: "51-100" },
                        { label: "100+ students / day", value: "100+" },
                    ]}
                />
            </div>

            {/* C */}
            <SectionBand letter="C" title="Payout / Bank Details" />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <Field
                    label="Account Holder Name"
                    name="acc_holder"
                    required
                    value={formData.acc_holder}
                    onChange={handleChange}
                    error={errors.acc_holder}
                    placeholder="Name as per bank account"
                />
                <Field
                    label="Bank Name"
                    name="bank_name"
                    required
                    value={formData.bank_name}
                    onChange={handleChange}
                    error={errors.bank_name}
                    placeholder="e.g. State Bank of India, HDFC Bank"
                />
                <Field
                    label="Account Number"
                    name="acc_number"
                    required
                    value={formData.acc_number}
                    onChange={handleChange}
                    error={errors.acc_number}
                    placeholder="9 to 18 digit account number"
                />
                <div className="grid grid-cols-2">
                    <Field
                        label="IFSC Code"
                        name="ifsc"
                        required
                        maxLength={11}
                        value={formData.ifsc}
                        onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                            handleChange(e);
                        }}
                        error={errors.ifsc}
                        placeholder="SBIN0001234"
                    />
                    <Field
                        label="UPI ID (optional)"
                        name="upi"
                        value={formData.upi}
                        onChange={handleChange}
                        error={errors.upi}
                        placeholder="name@upi"
                    />
                </div>
            </div>

            {/* D */}
            <SectionBand letter="D" title="Documents Collected (Tick + Attach)" />
            <div className="p-4">
                <p className="mb-4 text-xs text-muted-foreground">
                    Har document ke saamne "Upload document" par click karke JPG, PNG ya PDF file attach kariye. File attach hote hi checkbox apne aap tick ho jayega.
                </p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <DocUpload
                        label="ID Proof (Aadhaar / Voter / DL)"
                        name="doc_id"
                        required
                        error={errors.doc_id}
                        onFileChange={(hasFile) => handleDocChange("doc_id", hasFile)}
                    />
                    <DocUpload
                        label="PAN Card copy"
                        name="doc_pan"
                        required
                        error={errors.doc_pan}
                        onFileChange={(hasFile) => handleDocChange("doc_pan", hasFile)}
                    />
                    <DocUpload
                        label="Shop Address Proof"
                        name="doc_shop_addr"
                        required
                        error={errors.doc_shop_addr}
                        onFileChange={(hasFile) => handleDocChange("doc_shop_addr", hasFile)}
                    />
                    <DocUpload
                        label="Cancelled Cheque"
                        name="doc_cheque"
                        required
                        error={errors.doc_cheque}
                        onFileChange={(hasFile) => handleDocChange("doc_cheque", hasFile)}
                    />
                    <DocUpload
                        label="Shop photo — OUTSIDE (signboard)"
                        name="doc_photo_out"
                        accept="image/*"
                        required
                        error={errors.doc_photo_out}
                        onFileChange={(hasFile) => handleDocChange("doc_photo_out", hasFile)}
                    />
                    <DocUpload
                        label="Shop photo — INSIDE"
                        name="doc_photo_in"
                        accept="image/*"
                        required
                        error={errors.doc_photo_in}
                        onFileChange={(hasFile) => handleDocChange("doc_photo_in", hasFile)}
                    />
                </div>
            </div>

            {/* E */}
            <SectionBand letter="E" title="Conflict-of-Interest Declaration" />
            <div className={`space-y-4 p-6 transition-colors ${errors.coi ? "bg-red-50/30 border-l-4 border-red-500" : ""}`}>
                <p className="text-sm text-foreground">
                    Is this partner related to, or associated with, the enrolling FMS (family / friend / business partner / same address)? <span className="font-bold text-red-500">*</span>
                </p>
                <div className="grid gap-3 md:grid-cols-[auto_1fr] md:items-center">
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2 text-sm font-semibold text-foreground cursor-pointer">
                            <input
                                type="radio"
                                name="coi"
                                value="no"
                                checked={formData.coi === "no"}
                                onChange={handleChange}
                                className="h-4 w-4 accent-[oklch(0.55_0.22_27)]"
                            />
                            NO — no relation
                        </label>
                        <label className="flex items-center gap-2 text-sm font-semibold text-foreground cursor-pointer">
                            <input
                                type="radio"
                                name="coi"
                                value="yes"
                                checked={formData.coi === "yes"}
                                onChange={handleChange}
                                className="h-4 w-4 accent-[oklch(0.55_0.22_27)]"
                            />
                            YES — relation exists
                        </label>
                    </div>
                    {formData.coi === "yes" && (
                        <input
                            name="coi_specify"
                            value={formData.coi_specify}
                            onChange={handleChange}
                            placeholder="Please specify relation details…"
                            className={`w-full border-b bg-transparent px-2 py-2 text-sm outline-none ${
                                errors.coi_specify ? "border-red-500 text-red-900" : "border-border focus:border-primary"
                            }`}
                        />
                    )}
                </div>
                {errors.coi && <p className="text-xs font-semibold text-red-600">{errors.coi}</p>}
                {errors.coi_specify && <p className="text-xs font-semibold text-red-600">{errors.coi_specify}</p>}
                <div className="rounded-md border-l-4 border-primary bg-primary/5 p-3 text-sm text-foreground">
                    A false declaration is treated as fraud — leads to termination, payout clawback, and possible legal action.
                </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-cream p-6 sm:flex-row">
                <p className="text-xs text-muted-foreground">
                    Confidential — for internal onboarding use. Submit karke aap Career Sathi terms accept karte hain.
                </p>
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition hover:-translate-y-0.5"
                >
                    Submit & Career Sathi Banein
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </button>
            </div>
        </form>
    );
}