import Map from "../components/Map";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold">LogiSaaS — Logistics platform</h1>
        <p className="mt-4 text-gray-600">
          Scaffolded platform (Phases 1-6) — customize and extend.
        </p>
      </div>

      {/* Map */}
      <div className="w-full max-w-3xl">
        <Map />
      </div>
    </main>
  );
}
