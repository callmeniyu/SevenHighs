export const getTime = () => {
    const now = new Date()

    let hours = now.getHours()
    const minutes = now.getMinutes()

    // Determine AM or PM
    const amPm = hours >= 12 ? "PM" : "AM"

    // Convert to 12-hour format
    hours = hours % 12
    hours = hours ? hours : 12 // Hour '0' should be '12'

    // Format minutes to always be two digits
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes

    // Return formatted time
    return `${hours}:${formattedMinutes} ${amPm}`
}

export const parseDate = (dateStr: string): Date => {
    return new Date(dateStr)
}
