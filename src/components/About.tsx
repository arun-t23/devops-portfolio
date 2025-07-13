
const About = () => (
  <section id="about" className="py-16 px-4 bg-gray-900 text-gray-100">
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
      <img
        src="/arun.jpg"
        alt="Arun Kumar"
        className="w-28 h-28 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4 md:mb-0"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-2">
          A Toronto based DevOps and Site Reliability Engineer with 5+ years of experience in managing cloud platforms (AWS, Azure, GCP), automating infrastructure (Terraform, Ansible), and container orchestration (Kubernetes). Focused on building scalable, secure, and observable systems.
        </p>
      </div>
    </div>
  </section>
);

export default About;
