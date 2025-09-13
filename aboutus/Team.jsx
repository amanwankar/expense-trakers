"use client"
import React from 'react'

import { Linkedin,Twitter } from 'lucide-react'
function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Aman Wankar',
      role: 'Frontend Developer',
      image: '/api/placeholder/200/200',
      bio: 'Computer Science major with a passion for UI/UX design and responsive web development.',
      skills: ['React','Tailwind','CSS','Nextjs'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Arya Borkar',
      role: 'Backend Developer',
      image: '/api/placeholder/200/200',
      bio: 'Specializes in server-side programming and database architecture. Enjoys solving complex problems.',
      skills: ['Superbase', 'Python', 'MongoDB'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 3,
      name: 'Altamash Shaikh',
      role: 'UI/UX Designer',
      image: '/api/placeholder/200/200',
      bio: 'Creates intuitive user experiences with a focus on accessibility and modern design principles.',
      skills: ['Figma', 'UI Design', 'Prototyping'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Aniket Dikunwar',
      role: 'Project Manager',
      image: '/api/placeholder/200/200',
      bio: 'Keeps the team organized and on track. Ensures project requirements are met with quality.',
      skills: ['Agile', 'Documentation', 'Planning'],
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ]
  return (
    <div>
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Development Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map(member => (
                  <div key={member.id} className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-xs mb-4">{member.bio}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.skills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center space-x-3">
                      <a href={member.social.linkedin || '#'} className="text-gray-400 hover:text-blue-600">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default Team
