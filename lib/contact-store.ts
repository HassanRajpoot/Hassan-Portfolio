// Client-side storage for contact submissions
export interface ContactSubmission {
  id: string
  name: string
  email: string
  message: string
  submittedAt: number
}

const STORAGE_KEY = "portfolio_contacts"

export const getSubmissions = (): ContactSubmission[] => {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export const saveSubmission = (name: string, email: string, message: string): ContactSubmission => {
  const submissions = getSubmissions()
  const newSubmission: ContactSubmission = {
    id: Date.now().toString(),
    name,
    email,
    message,
    submittedAt: Date.now(),
  }
  submissions.push(newSubmission)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions))
  return newSubmission
}

export const deleteSubmission = (id: string): boolean => {
  const submissions = getSubmissions()
  const filtered = submissions.filter((s) => s.id !== id)
  if (filtered.length === submissions.length) return false

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  return true
}

export const clearAllSubmissions = (): void => {
  localStorage.removeItem(STORAGE_KEY)
}
