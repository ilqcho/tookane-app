<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Logo />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul></ul>
                <ul class="navbar-nav me-auto mt-1 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                </ul>
                <div>
                    <small>{{ greetings }}</small>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default{ 
    name: 'NavBar',
    props: {
        greetings: {
            type: String,
            required: false,
        }
    },
}
</script>