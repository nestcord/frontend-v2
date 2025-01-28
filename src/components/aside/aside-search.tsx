import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/components/ui/dialog";
import { Input } from "@app/components/ui/input";
import { Label } from "@app/components/ui/label";
import { Button } from "@app/components/ui/button";

export default function Search() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="hover-animation sticky top-0 z-10 py-2"
          >
            <p>Search anything...</p>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search anything</DialogTitle>
          </DialogHeader>

          <Label>
            <Input type="text" placeholder="Search on Nestcord" />
          </Label>
        </DialogContent>
      </Dialog>
    </div>
  );
}
