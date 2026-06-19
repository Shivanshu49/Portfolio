/**
 * Icon keys the app knows how to render.
 *
 * Most map 1:1 to a `tech-stack-icons` name (verified against tech-stack-icons@3.7.1).
 * `"fastapi"` and `"groq"` have no icon in the library and are special-cased with
 * custom inline SVGs in the TechStack section. Typing both data files against this
 * union turns a misspelled icon name into a compile error rather than a silent
 * render-nothing at runtime — the library's own `IconName` widens to `string`.
 */
export type StackIconName =
  | "js"
  | "typescript"
  | "python"
  | "html5"
  | "css3"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "fastapi"
  | "nodejs"
  | "expressjs"
  | "mongodb"
  | "mysql"
  | "git"
  | "github"
  | "vscode"
  | "postman"
  | "linux"
  | "google"
  | "openai"
  | "groq"
  | "supabase"
  | "redis"
  | "gemini"
  | "framer";

/**
 * Monochrome / dark logos that need `brightness-0 invert` to stay legible on the
 * dark surfaces. Shared by ProjectCard and the TechStack section so the two can't
 * drift apart.
 */
export const INVERT_ICONS: ReadonlySet<string> = new Set([
  "github",
  "expressjs",
  "nextjs",
  "nextjs2",
]);
