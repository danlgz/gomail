import { ChevronDown, ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { EmailCollapsible } from "../ui/email-collapsible";
import { Accordion } from "../ui/accordion";
import { usePalette } from "../../providers/pallete";

const emails = [
  "hi@danlz.io",
  "lucas@nahualventures.com"
]

type Props = {
  className?: string;
  name: string;
}

const Sidebar = ({ className, name }: Props) => {
  const [opened, setOpened] = useState<string[]>([]);
  const { classBuilder } = usePalette();

  return (
    <div className={
      cn(
        "flex flex-col gap-2 w-full",
        className
      )
    }>
      <h1
        className={
          cn(
            "px-2 mb-1 uppercase font-black",
            classBuilder({ text: 'foreground' })
          )
        }
      >
        {name}
      </h1>

      <hr
        className={
          cn(
            "h-px border-0 mr-3",
            classBuilder({ bg: 'highlight1' })
          )
        }
      />

      {/* <Accordion type="multiple" onValueChange={setOpened}>
        {
          emails.map(email => (
            <EmailCollapsible key={email} email={email} open={opened.includes(email)} />
          ))
        }
      </Accordion> */}

    </div>
  )
}

export default Sidebar;
