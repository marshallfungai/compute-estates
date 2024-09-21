export default function FAQ() {
  const faqs = [
    { question: "What is Compute Estates?", answer: "Compute Estates is a software solutions company..." },
    { question: "How can I get started?", answer: "You can get started by signing up for a free trial..." },
    { question: "What kind of support do you offer?", answer: "We offer 24/7 customer support via chat, email, and phone..." }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
