import { Skeleton } from "@app/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "../ui/card";

export function StatusLoad() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-6>">
            <Skeleton className="flex flex-col items-center justify-center space-y-4 py-6>">
            <Card
      className="
      w-full max-w-xl bg-background text-foreground border border-border
       border-border transition-all duration-300 hover:border-primary hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:-translate-y-1 dark:bg-neutral-950 dark:text-white bg-white text-black"
    >
      <CardHeader>
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      </CardHeader>

      <CardContent>
      <Skeleton className="h-4 w-[250px]" />
      </CardContent>

    </Card>
            </Skeleton>
        </div>
    )
}