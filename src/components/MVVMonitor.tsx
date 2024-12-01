import React, { useEffect, useRef } from "react";

const MVVMonitor: React.FC = () => {
  const monitorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Script dynamisch laden
    const script = document.createElement("script");
    script.src =
      "https://www.mvv-muenchen.de/typo3conf/ext/sn_mvv_efa/Resources/Public/mvv-monitor/mvv-monitor.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("MVV Script loaded successfully");
      if (monitorRef.current) {
        console.log("Initializing MVV monitor");
      }
    };

    // Script entfernen, wenn die Komponente entladen wird
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* Überschrift */}
      <h1 className="text-4xl font-bold mb-8">MVV Abfahrtsmonitor</h1>

      {/* Container für Abfahrtstafel */}
      <div className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg p-6 border border-gray-300">
        <div
          ref={monitorRef}
          className="mvv-departure-monitor"
          monitor-configuration="eyJsYW5ndWFnZSI6eyJkZXBhcnR1cmUiOiJBYmZhaHJ0IiwidHJhaW5TdG9wcyI6IkhhbHRlc3RlbGxlbiIsImRpcmVjdGlvbiI6IlJpY2h0dW5nIiwiZm9vdGVyTm90ZSI6IqkgQ29weXJpZ2h0IiwiZm9vdGVyVGV4dCI6IldlaXRlcmUgRmFocnBsYW5hdXNr/G5mdGUgdW50ZXIgd3d3Lm12di1hdXNrdW5mdC5kZSBvZGVyIG1pdCBkZXIgTVZWLUFwcCIsImhlYWRlclRleHQiOiJBYmZhaHJ0ZW4gZvxyIGhldXRlLCAiLCJsYW5ndWFnZSI6ImRlIiwibGluZSI6IkxpbmllIiwibGl2ZSI6IkxpdmUiLCJzdG9wIjoiSGFsdGVzdGVsbGUiLCJ0cmFjayI6IkdsZWlzIn0sImlzRnVsbHNjcmVlbiI6ZmFsc2UsInN0YXRpb25zIjpbeyJzdGF0aW9uIjp7InVzYWdlIjoic2YiLCJ0eXBlIjoiYW55IiwibmFtZSI6Ik38bmNoZW4sIEFpZGVuYmFjaHN0cmHfZSIsInN0YXRlbGVzcyI6IjkxMDAxNDYwIiwiYW55VHlwZSI6InN0b3AiLCJzb3J0IjoiMiIsInF1YWxpdHkiOiI1NjkiLCJiZXN0IjoiMSIsIm9iamVjdCI6IkFpZGVuYmFjaHN0cmHfZSIsIm1haW5Mb2MiOiJN/G5jaGVuIiwibW9kZXMiOiIyLDUiLCJyZWYiOnsiaWQiOiI5MTAwMTQ2MCIsImdpZCI6ImRlOjA5MTYyOjE0NjAiLCJvbWMiOiI5MTYyMDAwIiwicGxhY2VJRCI6IjEiLCJwbGFjZSI6Ik38bmNoZW4iLCJjb29yZHMiOiIxMjgyODc0LjAwMDAwLDU4NzY4MzIuMDAwMDAifSwiaWQiOiJkZTowOTE2MjoxNDYwIn0sImxpbmVzIjpbeyJudW1iZXIiOiJVMyIsInN5bWJvbCI6IjAxMFUzLnN2ZyIsImRpcmVjdGlvbiI6Ikb8cnN0ZW5yaWVkIFdlc3QiLCJzdGF0ZWxlc3MiOiJzd206MDEwVTM6RzpIOjAxNCIsIm5hbWUiOiJVLUJhaG4ifSx7Im51bWJlciI6IlUzIiwic3ltYm9sIjoiMDEwVTMuc3ZnIiwiZGlyZWN0aW9uIjoiTW9vc2FjaCIsInN0YXRlbGVzcyI6InN3bTowMTBVMzpHOlI6MDE0IiwibmFtZSI6IlUtQmFobiJ9LHsibnVtYmVyIjoiNTEiLCJzeW1ib2wiOiIyNDA1MS5zdmciLCJkaXJlY3Rpb24iOiJNb29zYWNoIiwic3RhdGVsZXNzIjoic3dtOjAzMDUxOkc6UjowMTQiLCJuYW1lIjoiTWV0cm9CdXMifV19"
        ></div>
      </div>

      {/* Zurück-Button */}
      <button
        className="mt-8 px-6 py-3 text-2xl border-2 border-black bg-transparent rounded-lg hover:bg-black hover:text-white transition duration-300"
        onClick={() => window.history.back()}
      >
        Zurück
      </button>
    </div>
  );
};

export default MVVMonitor;
