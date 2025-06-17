<template>
    <div>
        <section data-bs-version="5.1" class="menu2 cid-uOhXt3lpkj" once="menu" id="menu1-0">


            <nav class="navbar navbar-dropdown navbar-expand-lg">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <span class="navbar-logo">
                            <NuxtLink :href="header?.url">
                                <img src="assets/images/logo2.png" alt="" style="height: 3rem;">
                            </NuxtLink>
                        </span>
                        <span class="navbar-caption-wrap"><NuxtLink class="navbar-caption text-black display-5"
                                :href="header?.url">{{ header?.name }}</NuxtLink></span>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse"
                        data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li class="nav-item" v-for="menuItem in header?.menus" :key="menuItem?.id">
                                <NuxtLink class="nav-link link text-black display-4" :href="menuItem?.url" aria-expanded="false">{{ menuItem?.name }}</NuxtLink>
                            </li>
                        </ul>
                        <!--<div class="icons-menu">
                            <div class="mbr-section-btn"><NuxtLink class="btn btn-secondary display-4" href="">Last Video</NuxtLink>

                                <NuxtLink class="btn btn-primary display-4" href="">Subscribe</NuxtLink>
                            </div>
                        </div>-->
                    </div>
                </div>
            </nav>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: header
    } = await useAsyncData('header', () => {
        return $directus.request($readItem('navigation', '1', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>