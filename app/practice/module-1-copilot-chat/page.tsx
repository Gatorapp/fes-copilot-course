'use client'

import React from 'react'
import { useState, ChangeEvent } from 'react'
import type { JSX, ReactElement } from 'react'

/**
 * MODULE 1: Setup & Orientation
 *
 * This file contains exercises for your first interaction with GitHub Copilot.
 * Look for the bold comments below to know where to practice!
 */

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

interface Product {
  id: number
  name: string
  price: number
  category: string
}

export default function Module1Practice(): JSX.Element {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Module 1: First Interaction with Copilot</h1>
          <p className="text-gray-600">Practice explaining code and using Copilot Chat</p>
        </header>

        <div className="space-y-8">
          {/* Exercise 1: Simple Component */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 1: Explain Simple Code</h2>
            <SimpleCounter disabled={false} />
          </section>

          {/* Exercise 2: Data Transformation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 2: Explain Data Flow</h2>
            <DataTransformer />
          </section>

          {/* ==========================================
           * 📚 LESSON 1.3 - EXERCISE 3: EXPLAIN COMPLEX CODE
           * ==========================================
           *
           * ✅ TODO: HIGHLIGHT THE FUNCTION BELOW AND USE /explain
           *
           * Instructions:
           * 1. Highlight the entire ComplexFilter component below
           * 2. Press Ctrl/Cmd + I to open Inline Chat
           * 3. Type: /explain
           * 4. Read Copilot's explanation
           * 5. Try follow-up questions like:
           *    - "Explain it as if I'm new to React"
           *    - "List the steps this function performs"
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Exercise 3: Explain Complex Code</h2>
            <ComplexFilter />
          </section>

          {/* ==========================================
           * 🎯 PRACTICE AREA: USE COPILOT SUGGESTIONS HERE
           * ==========================================
           *
           * ✅ TODO: TRY COPILOT SUGGESTIONS HERE
           *
           * Instructions:
           * 1. Uncomment the component below
           * 2. Start typing inside the function body
           * 3. Watch for gray "ghost text" suggestions
           * 4. Press Tab to accept, Esc to dismiss
           * 5. Try Alt/Option + ] or [ to cycle suggestions
           *
           * Example: Type "const [count" and see what Copilot suggests
           *
           * ========================================== */}
          <section className="bg-white p-6 rounded-lg shadow border-2 border-blue-500">
            <h2 className="text-2xl font-semibold mb-4">🎯 Your Practice Area</h2>
            <p className="text-gray-600 mb-4">
              Create a simple component below and experiment with Copilot suggestions
            </p>
            {/* UNCOMMENT AND PRACTICE HERE:
            
            <YourPracticeComponent />
            
            */}
          </section>

          {/* Pricing Cards Section */}
          <section className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg border border-purple-100">
            <div className="text-center mb-8 lg:mb-10">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500 rounded-lg flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center sm:text-left">
                  Choose Your Plan
                </h2>
              </div>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
                Select the perfect plan for your needs. All plans include our core features with
                varying levels of access and support.
              </p>
            </div>
            <PricingCards />
          </section>

          {/* Contact Form Section */}
          <section className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            </div>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  )
}

// Simple counter component for Exercise 1
function SimpleCounter({ disabled }: { disabled: boolean }) {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-4">
      <p className="text-lg">Count: {count}</p>
      <div className="space-x-2">
        <button
          onClick={() => setCount(count + 1)}
          disabled={disabled}
          className={`px-4 py-2 text-white rounded transition-colors ${
            disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - 1)}
          disabled={disabled}
          className={`px-4 py-2 text-white rounded transition-colors ${
            disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

// Data transformation component for Exercise 2
function DataTransformer() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const evenNumbers = numbers.filter((num: number) => num % 2 === 0)
  const doubledNumbers = evenNumbers.map((num: number) => num * 2)
  const sum = doubledNumbers.reduce((acc: number, num: number) => acc + num, 0)

  return (
    <div className="space-y-2">
      <p>
        <strong>Original:</strong> {numbers.join(', ')}
      </p>
      <p>
        <strong>Even numbers:</strong> {evenNumbers.join(', ')}
      </p>
      <p>
        <strong>Doubled:</strong> {doubledNumbers.join(', ')}
      </p>
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  )
}

// Complex filtering component for Exercise 3
function ComplexFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [minPrice, setMinPrice] = useState(0)

  const products = [
    { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
    { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
    { id: 3, name: 'Desk', price: 299, category: 'Furniture' },
    { id: 4, name: 'Chair', price: 199, category: 'Furniture' },
    { id: 5, name: 'Monitor', price: 399, category: 'Electronics' },
  ]

  const filteredProducts = products
    .filter(
      product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) && product.price >= minPrice
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price
      }
      return b.price - a.price
    })

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMinPrice(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        />
        <select
          value={sortOrder}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortOrder(e.target.value as 'asc' | 'desc')
          }
          className="px-4 py-2 border rounded"
          aria-label="Sort products by price"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-lg font-bold">${product.price}</p>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">No products found</p>
      )}
    </div>
  )
}

