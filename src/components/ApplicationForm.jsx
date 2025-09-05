import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle } from 'lucide-react';

export function ApplicationForm({ isOpen, onClose, jobTitle }) {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Application Sent!",
      description: "Thank you for applying. We will get back to you shortly.",
    });
    onClose();
  };

  const eligibility = [
      "Bachelor's degree in Computer Science or related field.",
      "2+ years of relevant work experience.",
      "Strong problem-solving skills.",
      "Excellent communication skills."
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below to submit your application. We're excited to hear from you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" required className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="resume" className="text-right">
                Resume/CV
              </Label>
              <Input id="resume" type="file" required className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cover-letter" className="text-right">
                Cover Letter
              </Label>
              <Textarea id="cover-letter" className="col-span-3" placeholder="Tell us why you're a great fit..." />
            </div>
          </div>
          
          <div className="my-6">
              <h4 className="font-semibold text-md mb-3">Eligibility Criteria</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                  {eligibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                      </li>
                  ))}
              </ul>
          </div>

          <DialogFooter>
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
            <Button type="submit">Submit Application</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}