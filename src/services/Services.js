import { collection, query, getDocs, where } from "firebase/firestore"
import { db } from "../config/firebase"

export const fetchSearchQuery = async (searchQuery,setSuggestion ) => {
  let filteredData
  const jobRef = collection(db, "oldJobData")
  const q = query(
    jobRef,
    where(
      "searchableKeywords",
      "array-contains",
     searchQuery != undefined?  searchQuery.trim().toLowerCase(): null
    )
  )
  try {
    const suggestionData = await getDocs(q)
    filteredData = suggestionData.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }))
    setSuggestion(filteredData)
    console.log("calling data from server")
  } catch (error) {
    console.error(error)
  }

  return filteredData
}
