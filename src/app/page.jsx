import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">LogiSaaS — Logistics Platform</h1>
      <p className="text-gray-600 mb-8">
        Scaffolded platform (Phases 1-6) — customize and extend.
      </p>
      <div className="w-full max-w-4xl h-96">
        <Map />
      </div>
    </main>
  );
}
