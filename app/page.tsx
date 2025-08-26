import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Zap, Code, Users, TrendingUp, ArrowRight, Star, Globe } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-foreground">Jafa Systems</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#integration" className="text-muted-foreground hover:text-foreground transition-colors">
                Integration
              </Link>
              <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button asChild className="animate-pulse-glow">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="w-3 h-3 mr-1" />
                  Trusted by 10,000+ businesses
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Seamless <span className="text-primary">STK Push</span> Payments for Your Business
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The most reliable STK Push API platform. Send payment prompts directly to your customers' phones and
                  get instant confirmations. No USSD codes, no hassle.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 animate-pulse-glow" asChild>
                  <Link href="/signup">
                    Start STK Push Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent" asChild>
                  <Link href="#demo">View Live Demo</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Instant STK prompts</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Real-time callbacks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl animate-float">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">STK Push Demo</h3>
                    <Badge variant="secondary">Live</Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-muted-foreground">Amount (KES)</label>
                      <div className="mt-1 p-3 bg-muted rounded-lg">KES 1,500</div>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Phone Number</label>
                      <div className="mt-1 p-3 bg-muted rounded-lg">+254 700 123456</div>
                    </div>
                    <Button className="w-full">Send STK Push</Button>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Businesses</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Transactions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Why Choose Our STK Push API?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for developers, trusted by businesses. Everything you need for seamless STK Push payments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Simple STK Push API</CardTitle>
                <CardDescription>
                  One API call to send payment prompts. Comprehensive documentation, webhooks, and real-time status
                  updates.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Secure & Compliant</CardTitle>
                <CardDescription>
                  Bank-grade security with encrypted STK push requests, fraud detection, and PCI DSS compliance.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Instant Delivery</CardTitle>
                <CardDescription>
                  STK push prompts delivered in under 2 seconds with 99.9% delivery rate and instant payment
                  confirmations.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Real-time Analytics</CardTitle>
                <CardDescription>
                  Track STK push success rates, payment completion times, and customer behavior with detailed insights.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  24/7 technical support from STK push specialists with deep M-Pesa integration experience.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>
                  Works with any platform. SDKs for Python, Node.js, PHP, and REST API for custom implementations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Steps */}
      <section id="integration" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Start Sending STK Push in 3 Steps</h2>
            <p className="text-xl text-muted-foreground">From signup to first STK push in under 5 minutes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold">Get API Keys</h3>
              <p className="text-muted-foreground">
                Sign up for free and get instant access to your STK push API keys and sandbox environment.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold">Make API Call</h3>
              <p className="text-muted-foreground">
                One simple API call with phone number and amount to send STK push prompts to your customers.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold">Receive Callbacks</h3>
              <p className="text-muted-foreground">
                Get instant webhooks when customers complete payments with transaction details and confirmations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Pay only for successful STK push transactions</p>
          </div>
          <Card className="border-2 border-primary/50 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
            <div className="grid lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Pricing info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">STK Push API</h3>
                    <p className="text-lg text-muted-foreground">Perfect for businesses of all sizes</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold">KES 5000</div>
                    <div className="text-muted-foreground text-lg">per successful transaction</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                    View Documentation
                  </Button>
                </div>
                <div className="text-center sm:text-left text-sm text-muted-foreground">
                  No setup fees • No monthly charges • Cancel anytime
                </div>
              </div>

              {/* Right side - Features */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Everything included:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Unlimited STK push requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Real-time webhooks & callbacks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Advanced analytics dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>24/7 technical support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>99.9% uptime SLA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Free sandbox environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Multiple SDKs & libraries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Transaction monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Trusted by Leading Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The STK push integration was seamless. Our customers love the instant payment prompts and we've seen
                  40% faster checkout completion."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">JK</span>
                  </div>
                  <div>
                    <div className="font-semibold">John Kamau</div>
                    <div className="text-sm text-muted-foreground">CEO, TechStart Kenya</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "STK push callbacks are instant and reliable. The API documentation made integration a breeze for our
                  development team."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">AM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Alice Mwangi</div>
                    <div className="text-sm text-muted-foreground">CTO, ShopSmart</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "99.8% STK push delivery rate and sub-2-second response times. This platform transformed our payment
                  experience completely."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">DO</span>
                  </div>
                  <div>
                    <div className="font-semibold">David Ochieng</div>
                    <div className="text-sm text-muted-foreground">Founder, PayFast</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">Ready to Send Your First STK Push?</h2>
          <p className="text-xl opacity-90">
            Join thousands of businesses using our STK Push API to streamline their payment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">J</span>
                </div>
                <span className="text-xl font-bold">Jafa Systems</span>
              </div>
              <p className="text-muted-foreground">
                The most reliable STK Push API platform for businesses across Kenya and East Africa.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    STK Push API
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Webhooks
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Status Page
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Community
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Jafa Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
