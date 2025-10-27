import React from "react";
import {
	PieChart,
	Pie,
	Cell,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { useMortgage } from "../hooks/useMortgage";

/**
 * 📊 MortgageDashboard Component
 * ---------------------------------
 * Displays a detailed breakdown of the mortgage based on user inputs.
 * Utilises Recharts to visualize the relationship between principal and total interest paid across the loan term.
 * The component reads shared state via `useMortgage()` to ensure calculations stay consistent with the MortgageCalculator component.
 */

const MortgageDashboard: React.FC = () => {
	// 🔹 Access global mortgage input values from context
	const { inputs } = useMortgage();

	// 🧮 Mortgage Calculations
	const principal = inputs.propertyPrice - inputs.deposit; // Loan amount after deposit
	const monthlyRate = inputs.interestRate / 100 / 12; // Convert annual rate to monthly decimal
	const payments = inputs.termYears * 12; // Total number of monthly payments

	// Monthly payment formula (M = P * r / (1 - (1 + r)^-n))
	const monthlyPayment =
		(principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));

	// Total payment and total interest across the loan term
	const totalPaid = monthlyPayment * payments;
	const totalInterest = totalPaid - principal;

	// Chart data for Recharts
	const data = [
		{ name: "Principal", value: Math.round(principal) },
		{ name: "Total Interest", value: Math.round(totalInterest) },
	];

	// Colour palette for the chart
	const COLORS = ["#3B82F6", "#F59E0B"]; // Blue = principal, Yellow = interest

	return (
		<div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mx-auto w-[90%] max-w-2xl">
			{/* Section Header */}
			<h2 className="text-2xl font-semibold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
				📊 Mortgage Breakdown
			</h2>

			{/* Summary of mortgage details */}
			<div className="flex flex-col items-center gap-6">
				<div className="text-gray-700 text-center">
					<p>
						<strong>Property Price:</strong> £
						{inputs.propertyPrice.toLocaleString()}
					</p>
					<p>
						<strong>Deposit:</strong> £{inputs.deposit.toLocaleString()}
					</p>
					<p>
						<strong>Term:</strong> {inputs.termYears} years
					</p>
					<p>
						<strong>Interest Rate:</strong> {inputs.interestRate.toFixed(2)}%
					</p>
					<p>
						<strong>Total Interest Paid:</strong> £
						{totalInterest.toLocaleString(undefined, {
							maximumFractionDigits: 0,
						})}
					</p>
				</div>

				{/* Responsive Pie Chart (Recharts) */}
				<ResponsiveContainer width="100%" height={300}>
					<PieChart>
						<Pie
							data={data}
							dataKey="value"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={100}
							label
						>
							{/* Apply colour fill dynamically for each slice */}
							{data.map((_, index) => (
								<Cell key={index} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>

						{/* Tooltip for displaying exact currency values */}
						<Tooltip
							formatter={(value: number) =>
								`£${value.toLocaleString(undefined, {
									maximumFractionDigits: 0,
								})}`
							}
						/>

						{/* Legend to label pie chart sections */}
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default MortgageDashboard;
