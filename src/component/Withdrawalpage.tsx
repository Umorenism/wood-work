import React from "react";
import { motion } from "framer-motion";
import { FaBitcoin } from "react-icons/fa"; // For crypto icon
import { GiWallet } from "react-icons/gi"; // For wallet icon

const WithdrawalPage: React.FC = () => {
  const user = {
    name: "John Doe",
    walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    balance: 0.2345, // Bitcoin balance
    recentWithdrawals: [
      { date: "2024-10-01", amount: 0.01, currency: "BTC" },
      { date: "2024-09-20", amount: 0.005, currency: "BTC" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-4">
      {/* Header */}
      <motion.h1
        className="text-2xl font-bold mb-6 text-yellow-500 mt-4 flex items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FaBitcoin className="mr-2" /> Woods Withdrawal
      </motion.h1>

      {/* Crypto Balance Card */}
      <motion.div
        className="w-full max-w-xs bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* User Info */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">
            Hello, {user.name}
          </h2>
          <p className="text-sm text-gray-400 flex items-center">
            <GiWallet className="mr-2" />
            Wallet: {user.walletAddress.slice(0, 6)}...
            {user.walletAddress.slice(-6)}
          </p>
        </div>

        {/* Balance */}
        <div className="mb-4">
          <p className="text-sm text-gray-400">Current Balance</p>
          <h3 className="text-3xl font-bold text-yellow-500">
            {user.balance} BTC
          </h3>
        </div>

        {/* Recent Withdrawals */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Recent Withdrawals</p>
          <ul>
            {user.recentWithdrawals.map((withdrawal, index) => (
              <li
                key={index}
                className="flex justify-between text-sm text-gray-300"
              >
                <span>{withdrawal.date}</span>
                <span>
                  {withdrawal.amount} {withdrawal.currency}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Withdrawal Form */}
      <motion.form
        className="w-full max-w-xs bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Amount (BTC)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            placeholder="Enter amount"
          />
        </div>

        {/* Wallet Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Wallet Address
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
            placeholder="Enter wallet address"
          />
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-500 text-gray-900 py-2 rounded-md shadow-lg hover:bg-yellow-600 transition-all"
        >
          Withdraw BTC
        </motion.button>
      </motion.form>
    </div>
  );
};

export default WithdrawalPage;
