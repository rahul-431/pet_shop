"use client";

import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type FormData = {
  name: string;
  description?: string;
  image?: FileList;
  isFeatured?: boolean;
};

const AddNewCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Field */}
      <div>
        <Label htmlFor="name">
          Name <span className="text-red-500">*</span>
        </Label>
        <input
          type="text"
          id="name"
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } p-2 shadow-sm `}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div>
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
          {...register("description")}
          rows={4}
        />
      </div>

      {/* Image Field */}
      <div>
        <Label htmlFor="image">Upload Image</Label>
        <Input
          type="file"
          id="image"
          className="mt-1 block w-full text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
          {...register("image")}
        />
      </div>

      {/* isFeatured Field */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="isFeatured"
          className="h-4 w-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
          {...register("isFeatured")}
        />
        <Label htmlFor="isFeatured">Featured</Label>
      </div>

      {/* Submit Button */}
      <div>
        <Button className="w-full" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddNewCategory;
