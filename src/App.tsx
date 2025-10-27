import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import MortgageCalculator from "./components/MortgageCalculator";
import MortgageDashboard from "./components/MortgageDashboard";
import { MortgageProvider } from "./context/MortgageContext";

/**
 * App Component
 * ------------------------------------
 * Acts as the root layout for the HomeEase application.
 *
 * Handles:
 * - Global state (via MortgageProvider)
 * - Routing between Calculator and Dashboard
 * - Responsive navigation bar for mobile and desktop
 * - layout and footer
 */

function App() {
	// Manages mobile menu toggle state
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<MortgageProvider>
			{/* Main Application Layout */}
			<div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white text-gray-800">
				{/* Navbar */}
				<nav className="w-full bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
					<div className="container mx-auto px-4 py-4 flex justify-between items-center">
						<h1 className="text-2xl sm:text-3xl font-extrabold text-blue-700 flex items-center gap-1">
							🏡 HomeEase
						</h1>

						{/* Desktop Navigation Links */}
						<div className="hidden sm:flex space-x-8">
							<NavLink
								to="/"
								end
								className={({ isActive }) =>
									`transition-colors font-medium ${
										isActive
											? "text-blue-600 border-b-2 border-blue-600 pb-1"
											: "text-gray-600 hover:text-blue-600"
									}`
								}
							>
								Calculator
							</NavLink>
							<NavLink
								to="/dashboard"
								className={({ isActive }) =>
									`transition-colors font-medium ${
										isActive
											? "text-blue-600 border-b-2 border-blue-600 pb-1"
											: "text-gray-600 hover:text-blue-600"
									}`
								}
							>
								Dashboard
							</NavLink>
						</div>

						{/* Mobile Menu Button */}
						<button
							className="sm:hidden text-2xl text-blue-700"
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label="Toggle Menu"
						>
							{menuOpen ? "✕" : "☰"}
						</button>
					</div>

					{/* Mobile Dropdown Menu */}
					<div
						className={`sm:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
							menuOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
						}`}
					>
						<div className="flex flex-col items-center py-3 space-y-3">
							<NavLink
								to="/"
								end
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									`font-medium ${
										isActive
											? "text-blue-600 underline"
											: "text-gray-700 hover:text-blue-600"
									}`
								}
							>
								Calculator
							</NavLink>
							<NavLink
								to="/dashboard"
								onClick={() => setMenuOpen(false)}
								className={({ isActive }) =>
									`font-medium ${
										isActive
											? "text-blue-600 underline"
											: "text-gray-700 hover:text-blue-600"
									}`
								}
							>
								Dashboard
							</NavLink>
						</div>
					</div>
				</nav>

				{/* Main Page Content */}
				<main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
					<div className="container mx-auto max-w-md sm:max-w-xl md:max-w-2xl">
						<Routes>
							<Route path="/" element={<MortgageCalculator />} />
							<Route path="/dashboard" element={<MortgageDashboard />} />
						</Routes>
					</div>
				</main>

				{/* Footer */}
				<footer className="w-full text-center text-gray-500 text-sm py-6 border-t border-gray-200">
					© {new Date().getFullYear()} HomeEase | Built with React + TypeScript
					| Emmanuel Appiah
				</footer>
			</div>
		</MortgageProvider>
	);
}

export default App;
