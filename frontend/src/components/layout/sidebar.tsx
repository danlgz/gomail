import { ChevronDown, ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { EmailCollapsible } from "../ui/email-collapsible";
import { Accordion } from "../ui/accordion";

const emails = [
  "hi@danlz.io",
  "lucas@nahualventures.com"
]

const Sidebar = () => {
  const [opened, setOpened] = useState<string[]>([]);

  return (
    <div className="w-[350px] flex flex-col gap-2 pr-3">
      <h1 className="px-2 mb-1 uppercase font-bold text-black/60">Work</h1>

      <hr className="h-px bg-black/10 border-0"/>

      <Accordion type="multiple" onValueChange={setOpened}>
        {
          emails.map(email => (
            <EmailCollapsible key={email} email={email} open={opened.includes(email)} />
          ))
        }
      </Accordion>

    </div>
  )
}

export default Sidebar;
