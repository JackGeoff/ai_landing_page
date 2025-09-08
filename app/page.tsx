import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Spotlight as SpotlightCursor } from "@/components/ui/spotlight-cursor"
import { SplineScene } from "@/components/ui/spline-scene"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { SparklesCore } from "@/components/ui/sparkles"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import {
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
  Bot,
  Workflow,
  Brain,
  MessageSquare,
  Cog,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/[0.96]">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" size={300} />
        <SpotlightCursor size={150} className="z-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-balance font-bold md:text-5xl">
                  Results and Costs Reduced by AI
                </h1>
                <p className="text-neutral-300 max-w-2xl text-pretty text-base font-light">
                  We help businesses automate workflows, build intelligent chatbots, and integrate AI agents that work
                  24/7 to boost productivity and drive growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 bg-transparent"
                >
                  View Case Studies
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>30-Day ROI Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right content - 3D Scene */}
            <div className="relative h-[500px] lg:h-[600px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Still Managing Everything Manually?</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Spending hours on repetitive tasks that could be automated
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Missing leads because you can't respond to inquiries 24/7
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Struggling to scale operations without hiring more staff
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  Losing competitive edge to AI-powered competitors
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">We Build AI Solutions That Work</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Custom AI agents that handle customer inquiries instantly
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Workflow automation that saves 20+ hours per week
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Seamless integration with your existing tools and systems
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  Proven ROI within 30 days of implementation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI services designed to transform your business operations
            </p>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            <BentoCard
              name="AI Chatbots & Virtual Assistants"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Bot}
              description="Intelligent conversational agents that handle customer support, lead qualification, and sales inquiries 24/7 with natural language processing."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Workflow Automation"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Workflow}
              description="Streamline repetitive processes and eliminate manual tasks with intelligent automation systems that save 20+ hours per week."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="AI Integration Services"
              className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Cog}
              description="Seamlessly integrate AI capabilities into your existing e-commerce and enterprise systems with custom APIs."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Smart Analytics & Insights"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={Brain}
              description="AI-powered analytics that provide actionable insights and predictive intelligence for better decision making."
              href="#"
              cta="Learn more"
            />
            <BentoCard
              name="Custom AI Development"
              className="lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              background={<div className="absolute inset-0 bg-black/80 backdrop-blur-sm border border-white/10" />}
              Icon={MessageSquare}
              description="Bespoke AI solutions tailored to your unique business needs, from machine learning models to intelligent automation systems."
              href="#"
              cta="Learn more"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Measurable Results That Matter</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our clients see immediate impact on their bottom line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">80%</h3>
              <p className="text-gray-300">Time Saved on Manual Tasks</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">300%</h3>
              <p className="text-gray-300">Average ROI Within 6 Months</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">150%</h3>
              <p className="text-gray-300">Increase in Lead Conversion</p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-orange-900/40 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">24/7</h3>
              <p className="text-gray-300">Automated Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by Growing Businesses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "The AI chatbot increased our lead conversion by 200% and handles 90% of customer inquiries
                    automatically. ROI was evident within the first month."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">CEO, TechStart Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "Workflow automation saved us 25 hours per week. Our team can now focus on strategic growth instead
                    of repetitive tasks."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Michael Chen</p>
                    <p className="text-sm text-gray-400">Operations Director, GrowthCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  <p className="text-gray-300">
                    "The AI integration transformed our e-commerce platform. Sales increased by 180% with personalized
                    customer experiences."
                  </p>
                  <div>
                    <p className="font-semibold text-white">Emily Rodriguez</p>
                    <p className="text-sm text-gray-400">Founder, RetailMax</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From consultation to implementation, we make AI adoption seamless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Book a Call</h3>
              <p className="text-gray-300">
                Schedule a free consultation to discuss your business needs and identify automation opportunities
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">AI Strategy</h3>
              <p className="text-gray-300">
                We analyze your workflows and create a custom AI strategy tailored to your specific business goals
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Implementation</h3>
              <p className="text-gray-300">
                Our team builds, tests, and deploys your AI solutions with ongoing support and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <AnimatedGradientBackground
          Breathing={true}
          gradientColors={["#0A0A0A", "#2979FF", "#FF80AB", "#FF6D00", "#FFD600", "#00E676", "#3D5AFE"]}
          gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="relative h-32 w-full flex flex-col items-center justify-center">
              <div className="w-full absolute inset-0">
                <SparklesCore
                  id="ctasparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={0.8}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 relative z-20 text-balance">
                Ready to cut costs with AI?
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">AI Agency</h3>
              <p className="text-gray-300">
                Transforming businesses through intelligent automation and AI integration.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    AI Chatbots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    AI Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@aiagency.com</li>
                <li>(555) 123-4567</li>
                <li>123 AI Street, Tech City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 AI Agency. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
