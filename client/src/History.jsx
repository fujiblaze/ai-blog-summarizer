import { useEffect, useState } from "react";

function History() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const fetchSummaries = async () => {
      const res = await fetch("http://localhost:3000/api/summarize", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setSummaries(data);
    };
    fetchSummaries();
  }, []);

  return (
    <main className="container flex flex-col items-center gap-5">
      <h2 className="text-6xl text-center font-bold mb-8">Summary History</h2>
      {summaries.length === 0 ? (
        <div className="border-2 w-full max-md:w-[300px] p-4 mb-4 rounded-lg shadow-md">
          <p className="text-center text-2xl">No summaries yet.</p>
        </div>
      ) : (
        summaries?.map((item) => (
          <div
            key={item.id}
            className="border-2 w-full max-md:w-[300px] p-4 mb-4 rounded-lg shadow-md"
          >
            <strong className="text-xl opacity-50">
              {new Date(item.created_at).toLocaleString()} (UTC+0)
            </strong>
            <p className="mt-2 text-lg">{item.summary}</p>
          </div>
        ))
      )}
    </main>
  );
}

export default History;
