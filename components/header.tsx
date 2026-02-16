import { ModeToggle } from "./mode-toggle"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-2">
      <h1>Next.js Starter</h1>
      <div className="flex items-center justify-between gap-2">
        <ModeToggle />
      </div>
    </header>
  )
}
