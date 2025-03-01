export default function AboutMe() {
    return(
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            Hi, I'm <span className="font-semibold">Joshua Calvin</span>, a web developer passionate about data management and analysis.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 text-left">
            I have experience working with <span className="font-semibold">React, Node.js, Django, and Python (Pandas)</span>. 
            Currently, I'm focusing on improving my skills in <span className="font-semibold">web development</span> and <span className="font-semibold">data analysis</span>.
          </p>
        </div>
      </section>
    )
  }