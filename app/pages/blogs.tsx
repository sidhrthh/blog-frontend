import Link from "next/link"
import { ArrowRightIcon, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Blog() {
    return (
        <main className="py-12 px-4 md:px-6">
            <section className="max-w-3xl mx-auto grid gap-8">
              <div className="grid gap-2">
                <h2 className="text-3xl font-bold">Latest Blog Posts</h2>
                <p className="text-muted-foreground">
                  Check out our latest blog posts and stay up-to-date with our content.
                </p>
              </div>
              <div className="grid gap-6">
                <Card className="grid gap-4 md:grid-cols-2 items-start  p-5">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Blog Post Image"
                    className="rounded-md object-cover aspect-video"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Mastering the Art of Minimalist Web Design</h3>
                    <p className="text-muted-foreground">
                      Discover the key principles and techniques for creating visually stunning and highly functional
                      minimalist websites.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div>Jane Smith</div>
                    <div>•</div>
                    <div>May 15, 2023</div>
                  </div>
                  <Button variant="link" size="sm">
                    Read More
                  </Button>
                </div>
                  </div>
                </Card>
                <Card className="grid gap-4 md:grid-cols-2 items-start p-5">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Blog Post Image"
                    className="rounded-md object-cover aspect-video"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Unleashing the Power of Responsive Design</h3>
                    <p className="text-muted-foreground">
                      Learn how to create websites that adapt seamlessly to different devices and screen sizes, providing an
                      optimal user experience.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div>Jane Smith</div>
                    <div>•</div>
                    <div>May 15, 2023</div>
                  </div>
                  <Button variant="link" size="sm">
                    Read More
                  </Button>
                </div>
                  </div>
                </Card>
                <Card className="grid gap-4 md:grid-cols-2 items-start  p-5">
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Blog Post Image"
                    className="rounded-md object-cover aspect-video"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Crafting Engaging User Experiences with Microinteractions</h3>
                    <p className="text-muted-foreground">
                      Discover how small, subtle interactions can elevate your website's user experience and keep your
                      visitors engaged.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <div>Jane Smith</div>
                    <div>•</div>
                    <div>May 15, 2023</div>
                  </div>
                  <Button variant="link" size="sm">
                    Read More
                  </Button>
                </div>                  </div>
                </Card>
              </div>
            </section>
          </main>
    )
}