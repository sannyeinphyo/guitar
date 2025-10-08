"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";


const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  artistId: z.string().min(1, "Artist ID is required"),
  image: z
    .string()
    .url("Image must be a valid URL")
    .optional()
    .or(z.literal("")),
});

type FormSchemaType = z.infer<typeof formSchema>;

const AddChordPage = () => {
  const router = useRouter();
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const response = await fetch("/api/chords", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add chord");
      }

      toast.success("Chord added successfully!");
      reset();
      router.push("/admin/chords");
    } catch (error) {
      console.error("Error adding chord:", error);
      toast.error("Error adding chord. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={() => (
              <FormItem>
                <FormLabel>Chord Name</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Enter chord name"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    {...register("name")}
                  />
                </FormControl>
                <FormDescription>Enter the name of the chord.</FormDescription>
                <FormMessage>{errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="artistId"
            render={() => (
              <FormItem>
                <FormLabel>Artist ID</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Enter artist ID"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    {...register("artistId")}
                  />
                </FormControl>
                <FormDescription>
                  Enter the ID of the artist associated with this chord.
                </FormDescription>
                <FormMessage>{errors.artistId?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Enter image URL (optional)"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    {...register("image")}
                  />
                </FormControl>
                <FormDescription>
                  Enter a URL for the chord image (optional).
                </FormDescription>
                <FormMessage>{errors.image?.message}</FormMessage>
              </FormItem>
            )}
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isSubmitting ? "Adding..." : "Add Chord"}
            </button>
            <Link
              href="/admin/chords"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AddChordPage;
