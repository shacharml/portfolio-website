import React, { useRef } from "react"
import { EDUCATION } from "../../constants"

const Education = () => {
    const educationRef = useRef(null)
  return (
    <section className="py-16" id="education" ref={educationRef}>
        <div className="mx-auto max-w-full px-4">
            <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
                Education
            </h2>
            <div className="flex flex-col space-y-8">
                {EDUCATION.map((edu) =>(
                    <div key={edu.id} className="rounded-xl border border-purple-300/20 p-6">
                        <h3 className="mb-2 text-lg font-semibold lg:text-2xl">{edu.degree}</h3>
                        <h4 className="text-lg lg:text-xl">{edu.institution}</h4>
                        <p className="text-sm lg:text-base">{edu.duration}</p>
                        <p className="mt-4">{edu.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Education