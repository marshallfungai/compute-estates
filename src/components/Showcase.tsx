export default function Showcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Solutions Showcase</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Business Intelligence & Data Analysis</h3>
            <p>Description of the solution goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Build Better App with Compute Estates</h3>
            <p>Description of the app building process goes here.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
