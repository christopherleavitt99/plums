"use client";

import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="w-fit">
          <Loader2 className="mr-2 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button className="w-fit" type="submit">Save Now</Button>
      )}
    </>
  );
}

export function TrashDelete() {
    const { pending } = useFormStatus();

    return (
      <>
      {pending ? (
        <Button variant="ghost" size="icon" disabled>
        <Loader2 className="w-4 h-4 animate-spin" />
      </Button>
      ): (
        <Button variant="ghost" size="icon" type="submit">
        <Trash className="w-4 h-4" />
      </Button>
      )}
      </>
    )
}