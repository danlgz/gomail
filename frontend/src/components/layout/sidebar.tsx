import { ChevronDown, ChevronRight, Ellipsis, File, Inbox, OctagonAlert, Send } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[350px] flex flex-col gap-2 pr-3">
      <h1 className="px-2 mb-1 uppercase font-bold text-black/60">Work</h1>

      <hr className="h-px bg-black/10 border-0"/>

      <Collapsible
        className="w-full"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger className="w-full flex justify-between p-2 rounded-lg hover:bg-black/5 transition-all items-center cursor-default">
          <div className="flex items-center gap-1">
            { isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} /> }
            hi@danlgz.io
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
        </CollapsibleTrigger>
        <CollapsibleContent className="flex flex-col">
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
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default Sidebar;
