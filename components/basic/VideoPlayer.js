import { useState } from "react";

export default function VideoPlayer({ defaultStreamUrl, streamUrlList }) {
  const [currentUrl, setCurrentUrl] = useState(defaultStreamUrl);

  const handleChange = (e) => {
    const selectedUrl = e.target.value;
    setCurrentUrl(selectedUrl);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        className=" border  text-sm rounded-lg  block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-blue-500 focus:border-blue-500"
      >
        <option value={defaultStreamUrl}>Server Bawaan</option>
        {streamUrlList.map((item, idx) => (
          <option key={idx} value={item.streamUrl}>
            {item.server}
          </option>
        ))}
      </select>

      <div className="flex justify-center items-center aspect-video bg-zinc-300 dark:bg-zinc-700 rounded-lg overflow-hidden mt-4">
        {currentUrl.toLowerCase() === "no iframe found" ? (
          <h5 className="text-lg font-extrabold">Server Tidak Tersedia</h5>
        ) : (
          <iframe src={currentUrl} allowFullScreen className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
