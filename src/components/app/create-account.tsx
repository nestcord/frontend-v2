import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@app/components/ui/dialog";
import { Button } from "@app/components/ui/button";

export function CreateAccount() {
  return (
    <Dialog>
      {/* Usa el Button como trigger para abrir el diálogo */}
      <DialogTrigger asChild>
        <Button className="w-full bg-black hover:bg-neutral-800 text-white font-medium">
          Create account
        </Button>
      </DialogTrigger>
      {/* Contenido del diálogo */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create an account</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
