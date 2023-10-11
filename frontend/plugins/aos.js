// plugins/aos.js
import 'aos/dist/aos.css' // Include AOS styles

export default ({ app }) => {
  // Check if the code is running on the client side
  if (process.client) {
    // Import AOS dynamically to avoid server-side issues
    import('aos').then((aosModule) => {
      // Initialize AOS with the desired options
      aosModule.default.init({
        // Add any configuration options here
      })

      // Register AOS as a global variable in your Nuxt app
      app.AOS = new aosModule.default.Instance()
    })
  }
}
