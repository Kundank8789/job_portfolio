export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Contact Me</h1>
      <p className="mt-3 text-sm">
        I usually reply within 24 hours 🙂
      </p>

      <div className="mt-6 bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold">Email</h2>
        <p className="text-sm mt-2">kundansinghh87@gmail.com</p>

        <h2 className="font-semibold mt-4">Social</h2>
        <p className="text-sm mt-2">
          GitHub:
          <a href="https://github.com/Kundank8789/job_portfolio" target="_blank" rel="noreferrer" className="underline">
            github.com/Kundank8789/job_portfolio
          </a><br/>
          LinkedIn: <span>Coming soon</span><br/>
          Twitter: <span>Coming soon</span>
        </p>
      </div>
    </div>
  );
}
