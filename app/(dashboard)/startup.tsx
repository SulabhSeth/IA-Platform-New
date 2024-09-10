import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';

interface StartupProps {
  startup: {
    id: number;
    name: string;
    status: string;
    businessCategory: string;
    createdOn: string;
  };
}

export default function Startup({ startup }: StartupProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{startup.name}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {startup.status}
        </Badge>
      </TableCell>
      <TableCell>{startup.businessCategory}</TableCell>
      <TableCell>{startup.createdOn}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}