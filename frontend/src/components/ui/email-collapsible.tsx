import { ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import AnimatedEmail from "./animated-email";
import { usePalette } from "../../providers/pallete";
import { Link, useLocation } from "react-router-dom";

type Props = {
  email: string;
  workspaceId: string;
  open?: boolean;
}

const routes = [
  {
    key: 'inbox',
    name: 'Inbox',
    path: 'inbox',
    icon: <Inbox size={16} />,
  },
  {
    key: 'sent',
    name: 'Sent',
    path: 'sent',
    icon: <Send size={16} />,
  },
  {
    key: 'draft',
    name: 'Draft',
    path: 'draft',
    icon: <File size={16} />,
  },
  {
    key: 'spam',
    name: 'Spam',
    path: 'spam',
    icon: <OctagonAlert size={16} />,
  }
]

export const EmailCollapsible = ({ email, open, workspaceId }: Props) => {
  const { classBuilder, palette: { foreground2 } } = usePalette();
  const location = useLocation();

  return (
    <AccordionItem
      className="w-full pr-3"
      value={email}
    >
      <AccordionTrigger
        className={
          cn(
            "w-full gap-2 flex justify-between p-2 rounded-lg transition-all items-center cursor-default group active:scale-[.99]",
            classBuilder({ bg: 'base', hover: 'highlight1' })
          )
        }
      >
        <AnimatedEmail open={open} color={foreground2} className="flex-none" />
        <span className={
            cn(
              "font-extrabold text-sm flex-1 text-left truncate",
              classBuilder({ text: 'foreground' }),
            )
          }
        >
          {email}
        </span>
        <span
          className={
            cn(
              "p-1 rounded-md hidden group-hover:block flex-none",
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
        {
          routes.map(
            ({ name, path, key, icon }) => {
              const currentPath = location.pathname.includes(`${email}/${path}`);
              return (
                <Link
                  to={`/w/${workspaceId}/e/${email}/${path}`}
                  key={key}
                  className={
                    cn(
                      "flex items-center justify-between py-2 px-3 rounded-lg transition-all",
                      !currentPath && classBuilder({ hover: 'highlight1' }),
                      currentPath && classBuilder({ bg: 'highlight2' })
                    )
                  }
                >
                  <div
                    className="flex gap-2 items-center"
                  >
                    {icon}
                    <span>{name}</span>
                  </div>
                  <span className="text-xs">
                    3
                  </span>
                </Link>
              )
            }
          )
        }
      </AccordionContent>
    </AccordionItem>
  )
}
