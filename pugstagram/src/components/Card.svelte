<script>
    import Comments from './Comments.svelte'
</script>

<div class="Card">
    <div class="Card-container">
        <div class="Card-header">
            <div class="Card-user">
                <img src="https://media.licdn.com/dms/image/C4E03AQEct6JS87tjqg/profile-displayphoto-shrink_800_800/0/1654195401033?e=2147483647&v=beta&t=Ol_Vpgnbl1wm3OmZQV6JgBciJb6D9J1VhWQ1p7l5U0o" alt="">
                <h2>Elmo.pug
                    <span>Ecuador, La Troncal</span>
                </h2>
            </div>
            <div class="Card-settings">
                <i class="fa fa-ellipsis-h"></i>
            </div>
        </div>
        <div class="Card-photo">
            <figure>
                <img src="https://media.licdn.com/dms/image/C4E03AQEct6JS87tjqg/profile-displayphoto-shrink_800_800/0/1654195401033?e=2147483647&v=beta&t=Ol_Vpgnbl1wm3OmZQV6JgBciJb6D9J1VhWQ1p7l5U0o" alt="">
            </figure>
        </div>
        <div class="Card-icons">
            <div class="Card-icons-first">
                <i class="fas fa-heart"></i>
                <i class="fas fa-paper-plane"></i>
            </div>
            <div class="Card-icons-seconds">
                <i class="fas fa-bookmark"></i>
            </div>
        </div>
        <div class="Card-description">
            <h3>elmo.pug</h3>
            <span>Hola!</span>
        </div>
        <Comments />
    </div>
</div>