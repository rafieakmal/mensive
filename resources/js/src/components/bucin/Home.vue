<template>
    <section>
        <b-container>
            <h1 class="text-center">Untuk sang pacar, Yoya ❤</h1>
        </b-container>
        <b-container>
            <b-row align-h="center">
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/ss1.jpeg">
                        <div class="card-body p-4">
                            <p class="card-title">Hari pertama kamu confess aku wkwkw, gemes banget ayangku, huhu waktu itu aku masih mikir dulu buat nembak kamu</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/ss2.jpeg">
                        <div class="card-body p-4">
                            <p class="card-title">3/3/23 sebelum aku nembak kamu, aku inget kamu udah badmood duluan ngakak padahal aku belum kelar ngetik wkwkw</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/ss3.jpeg">
                        <div class="card-body p-4">
                            <p class="card-title">Ada screenshot lainnya wkwkw</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/ss4.jpeg">
                        <div class="card-body p-4">
                            <h4 class="card-title">Hari Jadian ❤</h4>
                            <p class="card-title">Tanggal 3/3/2023 kamu resmi menjadi milikku ❤</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row align-h="center">
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/pp1.jpg">
                        <div class="card-body p-4">
                            <h4 class="card-title">Aku</h4>
                            <p class="card-title">Maafkan aku sayang karena telah mencintaimu seutuhnya, jadi sikapku rada keanak2an ke kamu</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/page1.jpeg">
                        <div class="card-body p-4">
                            <h4 class="card-title">Sayang dan Cinta</h4>
                            <p class="card-title">Makasih banyak karena kamu selalu ada untukku, dan menghiasi duniaku yang gelap ini dengan cahayamu</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/page2.png">
                        <div class="card-body p-4">
                            <h4 class="card-title">Kamu</h4>
                            <p class="card-title">Aku mau selalu bersamamu dan aku akan selalu mencintaimu jadi jangan tinggalkan aku</p>
                        </div>
                    </div>
                </b-col>
                <b-col md="3" class="mb-3">
                    <div class="card">
                        <img class="card-img-top w-100 d-block fit-cover" src="/assets/img/page3.jpeg">
                        <div class="card-body p-4">
                            <h4 class="card-title">Yoya ❤</h4>
                            <p class="card-title">I LOVE YOU EVEN MOREEEEEEEE ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ THANKS FOR EVERYTHING</p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <h1 class="text-center">To be continue~ ❤</h1>
        </b-container>
    </section>
</template>

<script>
    import { VueTyper } from 'vue-typer'
    export default {
        name: "home",
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