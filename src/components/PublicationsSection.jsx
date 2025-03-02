import React, { useState, useId, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import bg1 from "../assets/image/bg1.jpg"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"


const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

const cards = [
  {
    description: "Constitutional Law Review",
    title: "The Evolution of First Amendment Jurisprudence",
    src: bg1,
    ctaText: "Read More",
    ctaLink: "https://example.com/constitutional-law-review",
    content: () => (
      <p>
        This comprehensive review explores the historical development and current state of First Amendment jurisprudence
        in the United States. It examines landmark Supreme Court cases that have shaped our understanding of free
        speech, freedom of religion, and freedom of the press. <br /> <br />
        The article delves into the complexities of balancing individual rights with societal interests, analyzing how
        the interpretation of the First Amendment has evolved in response to changing social norms and technological
        advancements. It also discusses emerging challenges in the digital age and their implications for future First
        Amendment cases.
      </p>
    ),
  },
  {
    description: "International Law Journal",
    title: "The Role of International Courts in Human Rights Protection",
    src: bg1,
    ctaText: "Read More",
    ctaLink: "https://example.com/international-law-journal",
    content: () => (
      <p>
        This article examines the crucial role that international courts play in protecting human rights across the
        globe. It focuses on the International Criminal Court (ICC) and the European Court of Human Rights (ECHR),
        analyzing their jurisdiction, landmark cases, and impact on national legal systems. <br /> <br />
        The study highlights the challenges these courts face, including issues of state sovereignty and enforcement of
        judgments. It also explores the interplay between international and domestic legal systems in upholding human
        rights standards, and discusses the future of international human rights law in an increasingly interconnected
        world.
      </p>
    ),
  },
  {
    description: "Environmental Law Review",
    title: "Climate Change Litigation: A Global Perspective",
    src: bg1,
    ctaText: "Read More",
    ctaLink: "https://example.com/environmental-law-review",
    content: () => (
      <p>
        This groundbreaking article provides a comprehensive overview of climate change litigation across different
        jurisdictions. It analyzes key cases from various countries, examining the legal strategies employed by
        plaintiffs and the responses of courts to climate-related claims. <br /> <br />
        The study explores the role of science in climate litigation, the challenges of establishing causation and
        liability, and the potential impact of these cases on environmental policy and corporate behavior. It also
        discusses the emerging concept of climate justice and its implications for future legal actions related to
        climate change.
      </p>
    ),
  },
  {
    description: "Technology Law Journal",
    title: "Artificial Intelligence and the Law: Challenges and Opportunities",
    src: bg1,
    ctaText: "Read More",
    ctaLink: "https://example.com/technology-law-journal",
    content: () => (
      <p>
        This forward-looking article examines the intersection of artificial intelligence (AI) and the law, exploring
        both the challenges and opportunities presented by this rapidly evolving technology. It covers a range of legal
        issues, including liability for AI decisions, intellectual property rights in AI-generated works, and the use of
        AI in legal practice. <br /> <br />
        The study also delves into the ethical considerations surrounding AI, such as bias in algorithmic
        decision-making and privacy concerns. It concludes with recommendations for legal and regulatory frameworks that
        can foster innovation while protecting individual rights and societal values in an AI-driven world.
      </p>
    ),
  },
  {
    description: "Criminal Justice Law Review",
    title: "Restorative Justice: A New Paradigm in Criminal Law",
    src: bg1,
    ctaText: "Read More",
    ctaLink: "https://example.com/criminal-justice-law-review",
    content: () => (
      <p>
        This insightful article explores the concept of restorative justice as an alternative approach to traditional
        criminal justice systems. It examines the principles of restorative justice, its implementation in various
        jurisdictions, and its potential to address the limitations of punitive justice models. <br /> <br />
        The study analyzes case studies where restorative justice practices have been successfully applied, discussing
        their impact on victims, offenders, and communities. It also addresses the challenges and criticisms of
        restorative justice, and proposes ways to integrate restorative practices into existing criminal justice
        frameworks for a more holistic approach to crime and punishment.
      </p>
    ),
  },
]

const PublicationsSection = () => {
  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const id = useId()

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Law Publications</h2>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={active.src || "/placeholder.svg"}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-800 text-white hover:bg-green-900 transition-colors whitespace-nowrap"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)]"
                    >
                      {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-green-50 dark:hover:bg-green-900/10 rounded-xl cursor-pointer transition-colors"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    src={card.src || "/placeholder.svg"}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-center"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-black text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-800 hover:text-white text-black mt-4 md:mt-0 transition-colors whitespace-nowrap "
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
        <div className="mt-16">
          <Link to="/publications" className="inline-flex items-center text-lg font-medium group hover:text-green-900">
            View All Publications
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PublicationsSection

