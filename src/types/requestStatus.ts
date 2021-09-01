// * success: Your query was successful and you have data for it
// * error: Your query did not work, and an error is set
// * loading: Your query has no data and is currently loading for the first time
// * idle: Your query has never run because it's not enabled

export type RequestStatus = 'success' | 'error' | 'loading' | 'idle'