import { useState } from "react";
import { FileText, Upload, CheckCircle2, X } from "lucide-react";

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
    const inputId = `file_${name}`;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            if (onFileChange) onFileChange(true);
        } else {
            setFileName("");
            if (onFileChange) onFileChange(false);
        }
    };

    const handleClear = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setFileName("");
        const input = document.getElementById(inputId) as HTMLInputElement;
        if (input) input.value = "";
        if (onFileChange) onFileChange(false);
    };

    const hasFile = Boolean(fileName);

    return (
        <div
            className={`form-cell flex flex-col justify-between transition-colors ${error
                ? "border-red-500 bg-red-50/20"
                : hasFile
                    ? "border-red-200 bg-red-50/80"
                    : "bg-white"
                }`}
        >
            <div>
                <span className="form-label flex items-center justify-between">
                    <span>
                        {label} {required && <span className="font-bold text-red-500">*</span>}
                    </span>
                    {hasFile && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600">
                            <CheckCircle2 className="h-3.5 w-3.5 text-red-600" /> Attached
                        </span>
                    )}
                </span>

                <input
                    id={inputId}
                    type="file"
                    name={name}
                    accept={accept}
                    className="hidden"
                    onChange={handleFileChange}
                />

                <label
                    htmlFor={inputId}
                    className={`mt-1 flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 transition ${hasFile
                        ? "border-red-200 bg-white/90 shadow-xs hover:bg-white"
                        : "border bg-slate-50/60 hover:bg-slate-100/80 border-gray-200"
                        }`}
                >
                    <div className="flex min-w-0 items-center gap-2.5">
                        <FileText
                            className={`h-4 w-4 shrink-0 transition-colors ${hasFile ? "text-red-600" : "text-slate-400"
                                }`}
                        />
                        <span
                            className={`truncate text-xs ${hasFile ? "font-semibold text-red-950" : "text-muted-foreground"
                                }`}
                            title={fileName || "Upload document"}
                        >
                            {fileName || "Choose file (JPG, PNG or PDF)"}
                        </span>
                    </div>

                    {hasFile ? (
                        <button
                            type="button"
                            onClick={handleClear}
                            title="Remove file"
                            className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-slate-400 hover:bg-red-100 hover:text-red-700"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    ) : (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-white px-2 py-1 text-[10px] font-bold text-slate-600 border border-slate-200 shadow-xs">
                            <Upload className="h-3 w-3 text-slate-500" /> Browse
                        </span>
                    )}
                </label>
            </div>

            {error && <span className="mt-1.5 text-xs font-semibold text-red-600">{error}</span>}
        </div>
    );
}

