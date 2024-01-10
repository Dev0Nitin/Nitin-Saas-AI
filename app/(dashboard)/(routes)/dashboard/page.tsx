"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, MusicIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/coversation"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-500/10",
    href: "/Image-Generation"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/Video-Generation"
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/Music-Generation"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/Code-Generation"
  }
]

const DashboardPage = () => {

  const router = useRouter(); // This is used for when we click it will redirect to next page
  return (
    <div>

      <div className="md-8 space-y-4">
        <h2 className="text-2xl md:4xl front-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm
        md:ext-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px=20 lg:px-32 space-y-4">

        {/* Accessing the tools one by one */}
        {tools.map((tool) => (

          // Creating a Card
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex item-center justify-between 
          hover:shadow-md transition cursor-pointer"
          >
            <div className="flex item-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>

              <div className="font-semibold">
                {tool.label}
              </div>
            </div>

            {/* Creating a Arrow in each tool navigation */}
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>

    </div>



  )
}

export default DashboardPage
