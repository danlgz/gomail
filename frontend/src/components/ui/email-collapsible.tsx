import { ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import AnimatedEmail from "./animated-email";
import { usePalette } from "../../providers/pallete";

type Props = {
  email: string;
  open?: boolean;
}

export const EmailCollapsible = ({ email, open }: Props) => {
  const { classBuilder } = usePalette();

  return (
    <AccordionItem
      className="w-full border-red-400"
      value={email}
    >
      <AccordionTrigger
        className={
          cn(
            "w-full flex justify-between p-2 rounded-lg transition-all items-center cursor-default group",
            classBuilder({ bg: 'base', hover: 'highlight1' })
          )
        }
      >
        <div className={
            cn(
              "flex items-center gap-2",
              classBuilder({ text: 'foreground' }),
            )
          }
        >
          <AnimatedEmail open={open} />
          <span className={cn("font-extrabold")}>
            {email}
          </span>
        </div>
        <span
          className={
            cn(
              "p-1 rounded-md opacity-0 group-hover:opacity-100 transition-all",
              classBuilder({ hover: 'highlight2' })
            )
          }
          onClick={
            (e) => {
              e.stopPropagation();
              console.log('clicked');
            }
          }
        >
          <Ellipsis
            size={16}
            className={
              cn(
                classBuilder({ text: 'foreground' }),
              )
            }
          />
        </span>
      </AccordionTrigger>
      <AccordionContent className={
          cn(
            "flex flex-col",
            classBuilder({ text: 'foreground' }),
          )
        }
      >
        <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-black/5">
          <div
            className="flex gap-2 items-center"
          >
            <Inbox size={16} />
            <span>Inbox</span>
          </div>
          <span className="text-xs">
            3
          </span>
        </div>

        <div className="flex items-center justify-between bg-white/40 py-2 px-3 rounded-lg text-black font-semibold">
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
