import "@fontsource/poppins/400.css" // Weight 500.
import "@fontsource/poppins/700.css" // Weight 500.
import "@fontsource/poppins/500.css" // Weight 500.
import "@fontsource/poppins/600.css" // Weight 500.
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
        window.location.reload()
    }
}
