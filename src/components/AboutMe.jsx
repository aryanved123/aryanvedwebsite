export default function AboutMe() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Hello! My name is Aryan Ved, and I am a third-year Computer Science student at Ontario Tech University. 
        I'm passionate about technology and innovation, with a strong interest in software development, 
        cybersecurity, and data analytics. When I'm not coding, you can find me solving Rubik's cubes or 
        working on projects related to the intersection of technology and real-world applications.
      </p>


       {/* Skills Section */}
       <section className="py-20 bg-gray-900">
          <div className="text-center container mx-auto max-w-10xl">
            <h2 className="text-4xl font-bold text-indigo-400 bg-center">Skills</h2>
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800">
          <div className="container mx-auto max-w-5xl">
            <Projects />
          </div>
        </section>
    </section>

    
  );
}
