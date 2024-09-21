import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faCube, faTruck } from '@fortawesome/free-solid-svg-icons';


export default function WorkProcess() {
  const steps = [
    { 
      number: "1", 
      title: "Research and Content Planning", 
      description: "Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed base bandwidth.",
      icon: faSearch
    },
    { 
      number: "2", 
      title: "Publishing and Execution", 
      description: "Dramatically administrate progressive metrics without error-free globally simplify standardized alignments plagiarize distributed.",
      icon: faRocket
    },
    { 
      number: "3", 
      title: "Product Prototyping", 
      description: "Interactively whiteboard transparent testing procedures before bricks-and-clicks initiatives administrate competencies.",
      icon: faCube
    },
    { 
      number: "4", 
      title: "Deliver the Final Product", 
      description: "Dramatically plagiarize distributed progressive metrics without error-free globally simplify standardized alignments.",
      icon: faTruck
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-green-800 font-semibold mb-2">Process</h3>
          <h2 className="text-4xl font-bold mb-4">We Follow Our Work Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enthusiastically engage cross-media leadership skills for alternative experiences.
            Proactively drive vertical systems than intuitive architectures.
          </p>
        </div>
        <div className="flex items-start">
          <div className="w-1/2 pr-8">
            <img 
              src="/images/planning-bg.jpg" 
              alt="Work Process" 
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="w-1/2 pl-8">
            {steps.map((step, index) => (
              <div key={index} className="flex mb-8">
                <div className="mr-4 mt-1">
                  <FontAwesomeIcon icon={step.icon} className="text-green-700 text-2xl" />
                </div>
                <div>
                  <h3 className="text-green-800 font-semibold mb-1">Step {step.number}</h3>
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}