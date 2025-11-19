export default function CourseCard({ title, description }) {
  return (
    <div className="border rounded p-4 bg-white">
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{description}</p>
    </div>
  );
}
