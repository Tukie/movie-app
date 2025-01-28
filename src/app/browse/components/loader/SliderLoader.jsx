export default function SliderLoader() {
  return (
    <div>
      <div className="p-8 rounded-2xl relative flex flex-col justify-between gap-10 overflow-hidden bg-gradient-to-r from-black to-transparent text-white min-h-[30rem] ">
        {/* Background */}
        <div className="absolute top-0 right-0 w-full h-full -z-10 animate-pulse">
          <div className="w-full h-full bg-gray-700"></div>
        </div>

        {/* Title & Info */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold w-1/2 h-8 bg-gray-600 rounded animate-pulse"></h1>
          <div className="flex gap-3 items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
              <span className="text-sm w-8 h-4 bg-gray-600 rounded animate-pulse"></span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-600 rounded-full animate-pulse"></div>
              <span className="text-sm w-16 h-4 bg-gray-600 rounded animate-pulse"></span>
            </div>
          </div>
        </div>

        {/* Watch */}
        <div className="flex gap-2 items-center">
          <div className="w-24 h-10 bg-gray-600 rounded animate-pulse"></div>
          <div className="w-10 h-10 bg-gray-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
