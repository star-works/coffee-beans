import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarsIcon } from "../common/Icons";

const TabsCard = ({ name, desc }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center">
            <CardTitle className="pe-3">{name}</CardTitle>
            <StarsIcon />
          </div>
          <p className="text-xs font-medium">2 months ago</p>
        </div>
        <div className="flex gap-3 pt-2">
          <Badge>Coffee Bean</Badge>
          <Badge>Malerapaso</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-base font-normal text-[#818181]">{desc}</p>
      </CardContent>
    </Card>
  );
};

export default TabsCard;
