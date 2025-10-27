import { useContext } from "react";
import { MortgageContext } from "../context/MortgageContext";

/**
 * useMortgage Hook
 * ------------------------
 * A custom React hook that provides access to the global mortgage state.
 *
 * This simplifies the process of reading and updating mortgage data (inputs)
 * from any component — without manually importing or handling the context.
 *
 * Ensures that the hook can only be used inside the MortgageProvider.
 */

export const useMortgage = () => {
	// Retrieve the current context value
	const context = useContext(MortgageContext);

	// Safety check to prevent misuse outside the provider
	if (!context) {
		throw new Error("useMortgage must be used within a MortgageProvider");
	}

	// Return the context (contains inputs + setInputs)
	return context;
};
