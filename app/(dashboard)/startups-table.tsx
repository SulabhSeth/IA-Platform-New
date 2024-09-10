'use client'

import React, { useState } from 'react';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Startup } from './startup';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { NewStartupForm } from './startups-form';

// Dummy data for startups
const dummyStartups = [
  {
    id: 1,
    name: "TechInnovate",
    status: "stage 2",
    businessCategory: "Artificial intelligence",
    createdOn: "2023-09-15"
  },
  {
    id: 2,
    name: "EduTech Solutions",
    status: "stage 1",
    businessCategory: "Education",
    createdOn: "2024-01-03"
  },
  {
    id: 3,
    name: "RoboWorks",
    status: "stage 3",
    businessCategory: "Robotics",
    createdOn: "2023-11-20"
  },
  {
    id: 4,
    name: "AI Dynamics",
    status: "stage 4",
    businessCategory: "Artificial intelligence",
    createdOn: "2023-07-08"
  },
  {
    id: 5,
    name: "EduBots",
    status: "stage 2",
    businessCategory: "Education",
    createdOn: "2024-02-14"
  }
];

export function StartupsTable() {
  const [startups, setStartups] = useState(dummyStartups);
  const [filter, setFilter] = useState('All');
  const [showNewStartupForm, setShowNewStartupForm] = useState(false);

  let router = useRouter();
  let startupsPerPage = 5;
  let totalStartups = startups.length;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    // Implement pagination logic here
  }

  const filteredStartups = filter === 'All' 
    ? startups 
    : startups.filter(startup => startup.businessCategory === filter);

  const handleAddNewStartup = (newStartup) => {
    setStartups([...startups, { ...newStartup, id: startups.length + 1 }]);
    setShowNewStartupForm(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Startups</CardTitle>
            <CardDescription>
              Manage your startups and view their progress.
            </CardDescription>
          </div>
          <Button onClick={() => setShowNewStartupForm(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Startup
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              <SelectItem value="Artificial intelligence">Artificial Intelligence</SelectItem>
              <SelectItem value="Robotics">Robotics</SelectItem>
              <SelectItem value="Education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Business Category</TableHead>
              <TableHead>Created On</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStartups.map((startup) => (
              <Startup key={startup.id} startup={startup} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{Math.min(startupsPerPage, totalStartups)}</strong> of <strong>{totalStartups}</strong> startups
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter>
      {showNewStartupForm && (
        <NewStartupForm onSubmit={handleAddNewStartup} onCancel={() => setShowNewStartupForm(false)} />
      )}
    </Card>
  );
}