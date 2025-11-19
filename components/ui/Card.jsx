export default function Card({ title, children, footer, className = "" }) {
  return (
    <div className={`rounded-lg border bg-white p-4 shadow-sm ${className}`}>
      {title && (
        <h3 className="mb-2 text-lg font-semibold text-black">{title}</h3>
      )}
      <div className="text-sm text-gray-700">{children}</div>
      {footer && <div className="mt-3 border-t pt-3 text-sm">{footer}</div>}
    </div>
  );
}
