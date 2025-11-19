import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-4 py-10">
      <section className="mb-10 text-center md:text-left">
        <h1 className="text-3xl font-semibold text-black sm:text-4xl">
          Learn faster with a clean, responsive LMS UI
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          This skeleton focuses on reusable components and responsive layout.
          Build on top of it to add your app logic.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="/signin" variant="primary" size="lg">
            Get Started
          </Button>
          <Button as="a" href="/signup" variant="secondary" size="lg">
            Create Account
          </Button>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-black">Featured</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} title={`Course ${i + 1}`}>
              Brief description for a course card. Replace with real data later.
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
