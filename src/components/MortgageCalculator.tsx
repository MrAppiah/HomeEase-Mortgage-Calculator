import React from "react";
import { useMortgage } from "../hooks/useMortgage";

/**
 * 🏠 MortgageCalculator Component
 * ---------------------------------
 * This component allows users to input mortgage details such as property price,
 * deposit, interest rate, and loan term, and dynamically calculates the monthly payment.
 *
 * It uses context (via `useMortgage`) for state management, so values can be shared
 * across components like the dashboard.
 */

const MortgageCalculator: React.FC = () => {
	// 🔹 Access global mortgage input state and updater from context
	const { inputs, setInputs } = useMortgage();

	// 🧮 Core mortgage calculations
	const principal = inputs.propertyPrice - inputs.deposit;
	const monthlyRate = inputs.interestRate / 100 / 12;
	const payments = inputs.termYears * 12;

	// Formula (Obtained from google) for monthly mortgage payment:
	// M = P * r / (1 - (1 + r)^-n)
	const monthlyPayment =
		(principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments));

	return (
		<div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 mx-auto w-[90%] max-w-md box-border transition-transform hover:scale-[1.01] duration-300">
			{/* Header */}
			<h2 className="text-2xl font-semibold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
				🏠 Mortgage Calculator
			</h2>

			{/* Input Form */}
			<form className="space-y-5">
				{[
					{ name: "propertyPrice", label: "Property Price (£)" },
					{ name: "deposit", label: "Deposit (£)" },
					{ name: "interestRate", label: "Interest Rate (%)" },
					{ name: "termYears", label: "Term (Years)" },
				].map((field) => (
					<div key={field.name}>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							{field.label}
						</label>

						{/* Controlled Input Field */}
						<input
							type={field.name === "interestRate" ? "number" : "text"}
							name={field.name}
							inputMode={field.name === "interestRate" ? "decimal" : "numeric"}
							step={field.name === "interestRate" ? "0.01" : "1"}
							min="0"
							autoComplete="on"
							placeholder={field.label}
							value={
								// Show empty field when value = 0 for cleaner UX
								inputs[field.name as keyof typeof inputs] === 0
									? ""
									: field.name === "propertyPrice" || field.name === "deposit"
									? Number(
											inputs[field.name as keyof typeof inputs]
									  ).toLocaleString()
									: inputs[field.name as keyof typeof inputs]
							}
							onChange={(e) => {
								const rawValue = e.target.value.replace(/,/g, "").trim();

								// Handles empty field (don’t auto fill with 0 while typing)
								if (rawValue === "") {
									setInputs((prev) => ({
										...prev,
										[e.target.name]: 0,
									}));
									return;
								}

								// Parse numeric input
								const numericValue = parseFloat(rawValue);
								if (!isNaN(numericValue)) {
									setInputs((prev) => ({
										...prev,
										[e.target.name]: numericValue,
									}));
								}
							}}
							className="w-full p-2.5 border border-gray-300 rounded-lg shadow-sm bg-gray-50 hover:bg-white focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
						/>
					</div>
				))}
			</form>

			{/* Monthly Payment Display */}
			<div className="mt-6 text-center">
				<p className="text-3xl font-bold text-blue-600 mt-1">
					£{isNaN(monthlyPayment) ? "0.00" : monthlyPayment.toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default MortgageCalculator;
