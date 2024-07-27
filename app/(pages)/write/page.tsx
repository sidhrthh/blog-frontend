
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export default function writeSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-12 md:py-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Compose Content</h2>
          <p className="text-muted-foreground">Write and format your content in the text area below.</p>
        </div>
        <div className="grid gap-4">
          <Textarea
            placeholder="Start writing your content here..."
            className="resize-none min-h-[200px] rounded-md border border-input bg-background px-4 py-3 text-foreground shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <BoldIcon className="h-4 w-4" />
                <span className="sr-only">Bold</span>
              </Button>
              <Button variant="ghost" size="icon">
                <ItalicIcon className="h-4 w-4" />
                <span className="sr-only">Italic</span>
              </Button>
              <Button variant="ghost" size="icon">
                <UnderlineIcon className="h-4 w-4" />
                <span className="sr-only">Underline</span>
              </Button>
            </div>
            <Button type="submit" className="px-6 py-2">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
