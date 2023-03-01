<script>
    import Button from "./Button.svelte";
    let someText = `Fronted Developer at Unemi`
    let count = 0;
    let styles = {darkMode:false};

    function handleClick(){
        count +=1;
    }
    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode")
    }   
</script>
<div class="About">
    {#if !styles.darkMode}
        <p>{someText}</p>
    {:else}
        <p>Hello Dark Mode</p>
    {/if}
	<button on:click={toggle}>DarkMode</button>
    <button on:click={handleClick}>{count}</button>
    <Button
        text="Click" 
        {count} 
        on:click={handleClick}
    />
    <Button
        text="Modo Oscuro" 
        on:click={toggle}
    />
    
</div>