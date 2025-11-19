"use client";

export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  helperText,
  className = "",
  ...props
}) {
  return (
    <label className={`w-full space-y-1 ${className}`}>
      {label && <span className="block text-sm text-gray-700">{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-black placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        {...props}
      />
      {helperText && !error && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
