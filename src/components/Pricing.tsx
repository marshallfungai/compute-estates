export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$29", features: ["Feature 1", "Feature 2", "Feature 3"] },
    { name: "Pro", price: "$49", features: ["All Basic features", "Feature 4", "Feature 5"] },
    { name: "Enterprise", price: "$79", features: ["All Pro features", "Feature 6", "Feature 7"] }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Check Our Valuable Price</h2>
        <div className="flex justify-between">
          {plans.map((plan, index) => (
            <div key={index} className={`w-1/3 bg-white p-8 rounded-lg shadow-lg ${index === 1 ? 'transform scale-105' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-full">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
