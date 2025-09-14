// ...existing code...
import { Heart, Shield, DollarSign, Users, Gift, Calendar } from 'lucide-react';

const impactBreakdown = [
	{ amount: '$25', impact: 'Provides comfort items for one child during treatment', icon: Heart },
	{ amount: '$50', impact: 'Supports one family with gas cards for hospital visits', icon: Shield },
	{ amount: '$100', impact: 'Funds one art therapy session for multiple children', icon: Gift },
	{ amount: '$250', impact: 'Provides educational support for one child for a month', icon: Users },
	{ amount: '$500', impact: 'Sponsors a family for a month of comprehensive support', icon: DollarSign },
	{ amount: '$1000', impact: 'Funds a major event or program for children', icon: Calendar }
];

const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];
const paypalLink = "https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID";

export default function Donate() {
	return (
		<section className="px-8 py-12 bg-peach">
			<h2 className="font-heading text-3xl text-coral mb-8">Donate</h2>
			<p className="text-lg text-text mb-8 text-center">
				Your gift brings hope and care to children in North Carolina. Choose a suggested amount or enter your own.
			</p>
			<div className="flex flex-col md:flex-row gap-8 mb-8">
				{impactBreakdown.map((tier) => (
					<div key={tier.amount} className="flex-1 bg-earth rounded-lg p-6 shadow-md text-center">
						<tier.icon className="h-8 w-8 text-coral mx-auto mb-2" />
						<span className="text-2xl font-bold text-coral">{tier.amount}</span>
						<p className="text-text mt-2">{tier.impact}</p>
					</div>
				))}
			</div>
			<div className="max-w-xl mx-auto bg-earth rounded-lg p-8 shadow-lg mb-8">
				<label className="block text-sm font-medium text-text mb-2">Donation Amount</label>
				<div className="flex flex-wrap gap-2 mb-2">
					{predefinedAmounts.map((amt) => (
						<a
							key={amt}
							href={`${paypalLink}&amount=${amt}`}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 rounded-full font-semibold bg-peach text-coral border-2 border-coral hover:bg-coral hover:text-white transition"
						>
							${amt}
						</a>
					))}
				</div>
				<a
					href={paypalLink}
					target="_blank"
					rel="noopener noreferrer"
					className="w-full block bg-gradient-to-r from-accent to-primary text-white py-3 rounded-full font-bold text-lg mt-4 hover:from-primary hover:to-accent transition text-center"
				>
					Donate Custom Amount
				</a>
			</div>
			<div className="text-center">
				<a href={paypalLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-coral text-white font-bold px-6 py-3 rounded-full shadow hover:bg-primary transition text-lg">
					Donate with PayPal
				</a>
				<p className="text-sm text-text mt-2">All transactions are secure. You will be redirected to PayPal.</p>
			</div>
		</section>
	);
}
