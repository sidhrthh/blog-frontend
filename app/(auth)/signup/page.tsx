
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function signup() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex flex-col items-center justify-center">
      <div className="container max-w-5xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-start justify-center space-y-6 md:max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Join our blogging community</h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Sign up today and start sharing your stories with the world.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
        <div className="w-full max-w-md bg-background rounded-xl shadow-lg p-6 space-y-4">
          <h2 className="text-2xl font-bold">Create an account</h2>
          <form className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@email.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="text-center text-sm text-muted-foreground">
            Or signin into existing account?{" "}
            <Link href="/signin" className="underline" prefetch={false}>
              Sign in
            </Link>
          </div>          </form>
        </div>
      </div>
    </div>
  )
}