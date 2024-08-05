import { cn } from "../../lib/utils"
import { usePalette } from "../../providers/pallete"

type Props = {
  read?: boolean
}

const EmailRow = ({ read }: Props) => {
  const { classBuilder } = usePalette()

  return (
    <div className={
      cn(
        "border-b-[0.5px] grid grid-cols-12 py-3 px-4 gap-2 text-sm cursor-pointer shadow-none hover:shadow-md transition-all",
        classBuilder({ text: 'base', border: 'base' }),
        read ? "font-bold" : "font-extralight"
      )
    }
    >
      <span className="col-span-2 text-center">
        Reddit
      </span>
      <span className="col-span-9 truncate">
        <span>
          Asunto
        </span>
        <span className="ml-2">
          r/golang: gRPC Over HTTP/3 r/golang · Posted by u/mageling 2d ago gRPC Over HTTP/3 Read More 69 Votes 4 Comments Hide r/golang r/AWSCertifications · Posted by u/bixodoido 4d ago Just passed Solutions
        </span>
      </span>
      <span className="text-center">
        2d ago
      </span>
    </div>
  )
}

export default EmailRow
