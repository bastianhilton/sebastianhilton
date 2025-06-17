<template>
    <div>
        <section data-bs-version="5.1" class="footer1 cid-uOhXDzARBB" once="footers" id="footer1-4">


            <div class="container">
                <div class="row align-center mbr-white">
                    <div class="col-12">
                        <div class="line"></div>
                        <p class="mbr-text mb-0 mbr-fonts-style display-4">{{ copyrightFooter?.name }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: copyrightFooter
    } = await useAsyncData('copyrightFooter', () => {
        return $directus.request($readItem('blocks', '3', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>