import { Mail } from "lucide-react";

export default function Contact() {
    return(
      <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            <a
              href="mailto:calvinjoshua37@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </div>
        </section>
    )
  }