import Navbar from "@/components/navbar"
import { Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <main>
      <Navbar />

      {/* Contact Header */}
      <section className="py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-500">#</span>contact
        </h1>
        <p className="text-gray-400">Get in touch with me</p>
      </section>

      {/* Contact Content */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-gray-300 mb-8">
            I'm interested in freelance opportunities and collaborations. Whether you have a question or just want to
            say hi, I'll do my best to get back to you!
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p className="text-gray-400">Your City, Country</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border border-gray-700 p-3 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border border-gray-700 p-3 focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-gray-400">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-transparent border border-gray-700 p-3 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-transparent border border-gray-700 p-3 focus:border-purple-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 border border-purple-500 px-6 py-3 hover:bg-purple-500/10 transition-colors"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

