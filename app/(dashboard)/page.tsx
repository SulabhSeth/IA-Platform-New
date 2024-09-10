import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StartupsTable from './startups-table';
import ContactsTable from './contacts/page';

export default function DashboardPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = searchParams.offset ?? 0;

  return (
    <Tabs defaultValue="startups">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="startups">Startups</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          {/* <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add New
            </span>
          </Button> */}
        </div>
      </div>
      <TabsContent value="startups">
        <StartupsTable />
      </TabsContent>
      <TabsContent value="contacts">
        <ContactsTable />
      </TabsContent>
    </Tabs>
  );
}