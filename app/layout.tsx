import type { ReactNode } from "react"

export const metadata = { title: "tasty-root-512262.framer.app" }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
