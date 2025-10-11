"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState, memo } from "react";
import ChordsHeading from "@/components/ChordsHeading";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  name: z
    .string()
    .min(2, { message: "Name should have at least 2 characters." }),
  subscribe: z.boolean(),
  email: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const ProfileInnerForm = memo(
  ({ form }: { form: ReturnType<typeof useForm<FormData>> }) => {
    const subscribe = form.watch("subscribe");

    const onSubmit = (data: FormData) => {
      console.log("Submitted:", data);
    };

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-sm shadow-2xl p-4 rounded-lg mt-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <label className="flex items-center gap-2">
            <Controller
              name="subscribe"
              control={form.control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              )}
            />
            Subscribe to newsletter
          </label>

          {subscribe && (
            <Input {...form.register("email")} placeholder="Email address" />
          )}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  }
);
ProfileInnerForm.displayName = "ProfileInnerForm";

export default function ProfileForm() {
  const [showForm, setShowForm] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", name: "", subscribe: false, email: "" },
  });

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      <ChordsHeading/>
      <Button onClick={toggleForm} className="cursor-pointer">
        {showForm ? "Close Form" : "Add"}
      </Button>
      <div className="w-full flex justify-center">
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showForm ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ProfileInnerForm form={form} />
        </div>
      </div>

      <div>Hoe ar</div>
    </>
  );
}
