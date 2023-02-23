

const landingPage = {
    template: `
        <transition
            enter-active-class="animate__animated animate__backInRight"
            leave-active-class="animate__animated animate__backOutRight"
        ><div>
        landing page<br>
        <router-link to="/search">Go to Search Page</router-link>
        </div></transition>
    `
}