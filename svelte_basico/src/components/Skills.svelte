<script>
    let skills = [
        {
            name:"JavaScript"
        },
        {
            name:"CSS"
        },
        {
            name:"HTML"
        },
    ]
</script>
<style>
    .Skills{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>
<div class="Skills">
    <h3>Habilidades</h3>
    <ul>
        {#each skills as { name },i}
        <li>{name},</li>
        {/each}
    </ul>
</div>