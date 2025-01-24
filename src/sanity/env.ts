export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
 "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
 "cwnh4dkx",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skEN9uNC6QenuwKikLDRzTR7luqJsN3YPJrSG36lU6wEWlmqGxs0EU8lVTI8C0TKKQ7d8PDRL1VIj97CnfAl68IkOpTj2birzYDQSjXwSizdR6agS8UEx2ibvuwSMbI2EUVtsL3izOzdSfVUztgTIn3AG6wE2WiUP7SOK1i82HpM4MvTFh1O",
  "Missing environment variable: NEXT_PUBLIC_SANITY_AUTH_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
