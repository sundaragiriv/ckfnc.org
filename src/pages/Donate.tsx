import React, { useState } from 'react';
import { Heart, Shield, DollarSign, Users, Gift, CreditCard, Calendar, CheckCircle } from 'lucide-react';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const predefinedAmounts = ['25', '50', '100', '250', '500', '1000'];

  const impactBreakdown = [
    {
      amount: '$25',
      impact: 'Provides comfort items for one child during treatment',
      icon: Heart
    },
    {
      amount: '$50',
      impact: 'Supports one family with gas cards for hospital visits',
      icon: Shield
    },
    {
      amount: '$100',
      impact: 'Funds one art therapy session for multiple children',
      icon: Gift
    },
    {
      amount: '$250',
      impact: 'Provides educational support for one child for a month',
      icon: Users
    },
    {
      amount: '$500',
      impact: 'Supports emergency financial assistance for one family',
      icon: DollarSign
    },
    {
      amount: '$1000',
      impact: 'Funds critical research for one month',
      icon: Shield
    }
  ];

  const paymentOptions = [
    { value: 'credit-card', label: 'Credit/Debit Card', icon: CreditCard },
    { value: 'paypal', label: 'PayPal', icon: Shield },
    { value: 'bank-transfer', label: 'Bank Transfer', icon: DollarSign },
    { value: 'check', label: 'Check', icon: Gift }
  ];

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation processing here
    console.log('Donation submitted:', {
      amount: donationAmount || customAmount,
      frequency,
      paymentMethod,
      donorInfo
    });
  };

  const currentAmount = donationAmount || customAmount;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Donation</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your generosity provides hope, healing, and support to children with cancer and their families. 
              Every donation makes a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-8">
              <h2 className="text-3xl font-bold text-center mb-4">Choose Your Donation Amount</h2>
              <p className="text-center text-pink-100">
                Select an amount or enter a custom donation to support our mission.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Donation Amount</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        donationAmount === amount
                          ? 'border-pink-500 bg-pink-50 text-pink-600'
                          : 'border-gray-300 hover:border-pink-300 hover:bg-pink-50'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Frequency</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFrequency('one-time')}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                      frequency === 'one-time'
                        ? 'border-pink-500 bg-pink-50 text-pink-600'
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    One-time Donation
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                      frequency === 'monthly'
                        ? 'border-pink-500 bg-pink-50 text-pink-600'
                        : 'border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    <Calendar className="h-5 w-5 inline mr-2" />
                    Monthly Recurring
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {paymentOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPaymentMethod(option.value)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                        paymentMethod === option.value
                          ? 'border-pink-500 bg-pink-50 text-pink-600'
                          : 'border-gray-300 hover:border-pink-300'
                      }`}
                    >
                      <option.icon className="h-6 w-6 mx-auto mb-2" />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Donor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={donorInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={donorInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={donorInfo.address}
                    onChange={handleInputChange}
                    className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={donorInfo.city}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={donorInfo.state}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={donorInfo.zipCode}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition-all flex items-center justify-center"
              >
                Complete Donation
                {currentAmount && ` - $${currentAmount}`}
                <Heart className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donation directly supports children and families affected by cancer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactBreakdown.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{item.amount}</h3>
                <p className="text-gray-700 text-center">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Tax Information</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-center">
                <strong>NC Cancer Kids 1st is a 501(c)(3) nonprofit organization.</strong>
              </p>
              <p className="text-center">
                <strong>Tax ID:</strong> 12-3456789
              </p>
              <p className="text-center">
                Your donation is tax-deductible to the fullest extent allowed by law. 
                You will receive a receipt for your donation via email immediately after your gift is processed.
              </p>
              <p className="text-center">
                <strong>100% of your donation goes directly to programs that support children with cancer and their families.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tracking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Track Your Impact</h2>
            <p className="text-xl text-gray-600">
              We believe in transparency and want you to see exactly how your donation is making a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Receipt</h3>
              <p className="text-gray-700">Receive your tax-deductible donation receipt immediately via email.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Updates</h3>
              <p className="text-gray-700">Get regular updates on how your donation is helping children and families.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <Gift className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Report</h3>
              <p className="text-gray-700">Receive our annual impact report showing total program outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Giving Options */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Other Ways to Give</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Explore additional ways to support our mission and make a lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center">
              <Gift className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legacy Giving</h3>
              <p className="mb-4">Include NC Cancer Kids 1st in your will or estate planning.</p>
              <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Memorial Gifts</h3>
              <p className="mb-4">Honor a loved one with a meaningful memorial donation.</p>
              <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Give in Memory
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-6 text-center">
              <Building className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporate Giving</h3>
              <p className="mb-4">Partner with us through corporate sponsorships and employee giving.</p>
              <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;