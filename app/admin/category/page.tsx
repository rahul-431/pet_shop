import { Input } from "@/components/ui/input";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddNewCategory from "@/components/form/AddNewCategory";
import { DialogTitle } from "@radix-ui/react-dialog";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Manage Category</h1>
        <Input
          placeholder="Search by name"
          className="max-w-60 border border-black"
        />
        <Dialog>
          <DialogTrigger className="bg-black text-white p-2 rounded-md">
            Add New Category
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Category
              </DialogTitle>
              <DialogDescription>Add new category</DialogDescription>
            </DialogHeader>
            <AddNewCategory />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <Table>
          <TableHeader className="text-base">
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Is Featured</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
