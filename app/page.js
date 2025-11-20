import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  const features = [
    {
      title: "Interactive Learning",
      description:
        "Engage with dynamic course content, quizzes, and multimedia resources designed for effective learning.",
      icon: "📚",
    },
    {
      title: "Track Progress",
      description:
        "Monitor your learning journey with detailed analytics, grades, and personalized insights.",
      icon: "📊",
    },
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals and experienced educators who are passionate about teaching.",
      icon: "👨‍🏫",
    },
  ];

  const courses = [
    {
      title: "Web Development",
      description:
        "Master HTML, CSS, JavaScript, and modern frameworks to build stunning websites.",
      level: "Beginner",
    },
    {
      title: "Data Science",
      description:
        "Learn Python, machine learning, and data analysis to make data-driven decisions.",
      level: "Intermediate",
    },
    {
      title: "Mobile App Development",
      description:
        "Create native and cross-platform mobile applications using the latest technologies.",
      level: "Advanced",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Transform Your Learning
              <span className="block text-blue-600 mt-2">Experience</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700">
              Access high-quality courses, track your progress, and achieve your
              educational goals with our comprehensive Learning Management
              System.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
              <Button as="a" href="/signin" variant="primary" size="lg">
                Get Started
              </Button>
              <Button as="a" href="/signup" variant="secondary" size="lg">
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Our LMS?
            </h2>
            <p className="mt-4 text-gray-600">
              Everything you need to succeed in your learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Courses
            </h2>
            <p className="mt-4 text-gray-600">
              Explore our most popular learning paths
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Learn More →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Join thousands of students already learning on our platform
          </p>
          <Button
            as="a"
            href="/signup"
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Sign Up Now - It's Free
          </Button>
        </div>
      </section>
    </main>
  );
}
