
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Globe,
  BrainCircuit,
  Terminal,
  Users,
  Lightbulb,
  Rocket,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Reveal from "@/components/reveal";

const domains = [
  {
    icon: Code2,
    title: "Competitive Programming",
    description:
      "Sharpen problem-solving skills, master algorithms and prepare for coding competitions.",
    tags: ["DSA", "Algorithms", "Problem Solving"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Build modern web experiences and turn creative ideas into functional products.",
    tags: ["Frontend", "Backend", "Full Stack"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    description:
      "Explore machine learning, intelligent systems and the future of AI-powered technology.",
    tags: ["AI", "ML", "Deep Learning"],
  },
  {
    icon: Cpu,
    title: "Systems & Computing",
    description:
      "Understand the technology behind computers, operating systems and high-performance computing.",
    tags: ["Systems", "Linux", "Computing"],
  },
];

const activities = [
  {
    icon: Lightbulb,
    title: "Technical Workshops",
    description:
      "Learn new technologies through practical sessions, demonstrations and collaborative learning.",
    number: "01",
  },
  {
    icon: Terminal,
    title: "Coding Challenges",
    description:
      "Challenge yourself, improve your coding abilities and learn from other problem solvers.",
    number: "02",
  },
  {
    icon: Rocket,
    title: "Collaborative Projects",
    description:
      "Work together to transform ideas into meaningful technical projects.",
    number: "03",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Ask questions. Explore possibilities.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Learn from people around you.",
  },
  {
    icon: Code2,
    title: "Innovation",
    description: "Turn ideas into working solutions.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Keep improving, one step at a time.",
  },
];

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* AMBIENT BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-64 -top-40 h-[650px] w-[650px] rounded-full bg-green-500/[0.08] blur-[140px]" />

        <div className="absolute -left-72 top-[1050px] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.06] blur-[140px]" />

        <div className="absolute -right-72 top-[2500px] h-[650px] w-[650px] rounded-full bg-green-500/[0.06] blur-[150px]" />
      </div>

      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative px-6 pb-28 pt-20 lg:px-10 lg:pb-36 lg:pt-28"
      >
        <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* HERO CONTENT */}
          <Reveal direction="left" className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-600/10 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Ramdeobaba University · Technical Community
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Think beyond.
              <br />
              <span className="text-green-600">
                Compute beyond.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A community of curious minds, developers and problem solvers.
              We explore technology, build together and push the boundaries
              of what we can create.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#about"
                className="group inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/20"
              >
                Explore our club
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="#community"
                className="group inline-flex items-center gap-3 rounded-xl border border-[var(--border)] px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:bg-[var(--surface)]"
              >
                Explore community
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <Code2 size={17} className="text-green-600" />
                Learn by building
              </div>

              <div className="flex items-center gap-2">
                <Users size={17} className="text-green-600" />
                Grow together
              </div>
            </div>
          </Reveal>

          {/* CODE VISUAL */}
          <Reveal direction="right" delay={0.15} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-green-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="font-mono text-xs text-[var(--muted)]">
                  community.cpp
                </span>

                <Code2 size={18} className="text-green-600" />
              </div>

              <div className="space-y-5 p-7 font-mono text-sm sm:p-9">
                <p className="text-[var(--muted)]">
                  <span className="text-green-600">#include</span> &lt;iostream&gt;
                </p>

                <p>
                  <span className="text-purple-500">using namespace</span>{" "}
                  std;
                </p>

                <p className="text-purple-500">int main() {"{"}</p>

                <div className="space-y-3 pl-6">
                  <p>
                    <span className="text-green-600">cout</span>
                    {" << "}
                    <span className="text-orange-500">&quot;Think.&quot;</span>;
                  </p>

                  <p>
                    <span className="text-green-600">cout</span>
                    {" << "}
                    <span className="text-orange-500">&quot;Build.&quot;</span>;
                  </p>

                  <p>
                    <span className="text-green-600">cout</span>
                    {" << "}
                    <span className="text-orange-500">&quot;Innovate.&quot;</span>;
                  </p>

                  <p>
                    <span className="text-purple-500">return</span> 0;
                  </p>
                </div>

                <p className="text-purple-500">{"}"}</p>

                <div className="mt-8 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-xs text-green-600">
                    Building something extraordinary...
                  </span>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute -bottom-24 left-0 z-10 hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-600/10 p-3 text-green-600">
                  <Cpu size={22} />
                </div>

                <div>
                  <p className="font-bold">Ideas to Innovation</p>
                  <p className="text-xs text-[var(--muted)]">
                    Learn. Experiment. Create.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative px-6 py-28 lg:px-10"
      >
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Who we are
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              More than a club.
              <br />
              A place to <span className="text-green-600">grow.</span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-[var(--muted)]">
              SuperComputing Club is a technical community at Ramdeobaba
              University where students come together to explore computing,
              exchange ideas and develop practical skills.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-[var(--muted)]">
              Whether you are writing your first program or exploring
              advanced computing concepts, there is always something new
              to learn and someone to learn with.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-xl hover:shadow-green-600/5">
                    <div className="mb-5 inline-flex rounded-xl bg-green-600/10 p-3 text-green-600 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* DOMAINS SECTION */}
      <section id="domains" className="relative px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                What we explore
              </p>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Discover your domain.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                Technology has no boundaries. Find an area that excites you
                and start exploring.
              </p>
            </div>

            <Link
              href="#community"
              className="group inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:gap-4"
            >
              Learn with us
              <ArrowRight size={18} />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain, index) => {
              const Icon = domain.icon;

              return (
                <Reveal key={domain.title} delay={index * 0.08}>
                  <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-600/50 hover:shadow-xl hover:shadow-green-600/10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="rounded-xl bg-green-600/10 p-3 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                        <Icon size={25} />
                      </div>

                      <span className="font-mono text-xs text-[var(--muted)]">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{domain.title}</h3>

                    <p className="mt-4 min-h-24 text-sm leading-7 text-[var(--muted)]">
                      {domain.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {domain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition-colors duration-300 group-hover:bg-green-600/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section
        id="activities"
        className="relative px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              Learn by doing
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Ideas become experiences.
            </h2>

            <p className="mt-5 leading-7 text-[var(--muted)]">
              Explore, experiment and collaborate through activities that
              bring technology closer to you.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <Reveal key={activity.number} delay={index * 0.1}>
                  <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-600/40 hover:shadow-xl hover:shadow-green-600/5">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="rounded-xl bg-green-600/10 p-3 text-green-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                        <Icon size={25} />
                      </div>

                      <span className="font-mono text-sm text-[var(--muted)]">
                        /{activity.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">{activity.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {activity.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="relative px-6 py-28 lg:px-10">
        <Reveal className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              The people behind the ideas
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Great things happen when we{" "}
              <span className="text-green-600">build together.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[var(--muted)]">
              A community is built by the people in it. Meet the students
              who share knowledge, organize activities and help others
              explore the world of computing.
            </p>

            <Link
              href="#community"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-green-600 transition-all duration-300 hover:gap-4"
            >
              Become part of the community
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-10 backdrop-blur-sm transition-all duration-500 hover:border-green-600/40 hover:shadow-2xl hover:shadow-green-600/5 sm:p-14">
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full bg-green-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute right-8 top-8 text-green-600/20">
              <Users size={90} />
            </div>

            <div className="relative">
              <p className="font-mono text-sm text-green-600">
                COMMUNITY / 001
              </p>

              <h3 className="mt-8 text-3xl font-black">
                Different minds.
                <br />
                Shared ambition.
              </h3>

              <p className="mt-5 max-w-sm leading-7 text-[var(--muted)]">
                Students, developers and technology enthusiasts working
                towards a common goal: learning and creating together.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* COMMUNITY PLATFORM SECTION */}
      <section id="community" className="px-6 pb-28 lg:px-10">
        <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#101b13] px-8 py-16 text-white shadow-2xl shadow-green-950/10 sm:px-14 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Coming to our community
              </p>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Stuck on a problem?
                <br />
                <span className="text-green-400">
                  Solve it together.
                </span>
              </h2>

              <p className="mt-7 max-w-xl leading-8 text-gray-300">
                A dedicated space for students to ask technical questions,
                share code, get guidance from club members and learn from
                each other.
              </p>

              <div className="mt-9">
                <Link
                  href="#home"
                  className="group inline-flex items-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/20"
                >
                  Explore the club
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-500/20 p-2 text-green-400">
                    <Terminal size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">Community workspace</p>
                    <p className="text-xs text-gray-400">
                      Learn together
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-400">
                  Coming soon
                </span>
              </div>

              <div className="space-y-3">
                {[
                  "Ask technical questions",
                  "Share code and solutions",
                  "Get guidance from club members",
                  "Learn from community discussions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:translate-x-1 hover:border-green-500/30 hover:bg-white/[0.08]"
                  >
                    <div className="rounded-full bg-green-500/20 p-1 text-green-400">
                      <ChevronRight size={15} />
                    </div>

                    <span className="text-sm text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] px-6 py-12 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="#home" className="flex items-center gap-3">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
                <Image
                  src="/images/club-logo.jpeg"
                  alt="SuperComputing Club Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              <div>
                <p className="font-extrabold">SuperComputing Club</p>
                <p className="text-xs text-[var(--muted)]">
                  Ramdeobaba University
                </p>
              </div>
            </Link>

            <p className="mt-4 text-sm text-[var(--muted)]">
              Think beyond. Compute beyond.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <Link href="#about" className="transition hover:text-green-600">
              About
            </Link>

            <Link href="#domains" className="transition hover:text-green-600">
              Domains
            </Link>

            <Link href="#activities" className="transition hover:text-green-600">
              Activities
            </Link>

            <Link href="#team" className="transition hover:text-green-600">
              Our Team
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} SuperComputing Club · Ramdeobaba University
        </div>
      </footer>
    </main>
  );
}
