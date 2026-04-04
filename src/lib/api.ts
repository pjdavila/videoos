const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://mediaos-vms.onrender.com";

export interface UploadResult {
  status: string;
  data: {
    filename: string;
    remotePath: string;
    sizeBytes: number;
    hlsUrl: string | null;
    transcode: {
      jobId: number;
      status: string;
    } | null;
  };
}

export interface StreamInfo {
  status: string;
  data: {
    id: number;
    name: string;
    rtmpUrl?: string;
    hlsUrl?: string;
    enabled: boolean;
  };
}

export async function uploadVideo(
  file: File,
  onProgress?: (pct: number) => void
): Promise<UploadResult> {
  const form = new FormData();
  form.append("video", file);

  const xhr = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    xhr.upload.addEventListener("progress", (e) => {
      if (e.lengthComputable && onProgress) {
        onProgress(Math.round((e.loaded / e.total) * 100));
      }
    });

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(xhr.responseText || `Upload failed (${xhr.status})`));
      }
    });

    xhr.addEventListener("error", () => reject(new Error("Network error")));

    xhr.open("POST", `${API_URL}/api/videos/upload`);
    xhr.send(form);
  });
}

export async function fetchHealth(): Promise<{ status: string; service: string }> {
  const res = await fetch(`${API_URL}/health`);
  if (!res.ok) throw new Error(`Health check failed: ${res.status}`);
  return res.json();
}

export async function listStreams(): Promise<StreamInfo[]> {
  const res = await fetch(`${API_URL}/api/streams`);
  if (!res.ok) throw new Error(`Failed to list streams: ${res.status}`);
  const json = await res.json();
  return json.data;
}
