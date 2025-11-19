"use client";
import React from "react";
import MainLayout from "../layout/main-layout";
import Sidebar from "../layout/sidebar";
import Navbar from "../layout/navbar";
import Card from "../global/card";

const stats = [
  { title: "Total Courses", value: 12 },
  { title: "Active Students", value: 248 },
  { title: "Pending Reviews", value: 5 },
  { title: "Support Tickets", value: 2 },
];

const DashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="admin" />} navbar={<Navbar />}>
    <h1 className="text-3xl font-bold mb-6 text-black">Admin Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((s) => (
        <Card key={s.title} className="transition hover:shadow-lg">
          <h2 className="text-sm font-medium text-gray-500 mb-1">{s.title}</h2>
          <p className="text-2xl font-semibold text-black">{s.value}</p>
        </Card>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
        <p className="text-black">
          This is your admin dashboard. Here you can find your courses,
          progress, and more.
        </p>
      </Card>
      <Card>
        <h2 className="text-xl text-black font-semibold mb-2">Next Steps</h2>
        <ul className="text-sm text-black list-disc pl-5 space-y-1">
          <li>Integrate real metrics.</li>
          <li>Add course management panel.</li>
          <li>Configure role-based permissions.</li>
        </ul>
      </Card>
    </div>
  </MainLayout>
);

export default DashboardPage;
