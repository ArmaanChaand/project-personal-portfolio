import Image from "next/image"
import { IconBrandLinkedinFilled, IconBrandXFilled, IconBrandYoutubeFilled, IconArrowUpRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn Profile",
    icon: IconBrandLinkedinFilled,
    url: "https://linkedin.com/in/armaanchaand/",
  },
  {
    name: "Twitter (X) Profile",
    icon: IconBrandXFilled,
    url: "https://x.com/devredbox",
  },
  {
    name: "DevRedBox Studio YouTube",
    icon: IconBrandYoutubeFilled,
    url: "https://www.youtube.com/@devredbox",
  },
]

const PROJECTS = [
  {
    projectUrl: "https://thouhomar.xyz/",
    title: "Project ThouHomar",
    description: [
      "This personal project was started to fullfill my personal need for a tool to create social media posts from a YouTube video.",
      "It's built with Next.js and Firebase, with Dodo Payments handling monetization, keeping the stack lean and the experience fast. While developing it, I learned the hottest topic on the internet right now ... \"AI.\"",
      "ThouHomar will soon be live. It started as a personal project, but the problem it solves isn't personal, anyone repurposing video content for social media can use it. The tool works, and that's what matters most."
    ],
    actions: [
      {
        label: "Try it Out",
        url: "https://thouhomar.xyz/"
      }
    ],
  },
  {
    projectUrl: "https://library.devredbox.in/",
    title: "Project CodeLibrary",
    description: [
      "I run a SaaS development studio, for which I constantly need to develop repeating blocks, components, and user workflows.",
      "I could store it for personal use, but making it public made more sense — which is why CodeLibrary was created.",
      "It hosts UI components and blocks for now. Soon it'll host user workflows, templates, shadcn/ui kits, and SaaS starter packs. Feel free to explore, and if you're a developer, don't hesitate to use them."
    ],
    actions: [
      {
        label: "Explore Library",
        url: "https://library.devredbox.in/"
      }
    ],
  },
]

export default function Page() {
  return (
    <div className="mt-16 space-y-24">
      <section className="flex flex-col md:flex-row justify-start items-center gap-12">
        <Image
          src={"/profile-pic-1.webp"}
          alt="Armaan Chaand"
          width={500}
          height={500}
          className="w-52 aspect-square object-cover rounded-xl"
        />
        <div className="space-y-6">
          <h1 className="text-3xl font-medium underline underline-offset-2">Hello, I'm Armaan</h1>
          <p>

            I'm a developer. And I take joy in writing code and the products that code produces. I work on my own projects and help solo founders and early-stage startups build websites, web apps, and SaaS MVPs.
          </p>
          <ul className="flex justify-start items-center gap-3">
            {
              SOCIAL_LINKS.map(item => (
                <li key={item.url}>
                  <Button variant={"outline"} size={"icon-lg"} asChild>
                    <a href={item.url} target="_blank" title={item.name}>
                      <item.icon className="size-5" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </Button>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className="max-w-3xl mx-auto space-y-16" id="projects">
        <h2 className="text-xl uppercase text-center font-semibold">Latest Works</h2>
        <ul className="space-y-16">
          {
            PROJECTS.map((p, i) => (
              <li className="flex flex-col sm:flex-row justify-start items-start gap-8 sm:gap-12" key={p.projectUrl}>
                <h3 className="shrink-0 font-medium text-lg sm:text-base">
                  <span className="text-muted-foreground mr-1 font-bold">{i + 1}.</span>{p.title}
                </h3>
                <div className="space-y-6 text-secondary-foreground">
                  {
                    p.description.map(item => (
                      <p key={item}>
                        {item}
                      </p>
                    ))
                  }
                  <div className="space-x-2">
                    {
                      p.actions.map(action => (
                        <Button variant={"outline"} key={action.label + action.url} asChild>
                          <a href={action.url} target="_blank">
                            {action.label} <IconArrowUpRight />
                          </a>
                        </Button>
                      ))
                    }

                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <p className="text-sm text-center text-muted-foreground underline italic">As I keep working, more projects will be listed here soon.</p>
      </section>
      <footer className="mb-20" />
    </div>
  )
}
