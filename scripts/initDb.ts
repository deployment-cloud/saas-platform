import { execSync } from "child_process";

try {
  console.log("🧹 Resetting database...");
  execSync("npx prisma migrate reset --force", { stdio: "inherit" });
  console.log("🌱 Seeding database...");
  execSync("npx prisma db seed", { stdio: "inherit" });
  console.log("✅ Database ready!");
} catch (e) {
  console.error("❌ Error initializing DB", e);
}
