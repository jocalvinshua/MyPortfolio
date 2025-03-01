import { X, Menu, Github, Linkedin, Mail, Instagram, Code, ExternalLink } from "lucide-react";

export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-2 mb-12">
            <Code className="w-6 h-6 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900 text-left">Featured Projects</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"
            ].map((imageUrl, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={imageUrl}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-left">
                    Project {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4 text-left">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}