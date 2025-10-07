import { execSync } from "child_process";

execSync("npx prisma db push", { stdio: "inherit" });
console.log("Database initialized.");
