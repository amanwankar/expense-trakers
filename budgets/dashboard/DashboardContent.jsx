"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Search } from "lucide-react";
import './DashboardContent.css';
import Piechart from "./Piechart";
import Cards from "./Cards";
import Transaction from "./Transaction";
import Goles from "./Goles";
import IncomeGraph from "./Charts";
import Navbar from "./Navbar";
export default function DashboardContent() {

  return (

    
    <main className="dashboard-container">
    {/* Dashboard Header */}
       <Navbar></Navbar>
    {/* Top Cards */}
      <Cards></Cards>
    {/* Charts Section */}
    <section className="charts-section">
    {/* Income Chart */}
      <IncomeGraph></IncomeGraph>
    {/* Activity Pie Chart */}
      <Piechart></Piechart>
    </section>
    {/* Transactions & Goals */}
    <section className="bottom-section">
    {/* Transaction History */}
     <Transaction></Transaction>
    {/* My Goals */}
    <Goles></Goles>
     </section>
    </main>
  );
}