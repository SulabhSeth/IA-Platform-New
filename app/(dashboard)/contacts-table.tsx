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
import { Contact } from './contacts';
import { ContactForm } from './contacts-form';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for contacts
const dummyContacts = [
  {
    id: 1,
    name: "John Doe",
    companyName: "TechCorp",
    location: "New York",
    thesis: "Artificial intelligence",
    leadStage: "New",
    agreement: null,
    contactNumber: "+1234567890",
    email: "john@techcorp.com",
    mentorType: "M1",
    contactType: "Mentor"
  },
  {
    id: 2,
    name: "Jane Smith",
    companyName: "EduTech",
    location: "San Francisco",
    thesis: "Education",
    leadStage: "Contacted",
    agreement: "agreement.pdf",
    contactNumber: "+1987654321",
    email: "jane@edutech.com",
    mentorType: "M2",
    contactType: "Investor"
  },
  {
    id: 3,
    name: "Alice Johnson",
    companyName: "RoboInc",
    location: "Boston",
    thesis: "Robotics",
    leadStage: "Onboarded",
    agreement: "agreement.pdf",
    contactNumber: "+1122334455",
    email: "alice@roboinc.com",
    mentorType: "M3",
    contactType: "Team"
  },
];

export function ContactsTable() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [filter, setFilter] = useState('All');
  const [showNewContactForm, setShowNewContactForm] = useState(false);
  let router = useRouter();
  let contactsPerPage = 5;

  function prevPage() {
    router.back();
  }

  function nextPage() {
    // Implement pagination logic here
  }

  const filteredContacts = filter === 'All'
    ? contacts
    : contacts.filter(contact => contact.contactType === filter);

  const handleAddNewContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: contacts.length + 1 }]);
    setShowNewContactForm(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Contacts</CardTitle>
            <CardDescription>
              Manage your contacts and view their details.
            </CardDescription>
          </div>
          <Button onClick={() => setShowNewContactForm(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Contact
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="All" onValueChange={setFilter}>
          <TabsList>
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Mentor">Mentor</TabsTrigger>
            <TabsTrigger value="Investor">Investor</TabsTrigger>
            <TabsTrigger value="Founder">Founder</TabsTrigger>
            <TabsTrigger value="Team">Team</TabsTrigger>
          </TabsList>
        </Tabs>
        <Table className="mt-4">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Thesis</TableHead>
              <TableHead>Lead Stage</TableHead>
              <TableHead>Contact Type</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.map((contact) => (
              <Contact key={contact.id} contact={contact} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing <strong>{filteredContacts.length}</strong> of <strong>{contacts.length}</strong> contacts
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
      {showNewContactForm && (
        <ContactForm onSubmit={handleAddNewContact} onCancel={() => setShowNewContactForm(false)} />
      )}
    </Card>
  );
}