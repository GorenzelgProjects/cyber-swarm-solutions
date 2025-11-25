import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import posts from "@/data/blog";
import { teamMembers } from "@/data/team";
const Post = () => {
  // Get author details from team data
  const post = posts.find((p) => p.slug === "pentagon-ai-hacking");
  const author = post?.author ? teamMembers.find((m) => m.slug === post.author) : null;
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-24 px-4">
        <article className="container mx-auto max-w-[760px] space-y-8">
          <header className="space-y-6">
            <img
              src="/images/blog/ai-hacking-europe.png"
              alt="AI Hacking Pentagon China Europe"
              loading="lazy"
              width={1600}
              height={900}
              className="w-full object-contain rounded-xl border border-muted shadow-soft"
            />
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                The US And China Are Pouring Money Into AI Hacking. Where Does That Leave Europe?
              </h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                {author && (
                  <Link
                    to={`/team/${author.slug}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-8 h-8 rounded-full object-cover border border-border"
                    />
                    <span>{author.name}</span>
                  </Link>
                )}
                <span>•</span>
                <span>
                  {new Date("2025-11-25").toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  • 6 min read
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none text-foreground space-y-4">
            <p>
              ChatGPT and other versions of generative AI have taken most of the spotlight over the past few years and
              have added billions of dollars of value to companies. It is easy to get lost in all the news and product
              launches, but in a less sexy corner of AI, huge shifts are happening right now.
            </p>

            <p>
              On one side of the Atlantic, the Pentagon signs a multi-million-dollar contract with a barely visible
              startup in Virginia called Twenty. The company's speciality is AI agents that can help carry out offensive
              cyber operations against foreign targets, automating work that used to take weeks of analyst time.
            </p>

            <p>
              On the other side of the world, it has been revealed that a Chinese state-sponsored group jailbroke
              Anthropic's model, Claude, and used it to run an espionage campaign. Claude and its sub-agents handled
              most of the work themselves: mapping targets, probing for weaknesses, generating exploit code and helping
              move inside victims' systems, with humans mostly steering from a distance.
            </p>

            <p>
              Between those two stories sits Europe: heavily digital, deeply dependent on networks and cloud platforms,
              full of attractive targets, and still debating what "digital sovereignty" should mean in practice.
            </p>

            <p>
              So the question almost asks itself: if the US and China are already building and testing AI-driven
              hacking, where does Europe fit in?
            </p>

            <h2>What is AI hacking?</h2>

            <p>
              "Generative AI", "agents", "AI-driven hacking". A lot of terms that barely existed in the public
              conversation ten years ago. It helps to get away from the labels for a moment and just look at what
              actually happened.
            </p>

            <p>
              In the Chinese case, the attackers treated Claude as an independent operator. They gave it a goal and let
              the system work out how to get there. Claude broke the task into smaller pieces and spun up agents that
              collaborated: one scanned systems for weaknesses, another generated and refined exploit code, a third
              handled data collection and credential theft. According to Anthropic, the model carried out the majority
              of the operation on its own.
            </p>

            <p>
              The Pentagon's work with Twenty points in the same direction, just with a different label and a government
              contract attached. Public material around the company talks about transforming slow manual workflows into
              continuous operations across large numbers of targets, using AI agents to handle the grinding parts of
              offensive cyber work.
            </p>

            <p>
              Put simply, the tedious parts of an attack are being handed to software that never gets tired and can
              experiment much faster than a human team.
            </p>

            <h2>Where does Europe stand?</h2>

            <p>
              Europe is extremely digital. Critical services depend on software and connectivity in a way that would
              have been unthinkable even ten years ago. Energy, transport, healthcare, finance, manufacturing and public
              administration all run on layers of systems that talk to each other across borders and sectors.
            </p>

            <p>
              Over the last few months, Denmark has had a very practical reminder that this isn't an abstract problem.
              In the week leading up to the municipal and regional elections, a pro-Russian group calling itself
              NoName057(16) claimed DDoS attacks on political party and government websites. Several sites were briefly
              knocked offline on the eve of the vote, and authorities had to activate crisis procedures even though the
              actual voting went ahead as planned.
            </p>

            <p>
              In September, the ransomware group Akira claimed responsibility for breaking into Ronald A/S, a Danish
              import company, and threatened to leak around 320 gigabytes of internal data if they did not get paid.
            </p>

            <p>
              The exact same characteristics and interconnectivity that makes Danish and European networks work
              efficiently also makes them attractive targets for attackers. In September 2024, Danish companies were on
              average subjected to 1,362 attempted cyberattacks per week, according to Check Point - an increase of more
              than 26 percent since 2023. Not every attempt turns into a crisis, but it helps explain why cybersecurity
              has moved from a niche topic to something boards and politicians talk about every week.
            </p>

            <p>
              The arrival of AI-assisted hacking does not introduce a brand-new type of risk. It changes the tempo and
              the scale of risks that are already there. The gap between &quot;we know this vulnerability exists in
              theory&quot; and &quot;someone has actually tried it against one of our systems&quot; shrinks, and that
              gap was already uncomfortable for a lot of organisations.
            </p>

            <h2>Politics and paperwork vs practical capability</h2>

            <p>
              If you listen to how European ministers, industry groups and regulators talk about digital policy, the
              vocabulary is already in place. They talk about digital sovereignty, competitiveness, resilience and the
              need for strategic investment in key technologies like AI and cybersecurity. These ideas show up in
              speeches, strategies, national plans and EU programmes.
            </p>

            <p>
              On the ground, plenty of organisations still treat security as something that lives in a compliance
              checklist or a procurement contract. They buy tools, write policies, run an awareness campaign once in a
              while, and hope their providers will handle the complicated parts.
            </p>

            <p>
              The US and China do not have a monopoly on smart people or good ideas in cyber. Europe has strong research
              groups, capable national CERTs and a growing private security sector. The issue is focus. A lot of
              political energy goes into rules and frameworks, which matter, yet there is less sustained attention on
              the practical capabilities that will let European defenders keep pace with AI-enabled attackers.
            </p>

            <h2>What does Europe need to do?</h2>

            <p>
              All over Europe, business organisations are saying roughly the same two things. First, they warn that
              Europe is losing ground on innovation, risk capital and productivity, and that digital competitiveness is
              under pressure compared with the US and China. At the same time, they push for heavy investment in AI,
              cloud, cybersecurity and other critical technologies, and ask Brussels to cut down on the administrative
              noise around digital regulation and cyber reporting that eats time without adding much value.
            </p>

            <p>
              Europe needs to be more secure and more competitive, but a lot of companies already feel stretched dealing
              with NIS2, AI rules, incident reporting and general compliance. That is exactly why strong cybersecurity
              has to grow in a way that removes friction instead of adding more.
            </p>

            <p>
              This is where AI and multi-agent systems make sense on the defensive side. If offensive teams can tell an
              AI "map out these targets and find a way in", then defenders should be able to say "take this new
              exposure, rehearse it safely against something that looks like our setup, and give us a clear picture".
              The same machinery can drive modern red teaming: continuous, automated campaigns in sandboxes that mirror
              production, rather than one big pen-test every few years. That kind of automation does two useful things
              at once: it raises the real security level, and it can generate a lot of the evidence and documentation
              companies are asked for anyway.
            </p>

            <p>
              From our side, that is the interesting intersection: AI, red teaming, and European competitiveness. As
              hackers get access to more capable tools, the baseline for defence has to move. The question for Europe is
              whether that baseline is shaped mostly in Washington and Shenzhen, or whether some of it is designed here,
              with our infrastructure, our rules and our companies in mind.
            </p>

            <p>
              The US and China are already treating AI-assisted cyber operations as a serious, funded capability. Europe
              cannot wish that away, and it cannot regulate it out of existence elsewhere. What it can do is decide how
              much of its future security and competitiveness it is comfortable outsourcing, and how much it wants to
              build and understand itself.
            </p>

            <p>
              That decision plays out right now in the details: which projects get funded, which tools security teams
              receive, which experiments are encouraged, and how quickly new ideas move from labs and startups into the
              everyday work of defending European networks.
            </p>

            <p>Those choices will, quietly, decide where Europe really stands in the age of AI-run hacking.</p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 text-center space-y-3">
              <p className="text-lg text-muted-foreground">Want to discuss how this applies to your environment?</p>
              <Button asChild>
                <a href="mailto:kontakt@colleaiq.dk">Email us</a>
              </Button>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default Post;
