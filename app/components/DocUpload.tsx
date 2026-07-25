import { useState } from "react";

export default function DocUpload({
    label,
    name,
    accept = "image/*,application/pdf",
    required = false,
    error,
    onFileChange,
}: {
    label: string;
    name: string;
    accept?: string;
    required?: boolean;
    error?: string;
    onFileChange?: (hasFile: boolean) => void;
}) {
    const [fileName, setFileName] = useState<string>("");
    const [checked, setChecked] = useState(false);
    const inputId = `file_${name}`;
    return (
        <div className={`flex flex-col gap-2 border bg-white px-4 py-3 transition-colors ${error ? "border-red-500 bg-red-50/20" : "border-border"}`}>
            <label className="flex items-start gap-3">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        setChecked(isChecked);
                        if (!isChecked) setFileName("");
                        if (onFileChange) onFileChange(isChecked && (fileName !== ""));
                    }}
                    className="mt-1 h-4 w-4 accent-[oklch(0.55_0.22_27)]"
                />
                <span className="text-sm font-medium text-foreground">
                    {label} {required && <span className="font-bold text-red-500">*</span>}
                </span>
            </label>
            <div className="flex flex-wrap items-center gap-2 pl-7">
                <input
                    id={inputId}
                    type="file"
                    name={`file_${name}`}
                    accept={accept}
                    className="hidden"
                    onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) {
                            setFileName(f.name);
                            setChecked(true);
                            if (onFileChange) onFileChange(true);
                        } else {
                            setFileName("");
                            setChecked(false);
                            if (onFileChange) onFileChange(false);
                        }
                    }}
                />
                <label
                    htmlFor={inputId}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted"
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
                    {fileName ? "Change file" : "Upload document"}
                </label>
                <span className="truncate text-xs text-muted-foreground" title={fileName}>
                    {fileName || "No file selected · JPG, PNG or PDF"}
                </span>
            </div>
            {error && <span className="pl-7 text-xs font-semibold text-red-600">{error}</span>}
        </div>
    );
}