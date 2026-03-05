"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../app/components/ui/dialog";
import { Input } from "../app/components/ui/input";
import { Button } from "../app/components/ui/button";
import { useWorkshopForm } from "./WorkshopFormContext";

export default function WorkshopForm() {
  const { isOpen, closeForm } = useWorkshopForm();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    closeForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeForm()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex flex-col items-center text-center gap-1 mb-4">
            <DialogTitle className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#0d1353] text-[18px] md:text-[20px] leading-[1.1]">
              AI Change Management Workshop
            </DialogTitle>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] text-[16px] md:text-[18px]">
              Saturday 14th March 2026 9:AM PST
            </p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] text-sm"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] text-sm"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-white uppercase"
            style={{
              backgroundImage:
                "linear-gradient(161.704deg, rgb(170, 69, 232) 26.236%, rgb(36, 69, 255) 86.882%)",
            }}
          >
            Reserve My Seat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

