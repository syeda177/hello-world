export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 px-4 sm:px-8 md:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 text-center">
        Hello, World!
      </h1>
      <p className="text-gray-700 mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xl">
        Welcome to your first Next.js assignment. This text adjusts to fit the
        screen size for better readability.
      </p>
    </div>
  );
}
