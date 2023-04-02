<template>
    <section>
        <div class="container-fluid py-4 py-xl-5" style="background: #FFC4D9;">
            <div class="row">
                <div class="col-md-4">
                    <img class="img-fluid" src="/assets/img/Tartaglia 1.png">
                </div>
                <div class="col pt-4">
                        <div class="card" style="border-radius: 10px;">
                            <div class="card-body">
                                <vue-typer
                                    :text=textData
                                    :repeat='0'
                                    :shuffle='false'
                                    initial-action='typing'
                                    :pre-type-delay='1000'
                                    :type-delay='100'
                                    :pre-erase-delay='2000'
                                    :erase-delay='250'
                                    erase-style='select-all'
                                    :erase-on-complete='false'
                                    caret-animation='smooth'
                                    @completed='onComplete()'
                                ></vue-typer>
                            </div>
                        </div>
                        <div v-if="next">
                            <button class="btn text-white" type="button">Next part</button>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.vue-typer {
    font-family: Verdana, sans-serif;
}
.btn {
    margin-top: 80px;
    background: rgb(218,136,205);
}
</style>

<script>
    import { VueTyper } from 'vue-typer'
    export default {
        name: "tartaglia-one",
        components: {
            VueTyper
        },
        data() {
            return {
                textData: [
                    "Halo sayangku selamat pagi",
                    "Gimana kabarmu hari ini?",
                    "Semoga bahagia selalu yaa sayang",
                    "Sebelumnya aku mau berterima kasih",
                    "Karena engkau telah melengkapi kekuranganku dan mendukung kelebihanku selama ini",
                    "Hari demi hari telah kita berdua lewati bersama, baik keadaan suka maupun duka",
                    "Saling melengkapi dan saling mengasihi sebagai pasangan",
                    "Beruntungnya diriku memilikimu",
                    "Terima kasih karena membuatku menjadi orang yang lebih baik dengan cinta darimu",
                    "Selamat hari mensive pertama untuk kita berdua sayang",
                    "Aku harap kita selalu bisa merayakan hari mensive berikutnya",
                    "Aku harap kita sehat selalu agar cinta kita tidak terhalang oleh penyakit",
                    "I love you more hun ❤",

                ],
                musicSrc: '/assets/music/music1.mp3',
                next: false
            }
        },
        methods: {
            onComplete() {
                this.next = true
            }
        }
    };
</script>