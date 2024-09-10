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

interface ContactProps {
  contact: {
    id: number;
    name: string;
    companyName: string;
    location: string;
    thesis: string;
    leadStage: string;
    agreement: string | null;
    contactNumber: string;
    email: string;
    mentorType: string;
    contactType: string;
  };
}

export function Contact({ contact }: ContactProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{contact.name}</TableCell>
      <TableCell>{contact.companyName}</TableCell>
      <TableCell>{contact.thesis}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {contact.leadStage}
        </Badge>
      </TableCell>
      <TableCell>{contact.contactType}</TableCell>
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
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}