/* ==========================================
 * 💡 ADDITIONAL PRACTICE SUGGESTIONS
 * ==========================================
 *
 * After completing the exercises above, try these:
 *
 * 1. Highlight any function and ask: "What are potential bugs here?"
 * 2. Highlight SimpleCounter and ask: "How can I optimize this?"
 * 3. Highlight ComplexFilter and ask: "What accessibility improvements can I make?"
 * 4. Create your own component and use Copilot suggestions to help
 *
 * Remember: The more you interact with Copilot, the better you'll get at
 * prompting it effectively!
 *
 * ========================================== */

// create 3 pricing cards with title, description, price and a button to select the plan. Use Tailwind CSS for styling and make it responsive.

// Contact form component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Helper function to check if all fields are properly filled
  const isFormValid = () => {
    return (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.message.trim().length > 0
    )
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-blue-600 transition-colors"
            >
              Name * {formData.name.trim() && <span className="text-green-500">✓</span>}
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 placeholder-gray-400 text-gray-800 ${
                  formData.name.trim()
                    ? 'bg-green-50 border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                    : 'bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                }`}
                placeholder="John Doe"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                {formData.name.trim() ? (
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-blue-600 transition-colors"
            >
              Email * {formData.email.trim() && <span className="text-green-500">✓</span>}
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 placeholder-gray-400 text-gray-800 ${
                  formData.email.trim()
                    ? 'bg-green-50 border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                    : 'bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                }`}
                placeholder="john@example.com"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                {formData.email.trim() ? (
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="group">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-800 mb-3 group-focus-within:text-blue-600 transition-colors"
          >
            Message * {formData.message.trim() && <span className="text-green-500">✓</span>}
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-200 placeholder-gray-400 text-gray-800 resize-none ${
                formData.message.trim()
                  ? 'bg-green-50 border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-100'
                  : 'bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
              }`}
              placeholder="Tell us about your project or ask us a question..."
            />
            <div className="absolute top-4 right-4">
              {formData.message.trim() ? (
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {submitStatus === 'success' && (
          <div className="animate-fade-in p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-800 rounded-xl flex items-center">
            <svg
              className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">Thank you! Your message has been sent successfully.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="animate-fade-in p-5 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 text-red-800 rounded-xl flex items-center">
            <svg
              className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium">
              Sorry, there was an error sending your message. Please try again.
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid()}
          className={`group w-full relative py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 transform shadow-lg ${
            isSubmitting || !isFormValid()
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-60'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl focus:ring-4 focus:ring-blue-200'
          }`}
        >
          <span className="relative z-10 flex items-center justify-center">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </>
            ) : !isFormValid() ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.19 2.5 1.732 2.5z"
                  />
                </svg>
                Please Fill All Fields
              </>
            ) : (
              <>
                Send Message
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  )
}

// Pricing cards component
function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: 'basic',
      title: 'Basic',
      description: 'Perfect for individuals getting started with our platform',
      price: '$9',
      period: '/month',
      features: [
        'Up to 5 projects',
        'Basic support',
        '2GB storage',
        'Standard templates',
        'Email support',
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      id: 'pro',
      title: 'Professional',
      description: 'Ideal for growing teams and businesses with advanced needs',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited projects',
        'Priority support',
        '50GB storage',
        'Premium templates',
        'Phone & email support',
        'Advanced analytics',
        'Team collaboration',
      ],
      popular: true,
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: 'For large organizations requiring custom solutions',
      price: '$99',
      period: '/month',
      features: [
        'Unlimited everything',
        'Dedicated support',
        '500GB storage',
        'Custom templates',
        '24/7 phone support',
        'Advanced integrations',
        'Custom workflows',
        'SLA guarantee',
      ],
      popular: false,
      gradient: 'from-purple-600 to-pink-600',
    },
  ]

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
    console.log('Selected plan:', planId)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-0">
      {plans.map(plan => (
        <div
          key={plan.id}
          className={`relative bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.02] flex flex-col h-full ${
            plan.popular
              ? 'border-purple-500 ring-2 sm:ring-4 ring-purple-200 shadow-purple-200'
              : selectedPlan === plan.id
                ? 'border-green-500 ring-2 sm:ring-4 ring-green-200 shadow-green-200'
                : 'border-gray-200 hover:border-purple-300'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl border-2 border-white">
                <span className="flex items-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="hidden xs:inline">Most Popular</span>
                  <span className="xs:hidden">Popular</span>
                </span>
              </div>
            </div>
          )}

          {selectedPlan === plan.id && (
            <div className="absolute -top-2 sm:-top-3 right-2 sm:right-4 z-10">
              <div className="bg-green-500 text-white rounded-full p-1.5 sm:p-2 shadow-xl border-2 border-white">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          )}

          <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
            {/* Header Section */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="mb-3 sm:mb-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-1 sm:px-2">
                  {plan.description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1 sm:ml-2 text-base sm:text-lg font-medium">
                    {plan.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Features Section - Flex grow to push button to bottom */}
            <div className="flex-grow">
              <ul className="space-y-3 sm:space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-2 sm:mr-3 mt-0.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button Section - Fixed at bottom */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6">
              <button
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform active:scale-95 shadow-lg ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-green-300 ring-2 ring-green-200'
                    : plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-xl hover:scale-105 shadow-purple-300`
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:scale-105 shadow-gray-300'
                }`}
              >
                {selectedPlan === plan.id ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="hidden sm:inline">Plan Selected</span>
                    <span className="sm:hidden">Selected</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="hidden sm:inline">Get {plan.title}</span>
                    <span className="sm:hidden">Choose {plan.title}</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
