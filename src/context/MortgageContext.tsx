import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

/**
 * MortgageContext
 * ------------------------
 * Mortgage context provides state management for mortgage-related inputs across the app.
 *
 * Allows both the MortgageCalculator and MortgageDashboard
 * components to access and update the same mortgage data.
 */

/** Structure for all mortgage input fields */
interface MortgageInputs {
	propertyPrice: number;
	deposit: number;
	interestRate: number;
	termYears: number;
}

/** (inputs + updater) */
interface MortgageContextType {
	inputs: MortgageInputs;
	setInputs: React.Dispatch<React.SetStateAction<MortgageInputs>>;
}

/**
 * React Context
 */
export const MortgageContext = createContext<MortgageContextType | undefined>(
	undefined
);

/**
 * MortgageProvider Component
 * Wraps the entire app and supplies mortgage state to children
 */
export const MortgageProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// Shared state for mortgage inputs
	const [inputs, setInputs] = useState<MortgageInputs>({
		propertyPrice: 250000,
		deposit: 20000,
		interestRate: 5,
		termYears: 25,
	});

	// Provide state and updater to all child components
	return (
		<MortgageContext.Provider value={{ inputs, setInputs }}>
			{children}
		</MortgageContext.Provider>
	);
};
