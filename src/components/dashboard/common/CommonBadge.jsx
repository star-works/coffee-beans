import { Badge } from "@/components/ui/badge";

export const DataCardBadge = (props) => {
  // const name = props ;
  return (
    <div>
      <Badge
        className={`py-[3px] px-[7px] font-medium flex items-center gap-1 rounded-xl leading-[15px] ff_inter border border-solid ${props.className}`}
      >
        {props.icon} {props.name}
      </Badge>
    </div>
  );
};
