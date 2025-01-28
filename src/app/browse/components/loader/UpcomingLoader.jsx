export default function UpcomingLoader() {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-10">
        {/* Section Title Placeholder */}
        <div className="h-8 w-40 bg-gray-700 rounded animate-pulse"></div>
      </div>

      <div className="flex gap-10 me-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="w-52 flex-shrink-0">
            {/* Image Placeholder */}
            <div className="h-52 mb-3 overflow-hidden rounded-lg w-full bg-gray-700 animate-pulse"></div>

            {/* Title Placeholder */}
            <div className="h-6 mb-2 bg-gray-700 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
