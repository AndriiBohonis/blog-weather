export async function fetchTemperature(
  signal?: AbortSignal
): Promise<number | null> {
  try {
    const res = await fetch("/api/temperature", { signal });
    if (!res.ok) return null;
    const data = (await res.json()) as { temperature?: number };
    return typeof data.temperature === "number" ? data.temperature : null;
  } catch {
    return null;
  }
}
