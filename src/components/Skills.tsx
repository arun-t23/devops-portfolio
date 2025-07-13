import React, { useEffect, useState } from "react";

interface SkillsData {
  [category: string]: string[];
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillsData>({});

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then(setSkills);
  }, []);

  return (
    <section id="skills" className="py-16 px-4 bg-gray-800 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-900 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
