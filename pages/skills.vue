<template>
    <div>
        <section data-bs-version="5.1" class="features2 cid-txzqQ2H7gW" id="features2-5">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-lg-5 title">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-2">
                               My set of<br> <span>amazing skills</span>.
                            </h2>
                            <p class="mbr-text mbr-fonts-style display-7">
                                From UX/UI Designer to Front-end Development
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-7 cards-wrapper">
                        <div class="row cards">
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        HTML</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-alert mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        NUXT</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-bookmark mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        GIMP</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row cards">
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        CSS</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        GRIDSOME</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-clock mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        GRAPHQL</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-credit-card mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        BOOTSTRAP</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row cards">
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-database mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        JQUERY</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-extension mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        WORDPRESS</h3>
                                </div>
                            </div>
                            <div class="col-12 card">
                                <div class="card-wrapper">
                                    <div class="icon-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-features mobi-mbri"></span>
                                    </div>
                                    <h3 class="mbr-card-title mbr-fonts-style display-7">
                                        SQL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blur-circle"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'My Skills',
    })
    const {
        data: skill
    } = await useAsyncData('skills', () => queryContent('/skills/').find())
</script>