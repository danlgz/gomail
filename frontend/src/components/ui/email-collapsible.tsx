import { ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

type Props = {
  email: string;
  isOpen?: boolean;
}

export const EmailCollapsible = ({ email, isOpen }: Props) => {
  return (
    <AccordionItem
      className="w-full"
      value={email}
    >
      <AccordionTrigger className="w-full flex justify-between p-2 rounded-lg hover:bg-black/5 transition-all items-center cursor-default">
        <div className="flex items-center gap-1">
          <ChevronRight size={16} className={cn("transition-all", isOpen ? "rotate-90" : "")} />
          <span className="font-bold">{email}</span>
        </div>
        <span
          className="hover:bg-black/5 p-1 rounded-md"
          onClick={
            (e) => {
              e.stopPropagation();
              console.log('clicked');
            }
          }
        >
          <Ellipsis size={16} />
        </span>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col">
        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-black/5">
          <div className="flex gap-2 items-center">
            <Inbox size={16} />
            <span>Inbox</span>
          </div>
          <span className="text-xs">3</span>
        </div>

        <div className="flex items-center justify-between bg-white/40 py-2 px-3 rounded-lg">
          <div className="flex gap-2 items-center">
            <Send size={16} />
            <span>Sent</span>
          </div>
          <span className="text-xs">3</span>
        </div>

        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-black/5">
          <div className="flex gap-2 items-center">
            <File size={16} />
            <span>Draft</span>
          </div>
          <span className="text-xs">3</span>
        </div>

        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-black/5">
          <div className="flex gap-2 items-center">
            <OctagonAlert size={16} />
            <span>Spam</span>
          </div>
          <span className="text-xs">3</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
