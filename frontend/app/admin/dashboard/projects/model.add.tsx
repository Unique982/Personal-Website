"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AddProjectModal() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    overview: "",
    longDescription: "",
    projectImage: "",
    techStack: "",
    keyFeatures: "",
    liveDemoLink: "",
    githubFrontend: "",
    githubBackend: "",
    status: "completed",
    projectStatus: "publish",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace with API call
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Project</Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[80vh] pr-3">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-2">
            <div>
              <Label>Title</Label>
              <Input name="title" value={form.title} onChange={handleChange} />
            </div>

            <div>
              <Label>Short Description</Label>
              <Input
                name="shortDescription"
                value={form.shortDescription}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <Label>Overview</Label>
              <Textarea
                name="overview"
                value={form.overview}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2">
              <Label>Long Description</Label>
              <Textarea
                name="longDescription"
                value={form.longDescription}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Project Image URL</Label>
              <Input
                name="projectImage"
                value={form.projectImage}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Tech Stack</Label>
              <Input
                name="techStack"
                value={form.techStack}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Key Features</Label>
              <Input
                name="keyFeatures"
                value={form.keyFeatures}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Live Demo Link</Label>
              <Input
                name="liveDemoLink"
                value={form.liveDemoLink}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>GitHub Frontend</Label>
              <Input
                name="githubFrontend"
                value={form.githubFrontend}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>GitHub Backend</Label>
              <Input
                name="githubBackend"
                value={form.githubBackend}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Status</Label>
              <Input
                name="status"
                value={form.status}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Project Status</Label>
              <Input
                name="projectStatus"
                value={form.projectStatus}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-2 flex justify-end gap-2 mt-2">
              <Button type="submit">Save Project</Button>
            </div>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
